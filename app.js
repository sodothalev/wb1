(function () {
  const root = document.documentElement;
  const layout = document.querySelector(".layout");
  const navToggle = document.querySelector(".nav-toggle");
  const chapterNav = document.querySelector("#chapterNav");
  const bookNav = document.querySelector("#bookNav");
  const chaptersRoot = document.querySelector("#chapters");
  const themeToggle = document.querySelector(".theme-toggle");
  const langButtons = Array.from(document.querySelectorAll(".lang-button"));
  const textDecrease = document.querySelector(".text-decrease");
  const textIncrease = document.querySelector(".text-increase");
  const backToTop = document.querySelector(".back-to-top");
  const progress = document.querySelector("#readingProgress");
  const translatable = Array.from(document.querySelectorAll("[data-i18n]"));

  const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]));
  const availableChapters = chapters.filter((chapter) => chapter.available !== false);
  const availableChapterIds = new Set(availableChapters.map((chapter) => chapter.id));
  const fontScaleSteps = [1, 1.08, 1.16, 1.26];
  let currentLang = "en";
  let currentFontIndex = 1;
  let currentChapterId = "";

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function isHebrewBlock(value) {
    return /^[\u0590-\u05ff]/.test(String(value).trim());
  }

  function text(path, fallback = "") {
    return path?.[currentLang] || path?.en || fallback;
  }

  function ui(key) {
    return uiText[currentLang][key] || uiText.en[key] || "";
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("mequbal-theme", theme);
    const nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-label", ui(`${nextTheme}ThemeLabel`));
    themeToggle.querySelector(".theme-toggle__icon").textContent = theme === "dark" ? "☀" : "☾";
  }

  function setLanguage(lang, options = {}) {
    currentLang = lang;
    root.lang = lang;
    localStorage.setItem("mequbal-language", lang);
    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    translatable.forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = ui(key);
    });
    setTheme(root.dataset.theme || "light");
    renderNav();
    renderCurrentChapter();
    setActiveChapter(currentChapterId);
    updateReadingProgress();

    if (options.keepPosition) {
      const current = document.getElementById(currentChapterId);
      if (current) current.scrollIntoView();
    }
  }

  function setFontIndex(index) {
    currentFontIndex = Math.min(fontScaleSteps.length - 1, Math.max(0, index));
    root.style.setProperty("--reader-font-scale", fontScaleSteps[currentFontIndex]);
    localStorage.setItem("mequbal-font-index", String(currentFontIndex));
    textDecrease.disabled = currentFontIndex === 0;
    textIncrease.disabled = currentFontIndex === fontScaleSteps.length - 1;
  }

  function navItem(item) {
    const title = escapeHtml(text(item.title));
    const linked = chapterById.has(item.id);
    const levelClass = `nav-item level-${item.level || 1}`;
    const itemClass = item.status === "front" ? `${levelClass} is-front-matter` : levelClass;
    const content = linked
      ? `<a href="#${escapeHtml(item.id)}" data-nav-id="${escapeHtml(item.id)}">${title}</a>`
      : `<span class="is-upcoming">${title}</span>`;
    const children = item.children?.length
      ? `<div class="nav-children">${item.children.map(navItem).join("")}</div>`
      : "";
    return `<div class="${itemClass}">${content}${children}</div>`;
  }

  function renderNav() {
    bookNav.innerHTML = bookNavigation.map(navItem).join("");
  }

  function chapterIndexById(id) {
    return availableChapters.findIndex((chapter) => chapter.id === id);
  }

  function chapterNavControls(chapterIndex, position) {
    const previous = availableChapters[chapterIndex - 1];
    const next = availableChapters[chapterIndex + 1];
    const buttons = [];

    if (previous) {
      buttons.push(`
        <button class="chapter-nav-button" type="button" data-go-to="${escapeHtml(previous.id)}">
          <span>${escapeHtml(ui("previous"))}</span>
          <strong>${escapeHtml(text(previous.title))}</strong>
        </button>
      `);
    }

    if (next) {
      buttons.push(`
        <button class="chapter-nav-button" type="button" data-go-to="${escapeHtml(next.id)}">
          <span>${escapeHtml(ui("next"))}</span>
          <strong>${escapeHtml(text(next.title))}</strong>
        </button>
      `);
    }

    if (!buttons.length) return "";

    return `<nav class="chapter-pager ${position}" aria-label="${escapeHtml(ui("chapterPager"))}">${buttons.join("")}</nav>`;
  }

  function currentHashId() {
    return decodeURIComponent(window.location.hash.replace(/^#/, ""));
  }

  function validChapterId(id) {
    return availableChapterIds.has(id) ? id : availableChapters[0]?.id || "";
  }

  function updateHash(id, replace = false) {
    if (!id) return;
    const nextHash = `#${encodeURIComponent(id)}`;
    if (window.location.hash === nextHash) return;

    const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;
    if (replace) {
      window.history.replaceState(null, "", nextUrl);
      return;
    }

    window.history.pushState(null, "", nextUrl);
  }

  function renderCurrentChapter() {
    const chapter = chapterById.get(currentChapterId);
    if (!chapter) {
      chaptersRoot.innerHTML = "";
      return;
    }

    const chapterIndex = chapterIndexById(chapter.id);
    const titleLine = chapter.hebrew
      ? `<h2>${escapeHtml(text(chapter.title))} <span lang="he" dir="rtl">${escapeHtml(chapter.hebrew)}</span></h2>`
      : `<h2>${escapeHtml(text(chapter.title))}</h2>`;

    const subtitle = text(chapter.subtitle)
      ? `<p class="chapter-subtitle">${escapeHtml(text(chapter.subtitle))}</p>`
      : "";
    const languageSections = chapter.sections[currentLang] || chapter.sections.en || [];
    const sections = languageSections
      .map((section, sectionIndex) => {
        const heading = text(section.heading)
          ? `<h3 id="${escapeHtml(chapter.id)}-${sectionIndex}">${escapeHtml(text(section.heading))}</h3>`
          : "";
        const paragraphs = section.paragraphs
          .map((paragraph) => {
            const attrs = isHebrewBlock(paragraph) ? ' class="hebrew-text" lang="he" dir="rtl"' : "";
            return `<p${attrs}>${escapeHtml(paragraph)}</p>`;
          })
          .join("");
        return `<section class="chapter-section">${heading}${paragraphs}</section>`;
      })
      .join("");

    chaptersRoot.innerHTML = `
      <article class="chapter" id="${escapeHtml(chapter.id)}" data-chapter-index="${chapterIndex + 1}">
        ${titleLine}
        ${subtitle}
        ${sections}
        ${chapterNavControls(chapterIndex, "bottom")}
      </article>
    `;
  }

  function openChapter(id, options = {}) {
    const nextId = validChapterId(id);
    if (!nextId) return;

    currentChapterId = nextId;
    renderCurrentChapter();
    setActiveChapter(nextId);
    updateHash(nextId, options.replaceHash);
    updateReadingProgress();

    if (options.scroll !== false) {
      const current = document.getElementById(nextId);
      if (current) current.scrollIntoView({ behavior: options.smooth ? "smooth" : "auto" });
    }
  }

  function closeNavOnSmallScreens() {
    if (window.matchMedia("(max-width: 860px)").matches) {
      chapterNav.classList.remove("is-open");
      layout.classList.remove("is-nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  }

  function toggleNav() {
    if (window.matchMedia("(max-width: 860px)").matches) {
      const isOpen = chapterNav.classList.toggle("is-open");
      layout.classList.toggle("is-nav-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      return;
    }

    const isCollapsed = layout.classList.toggle("is-nav-collapsed");
    localStorage.setItem("mequbal-nav-collapsed", String(isCollapsed));
    navToggle.setAttribute("aria-expanded", String(!isCollapsed));
  }

  function updateReadingProgress() {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const current = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, current))}%`;
    backToTop.classList.toggle("is-visible", doc.scrollTop > 700);
  }

  function setActiveChapter(id) {
    document.querySelectorAll("[data-nav-id]").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.navId === id);
    });
  }

  function init() {
    const savedTheme = localStorage.getItem("mequbal-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const savedLang = localStorage.getItem("mequbal-language") || "en";
    const savedFontValue = localStorage.getItem("mequbal-font-index");
    const savedFontIndex = savedFontValue === null ? NaN : Number(savedFontValue);
    const savedNavCollapsed = localStorage.getItem("mequbal-nav-collapsed") === "true";

    if (savedNavCollapsed) layout.classList.add("is-nav-collapsed");
    navToggle.setAttribute("aria-expanded", String(!savedNavCollapsed));

    currentChapterId = validChapterId(currentHashId());

    setFontIndex(Number.isFinite(savedFontIndex) ? savedFontIndex : 1);
    setTheme(savedTheme || preferredTheme);
    setLanguage(savedLang);
    updateHash(currentChapterId, true);
    requestAnimationFrame(() => {
      const current = document.getElementById(currentChapterId);
      if (current) current.scrollIntoView();
    });

    navToggle.addEventListener("click", toggleNav);

    chapterNav.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-nav-id]");
      if (!link) return;

      event.preventDefault();
      openChapter(link.dataset.navId, { smooth: false });
      closeNavOnSmallScreens();
    });

    chaptersRoot.addEventListener("click", (event) => {
      const button = event.target.closest("[data-go-to]");
      if (!button) return;

      openChapter(button.dataset.goTo, { smooth: false });
    });

    themeToggle.addEventListener("click", () => {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });

    langButtons.forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.lang, { keepPosition: true }));
    });

    textDecrease.addEventListener("click", () => setFontIndex(currentFontIndex - 1));
    textIncrease.addEventListener("click", () => setFontIndex(currentFontIndex + 1));

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    window.addEventListener("resize", updateReadingProgress);
    window.addEventListener("hashchange", () => {
      openChapter(currentHashId(), { replaceHash: true, scroll: true });
    });
    window.addEventListener("popstate", () => {
      openChapter(currentHashId(), { replaceHash: true, scroll: true });
    });
  }

  init();
})();
