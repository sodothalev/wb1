const uiText = {
  en: {
    contentsLabel: "Contents",
    chapter: "Chapter",
    previous: "Previous",
    next: "Next",
    chapterPager: "Chapter navigation",
    darkThemeLabel: "Switch to dark theme",
    lightThemeLabel: "Switch to light theme"
  },
  es: {
    contentsLabel: "Contenido",
    chapter: "Capítulo",
    previous: "Anterior",
    next: "Siguiente",
    chapterPager: "Navegación de capítulos",
    darkThemeLabel: "Cambiar al tema oscuro",
    lightThemeLabel: "Cambiar al tema claro"
  }
};

const bookNavigation = [
  {
    id: "prologue",
    level: 0,
    status: "front",
    title: { en: "Prologue", es: "Prólogo" }
  },
  {
    id: "qabalah",
    level: 1,
    title: { en: "Qabalah", es: "Qabalah" }
  },
  {
    id: "ein-sof",
    level: 1,
    title: { en: "Ein Sof", es: "Ein Sof" },
    children: [
      { id: "haberiah", level: 2, title: { en: "HaBeriah", es: "HaBeriah" } }
    ]
  },
  {
    id: "partzufim",
    level: 1,
    title: { en: "Partzufim", es: "Partzufim" },
    children: [
      { id: "partzufim-atik-yomin", level: 2, title: { en: "Atik Yomin", es: "Atik Yomin" } },
      { id: "partzufim-arikh-anpin", level: 2, title: { en: "Arikh Anpin", es: "Arij Anpin" } },
      { id: "partzufim-abba", level: 2, title: { en: "Abba", es: "Abba" } },
      { id: "partzufim-ima", level: 2, title: { en: "Ima", es: "Ima" } },
      { id: "partzufim-zeir-anpin", level: 2, title: { en: "Zeir Anpin", es: "Zeir Anpin" } },
      { id: "partzufim-nukva", level: 2, title: { en: "Nukva", es: "Nukva" } }
    ]
  },
  {
    id: "arba-olamot",
    level: 1,
    title: { en: "Arba Olamot", es: "Arba Olamot" },
    children: [
      { id: "olam-haatzilut", level: 2, title: { en: "Olam haAtzilut", es: "Olam haAtzilut" } },
      { id: "olam-haberiah", level: 2, title: { en: "Olam haBeriah", es: "Olam haBeriah" } },
      { id: "olam-hayetzirah", level: 2, title: { en: "Olam haYetzirah", es: "Olam haYetzirah" } },
      { id: "olam-haasiyah", level: 2, title: { en: "Olam haAsiyah", es: "Olam haAsiyah" } }
    ]
  },
  {
    id: "ets-haim",
    level: 1,
    title: { en: "Ets Haim", es: "Ets Haim" },
    children: [
      { id: "sefirot", level: 2, title: { en: "Sefirot", es: "Sefirot" } },
      { id: "qlifot", level: 2, title: { en: "Qlifot", es: "Qlifot" } },
      { id: "netivot", level: 2, title: { en: "Netivot", es: "Netivot" } },
      { id: "sefirot-keter", level: 2, title: { en: "Keter", es: "Keter" } },
      { id: "sefirot-chokhmah", level: 2, title: { en: "Chokhmah", es: "Jokhmah" } },
      { id: "sefirot-binah", level: 2, title: { en: "Binah", es: "Binah" } },
      { id: "sefirot-chesed", level: 2, title: { en: "Chesed", es: "Chesed" } },
      { id: "sefirot-gevurah", level: 2, title: { en: "Gevurah", es: "Gevurah" } },
      { id: "sefirot-tiferet", level: 2, title: { en: "Tiferet", es: "Tiferet" } },
      { id: "sefirot-netzach", level: 2, title: { en: "Netzach", es: "Netzach" } },
      { id: "sefirot-hod", level: 2, title: { en: "Hod", es: "Hod" } },
      { id: "sefirot-yesod", level: 2, title: { en: "Yesod", es: "Yesod" } },
      { id: "sefirot-malkhut", level: 2, title: { en: "Malkhut", es: "Malkhut" } },
      { id: "sefirot-daat", level: 2, title: { en: "Daat", es: "Daat" } }
    ]
  },
  {
    id: "neshamot",
    level: 1,
    title: { en: "Neshamot", es: "Neshamot" },
    children: [
      { id: "neshamot-nefesh", level: 2, title: { en: "Nefesh", es: "Nefesh" } },
      { id: "neshamot-ruach", level: 2, title: { en: "Ruach", es: "Ruach" } },
      { id: "neshamot-neshamah", level: 2, title: { en: "Neshamah", es: "Neshamah" } },
      { id: "neshamot-chayah", level: 2, title: { en: "Chayah", es: "Chayah" } },
      { id: "neshamot-yechidah", level: 2, title: { en: "Yechidah", es: "Yechidah" } }
    ]
  },
  {
    id: "shemot-hakodesh",
    level: 1,
    title: { en: "Shemot HaKodesh", es: "Shemot HaKodesh" },
    children: [
      { id: "shemot-hameforash", level: 2, title: { en: "Shem HaMeforash", es: "Shem HaMeforash" } },
      { id: "shemot-havayah", level: 2, title: { en: "Havayah", es: "Havayah" } },
      { id: "shemot-ehyeh", level: 2, title: { en: "Ehyeh", es: "Ehyeh" } },
      { id: "shemot-yah", level: 2, title: { en: "Yah", es: "Yah" } },
      { id: "shemot-el", level: 2, title: { en: "El", es: "El" } },
      { id: "shemot-eloah", level: 2, title: { en: "Eloah", es: "Eloah" } },
      { id: "shemot-elohim", level: 2, title: { en: "Elohim", es: "Elohim" } },
      { id: "shemot-tzevaot", level: 2, title: { en: "Tzevaot", es: "Tzevaot" } },
      { id: "shemot-shaddai", level: 2, title: { en: "Shaddai", es: "Shaddai" } },
      { id: "shemot-adonai", level: 2, title: { en: "Adonai", es: "Adonai" } },
      { id: "shemot-ahavah", level: 2, title: { en: "Ahavah", es: "Ahavah" } },
      { id: "shemot-ehevi", level: 2, title: { en: "Ehevi", es: "Ehevi" } }
    ]
  },
  {
    id: "derej-haavodah",
    level: 1,
    title: { en: "Derej HaAvodah", es: "Derej HaAvodah" },
    children: [
      { id: "derej-yeshut", level: 2, title: { en: "Yeshut", es: "Yeshut" } },
      { id: "derej-kavanah-teshuvah", level: 2, title: { en: "Kavanah, Teshuvah, and Devekut", es: "Kavanah, teshuvah y devekut" } }
    ]
  },
  {
    id: "tikun-hanefesh",
    level: 1,
    title: { en: "Tikun HaNefesh", es: "Tikun HaNefesh" },
    children: [
      { id: "tikun-beritot", level: 2, title: { en: "Beritot", es: "Beritot" } },
      { id: "tikun-practica-nocturna", level: 2, title: { en: "Night Practice", es: "Práctica nocturna" } },
      { id: "tikun-perdon-amor", level: 2, title: { en: "Forgiveness and Love", es: "Perdón y amor" } },
      { id: "tikun-zikuj", level: 2, title: { en: "Zikuj", es: "Zikuj" } }
    ]
  },
  {
    id: "epilogue",
    level: 1,
    title: { en: "Epilogue", es: "Epílogo" }
  }
];

const chapters = [
  {
    id: "prologue",
    parentId: null,
    level: 0,
    frontMatter: true,
    title: { en: "Prologue", es: "Prólogo" },
    sections: {
      en: [
        {
          paragraphs: [
            "Many people approach Qabalah seeking results: relief, stability, power, success, and so on. They do not approach the Creator. They turn spirituality into a tool serving their individual will, and the qabalistic path loses its meaning. They want to obtain without correcting. They want to receive without transforming the vessel.",
            "This approach introduces imbalance. Study loses its direction. Practice becomes repetitive. They expect spiritual tools to act without any real participation of the soul. From that perspective, the sacred becomes a means, the ego remains intact, and instead of movement there is stagnation.",
            "The qabalistic system works according to very precise laws. The act carries more weight than the intention. Concrete manifestation determines the spiritual effect. Desire, thought, or feeling bears fruit when it is integrated into action.",
            "Qabalistic teaching is oriented toward action: elevating character, repairing bonds, assuming commitments, refining desires, aligning thoughts with deeds. Energy is transmitted when it is expressed. Study prepares. Will directs. Deeds transform.",
            "Tikun, the rectification of reality, advances with every act that expresses light. Participation in that process depends on real commitment. Understanding without practice does not sustain the flow. Spiritual movement requires constant involvement.",
            "This path does not revolve around personal well-being. It is built from devotion, discipline, and openness to a greater reality. Each part of the book follows that logic. You receive knowledge in order to embody it. You understand the structure in order to reflect it. You learn the practice in order to live it."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Muchas personas se acercan a la Qabalah buscando resultados: alivio, estabilidad, poder, éxito, etc. No se acercan al Creador. Convierten la espiritualidad en herramienta al servicio de su voluntad individual, y el camino qabalístico pierde su sentido. Quieren obtener sin corregir. Quieren recibir sin transformar el recipiente.",
            "Este enfoque introduce un desequilibrio. El estudio pierde su dirección. La práctica se vuelve repetitiva. Esperan que las herramientas espirituales actúen sin participación real del alma. Desde esa mirada, lo sagrado se convierte en medio, el ego permanece intacto y, en lugar de movimiento, hay estancamiento.",
            "El sistema qabalístico funciona según leyes muy precisas. El acto tiene más peso que la intención. La manifestación concreta determina el efecto espiritual. El deseo, el pensamiento o el sentimiento dan fruto cuando se integran en la acción.",
            "La enseñanza qabalística se orienta hacia la acción: elevar el carácter, reparar vínculos, asumir compromisos, refinar los deseos, alinear los pensamientos con los actos. La energía se transmite cuando se expresa. El estudio prepara. La voluntad orienta. Los hechos transforman.",
            "El Tikun, la rectificación de la realidad, avanza con cada acto que expresa luz. La participación en ese proceso depende del compromiso real. La comprensión sin práctica no sostiene el flujo. El movimiento espiritual exige implicación constante.",
            "Este camino no gira en torno al bienestar personal. Se construye desde la entrega, la disciplina y la apertura a una realidad mayor. Cada parte del libro responde a esa lógica. Recibes el conocimiento para encarnarlo. Comprendes la estructura para reflejarla. Aprendes la práctica para vivirla."
          ]
        }
      ]
    }
  },
  {
    id: "qabalah",
    parentId: null,
    level: 1,
    mainNumber: 1,
    title: { en: "Qabalah", es: "Qabalah" },
    hebrew: "קבלה",
    subtitle: { en: "Reception", es: "Recepción" },
    sections: {
      en: [
        {
          paragraphs: [
            "Qabalah is the esoteric tradition of Judaism. Its name comes from the Hebrew leqabel (לקבל), meaning \"to receive,\" and that verb already expresses a central idea: knowledge is received. That transmission requires real affinity between the one who teaches and the one who learns; without it, only words are transmitted, not the substance those words sustain. For this reason Qabalah has been preserved as a chain from master to disciple, where each link depends on the one before it and each generation receives what the previous generation received.",
            "The word acquired this sense in the Middle Ages, but within the tradition the reality to which it refers is understood to be much older. According to the classical perspective, the esoteric teachings form part of the Oral Torah given to Moses at Sinai, and then transmitted to initiates in every age. Some sources carried that chain still further back and affirmed that this wisdom was first revealed to Adam, then to the patriarch Abraham, and then to Moses together with the Written Torah. The Midrash Tanchuma expresses that underlying orientation well: God desired \"a dwelling in the lower worlds,\" to make His presence habitable on the physical plane. Qabalah, then, would be the precise description of how that presence descends and how the human being can align with it.",
            "Among the oldest texts related to this tradition is Sefer Yetzirah, the Book of Formation, attributed in legend to Abraham and devoted to describing the structure of creation through the letters of the Hebrew alphabet and the first numbers. Centuries later, around 1176 in Provence, Sefer HaBahir, the Book of Clarity, began to circulate. Tradition attributes it to Rabbi Nechunyah ben HaKanah, although historically it is usually situated in the twelfth century. The Bahir introduces for the first time, in literary form, some of the concepts that would define medieval Qabalah: the ten Sefirot, certain symbols, and certain structures that later texts would develop in greater detail. These two texts, Yetzirah and Bahir, mark the horizon on which all qabalistic literature would grow."
          ]
        },
        {
          heading: { en: "The Levels of Torah and the Place of Sod", es: "Los niveles de la Torá y el lugar del Sod" },
          paragraphs: [
            "Qabalah works at the fourth level of Torah reading. Rabbinic exegesis distinguishes four planes summarized in the acronym PaRDeS: Pshat (the direct sense), Remez (allegorical reading), Drash (homiletical interpretation), and Sod (the hidden sense). Qabalah operates in Sod. It maintains that behind the literal text there are truths that require formation in order to be seen.",
            "This determines its language. Qabalah builds a system of correspondences because it deals with realities that ordinary language cannot encompass: four planes of existence associated with the four letters of the Divine Name (י-ה-ו-ה), ten levels linked to the ten Sefirot of creation, and thirteen attributes of mercy revealed in the Torah. These correspondences map structures that would otherwise remain invisible. The mequbal reads reality through that map. Study, practice, and the received tradition refine him."
          ]
        },
        {
          heading: { en: "Ein Sof and the Sefirot", es: "Ein Sof y las Sefirot" },
          paragraphs: [
            "The concept of Ein Sof (אין סוף), the Infinite, is the starting point of our entire cosmology. This term indicates the dimension of Divinity that is beyond any attribute, any name, and any category the human mind can formulate. Ein Sof has no limit, form, or attribute that we can clearly distinguish. Existence as we know it, with its forms and limits, cannot contain or encompass that Infinite. And yet all reality emanates from Him.",
            "The Sefirot (ספירות) describe the mechanism of that emanation. The ten Sefirot are the attributes or channels through which the infinite light, the Ohr Ein Sof, unfolds and contracts successively until it gives rise to the created worlds. They are not entities separate from God, nor human faculties projected onto the divine. In the language of the classical mequbalim, they are the forms in which the Infinite manifests and acts.",
            "Keter, the crown, expresses the Divine Will at its highest and formless level. Chokhmah, wisdom, is the first point of the Light, the primordial spark before all articulation. Binah, understanding, is the comprehension that develops, articulates, and gives structure to what Chokhmah contains in potential. Below them, the intermediate Sefirot - Chesed, Gevurah, Tiferet, Netzach, Hod, and Yesod - articulate the modes of divine action in creation: mercy and rigor, beauty and balance, endurance and radiance, foundation. Malkhut, kingdom, is the final receptacle, the plane of manifestation where the Light becomes tangible and where creation exists as concrete reality.",
            "The ten Sefirot are usually represented in the diagram known as the Tree of Life, where they appear joined by twenty-two paths, each associated with one of the letters of the Hebrew alphabet. The diagram shows the structure of the process of emanation whose fruit is this reality: how divine light descends from Keter to Malkhut, adapting itself at each level, and how the different planes of existence are united within a coherent system. Each Sefirah acts as a filter that allows the infinite light to be received at the next level without its intensity destroying the receiver. The tradition teaches that this process describes both the structure of the cosmos and the structure of the human soul, whose faculties (kochot ha-nefesh) correspond to the divine attributes expressed by the Sefirot. To know the Tree of Life is to learn to know oneself in relation to the Creator."
          ]
        },
        {
          heading: { en: "The Aim: Devekut and Avodat HaShem", es: "La finalidad: devekut y avodat HaShem" },
          paragraphs: [
            "This path serves HaShem and rectifies the inner life (Tikun ha-middot). Its goal is devekut, adhesion to God. The concept has roots in the Torah itself (\"le-davka bo,\" Devarim 13:5). The rishonim and the mequbalim of different eras developed it, each school with its own nuances. In every case, it refers to a state of union with the Divine that preserves the individuality of the soul while orienting it toward its source.",
            "That state requires correction of character, observance of the Torah, and intention (kavanah) in action. Rabbi Moshe Cordovero, one of the great systematizers of Qabalah in the sixteenth century, expressed it clearly: the mequbal must imitate the divine attributes - compassion, generosity, patience - in every aspect of conduct. That imitation is ethical and mystical at once, one requirement on two planes.",
            "Rabbi Yehuda Ashlag (1885-1954) formulated this dynamic in terms of the transformation of desire. His school developed its own conceptual language within the Lurianic tradition. According to his teaching, spiritual evolution reorients the impulse to receive toward an impulse to give, acquiring likeness to the Creator. Ashlag articulated this through the concepts of Ohr and Keli (light and vessel), which describe the relation between the divine abundance that flows and the creation that receives it. This language is characteristic of the Ashlagian school and reflects its categories, distinct though not foreign to the vocabulary of the Zohar and classical Lurianic Qabalah."
          ]
        },
        {
          heading: { en: "Two Branches of Study", es: "Dos vertientes del estudio" },
          paragraphs: [
            "Qabalistic study distinguishes two classifications that overlap but must be differentiated.",
            "The first appears in tractate Chagigah (11b-13a): Maaseh Bereshit, the Work of Creation, and Maaseh Merkavah, the Work of the Celestial Chariot. These categories designate the most ancient esoteric contents of rabbinic study. The first concerns the mysteries of creation and cosmogony; the second concerns the visions of the divine Chariot in Ezekiel and the traditions of the soul's ascent toward the higher worlds. The Talmud surrounds both subjects with restrictions: teachers may teach them only to qualified individuals and under determined conditions.",
            "The second distinction, developed in the Middle Ages, differentiates between Qabalah iyunit (speculative Qabalah) and Qabalah ma'asit (practical Qabalah). Qabalah iyunit studies the structure of the worlds, the nature of the Sefirot, the cosmology of emanation, and the esoteric meaning of the Torah. It dominates the Zohar and the works of Cordovero and Luria. Qabalah ma'asit works with divine names, combinations of letters, and other operations to produce effects in the world or in the soul. The masters warned of the danger of the latter when the proper formation and the required purity of intention are lacking.",
            "Within this framework, the meditative current has its own place. Rabbi Abraham Abulafia (1240-1291), born in Zaragoza and formed in Mediterranean communities, developed prophetic Qabalah: techniques of concentration on the sacred letters and the divine names in order to experience the Divine directly. His manuals, among them the one devoted to chokhmat ha-tzeruf, the science of letter combination, describe methods of breathing, articulation, and visualization to lead the practitioner toward states of spiritual elevation and prophetic vision. His methods generated controversy in his time. His attempt to present himself before the Pope in 1280 forms part of a biography marked by tension and displacement. But his doctrinal legacy endured and enriched the tradition in a way later centuries recognized."
          ]
        },
        {
          heading: { en: "Historical Overview", es: "Panorama histórico" },
          paragraphs: [
            "Qabalah has several centers that appear over time and overlap.",
            "The visions of Ezekiel and Isaiah contain the material with which Maaseh Merkavah worked for centuries. Sefer Yetzirah, whose dating remains debated between the third and sixth centuries of the common era, is the oldest speculative text preserved within this tradition. Its attribution to the patriarch Abraham reflects the tradition's own awareness of its antiquity, not a historical claim in the modern sense.",
            "Sefer HaBahir circulated around 1176 in Provence. Historians situate it in southern France in the twelfth century. The text itself attributes it to Nechunyah ben HaKanah. The Bahir first introduced the doctrine of the ten Sefirot and several symbols that qabalistic thought later developed extensively.",
            "In twelfth-century Provence, Rabbi Abraham ben David of Posquieres (RaBAD) was active; his Talmudic authority was undisputed, and his incursions into the esoteric field influenced the Provencal school. His son, Rabbi Yitzhak Sagi Nahor, known as Isaac the Blind, articulated for the first time in systematic form the doctrine of the Sefirot as a transmissible tradition. Through Isaac the Blind and his disciples, the qabalistic current passed into the territories of northern Spain.",
            "The thirteenth century concentrated texts and figures difficult to equal. In that period the Zohar, the Book of Splendor, emerged. Rabbi Moses de Leon (c. 1240-1305) attributed it to an ancient manuscript of Rabbi Shimon bar Yochai from the second century. Modern research, beginning with Gershom Scholem and continued by Yehuda Liebes and others, concludes that Moses de Leon composed the Zohar in the last third of the thirteenth century, in Castile. Written in archaizing Aramaic, the Zohar is the central text of the whole tradition: a mystical commentary on the Torah that unfolds, across thousands of pages, a vision of the world, God, and the soul with a density unparalleled in Jewish literature.",
            "In that same generation, Rabbi Yosef Gikatilla (1248-1305) wrote Sha'are Orah, Gates of Light, a treatise that systematizes the relations between the Sefirot and the divine Names, offering a tool of study and meditation of great precision. In the same period, the school of Girona, with Rabbi Ezra ben Shlomo and Rabbi Azriel of Girona, both disciples of Isaac the Blind, developed a rigorous speculative Qabalah. Nachmanides (Rabbi Moshe ben Nachman) integrated qabalistic elements into his commentary on the Torah, giving them a halakhic authority that would open the way for later generations.",
            "The next moment of concentration took place in the sixteenth century in Safed, in Galilee. The community of mequbalim that gathered there in the middle of that century is one of the most extraordinary phenomena in Jewish intellectual history. Rabbi Moshe Cordovero (the Ramak, 1522-1570) undertook the systematization of all earlier Qabalah in his encyclopedic work Pardes Rimonim, completed in 1548. A disciple of the codifier Rabbi Yosef Caro, Cordovero harmonized the currents of Zoharic thought into a coherent system, describing with conceptual precision how finite reality emanates from Ein Sof through the Sefirot. His work was the reference text until his own disciple, Rabbi Yitzhak Luria, known as the Ari, surpassed it.",
            "The Ari (1534-1572), originally from Jerusalem and formed in Egypt, settled in Safed only during the last two years of his life, but the impact of his teaching was decisive. Luria reformulated qabalistic cosmology from its foundations. His doctrine of Tzimtzum, the primordial contraction by which Ein Sof \"made space\" so that a world could exist, explained in a new way the passage from the infinite to the finite. His concept of Shevirat HaKelim, the breaking of the vessels that were to contain the light in the first stages of creation, introduced an explanation for the origin of evil and disorder in existence. And his notion of Tikun, the repair or restoration of the broken order, gave human life, and in particular the fulfillment of the mitzvot, cosmic weight: every righteous act contributes to gathering the sparks of holiness (nitzotzot) scattered by the breaking and returning them to their source.",
            "The Ari taught orally during those two years in Safed and died young. Rabbi Chaim Vital, his principal disciple, gathered his teachings and preserved them in works such as Ets Haim, the Tree of Life. Through Vital, Lurianic Qabalah became the dominant current of Jewish mysticism for the generations that followed.",
            "The eighteenth century brought two developments of different nature. In Italy, Rabbi Moshe Chaim Luzzatto (Ramchal, 1707-1746) produced works of exceptional synthesis. His Derej HaShem, The Way of God, sets forth the qabalistic vision of the world: the nature of God, the structure of the worlds, the purpose of creation, and the condition of the human soul. Luzzatto knew the Zohar and the Lurianic literature. He faced rabbinic opposition in his time. Today his texts serve as guides to Jewish theology.",
            "In eastern Europe during that same period, Rabbi Israel ben Eliezer, the Baal Shem Tov (1698-1760), founded Hasidism. The Hasidic movement rested on Lurianic Qabalah but transformed its transmission: it emphasized devotion, joy, and faith as paths of access to the Divine open to every Jew, whether learned or not. The Baal Shem Tov taught that HaShem is present in every act of life when it is performed with sincerity and attachment to the Creator. Hasidism spread through eastern Europe. Its different dynasties (Chabad, Breslov, Satmar, and others) continue to transmit the qabalistic legacy integrated into their own structures of teaching and practice.",
            "The twentieth century added a figure of the first order: Rabbi Yehuda Ashlag (1885-1954), called Baal HaSulam for his commentary on the Zohar, the Sulam. Ashlag founded in Jerusalem a yeshivah dedicated to the systematic teaching of Lurianic Qabalah, with a vocation of accessibility greater than that of the restricted circles of earlier periods. He translated the Zohar into modern Hebrew with extensive explanations and composed Talmud Eser Sefirot, a didactic work that articulates Lurianic Qabalah in rigorous conceptual language.",
            "In that same century, academic research established Qabalah as a serious object of intellectual history. Gershom Scholem was the founding figure, followed by Moshe Idel, Yehuda Liebes, and others. They fixed chronologies, established genealogies of texts, and distinguished currents that tradition had sometimes confused.",
            "In the contemporary period, three names have marked the transmission and study of Qabalah. Rabbi Aryeh Kaplan brought the qabalistic tradition to the modern reader with clarity and seriousness. Meditation and Qabalah, Jewish Meditation, and his edition of Sefer Yetzirah made accessible texts and practices that had remained distant for much of the public, without reducing their doctrinal density. Moshe Idel highlighted the inner diversity of Qabalah and broadened the understanding of currents such as ecstatic Qabalah. Elliot R. Wolfson renewed the study of qabalistic symbolism with attention to language, imagination, and the theological structure of the texts.",
            "The contemporary period has produced interpreters and researchers who maintain Qabalah as a living tradition of study and interpretation."
          ]
        },
        {
          heading: { en: "Tikun, Middot, and Devekut: The Practical Orientation", es: "Tikun, middot y devekut: la orientación práctica" },
          paragraphs: [
            "This doctrinal architecture pursues an objective in the life of the mequbal: to correct his middot (the qualities of his character) and advance toward devekut, adhesion to HaShem. It is expressed as Tikun: repairing the scattered sparks by beginning with the rectification of the practitioner's own soul. The Sefirot mark the fields of that work: balancing Chesed and Gevurah, mercy and rigor, so that neither predominates without order; cultivating Tiferet as the center of harmony; refining Netzach and Hod as forms of constancy and receptivity in service; establishing in Yesod the integrity that allows the light of the higher worlds to descend toward Malkhut.",
            "This work occurs within the framework of Torah and halakhah. Kavanah, the conscious intention with which the commandments are fulfilled, fills the outer act with inner meaning. Working, eating, relating to others, studying: none of these is neutral in the qabalistic vision. Every act performed with the proper kavanah raises a spark of holiness and contributes to Tikun. The Midrash Tanchuma summarizes it in the image of dirah ba-tachtonim, the dwelling in the lower worlds: HaShem desires to dwell on the physical plane. The human being builds that dwelling.",
            "Devekut designates the state of one who has aligned his will with the divine will sufficiently to maintain, in dealing with the world, a constant orientation toward the Creator. The classical mequbalim described it as the horizon of the path, as an active adhesion expressed in the fulfillment of the Torah with full awareness of what that fulfillment means. The persevering student, formed in Torah and in the received tradition, finds in Qabalah a key for living that fulfillment."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "La Qabalah es la tradición esotérica del judaísmo. Su nombre viene del hebreo leqabel (לקבל), que significa \"recibir\", y ese verbo ya expresa una idea central: el conocimiento se recibe. Esa transmisión exige afinidad real entre quien enseña y quien aprende; sin ella, solo se transmiten palabras, no la sustancia que esas palabras sostienen. Por eso la Qabalah se ha conservado como cadena de maestro a discípulo, donde cada eslabón depende del anterior y cada generación recibe lo que la anterior recibió.",
            "La palabra adquirió este sentido en la Edad Media, pero dentro de la tradición se entiende que la realidad a la que se refiere es mucho más antigua. Según la perspectiva clásica, las enseñanzas esotéricas forman parte de la Torá Oral entregada a Moshe en el Sinaí, y luego transmitida a iniciados en cada época. Algunas fuentes llevaron esa cadena aún más atrás y afirmaron que esta sabiduría fue revelada primero a Adam, después al patriarca Abraham y luego a Moshe junto con la Torá escrita. El Midrash Tanchuma expresa bien esa orientación de fondo: Dios deseaba \"una morada en los mundos inferiores\", hacer habitable Su presencia en el plano físico. La Qabalah sería, entonces, la descripción precisa de cómo esa presencia desciende y de cómo el ser humano puede alinearse con ella.",
            "Entre los textos más antiguos relacionados con esta tradición está el Sefer Yetzirah, el Libro de la Formación, atribuido de forma legendaria a Abraham y dedicado a describir la estructura de la creación a través de las letras del alfabeto hebreo y de los primeros números. Siglos después empezó a circular, hacia 1176 en Provenza, el Sefer HaBahir, el Libro de la Claridad, atribuido por la tradición a Rabí Nechunyah ben HaKanah, aunque históricamente suele situarse en el siglo XII. El Bahir introduce por primera vez, en forma literaria, algunos de los conceptos que definirán la Qabalah medieval: las diez Sefirot, ciertos símbolos y ciertas estructuras que los textos posteriores desarrollarán con más detalle. Esos dos textos, el Yetzirah y el Bahir, marcan el horizonte sobre el que crecerá toda la literatura qabalística."
          ]
        },
        {
          heading: { en: "The Levels of Torah and the Place of Sod", es: "Los niveles de la Torá y el lugar del Sod" },
          paragraphs: [
            "La Qabalah trabaja en el cuarto nivel de lectura de la Torá. La exégesis rabínica distingue cuatro planos resumidos en el acrónimo PaRDeS: Pshat (sentido directo), Remez (lectura alegórica), Drash (interpretación homilética) y Sod (sentido oculto). La Qabalah opera en Sod. Sostiene que detrás del texto literal hay verdades que exigen formación para verlas.",
            "Esto determina su lenguaje. La Qabalah construye un sistema de correspondencias porque trata con realidades que el lenguaje común no abarca: cuatro planos de existencia asociados a las cuatro letras del Nombre divino (י-ה-ו-ה), diez niveles vinculados a las diez Sefirot de la creación, trece atributos de misericordia revelados en la Torá. Estas correspondencias mapean estructuras que de otro modo quedarían invisibles. El mequbal lee la realidad a través de ese mapa. El estudio, la práctica y la tradición recibida lo afinan."
          ]
        },
        {
          heading: { en: "Ein Sof and the Sefirot", es: "Ein Sof y las Sefirot" },
          paragraphs: [
            "El concepto de Ein Sof (אין סוף), el Infinito, es el punto de partida de toda nuestra cosmología. Con este término se señala la dimensión de la Divinidad que está más allá de cualquier atributo, de cualquier nombre y de cualquier categoría que la mente humana pueda formular. Ein Sof no tiene límite, forma ni atributo que podamos distinguir con claridad. La existencia tal como la conocemos, con sus formas y sus límites, no puede contener ni abarcar ese Infinito. Y, sin embargo, toda la realidad emana de Él.",
            "Las Sefirot (ספירות) describen el mecanismo de esa emanación. Las diez Sefirot son los atributos o canales por los que la luz infinita, el Ohr Ein Sof, se despliega y se contrae de manera sucesiva hasta dar origen a los mundos creados. No son entidades separadas de Dios ni facultades humanas proyectadas sobre lo divino. Son, en el lenguaje de los mequbalim clásicos, las formas en que lo Infinito se manifiesta y actúa.",
            "Keter, la corona, expresa la Voluntad divina en su nivel más alto y sin forma. Jokhmah, la sabiduría, es el primer punto de la Luz, la chispa primordial anterior a toda articulación. Binah, el entendimiento, es la comprensión que desarrolla, articula y da estructura a lo que Jokhmah contiene en potencia. Más abajo, las Sefirot intermedias (Chesed, Gevurah, Tiferet, Netzach, Hod y Yesod) articulan los modos del obrar divino en la creación: misericordia y rigor, belleza y equilibrio, permanencia y resplandor, fundamento. Malkhut, el reino, es el receptáculo final, el plano de la manifestación donde la Luz se hace tangible y donde la creación existe como realidad concreta.",
            "Las diez Sefirot suelen representarse en el diagrama conocido como el Árbol de la Vida, donde aparecen unidas por veintidós senderos, cada uno asociado a una de las letras del alfabeto hebreo. El diagrama muestra la estructura del proceso de emanación, cuyo fruto es esta realidad: cómo la luz divina desciende desde Keter hasta Malkhut, adaptándose en cada nivel, y cómo los distintos planos de existencia quedan unidos entre sí dentro de un sistema coherente. Cada Sefirah actúa como un filtro que permite que la luz infinita sea recibida en el nivel siguiente sin que su intensidad destruya al receptor. La tradición enseña que este proceso describe tanto la estructura del cosmos como la del alma humana, cuyas facultades (kochot ha-nefesh) guardan correspondencia con los atributos divinos que expresan las Sefirot. Conocer el Árbol de la Vida es aprender a conocerse a uno mismo en relación con el Creador."
          ]
        },
        {
          heading: { en: "The Aim: Devekut and Avodat HaShem", es: "La finalidad: devekut y avodat HaShem" },
          paragraphs: [
            "Este camino sirve a HaShem y rectifica el interior (Tikun ha-middot). Su meta es la devekut, la adhesión a Dios. El concepto tiene raíces en la Torá misma (\"le-davka bo\", Devarim 13:5). Los rishonim y los mequbalim de distintas épocas lo desarrollaron, cada escuela con sus matices. En todos los casos, refiere un estado de unión con lo Divino que preserva la individualidad del alma mientras la orienta hacia su fuente.",
            "Ese estado requiere corrección del carácter, observancia de la Torá e intención (kavanah) en los actos. Rabí Moshe Cordovero, uno de los grandes sistematizadores de la Qabalah en el siglo XVI, lo expresó con claridad: el mequbal debe imitar los atributos divinos - compasión, generosidad, paciencia - en cada aspecto de su conducta. Esa imitación es ética y mística a la vez, una sola exigencia en dos planos.",
            "Rabí Yehuda Ashlag (1885-1954) formuló esta dinámica en términos de transformación del deseo. Su escuela desarrolló un lenguaje conceptual propio dentro de la tradición luriánica. Según su enseñanza, la evolución espiritual reorienta el impulso de recibir hacia un impulso de dar, adquiriendo semejanza con el Creador. Ashlag articuló esto mediante los conceptos de Ohr y Keli (luz y vasija), que describen la relación entre la abundancia divina que fluye y la creación que la recibe. Este lenguaje es característico de la escuela ashlagiana y refleja sus categorías, distintas aunque no ajenas al vocabulario del Zohar y de la Qabalah luriánica clásica."
          ]
        },
        {
          heading: { en: "Two Branches of Study", es: "Dos vertientes del estudio" },
          paragraphs: [
            "El estudio qabalístico distingue dos clasificaciones que se superponen pero requieren diferenciación.",
            "La primera aparece en el tratado Chagigah (11b-13a): Maaseh Bereshit, la Obra de la Creación, y Maaseh Merkavah, la Obra del Carro Celestial. Estas categorías designan los contenidos esotéricos más antiguos del estudio rabínico. La primera trata los misterios de la creación y la cosmogonía; la segunda, las visiones del Carro divino en Ezequiel y las tradiciones de ascenso del alma hacia los mundos superiores. El Talmud rodea ambas materias de restricciones: los maestros pueden enseñarlas solo a individuos calificados y bajo condiciones determinadas.",
            "La segunda distinción, desarrollada en la Edad Media, diferencia entre la Qabalah iyunit (especulativa) y la Qabalah ma'asit (práctica). La Qabalah iyunit estudia la estructura de los mundos, la naturaleza de las Sefirot, la cosmología de la emanación y el significado esotérico de la Torá. Domina el Zohar y las obras de Cordovero y Luria. La Qabalah ma'asit trabaja con nombres divinos, combinaciones de letras y otras operaciones para producir efectos en el mundo o en el alma. Los maestros advirtieron sobre el peligro de esta última cuando falta la formación adecuada y la pureza de intención que exige.",
            "Dentro de este marco, la corriente meditativa ocupa un lugar propio. Rabí Abraham Abulafia (1240-1291), nacido en Zaragoza y formado en comunidades del Mediterráneo, desarrolló la Qabalah profética: técnicas de concentración en las letras sagradas y los nombres divinos para experimentar lo Divino de manera directa. Sus manuales, entre ellos el dedicado a la chokhmat ha-tzeruf, la ciencia de la combinación de letras, describen métodos de respiración, articulación y visualización para llevar al practicante hacia estados de elevación espiritual y visión profética. Sus métodos generaron controversia en su tiempo. Su intento de presentarse ante el Papa en 1280 forma parte de una biografía marcada por la tensión y el desplazamiento. Pero su legado doctrinal perduró y enriqueció la tradición de un modo que los siglos posteriores reconocieron."
          ]
        },
        {
          heading: { en: "Historical Overview", es: "Panorama histórico" },
          paragraphs: [
            "La Qabalah tiene varios focos que aparecen a lo largo del tiempo y se superponen.",
            "Las visiones de Ezequiel e Isaías contienen el material con el que la Maaseh Merkavah trabajó durante siglos. El Sefer Yetzirah, cuya datación sigue siendo discutida entre los siglos III y VI de la era común, es el texto especulativo más antiguo que se conserva dentro de esta tradición. Su atribución al patriarca Abraham refleja la conciencia que la propia tradición tiene de su antigüedad, no una afirmación histórica en sentido moderno.",
            "El Sefer HaBahir circuló hacia 1176 en Provenza. Los historiadores lo sitúan en el sur de Francia, en el siglo XII. El propio texto lo atribuye a Nechunyah ben HaKanah. El Bahir introdujo por primera vez la doctrina de las diez Sefirot y varios símbolos que el pensamiento qabalístico desarrolló después con amplitud.",
            "En la Provenza del siglo XII actuó Rabí Abraham ben David de Posquières (RaBAD), cuya autoridad talmúdica era indiscutida y cuyas incursiones en el terreno esotérico influyeron en la escuela provenzal. Su hijo, Rabí Yitzhak Sagi Nahor, conocido como Isaac el Ciego, articuló por primera vez de forma sistemática la doctrina de las Sefirot como una tradición transmisible. A través de Isaac el Ciego y de sus discípulos, la corriente qabalística pasó a los territorios del norte de España.",
            "El siglo XIII concentró textos y figuras difícil de igualar. En ese período surge el Zohar, el Libro del Esplendor. Rabí Moisés de León (c. 1240-1305) lo atribuyó a un antiguo manuscrito de Rabí Shimon bar Yochai, del siglo II. La investigación moderna, comenzando por Gershom Scholem y continuada por Yehuda Liebes y otros, concluye que Moisés de León compuso el Zohar en el último tercio del siglo XIII, en Castilla. Escrito en un arameo arcaizante, el Zohar es el texto central de toda la tradición: un comentario místico de la Torá que despliega, a lo largo de miles de páginas, una visión del mundo, de Dios y del alma con una densidad sin paralelo en la literatura judía.",
            "En esa misma generación, Rabí Yosef Gikatilla (1248-1305) escribió su Sha'are Orah, Las Puertas de la Luz, un tratado que sistematiza las relaciones entre las Sefirot y los Nombres divinos, ofreciendo una herramienta de estudio y meditación de gran precisión. En ese mismo período, la escuela de Gerona, con Rabí Ezra ben Shlomó y Rabí Azriel de Gerona, ambos discípulos de Isaac el Ciego, desarrolló una Qabalah especulativa de rigor. Nachmanides (Rabí Moshe ben Nachman) integró elementos qabalísticos en su comentario de la Torá, dándoles una autoridad halakhica que abriría camino a las generaciones siguientes.",
            "El siguiente momento de concentración tiene lugar en el siglo XVI, en Safed, en Galilea. La comunidad de mequbalim que se reunió allí a mediados de ese siglo es uno de los fenómenos más extraordinarios de la historia intelectual judía. Rabí Moshe Cordovero (el Ramak, 1522-1570) emprendió la sistematización de toda la Qabalah anterior en su obra enciclopédica Pardes Rimonim, terminada en 1548. Discípulo del codificador Rabí Yosef Caro, Cordovero armonizó las corrientes del pensamiento zohárico en un sistema coherente, describiendo con precisión conceptual cómo la realidad finita emana del Ein Sof a través de las Sefirot. Su obra fue el texto de referencia hasta que su propio discípulo, Rabí Yitzhak Luria, conocido como el Ari, la superó.",
            "El Ari (1534-1572), originario de Jerusalén y formado en Egipto, se estableció en Safed solo durante los dos últimos años de su vida, pero el impacto de su enseñanza fue decisivo. Luria reformuló la cosmología qabalística desde sus fundamentos. Su doctrina del Tzimtzum, la contracción primordial mediante la cual Ein Sof \"cedió espacio\" para que pudiera existir un mundo, explicó de un modo nuevo el paso de lo infinito a lo finito. Su concepto de la Shevirat HaKelim, la ruptura de los recipientes que debían contener la luz en los primeros estadios de la creación, introdujo una explicación del origen del mal y del desorden en la existencia. Y su noción de Tikun, la reparación o restauración del orden roto, dio a la vida humana, y en particular al cumplimiento de las mitzvot, un peso cósmico: cada acto recto contribuye a reunir las chispas de santidad (nitzotzot) dispersadas por la ruptura y a devolverlas a su fuente.",
            "El Ari enseñó oralmente durante esos dos años en Safed y murió joven. Rabí Chaim Vital, su discípulo principal, reunió sus enseñanzas y las preservó en obras como Ets Haim, el Árbol de la Vida. A través de Vital, la Qabalah luriánica se convirtió en la corriente dominante de la mística judía para las generaciones siguientes.",
            "El siglo XVIII trajo dos desarrollos de distinta naturaleza. En Italia, Rabí Moshe Chaim Luzzatto (Ramchal, 1707-1746) produjo obras de síntesis excepcionales. Su Derej HaShem, El Camino de Dios, expone la visión qabalística del mundo: la naturaleza de Dios, la estructura de los mundos, el propósito de la creación y la condición del alma humana. Luzzatto conocía el Zohar y la literatura luriánica. Enfrentó oposición rabínica en su época. Hoy sus textos sirven como guías de la teología judía.",
            "En Europa oriental, en ese mismo período, Rabí Israel ben Eliezer, el Baal Shem Tov (1698-1760), fundó el jasidismo. El movimiento jasídico se apoyó en la Qabalah luriánica pero transformó su transmisión: puso el acento en la devoción, la alegría y la fe como caminos de acceso a lo Divino abiertos a todo judío, fuera erudito o no. El Baal Shem Tov enseñó que HaShem está presente en cada acto de la vida cuando este se realiza con sinceridad y apego al Creador. El jasidismo se propagó por Europa oriental. Sus distintas dinastías (Jabad, Breslov, Satmar y otras) siguen transmitiendo el legado qabalístico integrado en sus propias estructuras de enseñanza y práctica.",
            "El siglo XX añadió una figura de primer orden: Rabí Yehuda Ashlag (1885-1954), llamado Baal HaSulam por su comentario al Zohar, el Sulam. Ashlag fundó en Jerusalén una yeshivá dedicada a la enseñanza sistemática de la Qabalah luriánica, con una vocación de accesibilidad mayor que la de los círculos restringidos de épocas anteriores. Tradujo el Zohar al hebreo moderno con amplias explicaciones y compuso el Talmud Eser Sefirot, una obra didáctica que articula la Qabalah luriánica en un lenguaje conceptual riguroso.",
            "En ese mismo siglo, la investigación académica estableció la Qabalah como un objeto serio de historia intelectual. Gershom Scholem fue la figura fundadora, seguido por Moshe Idel, Yehuda Liebes y otros. Fijaron cronologías, establecieron genealogías de textos y distinguieron corrientes que la tradición había confundido a veces.",
            "En la época contemporánea, tres nombres han marcado la transmisión y el estudio de la Qabalah. Rabí Aryeh Kaplan acercó la tradición qabalística al lector moderno con claridad y seriedad. Meditation and Qabalah, Jewish Meditation y su edición del Sefer Yetzirah hicieron accesibles textos y prácticas que habían permanecido lejanos para gran parte del público, sin rebajar su densidad doctrinal. Moshe Idel puso de relieve la diversidad interna de la Qabalah y amplió la comprensión de corrientes como la Qabalah extática. Elliot R. Wolfson renovó el estudio de la simbólica qabalística con atención al lenguaje, la imaginación y la estructura teológica de los textos.",
            "La época contemporánea ha producido intérpretes e investigadores que mantienen la Qabalah como tradición viva de estudio e interpretación."
          ]
        },
        {
          heading: { en: "Tikun, Middot, and Devekut: The Practical Orientation", es: "Tikun, middot y devekut: la orientación práctica" },
          paragraphs: [
            "Esta arquitectura doctrinal persigue un objetivo en la vida del mequbal: corregir sus middot (las cualidades de su carácter) y avanzar hacia la devekut, la adhesión a HaShem. Se expresa como Tikun: reparar las chispas dispersas comenzando por rectificar el alma del practicante. Las Sefirot marcan los campos de ese trabajo: equilibrar Chesed y Gevurah, misericordia y rigor, para que ninguna predomine sin orden; cultivar Tiferet como centro de armonía; refinar Netzach y Hod como formas de constancia y receptividad en el servicio; establecer en Yesod la integridad que permite a la luz de los mundos superiores descender hacia Malkhut.",
            "Este trabajo ocurre dentro del marco de la Torá y la halakhah. La kavanah, la intención consciente con la que se cumplen los preceptos, llena el acto exterior de sentido interior. Trabajar, comer, relacionarse, estudiar: ninguno es neutral en la visión qabalística. Cada acto realizado con la kavanah adecuada eleva una chispa de santidad y contribuye al Tikun. El Midrash Tanchuma lo resume en la imagen de la dirah ba-tachtonim, la morada en los mundos inferiores: HaShem desea habitar en el plano físico. El ser humano construye esa morada.",
            "La devekut designa el estado de quien ha alineado su voluntad con la voluntad divina lo suficiente como para mantener, en el trato con el mundo, una orientación constante hacia el Creador. Los mequbalim clásicos la describieron como el horizonte del camino, como una adhesión activa que se expresa en el cumplimiento de la Torá con plena conciencia de lo que ese cumplimiento significa. El estudioso perseverante, formado en la Torá y en la tradición recibida, encuentra en la Qabalah una clave para vivir ese cumplimiento."
          ]
        }
      ]
    }
  },
  {
    id: "ein-sof",
    parentId: null,
    level: 1,
    mainNumber: 2,
    title: { en: "Ein Sof", es: "Ein Sof" },
    hebrew: "אין סוף",
    subtitle: { en: "Without End", es: "Sin fin" },
    sections: {
      en: [
        {
          paragraphs: [
            "Every attempt to speak about God begins with a paradox: the tool we use to approach the subject immediately shows us that it is not enough. Human language was born to name what exists within the created order: creatures, relationships, processes, ideas, actions, limits. In that realm it works. It can distinguish, order, remember, transmit. It can name one thing and separate it from another.",
            "The Sages teach that Adam HaRishon, the first human being, gave each creature a name according to its inner essence, something even the angels could not do. In the Hebrew tradition, a name is not an external label. It expresses a root. The Zohar insists that the Hebrew name of each being reveals its spiritual structure: the letters that form it not only designate it, but sustain from within its mode of existing.",
            "But when that same language tries to address the Creator, it encounters a limit impossible to cross. To describe God with words is to apply categories to Him: quality, extension, relation, time, place, action, comparison. All those categories belong to the finite world. And everything described through finite categories is, in some sense, reduced to the finite.",
            "The Torah points to this tension when Iyov asks: \"Can you reach the perfection of Shaddai?\" The question does not seek a conceptual answer. It points to a fundamental impossibility: the limited cannot contain the Limitless. Thought can approach, purify itself, recognize its own limits, and orient itself upward, but it cannot encompass that on which its own existence depends.",
            "For this reason Qabalah begins with a discipline of language. Before saying something about God, it teaches one to know what cannot be said. Before describing, it teaches silence. Not because of spiritual poverty, but because of precision. Silence is not the absence of knowledge; it can be the highest form of respect before that which no created knowledge can master.",
            "The tradition uses the term Ein Sof, אין סוף, \"without end,\" to indicate God as absolute unknowability. It is not a name in the ordinary sense. It does not function like the names of creatures. It does not define an essence or delimit an object. On the contrary: it denies limit. It says that there is no edge, measure, term, exterior, border, or end.",
            "Translating Ein Sof as \"the Infinite\" or \"the Limitless\" helps, but it does not exhaust the concept. Ein Sof does not describe one quality of God among others, as if we were saying that God is wise, powerful, or good. It marks that God is beyond every possible description. Even calling God \"infinite\" still uses a word born from our experience of the finite. The word points, but does not reach.",
            "\"There is nothing outside Him,\" says the Torah. This statement does not mean that God is an immense thing inside the world, nor that He occupies all space like a very large body. Space itself belongs to the created order. God does not occupy place, because place proceeds from Him. He is not inside time, because time is a creature. He is not subject to relation, because every relation presupposes two already differentiated terms, and before all differentiation only He is.",
            "When the mequbalim write Ein Sof, they try to keep silence with words. The term points to that which no term can encompass. It recognizes that every definition fails. This is the most honest and rigorous posture for one who takes both revelation and reason seriously. The psalmist expresses it with a question: \"Who can express the mighty acts of HaShem? Who can tell all His praise?\" No voice can reach. And yet the soul continues trying to speak, because that effort orients it toward its Source.",
            "Above, or deeper within, Ein Sof, the tradition introduces an even more radical distinction: Atzmut, עצמות, the Divine Essence in itself. Ein Sof points to God's infinity insofar as He surpasses every limit. Atzmut points to what God is in Himself, without reference to creation, without relation to any emanation, without even the idea of manifesting. It is not a quality, nor a state, nor a mode of revelation. It is pure Essence, prior to every light, every revealed will, and every possibility of being known.",
            "Here language reaches its outer edge. To say \"prior\" does not mean prior in time, because we are not yet speaking of time. To say \"inner\" does not mean inside a space, because we are not yet speaking of space. To say \"Essence\" does not capture it either, because every human word brings with it a mental form. But the tradition needs some way to indicate that even Ein Sof, as a term, does not exhaust the mystery of God. Atzmut indicates that absolutely unknowable core where no category holds.",
            "The Patach Eliyahu, the text that opens the Tikunei Zohar, expresses this precisely: \"No thought can grasp You at all.\" It then enumerates divine attributes to show that none can be applied to God in the way the mind understands them: You are wise, but not with a known wisdom; You are understanding, but not with an understanding accessible to the mind. The statement does not deny divine wisdom or understanding. It denies that those words, taken from human experience, can contain what they are in God.",
            "God possesses, in His Essence, everything the attributes try to name, but in a manner so sublime that those concepts break when applied to Him. Wisdom, understanding, goodness, power, will: all these terms have meaning within the worlds. In Atzmut, they lose the form we know. The Divine Essence transcends even the opposition between being and non-being, existence and nonexistence, presence and absence. None of those pairs reaches.",
            "And yet the human soul is not alien to that Essence. The Tanya, based on the expression from Iyov that Hasidic masters read as \"a portion of Divinity from above,\" teaches that at the core of the Jewish soul there is a point that is not simply created from the outside, but proceeds from divine inwardness. This teaching must be understood carefully. The soul is not God, nor a separated part of God in a material sense. But there is in it a radical affinity with its Source, a spark that recognizes where it comes from even when the mind cannot understand it.",
            "There lies the possibility of devekut. The soul does not comprehend Atzmut; nothing created can comprehend it. But in its highest depth it bears an orientation toward it. For this reason the human being can seek HaShem, respond to His call, and feel longing for a source he has not seen with his eyes and cannot capture with concepts. The root of return lies in that inner affinity.",
            "Between unknowable Atzmut and the created worlds, Qabalah introduces the Ohr Ein Sof, אור אין סוף, the Infinite Light. It is not physical light. Nor is it an ornamental metaphor. It is the name the mequbalim give to the first manifestation of Ein Sof toward the possibility of revelation: a limitless divine radiance, prior to every created structure, prior to every Sefirah, prior to every world.",
            "Rabbi Chaim Vital, transmitting the teaching of the Ari, formulates it at the beginning of Ets Haim: before the emanated were emanated and the created were created, there was a simple Supernal Light filling all existence. There was no empty space. There was no beginning or end. Everything was filled by the uniform light of the Ohr Ein Sof.",
            "This description should not be imagined as a physical scene. There is not yet space in which to place a light, nor time in which that light extends. The image points to a reality without differentiation. Where the Ohr Ein Sof fills everything, there is no room for a creature to perceive itself as distinct. There is no distance, no edge, no relation between a giver and a receiver. Everything is included in the simple fullness of the Light.",
            "Creation, then, does not begin with a lack in God. It does not arise because something is missing in Divinity. It arises from fullness. This idea is essential. HaShem does not create in order to complete Himself, because nothing is lacking in Him. Creation is an act of will and goodness, not a necessity. The possibility that something distinct from the full revelation of the Light can exist requires not an increase, but a concealment.",
            "Here opens the mystery that the next chapter will develop: Tzimtzum.",
            "If the Ohr Ein Sof fills everything absolutely, how can a finite reality exist? If the Infinite Light is revealed without limit, every creature is nullified in its source before it can appear as a creature. For there to be a world, there must be room for finitude. For there to be a soul, there must be the possibility of distance. For there to be choice, there must be concealment. For there to be Tikun, there must be a reality that is not yet fully rectified.",
            "Lurianic Qabalah calls that primordial act of contraction or concealment Tzimtzum. In this chapter it is not yet appropriate to develop it in detail, because it belongs to the process of creation properly speaking. It is enough to understand its necessity: the Light must be veiled so creation can appear. That veil does not mean the absence of HaShem. The Essence does not withdraw from any place, because there is no place empty of Him. What is concealed is the full revelation of the Light, not the presence of the Essence.",
            "This distinction will be decisive. If Tzimtzum is understood as an absolute withdrawal of God, one falls into the idea of a world separated from its Source. If the experience of separation is denied completely, the meaning of human responsibility is lost. Qabalah holds both dimensions: from the perspective of HaShem, nothing is outside Him; from the perspective of the creature, there is world, distance, choice, effort, and return.",
            "Concealment is not a defect in the system. It is the condition that makes avodah possible. A light too revealed would nullify the receiver. A veiled light allows the receiver to exist, seek, choose, fail, return, and participate in rectification. Creation is not only the unfolding of the Light; it is also the construction of vessels capable of receiving it without breaking.",
            "Here, still in seed form, appears the entire later logic of the book. The human soul will be a vessel. Its thoughts, emotions, desires, and actions will form the state of that vessel. If it is disordered, the light presses against it, confuses it, or overwhelms it. If it is rectified, the light can dwell in it and pass through it toward the world. What in cosmology will be expressed as the relation between Ohr and Keli, light and vessel, will be repeated in the inner life of the practitioner.",
            "The distance between Ein Sof and the soul is not spatial distance. It is distance of concealment. The denser the perception of separation, the farther the creature seems from its Source. The more consciousness is refined, the more it discovers that the Source was never absent. Avodah does not bring HaShem to a place where He was not; it removes the veils that prevented recognition of His presence.",
            "Silence has its own place here. The tradition does not pronounce the essential Name of HaShem as it is written. The four letters י-ה-ו-ה are read as Adonai in prayer and as HaShem outside it. Halakhah establishes that reverence, and Qabalah understands it from within: the written Name points to a reality that the created mouth must not reduce to ordinary sound.",
            "The Talmud teaches that in this world the Name is written one way and read another; in the World to Come it will be read as it is written. This difference between writing and reading expresses our present spiritual situation. There is a truth written into the structure of reality that cannot yet fully manifest in pronunciation. Creation is not yet able to contain the complete revelation of the Name without a veil.",
            "\"For You, silence is praise,\" says the psalm. Not because there is nothing to say, but because everything said remains below that to which it points. Silence, when born from understanding and not from ignorance, is a form of spiritual precision. To be silent before Ein Sof is not to renounce knowledge; it is to recognize that true knowledge begins by knowing where conceptual possession ends.",
            "Even so, Qabalah does not remain in absolute silence. If everything ended in the unknowability of Atzmut and Ein Sof, there would be no revealed Torah, no mitzvot, no prayer, no worlds, no soul, and no return. Revelation itself teaches that HaShem, without ceasing to be unknowable in His Essence, willed to manifest. Not to be contained, but to be known according to the measure of creatures. Not as Atzmut, but through His modes of action.",
            "That manifestation will receive the name Sefirot: the emanations through which the Light is ordered, attenuated, and made receivable. The Sefirot are not parts of God. They do not fragment divine unity. They are modes of revelation, living vessels of the Light, forms in which the divine will manifests in relation to the worlds. But their explanation belongs to a later development. Here it is enough to establish the necessity: between the unknowable Infinite and the finite creature there must be an architecture of mediation.",
            "The single light will reveal itself as wisdom, understanding, goodness, rigor, beauty, victory, splendor, foundation, and kingdom. Not because there is division in God, but because the creature can only receive gradually. Multiplicity belongs to the mode of reception, not to the Essence of the Source. Like pure water that takes the color of the vessel without changing in itself, the divine Light appears diversified according to the Kelim that manifest it.",
            "This architecture is not only cosmological. It will also be the map of the soul. The human being, created betzelem Elohim, in the image of God, reflects inwardly the structure through which the Light manifests in the worlds. For this reason studying Ein Sof is not speculation removed from life. It teaches the soul its proportion. It reminds the soul that its source is beyond everything it can master, that its existence depends on a Light it does not possess, and that its work is not to appropriate the divine, but to become transparent to it.",
            "The first teaching, then, is humility. Before Atzmut there is no comprehension. Before Ein Sof there is no limit. Before Ohr Ein Sof there is no absolute independence. Before Tzimtzum there will be no abandonment, but concealment. Before the Name there is no possession, but reverence. The soul that enters Qabalah without this humility turns wisdom into a tool of the ego. The soul that enters with it begins to prepare itself as a vessel."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Todo intento de hablar sobre Dios comienza con una paradoja: la herramienta que usamos para acercarnos al tema nos muestra de inmediato que no basta. El lenguaje humano nació para nombrar lo que existe dentro del orden creado: criaturas, relaciones, procesos, ideas, acciones, límites. En ese ámbito funciona. Puede distinguir, ordenar, recordar, transmitir. Puede nombrar una cosa y separarla de otra.",
            "Los Sabios enseñan que Adam HaRishon, el primer hombre, dio nombre a cada criatura según su esencia interior, algo que ni los ángeles pudieron hacer. El nombre, en la tradición hebrea, no es una etiqueta exterior. Expresa una raíz. El Zohar insiste en que el nombre hebreo de cada ser revela su estructura espiritual: las letras que lo forman no solo lo designan, sino que sostienen desde dentro su modo de existir.",
            "Pero cuando ese mismo lenguaje intenta dirigirse al Creador, se encuentra con un límite imposible de atravesar. Describir a Dios con palabras supone aplicarle categorías: cualidad, extensión, relación, tiempo, lugar, acción, comparación. Todas esas categorías pertenecen al mundo finito. Y todo lo que se describe mediante categorías finitas queda, en algún sentido, reducido a lo finito.",
            "La Torá señala esta tensión cuando Iyov pregunta: \"¿Puedes alcanzar la perfección del Shaddai?\". La pregunta no busca una respuesta conceptual. Apunta a una imposibilidad de fondo: lo limitado no puede contener al Ilimitado. El pensamiento puede acercarse, purificarse, reconocer sus propios límites y orientarse hacia lo alto, pero no puede abarcar aquello de lo que depende su propia existencia.",
            "Por eso la Qabalah comienza con una disciplina del lenguaje. Antes de decir algo sobre Dios, enseña a saber qué no se puede decir. Antes de describir, enseña a callar. No por pobreza espiritual, sino por precisión. El silencio no es ausencia de conocimiento; puede ser la forma más alta de respeto ante aquello que ningún conocimiento creado puede dominar.",
            "La tradición usa el término Ein Sof, אין סוף, \"sin fin\", para señalar a Dios como incognoscible absoluto. No es un nombre en el sentido ordinario. No funciona como los nombres de las criaturas. No define una esencia ni delimita un objeto. Al contrario: niega el límite. Dice que no hay borde, medida, término, exterior, frontera ni final.",
            "Traducir Ein Sof como \"lo Infinito\" o \"lo Ilimitado\" ayuda, pero no agota el concepto. Ein Sof no describe una cualidad de Dios entre otras, como si dijéramos que Dios es sabio, poderoso o bondadoso. Marca que Dios está más allá de cualquier descripción posible. Incluso llamar a Dios \"infinito\" es todavía usar una palabra nacida desde nuestra experiencia de lo finito. La palabra apunta, pero no alcanza.",
            "\"No hay nada fuera de Él\", dice la Torá. Esta afirmación no significa que Dios sea una cosa inmensa dentro del mundo, ni que ocupe todo el espacio como un cuerpo muy grande. El espacio mismo pertenece al orden creado. Dios no ocupa lugar, porque el lugar procede de Él. No está dentro del tiempo, porque el tiempo es una criatura. No está sometido a relación, porque toda relación presupone dos términos ya diferenciados, y antes de toda diferenciación solo Él es.",
            "Cuando los mequbalim escriben Ein Sof, intentan guardar silencio con palabras. El término señala aquello que ningún término puede abarcar. Reconoce que toda definición fracasa. Esa es la postura más honesta y rigurosa para quien toma en serio tanto la revelación como la razón. El salmista lo expresa con una pregunta: \"¿Quién podrá expresar las proezas de HaShem? ¿Quién contará todas Sus alabanzas?\". No hay voz que alcance. Y, sin embargo, el alma sigue intentando hablar, porque ese intento la orienta hacia su Fuente.",
            "Por encima, o más adentro, de Ein Sof, la tradición introduce una distinción todavía más radical: Atzmut, עצמות, la Esencia divina en Sí misma. Ein Sof señala la infinitud de Dios en cuanto rebasa todo límite. Atzmut señala lo que Dios es en Sí mismo, sin referencia a la creación, sin relación con emanación alguna, sin siquiera la idea de manifestarse. No es una cualidad, ni un estado, ni un modo de revelación. Es la Esencia pura, anterior a toda luz, a toda voluntad revelada y a toda posibilidad de ser conocida.",
            "Aquí el lenguaje llega a su borde extremo. Decir \"anterior\" no significa anterior en el tiempo, porque todavía no hablamos de tiempo. Decir \"interior\" no significa interior en un espacio, porque todavía no hablamos de espacio. Decir \"Esencia\" tampoco la captura, porque toda palabra humana trae consigo una forma mental. Pero la tradición necesita algún modo de señalar que incluso Ein Sof, como término, no agota el misterio de Dios. Atzmut indica ese núcleo absolutamente incognoscible donde ninguna categoría se sostiene.",
            "El Patach Eliyahu, texto que abre el Tikunei Zohar, lo expresa con precisión: \"Ningún pensamiento puede comprenderte en absoluto\". Después enumera atributos divinos para mostrar que ninguno puede aplicarse a Dios de la manera en que la mente los entiende: Tú eres sabio, pero no con una sabiduría conocida; Tú eres comprensivo, pero no con una comprensión accesible a la mente. La afirmación no niega la sabiduría ni la comprensión divinas. Niega que esas palabras, tomadas desde la experiencia humana, puedan contener lo que son en Dios.",
            "Dios posee, en Su Esencia, todo aquello que los atributos intentan nombrar, pero de una manera tan sublime que esos conceptos se rompen cuando se aplican a Él. Sabiduría, comprensión, bondad, poder, voluntad: todos estos términos tienen sentido dentro de los mundos. En Atzmut, pierden la forma que conocemos. La Esencia divina trasciende incluso la oposición entre ser y no-ser, existencia e inexistencia, presencia y ausencia. Ninguna de esas parejas alcanza.",
            "Y, sin embargo, el alma humana no es ajena a esa Esencia. El Tanya, basándose en la expresión de Iyov que los maestros jasídicos leen como \"una porción de la Divinidad de lo Alto\", enseña que en el núcleo del alma judía hay un punto que no es simplemente creado desde fuera, sino que procede de la interioridad divina. Esta enseñanza debe entenderse con cuidado. El alma no es Dios, ni una parte separada de Dios en sentido material. Pero hay en ella una afinidad radical con su Fuente, una chispa que reconoce de dónde viene incluso cuando la mente no puede comprenderlo.",
            "Ahí se encuentra la posibilidad de la devekut. El alma no comprende la Atzmut; nada creado puede comprenderla. Pero en su profundidad más alta lleva una orientación hacia ella. Por eso el ser humano puede buscar a HaShem, puede responder a Su llamada, puede sentir nostalgia de una fuente que no ha visto con los ojos y que no puede capturar con conceptos. La raíz del retorno está en esa afinidad interior.",
            "Entre la Atzmut incognoscible y los mundos creados, la Qabalah introduce el Ohr Ein Sof, אור אין סוף, la Luz Infinita. No es luz física. Tampoco es una metáfora ornamental. Es el nombre que los mequbalim dan a la primera manifestación del Ein Sof hacia la posibilidad de revelación: un resplandor divino sin límite, anterior a toda estructura creada, anterior a toda Sefirah, anterior a todo mundo.",
            "Rabí Chaim Vital, transmitiendo la enseñanza del Ari, lo formula al comienzo del Ets Haim: antes de que fueran emanados los emanados y creados los creados, había una Luz Superior simple que llenaba toda la existencia. No había espacio vacío. No había principio ni fin. Todo estaba colmado por la luz uniforme del Ohr Ein Sof.",
            "Esta descripción no debe imaginarse como una escena física. No hay todavía espacio donde colocar una luz, ni tiempo en el que esa luz se extienda. La imagen señala una realidad sin diferenciación. Donde el Ohr Ein Sof lo llena todo, no hay lugar para una criatura que se perciba a sí misma como distinta. No hay distancia, no hay borde, no hay relación entre un dador y un receptor. Todo está incluido en la plenitud simple de la Luz.",
            "La creación, entonces, no comienza con una carencia en Dios. No surge porque falte algo en la Divinidad. Surge desde la plenitud. Esta idea es esencial. HaShem no crea para completarse, porque nada Le falta. La creación es un acto de voluntad y de bondad, no una necesidad. La posibilidad de que exista algo distinto de la revelación plena de la Luz exige no un aumento, sino un ocultamiento.",
            "Aquí se abre el misterio que el siguiente capítulo desarrollará: el Tzimtzum.",
            "Si el Ohr Ein Sof lo llena todo de manera absoluta, ¿cómo puede existir una realidad finita? Si la Luz Infinita se revela sin límite, toda criatura queda anulada en su fuente antes de poder aparecer como criatura. Para que haya mundo, debe haber espacio para la finitud. Para que haya alma, debe haber posibilidad de distancia. Para que haya elección, debe haber ocultamiento. Para que haya Tikun, debe haber una realidad que todavía no esté plenamente rectificada.",
            "La Qabalah luriánica llama Tzimtzum a ese acto primordial de contracción u ocultamiento. En este capítulo no conviene desarrollarlo todavía en detalle, porque pertenece al proceso de la creación propiamente dicho. Basta comprender su necesidad: la Luz debe velarse para que la creación pueda aparecer. Ese velo no significa ausencia de HaShem. La Esencia no se retira de ningún lugar, porque no hay lugar vacío de Él. Lo que se oculta es la revelación plena de la Luz, no la presencia de la Esencia.",
            "Esta distinción será decisiva. Si se entiende el Tzimtzum como una retirada absoluta de Dios, se cae en la idea de un mundo separado de su Fuente. Si se niega por completo la experiencia de separación, se pierde el sentido de la responsabilidad humana. La Qabalah sostiene ambas dimensiones: desde la perspectiva de HaShem, nada está fuera de Él; desde la perspectiva de la criatura, hay mundo, distancia, elección, esfuerzo y retorno.",
            "El ocultamiento no es un defecto del sistema. Es la condición que permite la avodah. Una luz demasiado revelada anularía al receptor. Una luz velada permite que el receptor exista, busque, elija, falle, retorne y participe en la rectificación. La creación no es solo el despliegue de la Luz; es también la construcción de recipientes capaces de recibirla sin romperse.",
            "Aquí aparece, todavía en germen, toda la lógica posterior del libro. El alma humana será una vasija. Sus pensamientos, emociones, deseos y actos formarán el estado de esa vasija. Si está desordenada, la luz la presiona, la confunde o la desborda. Si está rectificada, la luz puede habitarla y pasar a través de ella hacia el mundo. Lo que en la cosmología se expresará como relación entre Ohr y Keli, luz y recipiente, se repetirá en la vida interior del practicante.",
            "La distancia entre Ein Sof y el alma no es distancia espacial. Es distancia de ocultamiento. Cuanto más densa es la percepción de separación, más lejos parece estar la criatura de su Fuente. Cuanto más se refina la conciencia, más descubre que la Fuente nunca estuvo ausente. La avodah no trae a HaShem a un lugar donde no estaba; retira los velos que impedían reconocer Su presencia.",
            "El silencio ocupa aquí un lugar propio. La tradición no pronuncia el Nombre esencial de HaShem tal como está escrito. Las cuatro letras י-ה-ו-ה se leen como Adonai en la plegaria y como HaShem fuera de ella. La halakhah establece esa reverencia, y la Qabalah la entiende desde dentro: el Nombre escrito señala una realidad que la boca creada no debe reducir a sonido ordinario.",
            "El Talmud enseña que en este mundo el Nombre se escribe de una manera y se lee de otra; en el Mundo Venidero será leído como se escribe. Esta diferencia entre escritura y lectura expresa nuestra situación espiritual actual. Hay una verdad escrita en la estructura de la realidad que todavía no puede manifestarse plenamente en la pronunciación. La creación aún no es capaz de contener sin velo la revelación completa del Nombre.",
            "\"Para Ti el silencio es alabanza\", dice el salmo. No porque no haya nada que decir, sino porque todo lo que se dice queda por debajo de aquello a lo que apunta. El silencio, cuando nace de la comprensión y no de la ignorancia, es una forma de precisión espiritual. Callar ante Ein Sof no es renunciar al conocimiento; es reconocer que el conocimiento verdadero empieza sabiendo dónde termina la posesión conceptual.",
            "Aun así, la Qabalah no se queda en el silencio absoluto. Si todo terminara en la incognoscibilidad de Atzmut y Ein Sof, no habría Torá revelada, ni mitzvot, ni oración, ni mundos, ni alma, ni retorno. La propia revelación enseña que HaShem, sin dejar de ser incognoscible en Su Esencia, quiso manifestarse. No para ser contenido, sino para ser conocido según la medida de las criaturas. No como Atzmut, sino a través de Sus modos de acción.",
            "Esa manifestación recibirá el nombre de Sefirot: las emanaciones por las que la Luz se ordena, se atenúa y se vuelve recibible. Las Sefirot no son partes de Dios. No fragmentan la unidad divina. Son modos de revelación, recipientes vivos de la Luz, formas en que la voluntad divina se manifiesta en relación con los mundos. Pero su explicación pertenece al desarrollo posterior. Aquí basta dejar establecida la necesidad: entre el Infinito incognoscible y la criatura finita debe haber una arquitectura de mediación.",
            "La luz única se revelará como sabiduría, comprensión, bondad, rigor, belleza, victoria, esplendor, fundamento y reino. No porque en Dios haya división, sino porque la criatura solo puede recibir gradualmente. La multiplicidad pertenece al modo de recepción, no a la Esencia de la Fuente. Como el agua pura que toma el color del recipiente sin cambiar en sí misma, la Luz divina aparece diversificada según los Kelim que la manifiestan.",
            "Esta arquitectura no es solo cosmológica. También será el mapa del alma. El ser humano, creado betzelem Elohim, a imagen de Dios, refleja en su interior la estructura por la que la Luz se manifiesta en los mundos. Por eso estudiar Ein Sof no es una especulación alejada de la vida. Enseña al alma su proporción. Le recuerda que su fuente está más allá de todo lo que puede dominar, que su existencia depende de una Luz que no posee, y que su trabajo no consiste en apropiarse de lo divino, sino en volverse transparente a ello.",
            "La primera enseñanza, entonces, es humildad. Ante Atzmut no hay comprensión. Ante Ein Sof no hay límite. Ante Ohr Ein Sof no hay independencia absoluta. Ante el Tzimtzum no habrá abandono, sino ocultamiento. Ante el Nombre no hay posesión, sino reverencia. El alma que entra en la Qabalah sin esta humildad convierte la sabiduría en herramienta del ego. El alma que entra con ella empieza a prepararse como recipiente."
          ]
        }
      ]
    }
  },
  {
    id: "haberiah",
    parentId: "ein-sof",
    level: 2,
    mainNumber: 2.1,
    title: { en: "HaBeriah", es: "HaBeriah" },
    hebrew: "הבריאה",
    subtitle: { en: "Creation", es: "La creación" },
    sections: {
      en: [
        {
          paragraphs: [
            "Before time, space, or any distinguishable form, reality consisted in a principle without limit: Ein Sof, the Without End. It is not a place or an entity among others. It is absolute reality in a state of total indivisibility: without inside or outside, above or below, before or after, without distinctions the intellect can grasp.",
            "The mequbalim call Atzmut, Essence, what God is in Himself, apart from any relation to creation. Atzmut surpasses every knowable category. It cannot be described as mind, will, light, cause, or presence in the ordinary sense we give those words. When the tradition says that Ein Sof is unknowable, it is not using a poetic formula: it precisely describes the limit of every created consciousness. Atzmut surpasses knowledge and non-knowledge, being and non-being as we understand them. Every language about this principle is a reduction, a concession to the limit of the one who speaks.",
            "Within that limitless state, the Ohr Ein Sof, the Light of Ein Sof, filled everything absolutely and uniformly. This light is not physical light, nor an ornamental metaphor. It is the name the mequbalim give to the force of divine emanation and presence in its state of full expansion. Where the Ohr Ein Sof occupies everything, there can be no differentiation. There is no space for an autonomous reality, no place for otherness, no creature that can say \"I\" before its Source. All is one, and that one has no edges.",
            "Creation therefore requires a paradox: for something to exist without being nullified by the fullness of the Light, that Light must be concealed. Not because HaShem lacks anything, nor because creation comes to complete a deficiency in Him. Creation is not born from divine necessity. It is born from a will to give existence, to open a space where there can be creatures, choice, relationship, return, and Tikun."
          ]
        },
        {
          heading: { en: "I. Tzimtzum and the Space of Creation", es: "I. El Tzimtzum y el espacio de la creación" },
          paragraphs: [
            "The act that inaugurates the possibility of creation is called Tzimtzum, contraction. The Ari, Rabbi Yitzhak Luria, describes it in Ets Haim as the moment when Ein Sof concentrated or withdrew the revelation of His light, leaving a space called Halal or Chalal Panui, the primordial void, within which a reality distinct from revealed Divinity could unfold.",
            "Pause here. Tzimtzum, in its apparent simplicity, is one of the most difficult and most debated concepts in all Qabalah.",
            "The paradox formulated by Tzimtzum is this: if Ein Sof is infinite and His light fills everything, how can anything exist that is not Ein Sof? The Lurianic answer is that Ein Sof contains within Himself the capacity to self-limit the revelation of His light. The aspect of rigor that makes Tzimtzum possible belongs to Ein Sof Himself before any sefiratic manifestation. It is not yet the Sefirah of Gevurah on the Tree of Life, which is a later emanation, but the principle of delimitation in its most original form, prior to all differentiation. From that primordial rigor is born the possibility of bringing forth the finite from the limitless, the bounded from that which has no edges.",
            "Tzimtzum produces the Halal: a space that, from the perspective of the created, appears empty of the direct presence of the Ohr Ein Sof. That emptiness is not absolute. A residual impression remains in it, a trace of the light that contracted: the Reshimo. The image used by the mequbalim is that of perfume remaining in a flask after it has been removed. The Reshimo acts as the seed of all later differentiation. It allows the process to begin not from total nothingness, but from an oriented potentiality.",
            "From that Reshimo, Ein Sof extends into the Halal an ordered and precise filament of light: the Qav. This luminous line, narrow by design and not by limitation, is the channel through which divine light continues to flow into the space of creation without nullifying it. If the light flowed without modulation, infinity would again fill everything and the purpose of Tzimtzum would be undone. The Qav is the bridge between the infinity of Ein Sof and the finitude of the Halal, the mechanism that makes possible the relation between Creator and created without fusion or annihilation.",
            "From the seventeenth century onward, two principal readings of Tzimtzum run through the tradition.",
            "The first is the literal or cosmological reading: Ein Sof withdraws His light from the Halal. Divine light is absent in a certain sense. What exists in that space differs from Divinity. The world has otherness, matter has weight, evil has reality, the creature keeps distance from its Creator. This reading makes human freedom intelligible. Tikun becomes an authentic task, because the world is not an illusion without consequences.",
            "The second reading, developed powerfully by the Baal Shem Tov and formulated rigorously by Rabbi Shneur Zalman of Liadi in the Tanya, understands Tzimtzum as concealment from the perspective of the created, not as a literal withdrawal of Divinity. From Ein Sof no absence occurred. Divine light permeates everything before and after the creative act. Tzimtzum produces the perception of absence in the creature. That necessary illusion gives rise to a world apparently independent, to free will, and to the possibility of seeking the Creator. The formula ein od milvado, \"there is nothing besides Him,\" ceases to be an abstract theological principle and describes reality as it is now, although ordinary consciousness does not perceive it that way.",
            "The two readings have deep roots. They produce different doctrinal consequences. The first orients toward responsibility and action in the world. The second orients toward bitul, the nullification of the ego before divine omnipresence. An honest tradition of study knows this distinction. It does not erase it.",
            "Creation requires holding both truths. HaShem is present in everything and, even so, the human being lives in a world where he must choose. There is no place empty of Him and, even so, the creature experiences distance. The light sustains existence at every instant and, even so, concealment allows effort, error, return, and merit."
          ]
        },
        {
          heading: { en: "II. Ohr and Keli: The Light and Its Vessel", es: "II. Ohr y Keli: la luz y su recipiente" },
          paragraphs: [
            "The process after Tzimtzum introduces two categories that will articulate the whole qabalistic cosmology: Ohr and Keli.",
            "Ohr is light, the force that gives. It represents the disposition to emanate, to bestow, to communicate existence. Keli is the vessel, the force that receives. The Keli is not passive or secondary. It makes possible the expression of the Ohr, because without a vessel to receive it, the act of giving would have no destination within creation.",
            "The mequbalim point out that Ohr and Keli share the same root. The image of water and ice illustrates this, although it remains only an image: ice is water in another state, not another thing. The Ohr is divine substance in its state of active emanation; the Keli is that same substance in its state of receptivity, delimitation, and form. What distinguishes them is function and degree of contraction, not an absolute difference of nature.",
            "The ten Orot are the differentiated forms in which light manifests in creation. Within Ein Sof, before Tzimtzum, these lights exist in undifferentiated unity. When they enter the space of the Halal through the Qav, they become distinct, individualized, and begin to seek vessels. When each Ohr unites with its corresponding Keli, that unity receives the name Sefirah. The Sefirot are real configurations of light and vessel, modes in which the divine will organizes and unfolds.",
            "Within the Halal, once Tzimtzum has occurred and the Reshimo has been deposited, the tradition of the Zohar describes the action of the Botzina deKardinuta, the Dark Lamp, as the spark that engraves the first differentiated forms into that space. It does not produce Tzimtzum; it acts within the already created Halal, impressing in it the initial contours of what will later become the vessels.",
            "Here appears a law that will govern everything that follows: light needs a vessel. Light without a vessel does not manifest in stable form. A vessel without light remains empty. But a light too intense for an immature vessel breaks it. This cosmological law will also be a law of the soul. Every spiritual work will have to build a Keli capable of receiving what it asks for."
          ]
        },
        {
          heading: { en: "III. Adam Kadmon and the First Emanations", es: "III. Adam Kadmon y las primeras emanaciones" },
          paragraphs: [
            "The first configuration that arises from the Tzimtzum and the Qav is Adam Kadmon.",
            "After the Tzimtzum, the Halal did not remain blank. The Qav entered it and took shape as the first organized structure of divine emanation. Lurianic Qabalah calls this structure Adam Kadmon: the first configuration of the Ratzon HaElyon, the Supreme Will of Ein Sof, prior to every mature differentiation of worlds, Sefirot, and Partzufim. Its position in the cosmic hierarchy is singular: it precedes the four great Olamot, Atzilut, Beriah, Yetzirah, and Asiyah, and contains them in potential, just as a root contains the tree that has not yet sprouted.",
            "The name holds a tension. Adam points to creation, to what arises and takes form. Kadmon points toward the primordial, toward what precedes every manifestation. A reality bearing these two names is not a contradiction: it is the living border between Ein Sof and the worlds, the point where transcendence begins to become structure.",
            "The tradition describes Adam Kadmon in human form, but that humanity is structural. Its limbs and organs are channels through which divine light flows and is distributed toward the lower worlds. The organs of its face - ears, nose, mouth, eyes, and forehead - are the openings through which the Orot emerge, each with its own level of intensity and with its correspondence in the system of divine Names.",
            "Lurianic Qabalah describes this process in the Ets Haim of Rabbi Chaim Vital. From the ears of Adam Kadmon emanates the light of Sag, the Name with a value of 63, associated with Binah. From its nose emerges the light of Mah, the Name with a value of 45, linked to Zeir Anpin. From its mouth emanates the light of Ban, the Name with a value of 52, corresponding to Malkhut. These three lights descend into the space of the Halal and give rise to the first worlds of vessels and lights.",
            "The Orot of the ears and the nose are too elevated to give rise by themselves to stable lower structures. They act as preparation so that the light of the mouth can produce the first Kelim. Each of these lights reaches different points in the body of Adam Kadmon and traces an inner map of emanation that Ets Haim develops in detail.",
            "When the Shevirat HaKelim takes place and rectification becomes necessary, a light will emerge from the forehead of Adam Kadmon: the Ohr HaMetzach. This light will reorganize the broken structures into the system of the Partzufim. But before reaching that point, creation passes through three prior phases: Akudim, Nekudim, and Berudim.",
            "The expansion of Adam Kadmon in the Halal is not unlimited. Two forces contain it. The first is the Reshimo, the imprint left by the withdrawn light after the Tzimtzum: that echo of the prior state acts as an inner limit, as the memory of a space the light must not fill again in the same way. The second is the nature of the light of Adam Kadmon, which carries within itself the potential to generate vessels, and that potential implies restriction. The light that is to be contained must admit that there is something that contains it.",
            "From the lights that emanate from Adam Kadmon arise three successive worlds: Olam HaAkudim, Olam HaNekudim, and Olam HaBerudim. Each represents a different arrangement between the Orot and the Kelim, and each culminates in a way that makes the next one necessary.",
            "Olam HaAkudim, the world of bindings, receives its name because in it the ten Orot corresponding to the ten Sefirot are bound in a single Keli. Unity is total: the ten divine forces coexist in the same vessel without separation, without edges between them. This phase has a dynamic that Ets Haim describes with the expression mati velo mati, \"reaches and does not reach\": the lights flow toward the vessel and withdraw in a continuous cycle, without settling definitively. The will to manifest collides with the impossibility of doing so with full individuation. The level governing this world is that of Koach Mah, the force of nullification, the state in which the Sefirot are present but not distinguished from one another.",
            "Olam HaNekudim, the world of points, introduces individuation. The ten Orot separate and each receives its own Keli, a distinct vessel for each Sefirah. The Kelim of Nekudim are points in formation, without the structural maturity needed to sustain the intensity of the lights they must receive. Disproportion defines this world: the Orot are too powerful for Kelim that lack strength, relation, and organization.",
            "Under that pressure, the Kelim break. The lights return to their source, and the shattered vessels fall toward the lower levels of reality. Ets Haim calls this event Shevirat HaKelim, the breaking of the vessels, one of the cardinal moments of Lurianic cosmology.",
            "Olam HaNekudim also receives the name Olam HaTohu, the world of chaos, because its inner structure lacks the balance needed to endure. The Orot of Tohu have unprecedented intensity, but the Kelim of that world were not created in relation to one another. Each existed for itself, without bond with the others, without capacity to receive or yield light. That lack of communication caused the breaking. A system in which each part exists only for itself cannot endure under the pressure of a light that demands distribution.",
            "Olam HaBerudim, the world of connections, responds to the disaster of Nekudim. Its name shows what occurs: the Sefirot link, establish relations of transfer and reception, and redistribute the light without overloading any Keli. The light that exceeds the capacity of one Sefirah passes to another; the one that receives more yields to the one that has less. This interconnection begins the Tikun, the cosmic rectification.",
            "Olam HaBerudim does not complete the rectification, but it opens its possibility. It establishes the logic that will govern the later worlds: light can be sustained only when the vessels do not exist as isolated points, but as parts of a relational structure. Berudim opens the way to the Partzufim, the divine configurations that will organize Atzilut and make a mature form of Tikun possible.",
            "This arc traces how divine light learns to manifest in a space that is not Ein Sof: from the compact unity of Akudim to the first relational articulation of Berudim, passing through the crisis of Nekudim. A manifestation that requires limits, structures, breakings, and corrections. Adam Kadmon presides over this process from its unique position: too close to the Infinite to be classified as an ordinary world, yet distinct from Ein Sof because it took form, has openings, emits lights, and generates consequences.",
            "The limitless accepts figure for the first time."
          ]
        },
        {
          heading: { en: "IV. Shevirat HaKelim: The Breaking of the Vessels", es: "IV. Shevirat HaKelim: la ruptura de las vasijas" },
          paragraphs: [
            "Shevirat HaKelim concentrates the tension between the infinite and the finite, between divine fullness and the fragility of the created. To understand it, it must be situated within the sequence that precedes it. After Tzimtzum, the light enters the Halal again through the Qav. From Adam Kadmon lights emanate. First comes Akudim, where all the lights dwell in a single vessel. Then comes Nekudim, where the lights and vessels are differentiated. And it is in Nekudim, also called Tohu, that the breaking occurs.",
            "The state of Tohu operates under a disconnected structure. The Kelim exist achor be'achor, back to back, without connection between them. Each vessel receives its isolated light without distributing it or balancing itself with the others. When the Orot descend with their characteristic intensity, the Kelim cannot sustain them. The light that bursts into each vessel exceeds the capacity of a structure without network, relation, or mutual support.",
            "The Kelim break. The vessels of the seven lower Sefirot, from Chesed to Malkhut, fragment, and the nitzotzot, the sparks of divine light they contained, fall scattered into the lower levels of existence.",
            "This is Shevirat HaKelim: a necessary moment within the architecture of creation. The Ari teaches that it was willed from above. Without this breaking, reality, with its structure of moral choice, spiritual effort, descent, and ascent, could not have existed. The breaking opened the space for Tikun.",
            "Tohu and Bohu, the terms with which the Torah describes the initial state of creation in Bereshit, receive in Lurianic Qabalah a precise technical reading. Tohu designates the state of Olam HaNekudim: isolated vessels, without the structural capacity to receive and sustain the fullness of the light. Bohu is the next stage within the same process: dispersed primordial matter, the residue of what remained after the breaking, charged with potential but without rectified form. Both terms describe phases of the same cosmological development, two moments on the path that leads, through a partial destruction, toward a more solid reconstruction.",
            "A world structured upon a breaking might seem failed. Qabalah maintains the opposite: the apparent imperfection is part of the design. If everything were rectified from the beginning, if there were no nitzotzot to elevate and no Qlifot to confront, mission, depth, and growth would be absent. The presence of evil does not refute the goodness of the Creator. It makes moral choice, teshuvah, and spiritual effort possible.",
            "Shevirat HaKelim is not the dark chapter of Lurianic cosmology. It is its condition of possibility. Without breaking there is no Tikun. Without fall there is no ascent. Without the dispersion of the sparks in the world, the human being would not have before him the task that gives him meaning."
          ]
        },
        {
          heading: { en: "V. Nitzotzot and Qlifot", es: "V. Nitzotzot y Qlifot" },
          paragraphs: [
            "From the breaking arose two parallel realities that define the structure of the world: the nitzotzot and the Qlifot.",
            "The nitzotzot are the divine sparks that descended and remained scattered in the densest strata of existence. The Qlifot are the shells, fragments of the broken Kelim where those sparks remained imprisoned. The light did not disappear. It remained captive. Hidden. Mixed with structures that veil and distort it.",
            "The Qlifot are, in the language of the Ari, the side of impurity. They are the realm where divine light appears separated from its source, enclosed in a form that does not reveal it. Their origin lies in the fracture: when the Kelim broke, their fragments descended and formed a structure parallel to holiness, a dark reflection. Within that structure, the nitzotzot remain present but inaccessible to one who does not work to free them.",
            "Qabalah does not speak of the Qlifot as autonomous entities endowed with power of their own. Their force comes from what is separated, from the spark that has not yet been returned to its place. The encounter with a Qlifah, with any manifestation that obstructs the light, carries a possibility of elevation. Not because evil is good in itself, but because within what is opaque there is something that can be rescued and restored.",
            "The Ets Haim of the Ari fixes at two hundred eighty-eight the number of nitzotzot that descended in the breaking. The number comes from the Lurianic system itself: the thirty-two paths of wisdom - the ten Sefirot and the twenty-two letters of Sefer Yetzirah - multiplied by the nine Sefirot that participated in the breaking. The result expresses how many sparks of sacred light were trapped when the vessels of Olam HaNekudim shattered. It is not numerological speculation. It is the internal rigor of the system.",
            "These nitzotzot dwell in actions, objects, words, foods, bonds, encounters, trials, and decisions. Everything in the material world holds a spark waiting to be elevated. Human life does not unfold on a neutral stage. Every contact with reality can become an occasion for rescue or for deeper concealment.",
            "Shevirat HaKelim opened the way for evil on the cosmic plane: it created the structure that allows the side of impurity to exist as a real domain. But Lurianic Qabalah distinguishes this cosmic origin of evil from its deeper entrance into human experience. The sin of Adam HaRishon marks a second fracture. It mixes the sacred with the Qlifot. It sinks the nitzotzot into deeper levels of concealment. Shevirat HaKelim prepared the ground. Adam's sin carried that condition into the human world.",
            "Evil does not live only outside the human being, nor does it dwell only in the structure of the universe. The Ari rejects that simple division. The human being participates in the history of evil. That participation gives him his repairing mission."
          ]
        },
        {
          heading: { en: "VI. Tikun: Rectification", es: "VI. Tikun: la rectificación" },
          paragraphs: [
            "The task of the human being in this world is understood, from the Lurianic perspective, as the elevation of the nitzotzot that correspond to him. Each soul descends with a specific portion of sparks assigned to it. No one can perform the Tikun of another soul. The nitzotzot a person must rescue are distributed through his experiences, bonds, trials, talents, wounds, and decisions.",
            "Through the fulfillment of Torah and mitzvot with kavanah, the human being acts upon material reality in a way that frees the trapped light and returns it to its source. This process is called Tikun, rectification, and forms the axis of spiritual life in the Qabalah of the Ari.",
            "Lurianic Tikun differs from the contemporary use of Tikun Olam. In classical Qabalah, Tikun designates the cosmological process of restoring the nitzotzot through avodat HaShem: study, tefilah, fulfillment of the commandments, and purification of the middot. The social dimension of that effort exists as a real but derived consequence. To confuse it with an agenda of social reform, however well intentioned, empties the concept of its technical and cosmological content.",
            "The analogy between the cosmic process and the inner work of the human being appears throughout Qabalah. The human soul functions as a microcosm of the tree of creation. The same forces that act in the Olamot act within the human being through his levels: Nefesh, Ruach, Neshamah, Chayah, and Yechidah. When those faculties become misaligned, when desire, thought, emotion, and action do not converge toward HaShem, the person experiences his own inner Tohu.",
            "The work of avodat HaShem, the refinement of the middot, the study of Torah, tefilah, tzedakah, care of speech, and rectification of desire function as instruments of personal Tikun. And that personal Tikun contributes, at its own scale, to the general Tikun of the worlds.",
            "The tradition calls the human being shutaf, a partner of HaShem in the work of creation. This expression does not imply parity. The distance between Creator and creature is absolute. It implies participation within an ontological asymmetry. HaShem created an incomplete world so that the human being, from within creation, through Torah and mitzvot, could participate in its completion.",
            "Correction begins in Atzilut, the world of emanation. Atzilut is the first world of Tikun. It reorganizes the Sefirot under a new form: the Partzufim, the divine faces.",
            "The Partzufim are configurations of Sefirot that act in relation to one another. This capacity for relation allows them to contain what the Kelim of Tohu could not. When the Sefirot operate as a Partzuf, the light that reaches one is sustained by the others. The entire system absorbs what no single part could receive alone.",
            "In Atzilut, the forces of expansion and contraction, Mah and Ban in the language of the Ari, find in the Partzufim a way to act in coordination. Mah designates the expansive aspect, the initiative to give, the descending Ohr Yashar. Ban designates the receptive and limiting aspect, the capacity to contain and respond, the ascending Ohr Hozer. Before Tikun, the disproportion between them caused breaking. In Atzilut, that same relation becomes the basis of a stable order.",
            "The Partzufim of Atzilut, from Atik Yomin to Nukva, constitute the structure through which this first correction unfolds. Atik Yomin and Arikh Anpin belong to the higher dimension of Keter. Abba and Ima correspond to Chokhmah and Binah. Zeir Anpin integrates the six emotional Sefirot: Chesed, Gevurah, Tiferet, Netzach, Hod, and Yesod. Nukva corresponds to Malkhut. What formerly existed as an isolated point now functions as a face, as a relational configuration, as a spiritual organism capable of receiving and transmitting.",
            "From Atzilut, the process continues its descent toward Beriah, Yetzirah, and Asiyah, the three lower Olamot. In each one, the light descending from the higher world arrives mediated, articulated through the Partzufim. The Kelim of each world receive it according to the measure that corresponds to their nature.",
            "In this process Daat appears, a figure that deserves special attention. In Ets Haim, Daat occupies a peculiar place. The tree shows ten Sefirot, but Daat is not an autonomous eleventh Sefirah. Daat is the inner synthesis between Chokhmah and Binah, wisdom and understanding. When these two Sefirot act together, when the intuitive spark of Chokhmah develops into the structured comprehension of Binah, that inner union produces Daat.",
            "Daat is the knowledge born from integration. When Keter is hidden in the Tree, Daat appears in its place and acts as the bond between the intellectual and emotional levels of the system. It allows the flow of the Ohr to descend coherently from one Sefirah to another. It does not regulate mechanically: it connects consciously and makes the Tree an integrated organism.",
            "Without Daat, wisdom remains above and conduct below. With Daat, what is understood descends into the heart and from there into action. The same occurs in the human soul. A person can know something and not live it. That knowledge is not yet Daat. Daat appears when the known truth becomes part of one's being and modifies the way one acts."
          ]
        },
        {
          heading: { en: "VII. The Four Olamot and the Human Soul", es: "VII. Los cuatro Olamot y el alma humana" },
          paragraphs: [
            "The four Olamot that form the order of rectified creation unfold in a descending sequence of condensation of the divine light: Atzilut, Beriah, Yetzirah, and Asiyah. The logic of their chaining follows a fractal principle: the ten Sefirot repeat in each world, and the Malkhut of one world acts as the Keter of the next. The four Olamot are not isolated compartments, but levels of one continuous reality, differentiated by the degree of contraction and concealment of the Ohr.",
            "Atzilut, the world of emanation, is the first and the highest. In it there is no perception of separation between creature and Creator. The entities that inhabit it - the Sefirot configured as Partzufim - are direct emanations of Ein Sof. In Atzilut, divine unity remains unveiled. The consciousness proper to this world not only nullifies the particular self; it nullifies the very sensation of a separate essence.",
            "In the Keter of Atzilut operate Atika Kadisha and Atik Yomin, the Ancient Holiness and the Ancient of Days, which represent the most inward and transcendent aspect of the Divine Will in its manifestation. Arikh Anpin, the Long Face, unfolds the divine patience and mercy that sustain creation even when the actions of creatures do not merit it. The three heads of Arikh Anpin - Resha DeLo Ityada, the Unknowable Head; Resha DeAyin, the Head of Nothingness; and Resha DeArikh, the Head of the Infinite - describe inner strata of the mystery of Keter. Gulgalta, the Skull, crowns the structure of Arikh Anpin. Mocha Stimaah, the Hidden Brain, preserves the latent wisdom within it. Dikna, the Beard, channels mercy toward the lower worlds.",
            "In Atzilut the Partzufim of Chokhmah and Binah also unfold: Abba, the Father, in its aspects of Abba Ilaah and Israel Saba; Ima, the Mother, in its aspects of Ima Ilaah and Tevunah. Zeir Anpin integrates the six emotional Sefirot and carries the dynamic of time and the divine emotional flow toward the worlds. Nukva, the Bride, corresponds to Malkhut of Atzilut. It is the threshold between the world of pure emanation and the created worlds: the Divine Speech, the source of prophecy, the origin of every independent creation.",
            "Beriah, the world of creation, marks the point where the spiritual worlds begin to perceive themselves as realities distinct from Ein Sof. From the higher perspective, that distinction is illusory; from the perspective of the created world, it is real as experience. In Beriah, Binah operates in its projection toward the created. Its traditional symbol is the Divine Throne, the image contemplated by the prophets Isaiah and Ezekiel in their visions. The Throne indicates the presence of Ein Sof governing creation from a position that is no longer direct identity, but sovereignty over what is distinct. The beings of Beriah, souls at their level of Neshamah and the higher angels, are capable of nullifying the self, but not of nullifying essence as in Atzilut.",
            "Yetzirah, the world of formation, projects the divine emotions into creation. Here dwells most of the angelic world. Here reside the archetypal forces that shape realities before they acquire physical form. Zeir Anpin projects its light into Yetzirah. The angels that inhabit it serve without the distraction of a will of their own. Their devotion is complete because their consciousness does not encompass the perspective of Atzilut: they serve from emotional fervor, not from unified vision.",
            "Asiyah, the world of action, is the last and densest. In it converge spiritual Asiyah and the material universe we inhabit. Malkhut, Kingdom, governs Asiyah. It is the Shekhinah, the immanent divine presence, the point at which the chain of worlds touches physical reality. Matter is not alien to Divinity: it is its most contracted expression, the level where concealment reaches its maximum and where, for that very reason, Tikun has its most urgent field of action.",
            "Each Olam corresponds to a level of the soul. Nefesh is linked to Asiyah: the first level the human being receives at birth, the one that sustains biological life and vital functions. Ruach corresponds to Yetzirah: the emotional soul, the world of the middot, inner movement, and speech. Neshamah corresponds to Beriah: the higher intellectual and spiritual dimension accessible under ordinary conditions. Chayah corresponds to Atzilut: a consciousness of divine life that approaches nullification before the higher unity. Yechidah is linked to the highest root, to Adam Kadmon and beyond: the point of the soul's unity with its Source.",
            "This scheme has practical consequences. Tikun is not accomplished through intellectual comprehension alone. It is accomplished through the soul, at the levels the soul can reach, by means of acts that make elevation possible. Each mitzvah fulfilled with correct intention rescues nitzotzot and returns them to the system. Each refinement of middot purifies the Keli of the soul and makes it more capable of receiving the Ohr. Each act of avodat HaShem weaves a thread in the structure of collective Tikun.",
            "The pattern of the Sefirot repeats in each of the four Olamot. The Malkhut of each world functions as the Keter of the next. This continuity allows the light of Atzilut to reach, contracted and transformed, down to the matter of Asiyah. It also allows actions in Asiyah to resonate upward.",
            "The chain ends in Tikun: rectifying what was broken, restoring the fallen sparks, manifesting Divinity in the created. Tzimtzum, the breaking of the Kelim, and the descent through the four Olamot lead there. The human being stands at the intersection of all the worlds. He bears in his structure the reflection of each one. For that reason he receives both the responsibility and the capacity to participate in that rectification.",
            "The system of Tikun is not a cosmological doctrine contemplated from outside. It is the map of a responsibility. The Ari taught that each soul descends to this world with its specific portion of Tikun, a set of corrections that belongs to it and that no other soul can perform in its place. The nitzotzot of that soul are distributed through the concrete experiences that form its life.",
            "For this reason Ets Haim, the Olamot, and the Partzufim are not objects of isolated erudition. They are the background of inner work. Knowing them orients that work, but the work is something else: transformation of the soul through observance, study, prayer, ethical conduct, refinement of character, and willingness to correct what has not yet been corrected.",
            "The Tikun of the individual and the Tikun of the cosmos are the same process seen at two scales. The soul that refines its Nefesh, disciplines its Ruach, orients its Neshamah toward truth, and opens its higher levels to the light participates in the restoration of the worlds. When all the nitzotzot have been rescued, when the light trapped in the fragments has been returned to its root, when creation can receive without breaking what it could not sustain at the beginning, Tikun will have reached its culmination.",
            "Creation is the task. The world is not finished because the human soul has a part in its completion. The breaking was not the failure of the plan, but the way the plan made freedom, merit, and return possible. The light descended, the vessels broke, the sparks fell, the shells concealed them, the worlds were organized, and the human being was placed in Asiyah, precisely where the light seems farthest away, in order to elevate from there what can be elevated only from there."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Antes del tiempo, del espacio o de cualquier forma distinguible, la realidad consistía en un principio sin límite: Ein Sof, lo Sin Fin. No es un lugar ni una entidad entre otras. Es la realidad absoluta en estado de indivisibilidad total: sin interior ni exterior, sin arriba ni abajo, sin antes ni después, sin distinciones que el intelecto pueda captar.",
            "Los mequbalim llaman Atzmut, Esencia, a lo que Dios es en Sí mismo, al margen de cualquier relación con la creación. Atzmut supera toda categoría conocible. No puede describirse como mente, voluntad, luz, causa o presencia en el sentido ordinario que damos a esas palabras. Cuando la tradición dice que Ein Sof es incognoscible, no está usando una fórmula poética: describe con precisión el límite de toda conciencia creada. Atzmut supera el conocimiento y el no-conocimiento, el ser y el no-ser tal como los entendemos. Todo lenguaje sobre este principio es una reducción, una concesión al límite de quien habla.",
            "Dentro de ese estado sin límites, el Ohr Ein Sof, la Luz de Ein Sof, lo llenaba todo de forma absoluta y uniforme. Esta luz no es luz física ni metáfora ornamental. Es el nombre que los mequbalim dan a la fuerza de emanación y presencia divina en su estado de plena expansión. Donde el Ohr Ein Sof lo ocupa todo, no puede haber diferenciación. No hay espacio para una realidad autónoma, no hay lugar para la alteridad, no hay criatura que pueda decir \"yo\" frente a su Fuente. Todo es uno, y ese uno no tiene bordes.",
            "La creación exige, por tanto, una paradoja: para que algo pueda existir sin ser anulado por la plenitud de la Luz, esa Luz debe ocultarse. No porque a HaShem Le falte algo, ni porque la creación venga a completar una carencia en Él. La creación no nace de una necesidad divina. Nace de una voluntad de dar existencia, de abrir un espacio donde pueda haber criaturas, elección, relación, retorno y Tikun."
          ]
        },
        {
          heading: { en: "I. Tzimtzum and the Space of Creation", es: "I. El Tzimtzum y el espacio de la creación" },
          paragraphs: [
            "El acto que inaugura la posibilidad de la creación se llama Tzimtzum, contracción. El Ari, Rabí Yitzhak Luria, lo describe en el Ets Haim como el momento en que Ein Sof concentró o retiró la revelación de Su luz, dejando un espacio llamado Halal o Chalal Panui, el vacío primordial, dentro del cual pudiera desplegarse una realidad distinta de la Divinidad revelada.",
            "Detente aquí. El Tzimtzum, en su aparente sencillez, es uno de los conceptos más difíciles y más discutidos de toda la Qabalah.",
            "La paradoja que el Tzimtzum formula es esta: si Ein Sof es infinito y Su luz lo llena todo, ¿cómo puede existir algo que no sea Ein Sof? La respuesta luriánica es que Ein Sof contiene en Sí mismo la capacidad de autolimitar la revelación de Su luz. El aspecto de rigor que hace posible el Tzimtzum pertenece al propio Ein Sof antes de cualquier manifestación sefirótica. No se trata todavía de la Sefirah de Gevurah del Árbol de la Vida, que es una emanación posterior, sino del principio de delimitación en su forma más originaria, anterior a toda diferenciación. De ese rigor primordial nace la posibilidad de hacer surgir lo finito desde lo ilimitado, lo acotado desde lo que no tiene bordes.",
            "El Tzimtzum produce el Halal: un espacio que, desde la perspectiva de lo creado, aparece como vacío de la presencia directa del Ohr Ein Sof. Ese vacío no es absoluto. En él queda una impresión residual, un rastro de la luz que se contrajo: el Reshimo. La imagen que usan los mequbalim es la del perfume que permanece en el frasco después de haber sido retirado. El Reshimo actúa como la semilla de toda la diferenciación posterior. Permite que el proceso no empiece desde una nada total, sino desde una potencialidad orientada.",
            "Desde ese Reshimo, Ein Sof extiende hacia el Halal un filamento de luz ordenado y preciso: el Qav. Este hilo luminoso, estrecho por diseño y no por limitación, es el canal por el que la luz divina sigue fluyendo hacia el espacio de la creación sin anularlo. Si la luz fluyera sin modulación, la infinitud volvería a llenarlo todo y el propósito del Tzimtzum se desharía. El Qav es el puente entre la infinitud de Ein Sof y la finitud del Halal, el mecanismo que hace posible la relación entre el Creador y lo creado sin fusión ni aniquilación.",
            "Desde el siglo XVII, dos lecturas principales del Tzimtzum recorren la tradición.",
            "La primera es la lectura literal o cosmológica: Ein Sof retira Su luz del Halal. La luz divina se ausenta en cierto sentido. Lo que existe en ese espacio difiere de la Divinidad. El mundo tiene alteridad, la materia tiene peso, el mal tiene realidad, la criatura guarda distancia de su Creador. Esta lectura hace comprensible la libertad humana. El Tikun se vuelve una tarea auténtica, porque el mundo no es una ilusión sin consecuencias.",
            "La segunda lectura, desarrollada con fuerza por el Baal Shem Tov y formulada con rigor por Rabí Shneur Zalman de Liadi en el Tanya, entiende el Tzimtzum como ocultamiento desde la perspectiva de lo creado, no como retirada literal de la Divinidad. Desde Ein Sof no ocurrió ausencia alguna. La luz divina impregna todo antes y después del acto creador. El Tzimtzum produce percepción de ausencia en la criatura. Esa ilusión necesaria da lugar a un mundo independiente en apariencia, al libre albedrío y a la posibilidad de buscar al Creador. La fórmula ein od milvado, \"no hay nada fuera de Él\", deja de ser un principio teológico abstracto y describe la realidad tal como es ahora, aunque la conciencia ordinaria no la perciba así.",
            "Las dos lecturas tienen raíces profundas. Producen consecuencias doctrinales distintas. La primera orienta hacia la responsabilidad y la acción en el mundo. La segunda, hacia el bitul, la anulación del ego ante la omnipresencia divina. Una tradición de estudio honesta conoce esta distinción. No la borra.",
            "La creación exige sostener ambas verdades. HaShem está presente en todo y, aun así, el ser humano vive en un mundo donde debe elegir. No hay lugar vacío de Él y, aun así, la criatura experimenta distancia. La luz sostiene la existencia en cada instante y, aun así, el ocultamiento permite que haya esfuerzo, error, retorno y mérito."
          ]
        },
        {
          heading: { en: "II. Ohr and Keli: The Light and Its Vessel", es: "II. Ohr y Keli: la luz y su recipiente" },
          paragraphs: [
            "El proceso posterior al Tzimtzum introduce dos categorías que articularán toda la cosmología qabalística: Ohr y Keli.",
            "Ohr es la luz, la fuerza que da. Representa la disposición de emanar, de otorgar, de comunicar existencia. Keli es el recipiente, la fuerza que recibe. El Keli no es pasivo ni secundario. Hace posible que el Ohr se exprese, porque sin un recipiente que lo reciba, el acto de dar no tendría destino dentro de la creación.",
            "Los mequbalim señalan que Ohr y Keli comparten la misma raíz. La imagen del agua y el hielo lo ilustra, aunque sigue siendo solo una imagen: el hielo es agua en otro estado, no otra cosa. El Ohr es la sustancia divina en su estado de emanación activa; el Keli, esa misma sustancia en su estado de receptividad, delimitación y forma. Los distingue la función y el grado de contracción, no una diferencia absoluta de naturaleza.",
            "Las diez Orot son las formas diferenciadas en que la luz se manifiesta en la creación. Dentro de Ein Sof, antes del Tzimtzum, estas luces existen en unidad indiferenciada. Al entrar en el espacio del Halal a través del Qav, se distinguen, se individualizan y comienzan a buscar recipientes. Cuando cada Ohr se une a su Keli correspondiente, esa unidad recibe el nombre de Sefirah. Las Sefirot son configuraciones reales de luz y recipiente, modos en que la voluntad divina se organiza y se despliega.",
            "Dentro del Halal, una vez producido el Tzimtzum y depositado el Reshimo, la tradición del Zohar describe la acción de la Botzina deKardinuta, la Lámpara Oscura, como la chispa que graba en ese espacio las primeras formas diferenciadas. No produce el Tzimtzum; actúa dentro del Halal ya creado, imprimiendo en él los contornos iniciales de lo que luego serán los recipientes.",
            "Aquí aparece una ley que regirá todo lo que sigue: la luz necesita recipiente. Una luz sin recipiente no se manifiesta en forma estable. Un recipiente sin luz queda vacío. Pero una luz demasiado intensa para un recipiente inmaduro lo rompe. Esta ley cosmológica será también una ley del alma. Todo trabajo espiritual tendrá que construir un Keli capaz de recibir lo que pide."
          ]
        },
        {
          heading: { en: "III. Adam Kadmon and the First Emanations", es: "III. Adam Kadmon y las primeras emanaciones" },
          paragraphs: [
            "La primera configuración que surge del Tzimtzum y del Qav es Adam Kadmon.",
            "Tras el Tzimtzum, el Halal no permaneció en blanco. En él penetró el Qav, que se configuró en la primera estructura organizada de la emanación divina. La Qabalah luriánica llama a esa estructura Adam Kadmon: la primera configuración de la Ratzon HaElyon, la Voluntad Suprema de Ein Sof, anterior a toda diferenciación madura de mundos, Sefirot y Partzufim. Su posición en la jerarquía cósmica es singular: precede a los cuatro grandes Olamot, Atzilut, Beriah, Yetzirah y Asiyah, y los contiene en potencia, del mismo modo que una raíz contiene el árbol que aún no ha brotado.",
            "El nombre sostiene una tensión. Adam remite a la creación, a lo que surge y toma forma. Kadmon apunta hacia lo primordial, hacia lo que precede cualquier manifestación. Una realidad que lleva estos dos nombres no es una contradicción: es la frontera viva entre Ein Sof y los mundos, el punto donde la trascendencia empieza a hacerse estructura.",
            "La tradición describe a Adam Kadmon con forma humana, pero esa humanidad es estructural. Sus miembros y órganos son canales por los que la luz divina fluye y se distribuye hacia los mundos inferiores. Los órganos de su rostro - oídos, nariz, boca, ojos y frente - son los orificios por los que salen las Orot, cada una con su nivel de intensidad y con su correspondencia en el sistema de los Nombres divinos.",
            "La Qabalah luriánica describe este proceso en el Ets Haim de Rabí Chaim Vital. De los oídos de Adam Kadmon emana la luz de Sag, el nombre de valor 63, asociado a Binah. De su nariz sale la luz de Mah, el nombre de valor 45, vinculado a Zeir Anpin. De su boca emana la luz de Ban, el nombre de valor 52, correspondiente a Malkhut. Estas tres luces descienden al espacio del Halal y dan origen a los primeros mundos de vasijas y luces.",
            "Las Orot de los oídos y la nariz son demasiado elevadas para dar lugar por sí solas a estructuras inferiores estables. Operan como preparación para que la luz de la boca pueda producir los primeros Kelim. Cada una de estas luces alcanza distintos puntos del cuerpo de Adam Kadmon y traza un mapa interno de la emanación que el Ets Haim desarrolla con detalle.",
            "Cuando la Shevirat HaKelim tenga lugar y la rectificación se vuelva necesaria, saldrá una luz desde la frente de Adam Kadmon: el Ohr HaMetzach. Esta luz reorganizará las estructuras rotas en el sistema de los Partzufim. Pero antes de llegar ahí, la creación atraviesa tres fases previas: Akudim, Nekudim y Berudim.",
            "La expansión de Adam Kadmon en el Halal no es ilimitada. Dos fuerzas la contienen. La primera es el Reshimo, la huella que dejó la luz retirada tras el Tzimtzum: ese eco del estado previo actúa como límite interno, como memoria del espacio que la luz no debe volver a llenar del mismo modo. La segunda es la naturaleza de la luz de Adam Kadmon, que lleva en sí el potencial de generar vasijas, y ese potencial implica restricción. La luz que ha de ser contenida debe admitir que hay algo que la contiene.",
            "De las luces que emanan de Adam Kadmon surgen tres mundos sucesivos: Olam HaAkudim, Olam HaNekudim y Olam HaBerudim. Cada uno representa una disposición distinta entre las Orot y los Kelim, y cada uno culmina de una manera que hace necesario el siguiente.",
            "Olam HaAkudim, el mundo de las ataduras, recibe ese nombre porque en él las diez Orot que corresponden a las diez Sefirot están ligadas en un único Keli. La unidad es total: las diez fuerzas divinas coexisten en el mismo recipiente sin separación, sin bordes entre ellas. Esta fase tiene una dinámica que el Ets Haim describe con la expresión mati velo mati, \"llega y no llega\": las luces fluyen hacia la vasija y se retiran en un ciclo continuo, sin instalarse de manera definitiva. La voluntad de manifestarse choca con la imposibilidad de hacerlo con plena individuación. El nivel que rige este mundo es el del Koach Mah, la fuerza de la anulación, el estado en que las Sefirot están presentes pero sin distinguirse unas de otras.",
            "Olam HaNekudim, el mundo de los puntos, introduce la individuación. Las diez Orot se separan y cada una recibe su propio Keli, un recipiente distinto para cada Sefirah. Los Kelim de Nekudim son puntos en formación, sin la madurez estructural necesaria para sostener la intensidad de las luces que deben recibir. La desproporción define este mundo: las Orot son demasiado poderosas para unos Kelim que carecen de robustez, relación y organización.",
            "Bajo esa presión, los Kelim se rompen. Las luces regresan a su origen, y las vasijas destrozadas caen hacia los niveles inferiores de la realidad. El Ets Haim llama a ese evento Shevirat HaKelim, la ruptura de las vasijas, uno de los momentos cardinales de la cosmología luriánica.",
            "Olam HaNekudim recibe también el nombre de Olam HaTohu, el mundo del caos, porque su estructura interna carece del equilibrio necesario para subsistir. Las Orot de Tohu tienen una intensidad sin precedentes, pero los Kelim de ese mundo no fueron creados en relación unos con otros. Cada uno existía para sí mismo, sin vínculo con los demás, sin capacidad de recibir o ceder luz. Esa incomunicación causó la ruptura. Un sistema en el que cada parte existe solo para sí misma no puede mantenerse bajo la presión de una luz que exige ser distribuida.",
            "Olam HaBerudim, el mundo de las conexiones, responde al desastre de Nekudim. Su nombre muestra lo que sucede: las Sefirot se vinculan, establecen relaciones de transferencia y recepción, redistribuyen la luz sin sobrecargar ningún Keli. La luz que excede la capacidad de una Sefirah pasa a otra; la que recibe más cede a la que tiene menos. Esta interconexión inicia el Tikun, la rectificación cósmica.",
            "Olam HaBerudim no completa la rectificación, pero abre su posibilidad. Establece la lógica que gobernará los mundos posteriores: la luz solo puede sostenerse cuando los recipientes no existen como puntos aislados, sino como partes de una estructura relacional. Berudim abre paso a los Partzufim, las configuraciones divinas que organizarán Atzilut y harán posible una forma madura de Tikun.",
            "Este arco traza cómo la luz divina aprende a manifestarse en un espacio que no es Ein Sof: de la unidad compacta de Akudim a la primera articulación relacional de Berudim, pasando por la crisis de Nekudim. Una manifestación que requiere límites, estructuras, rupturas y correcciones. Adam Kadmon preside este proceso desde su posición única: demasiado próximo al Infinito para clasificarse como mundo ordinario, pero distinto de Ein Sof porque tomó forma, tiene orificios, emite luces y genera consecuencias.",
            "Lo ilimitado acepta tener figura por primera vez."
          ]
        },
        {
          heading: { en: "IV. Shevirat HaKelim: The Breaking of the Vessels", es: "IV. Shevirat HaKelim: la ruptura de las vasijas" },
          paragraphs: [
            "La Shevirat HaKelim concentra la tensión entre lo infinito y lo finito, entre la plenitud divina y la fragilidad de lo creado. Para entenderla, hay que situarla dentro de la secuencia que la precede. Después del Tzimtzum, la luz vuelve a entrar en el Halal a través del Qav. Desde Adam Kadmon emanan luces. Primero aparece Akudim, donde todas las luces habitan en una sola vasija. Después aparece Nekudim, donde las luces y los recipientes se diferencian. Y es en Nekudim, también llamado Tohu, donde ocurre la ruptura.",
            "El estado de Tohu opera bajo una estructura desconectada. Los Kelim existen achor be'achor, espalda con espalda, sin conexión entre ellos. Cada vasija recibe su luz aislada, sin distribuirla ni equilibrarse con las demás. Cuando las Orot descienden con su intensidad característica, los Kelim no pueden sostenerlas. La luz que irrumpe en cada vasija excede la capacidad de una estructura sin red, sin relación ni apoyo mutuo.",
            "Los Kelim se quiebran. Las vasijas de las siete Sefirot inferiores, desde Chesed hasta Malkhut, se fragmentan, y las nitzotzot, las chispas de luz divina que contenían, caen dispersas en los niveles inferiores de la existencia.",
            "Esto es la Shevirat HaKelim: un momento necesario dentro de la arquitectura de la creación. El Ari enseña que fue querido desde arriba. Sin este quiebre, la realidad, con su estructura de elección moral, esfuerzo espiritual, descenso y ascenso, no habría podido existir. La ruptura abrió el espacio para el Tikun.",
            "Tohu y Bohu, los términos con que la Torá describe el estado inicial de la creación en Bereshit, reciben en la Qabalah luriánica una lectura técnica precisa. Tohu designa el estado del Olam HaNekudim: vasijas aisladas, sin capacidad estructural para recibir y sostener la plenitud de la luz. Bohu es la etapa siguiente dentro del mismo proceso: materia primordial dispersa, residuo de lo que quedó después de la ruptura, cargado de potencial pero sin forma rectificada. Ambos términos describen fases del mismo desarrollo cosmológico, dos momentos en el camino que conduce, a través de una destrucción parcial, hacia una reconstrucción más sólida.",
            "Un mundo estructurado sobre una ruptura podría parecer fallido. La Qabalah sostiene lo contrario: la aparente imperfección es parte del diseño. Si todo estuviera rectificado desde el inicio, si no hubiera nitzotzot que elevar ni Qlifot que enfrentar, faltaría la misión, la profundidad, el crecimiento. La presencia del mal no objeta la bondad del Creador. Hace posible la elección moral, la teshuvah y el esfuerzo espiritual.",
            "La Shevirat HaKelim no es el capítulo oscuro de la cosmología luriánica. Es su condición de posibilidad. Sin ruptura no hay Tikun. Sin caída no hay ascenso. Sin dispersión de las chispas en el mundo, el ser humano no tendría delante la tarea que le da sentido."
          ]
        },
        {
          heading: { en: "V. Nitzotzot and Qlifot", es: "V. Nitzotzot y Qlifot" },
          paragraphs: [
            "De la ruptura surgieron dos realidades paralelas que definen la estructura del mundo: las nitzotzot y las Qlifot.",
            "Las nitzotzot son las chispas divinas que descendieron y quedaron dispersas en los estratos más densos de la existencia. Las Qlifot son las cáscaras, fragmentos de los Kelim rotos donde esas chispas quedaron aprisionadas. La luz no desapareció. Quedó cautiva. Oculta. Mezclada con estructuras que la velan y distorsionan.",
            "Las Qlifot son, en el lenguaje del Ari, el lado de la impureza. El ámbito donde la luz divina aparece separada de su fuente, encerrada en una forma que no la revela. Su origen está en la fractura: cuando los Kelim se quebraron, sus fragmentos descendieron y formaron una estructura paralela a la santidad, un reflejo oscuro. Dentro de esa estructura, las nitzotzot permanecen presentes pero inaccesibles para quien no trabaja por liberarlas.",
            "La Qabalah no habla de las Qlifot como entidades autónomas dotadas de poder propio. Su fuerza viene de lo separado, de la chispa que aún no ha sido devuelta a su lugar. El encuentro con una Qlifah, con cualquier manifestación que obstaculiza la luz, lleva una posibilidad de elevación. No porque el mal sea bueno en sí, sino porque dentro de lo opaco hay algo que puede ser rescatado y restituido.",
            "El Ets Haim del Ari fija en doscientos ochenta y ocho el número de nitzotzot que descendieron en la ruptura. La cifra procede del propio sistema luriánico: los treinta y dos caminos de la sabiduría - las diez Sefirot y las veintidós letras del Sefer Yetzirah - multiplicados por las nueve Sefirot que participaron en la ruptura. El resultado expresa cuántas chispas de luz sagrada quedaron atrapadas al romperse las vasijas del Olam HaNekudim. No es especulación numerológica. Es rigor interno del sistema.",
            "Estas nitzotzot habitan en los actos, en los objetos, en las palabras, en los alimentos, en los vínculos, en los encuentros, en las pruebas y en las decisiones. Cada cosa en el mundo material guarda una chispa que espera ser elevada. La vida humana no transcurre sobre un escenario neutro. Todo contacto con la realidad puede convertirse en ocasión de rescate o de mayor ocultamiento.",
            "La Shevirat HaKelim abrió paso al mal en el plano cósmico: creó la estructura que permite al lado de la impureza existir como dominio real. Pero la Qabalah luriánica distingue este origen cósmico del mal de su entrada más profunda en la experiencia humana. El pecado de Adam HaRishon marca una segunda fractura. Mezcla lo sagrado con las Qlifot. Hunde las nitzotzot en niveles más profundos de ocultamiento. La Shevirat HaKelim preparó el terreno. El pecado de Adam llevó esa condición al mundo humano.",
            "El mal no vive solo fuera del ser humano, ni habita únicamente en la estructura del universo. El Ari rechaza esa división simple. El ser humano participa en la historia del mal. Esa participación le da su misión reparadora."
          ]
        },
        {
          heading: { en: "VI. Tikun: Rectification", es: "VI. Tikun: la rectificación" },
          paragraphs: [
            "La tarea del ser humano en este mundo se entiende, desde la perspectiva luriánica, como la elevación de las nitzotzot que le corresponden. Cada alma desciende con una porción específica de chispas asignadas a ella. Nadie puede hacer el Tikun de otra alma. Las nitzotzot que una persona debe rescatar están distribuidas en sus experiencias, sus vínculos, sus pruebas, sus talentos, sus heridas y sus decisiones.",
            "A través del cumplimiento de la Torá y las mitzvot con kavanah, el ser humano actúa sobre la realidad material de un modo que libera la luz atrapada y la devuelve a su fuente. Este proceso se llama Tikun, rectificación, y forma el eje de la vida espiritual en la Qabalah del Ari.",
            "El Tikun luriánico difiere del uso contemporáneo de Tikun Olam. En la Qabalah clásica, Tikun designa el proceso cosmológico de restauración de las nitzotzot mediante la avodat HaShem: estudio, tefilah, cumplimiento de los mandamientos y purificación de las middot. La dimensión social de ese esfuerzo existe como consecuencia real, pero derivada. Confundirlo con una agenda de reforma social, por bien intencionada que sea, vacía el concepto de su contenido técnico y cosmológico.",
            "La analogía entre el proceso cósmico y el trabajo interior del ser humano aparece en toda la Qabalah. El alma humana funciona como microcosmos del árbol de la creación. Las mismas fuerzas que actúan en los Olamot actúan dentro del ser humano a través de sus niveles: Nefesh, Ruach, Neshamah, Chayah y Yechidah. Cuando esas facultades se desalinean, cuando el deseo, el pensamiento, la emoción y la acción no convergen hacia HaShem, la persona experimenta su propio Tohu interior.",
            "El trabajo de la avodat HaShem, el refinamiento de las middot, el estudio de la Torá, la tefilah, la tzedakah, el cuidado de la palabra y la rectificación del deseo funcionan como instrumentos del Tikun personal. Y ese Tikun personal contribuye, a su escala, al Tikun general de los mundos.",
            "La tradición llama al ser humano shutaf, socio de HaShem en la obra de la creación. Esta expresión no implica paridad. La distancia entre Creador y criatura es absoluta. Implica participación dentro de una asimetría ontológica. HaShem creó un mundo incompleto para que el ser humano, desde dentro de la creación, a través de Torá y mitzvot, pudiera participar en su completamiento.",
            "La corrección comienza en Atzilut, el mundo de la emanación. Atzilut es el primer mundo del Tikun. Reorganiza las Sefirot bajo una nueva forma: los Partzufim, los rostros divinos.",
            "Los Partzufim son configuraciones de Sefirot que actúan en relación unas con otras. Esta capacidad de relación les permite contener lo que los Kelim de Tohu no pudieron. Cuando las Sefirot operan como Partzuf, la luz que llega a una la sostienen las demás. El sistema entero absorbe lo que ninguna parte sola podría recibir.",
            "En Atzilut, las fuerzas de expansión y contracción, Mah y Ban en el lenguaje del Ari, encuentran en los Partzufim una forma de actuar coordinadamente. Mah designa el aspecto expansivo, la iniciativa de dar, el Ohr Yashar que desciende. Ban designa el aspecto receptivo y limitante, la capacidad de contener y responder, el Ohr Hozer que asciende. Antes del Tikun, la desproporción entre ambos causó ruptura. En Atzilut, esa misma relación se vuelve base de un orden estable.",
            "Los Partzufim de Atzilut, desde Atik Yomin hasta Nukva, constituyen la estructura mediante la cual esta primera corrección se despliega. Atik Yomin y Arij Anpin pertenecen a la dimensión superior de Keter. Abba e Ima corresponden a Jokhmah y Binah. Zeir Anpin integra las seis Sefirot emocionales: Chesed, Gevurah, Tiferet, Netzach, Hod y Yesod. Nukva corresponde a Malkhut. Lo que antes existía como punto aislado ahora funciona como rostro, como configuración relacional, como organismo espiritual capaz de recibir y transmitir.",
            "Desde Atzilut, el proceso continúa su descenso hacia Beriah, Yetzirah y Asiyah, los tres Olamot inferiores. En cada uno, la luz que desciende desde el mundo superior llega mediada, articulada a través de los Partzufim. Los Kelim de cada mundo la reciben en la medida que corresponde a su naturaleza.",
            "En este proceso aparece Daat, una figura que merece atención especial. En el Ets Haim, Daat ocupa un lugar peculiar. El árbol muestra diez Sefirot, pero Daat no es una undécima Sefirah autónoma. Daat es la síntesis interior entre Jokhmah y Binah, la sabiduría y el entendimiento. Cuando estas dos Sefirot actúan juntas, cuando la chispa intuitiva de Jokhmah se desarrolla en la comprensión estructurada de Binah, esa unión interior produce Daat.",
            "Daat es el conocimiento que nace de la integración. Cuando Keter se oculta en el Árbol, Daat aparece en su lugar y actúa como vínculo entre el nivel intelectual y el emocional del sistema. Permite que el flujo del Ohr descienda con coherencia de una Sefirah a otra. No regula de forma mecánica: conecta de forma consciente y hace del Árbol un organismo integrado.",
            "Sin Daat, la sabiduría queda arriba y la conducta abajo. Con Daat, lo comprendido desciende al corazón y de ahí a la acción. Lo mismo ocurre en el alma humana. Una persona puede saber algo y no vivirlo. Ese conocimiento todavía no es Daat. Daat aparece cuando la verdad conocida se vuelve parte del ser y modifica la forma de actuar."
          ]
        },
        {
          heading: { en: "VII. The Four Olamot and the Human Soul", es: "VII. Los cuatro Olamot y el alma humana" },
          paragraphs: [
            "Los cuatro Olamot que forman el orden de la creación rectificada se despliegan en una secuencia descendente de condensación de la luz divina: Atzilut, Beriah, Yetzirah y Asiyah. La lógica de su encadenamiento sigue un principio fractal: las diez Sefirot se repiten en cada mundo, y la Malkhut de un mundo actúa como Keter del mundo siguiente. Los cuatro Olamot no son compartimentos aislados, sino niveles de una misma realidad continua, diferenciados por el grado de contracción y ocultamiento del Ohr.",
            "Atzilut, el mundo de la emanación, es el primero y el más alto. En él no existe percepción de separación entre criatura y Creador. Las entidades que lo habitan - las Sefirot configuradas como Partzufim - son emanaciones directas de Ein Sof. En Atzilut, la unidad divina permanece sin velo. La conciencia propia de este mundo no solo anula el ser particular; anula la sensación misma de esencia separada.",
            "En Keter de Atzilut operan Atika Kadisha y Atik Yomin, la Santidad Antigua y el Anciano de los Días, que representan el aspecto más interior y trascendente de la Voluntad Divina en su manifestación. Arij Anpin, el Rostro Largo, despliega la paciencia y la misericordia divinas que sostienen la creación incluso cuando los actos de las criaturas no lo merecen. Las tres cabezas de Arij Anpin - Resha DeLo Ityada, la Cabeza Incognoscible; Resha DeAyin, la Cabeza de la Nada; y Resha DeArij, la Cabeza del Infinito - describen estratos internos del misterio de Keter. Gulgalta, el Cráneo, corona la estructura de Arij Anpin. Mocha Stimaah, el Cerebro Oculto, guarda la sabiduría latente en su interior. Dikna, la Barba, canaliza la misericordia hacia los mundos inferiores.",
            "En Atzilut también se despliegan los Partzufim de Jokhmah y Binah: Abba, el Padre, en sus aspectos de Abba Ilaah e Israel Saba; Ima, la Madre, en sus aspectos de Ima Ilaah y Tevunah. Zeir Anpin integra las seis Sefirot emocionales y lleva la dinámica del tiempo y del flujo emocional divino hacia los mundos. Nukva, la Novia, corresponde a Malkhut de Atzilut. Es el umbral entre el mundo de la emanación pura y los mundos creados: el Discurso Divino, la fuente de la profecía, el origen de toda creación independiente.",
            "Beriah, el mundo de la creación, marca el punto donde los mundos espirituales comienzan a percibirse como realidades distintas de Ein Sof. Esa distinción, desde la perspectiva superior, es ilusoria; desde la perspectiva del mundo creado, es real como experiencia. En Beriah opera Binah en su proyección hacia lo creado. Su símbolo tradicional es el Trono Divino, imagen que los profetas Isaías y Ezequiel contemplaron en sus visiones. El Trono indica la presencia de Ein Sof gobernando la creación desde una posición que ya no es identidad directa, sino soberanía sobre lo distinto. Los seres de Beriah, las almas en su nivel de Neshamah y los ángeles superiores, son capaces de anular el ser, pero no de anular la esencia como en Atzilut.",
            "Yetzirah, el mundo de la formación, proyecta las emociones divinas en la creación. Aquí habita la mayor parte del mundo angélico. Aquí residen las fuerzas arquetípicas que modelan las realidades antes de adquirir forma física. Zeir Anpin proyecta su luz en Yetzirah. Los ángeles que lo habitan sirven sin la distracción de una voluntad propia. Su devoción es completa porque su conciencia no abarca la perspectiva de Atzilut: sirven desde el fervor emocional, no desde la visión unificada.",
            "Asiyah, el mundo de la acción, es el último y el más denso. En él confluyen el Asiyah espiritual y el universo material que habitamos. Malkhut, el Reino, rige Asiyah. Es la Shekhinah, la presencia divina inmanente, el punto en el que la cadena de los mundos toca la realidad física. La materia no es ajena a la Divinidad: es su expresión más contraída, el nivel donde el ocultamiento llega a su máximo y donde, por eso mismo, el Tikun tiene su campo de acción más urgente.",
            "Cada Olam corresponde a un nivel del alma. Nefesh se liga a Asiyah: el primer nivel que recibe el ser humano al nacer, el que sostiene la vida biológica y las funciones vitales. Ruach corresponde a Yetzirah: el alma emocional, el mundo de las middot, del movimiento interior y de la palabra. Neshamah corresponde a Beriah: la dimensión intelectual y espiritual más elevada accesible en condiciones ordinarias. Chayah corresponde a Atzilut: una conciencia de vida divina que roza la anulación ante la unidad superior. Yechidah se vincula con la raíz más alta, con Adam Kadmon y más allá: el punto de unicidad del alma con su Fuente.",
            "Este esquema tiene consecuencias prácticas. El Tikun no se realiza solo por comprensión intelectual. Se realiza a través del alma, en los niveles que el alma puede alcanzar, mediante actos que hacen posible la elevación. Cada mitzvah cumplida con intención correcta rescata nitzotzot y las devuelve al sistema. Cada refinamiento de middot purifica el Keli del alma y lo hace más capaz de recibir el Ohr. Cada acto de avodat HaShem teje un hilo en la estructura del Tikun colectivo.",
            "El patrón de las Sefirot se repite en cada uno de los cuatro Olamot. La Malkhut de cada mundo funciona como Keter del mundo siguiente. Esta continuidad permite que la luz de Atzilut llegue, contraída y transformada, hasta la materia de Asiyah. También permite que las acciones en Asiyah resuenen hacia arriba.",
            "La cadena termina en Tikun: rectificar lo quebrado, restituir las chispas caídas, manifestar la Divinidad en lo creado. El Tzimtzum, la ruptura de los Kelim y el descenso a través de los cuatro Olamot conducen ahí. El ser humano está en la intersección de todos los mundos. Lleva en su estructura el reflejo de cada uno. Por eso recibe la responsabilidad y la capacidad de participar en esa rectificación.",
            "El sistema del Tikun no es una doctrina cosmológica que se contempla desde afuera. Es el mapa de una responsabilidad. El Ari enseñó que cada alma desciende a este mundo con su porción específica de Tikun, un conjunto de correcciones que le corresponde realizar y que ninguna otra alma puede hacer en su lugar. Las nitzotzot de esa alma están distribuidas en las experiencias concretas que forman su vida.",
            "Por eso el Ets Haim, los Olamot y los Partzufim no son objetos de erudición aislada. Son el trasfondo del trabajo interior. Conocerlos orienta ese trabajo, pero el trabajo es otra cosa: transformación del alma mediante observancia, estudio, oración, conducta ética, refinamiento del carácter y disposición a corregir lo que todavía no ha sido corregido.",
            "El Tikun del individuo y el Tikun del cosmos son el mismo proceso visto desde dos escalas. El alma que refina su Nefesh, disciplina su Ruach, orienta su Neshamah hacia la verdad y abre sus niveles superiores a la luz participa en la restauración de los mundos. Cuando todas las nitzotzot hayan sido rescatadas, cuando la luz atrapada en los fragmentos haya sido devuelta a su raíz, cuando la creación pueda recibir sin romperse lo que al principio no pudo sostener, el Tikun habrá llegado a su culminación.",
            "La creación es la tarea. El mundo no está terminado porque el alma humana tiene una parte en su terminación. La ruptura no fue el fracaso del plan, sino el modo en que el plan hizo posible la libertad, el mérito y el retorno. La luz descendió, los recipientes se quebraron, las chispas cayeron, las cáscaras las ocultaron, los mundos se organizaron y el ser humano fue colocado en Asiyah, precisamente donde la luz parece más lejana, para elevar desde allí lo que solo desde allí puede elevarse."
          ]
        }
      ]
    }
  },
  {
    id: "partzufim",
    parentId: null,
    level: 1,
    mainNumber: 3,
    title: { en: "Partzufim", es: "Partzufim" },
    hebrew: "פרצופים",
    subtitle: { en: "Faces", es: "Rostros" },
    sections: {
      en: [
        {
          paragraphs: [
            "After the Shevirat HaKelim, Tikun reorganized the Sefirot. The ten Sefirot of the world of Tohu had existed in isolation, without the internal capacity to sustain the Ohr they received. Tikun reconfigured them into articulated structures, organized in the likeness of the human figure - head, torso, arms, extremities - with interior and exterior, with the capacity to give and receive in reciprocal relation. Lurianic Qabalah calls these structures Partzufim, a term that Rabbi Chaim Vital develops in the Shaar haPartzufim of Ets Haim. The word means faces or figures. A Partzuf has orientation, relation, expression. It can turn upward and downward, receive Orot from what precedes it, and transmit them to what follows it.",
            "Each Partzuf is composed of ten internal Sefirot organized in three planes: Moach, mind; Lev, heart; and Guf, body. This internal articulation makes possible the zivug, the union between Partzufim, through which the Ohr descends from level to level until the lower worlds. The Partzufim are not separate entities like planets in distinct orbits. Each one exists within the other: enter any Partzuf and you find yourself within all the others. The structure is concentric, and the levels mutually include one another."
          ]
        },
        {
          heading: { en: "The Principal Partzufim and Their Subdivisions", es: "Los Partzufim principales y sus subdivisiones" },
          paragraphs: [
            "The five Partzufim that give their name to the order of Olam haAtzilut are: Atik Yomin, corresponding to the innermost level of Keter; Arikh Anpin, corresponding to the external level of Keter; Abba, corresponding to Chokhmah; Ima, corresponding to Binah; Zeir Anpin, which encompasses the six emotional Sefirot from Chesed to Yesod; and Nukva, corresponding to Malkhut. These form the architecture of the world of emanation. Atik Yomin and Arikh Anpin count as two manifestations of a single Keter.",
            "Each Partzuf contains internal articulations that generate subdivisions of its own. If these are counted as independent Partzufim, the number rises to twelve:",
            "Atik Yomin.",
            "Nukva of Atik Yomin, its inner feminine aspect.",
            "Arikh Anpin.",
            "Nukva of Arikh Anpin, its inner feminine aspect.",
            "Abba Ilaah, the Higher Father.",
            "Israel Saba, the Elder of Israel.",
            "Ima Ilaah, the Higher Mother.",
            "Tevunah, Understanding.",
            "Zeir Anpin in its aspect of Israel.",
            "Zeir Anpin in its aspect of Yaakov.",
            "Nukva in its aspect of Leah.",
            "Nukva in its aspect of Rachel.",
            "The patriarchal and matriarchal names answer to a precise doctrine about the way the Partzufim operate according to the level of Tikun attained in the lower world. In its aspect of Yaakov, Zeir Anpin represents a more restricted level of consciousness; in its aspect of Israel, a higher and more transparent one. The same applies to Nukva: Leah corresponds to a level of partial revelation; Rachel is the aspect of Nukva more closely linked to manifestation and speech."
          ]
        },
        {
          heading: { en: "The Background: Tzimtzum, Adam Kadmon, and the Five Levels of Ohr", es: "El trasfondo: Tzimtzum, Adam Kadmon y los cinco niveles de Ohr" },
          paragraphs: [
            "To situate the Partzufim in the chain of the creative process, we must recall their position in the general order. Ein Sof, the Light without End, contracted His Ohr in the primordial act of Tzimtzum. This generated a Chalal Panui, an empty conceptual space, where finite worlds could exist. After Tzimtzum, a residual trace remained in that space: the Reshimo, the impression of the light that had occupied that place. From Ein Sof the Qav entered, the ray of Ohr that interacted with that trace in order to begin emanation.",
            "From this process emerged Adam Kadmon, the primordial configuration that precedes and transcends the four worlds. From the organs of Adam Kadmon emanated five levels of Ohr: Ab, Sag, Mah, Ban, and Gulgalta, the crown. Ab, Sag, and Gulgalta were so intense that they could not descend into the delimited space of the later world. Mah and Ban did descend, but in doing so they found the Kelim of the world of Tohu insufficient to contain them. That tension between Orot and Kelim produced the Shevirat HaKelim, the breaking of the vessels. From the sparks of Ohr that fell with the broken Kelim arose the Qlifot. From the process of reconstruction that followed, Tikun, emerged the Partzufim. The Partzufim are the system's answer to the breaking: a more complex and flexible form of organization, capable of sustaining what the previous structure could not.",
            "Mah and Ban are the levels of Ohr that pass through and constitute each Partzuf. When the Lurianic text speaks of the Partzuf of Abba or of Ima, it designates which aspect of Mah and which aspect of Ban compose it, and from which Sefirot they come. This language is technical and must be read as such."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Tras la Shevirat HaKelim, el Tikun reorganizó las Sefirot. Las diez Sefirot del mundo de Tohu habían existido aisladas, sin capacidad interna de sostener el Ohr que recibían. El Tikun las reconfiguró en estructuras articuladas, organizadas a semejanza de la figura humana - cabeza, torso, brazos, extremidades -, con interior y exterior, con capacidad de dar y recibir en relación recíproca. La Qabalah luriánica llama a estas estructuras Partzufim, término que Rabí Chaim Vital desarrolla en el Shaar haPartzufim del Ets Haim. La palabra significa rostros o figuras. Un Partzuf tiene orientación, relación, expresión. Puede volverse hacia arriba y hacia abajo, puede recibir Orot de quien lo precede y transmitirlos a quien le sigue.",
            "Cada Partzuf está compuesto por diez Sefirot internas organizadas en tres planos: Moach, mente; Lev, corazón; y Guf, cuerpo. Esta articulación interna permite el zivug, la unión entre Partzufim, mediante la cual el Ohr desciende de nivel en nivel hasta los mundos inferiores. Los Partzufim no son entidades separadas como planetas en órbitas distintas. Cada uno existe dentro del otro: penetras en cualquier Partzuf y te encuentras dentro de todos los demás. La estructura es concéntrica y los niveles se incluyen mutuamente."
          ]
        },
        {
          heading: { en: "The Principal Partzufim and Their Subdivisions", es: "Los Partzufim principales y sus subdivisiones" },
          paragraphs: [
            "Los cinco Partzufim que dan nombre al orden de Olam haAtzilut son: Atik Yomin, correspondiente al nivel más interno de Keter; Arij Anpin, correspondiente al nivel externo de Keter; Abba, correspondiente a Jokhmah; Ima, correspondiente a Binah; Zeir Anpin, que abarca las seis Sefirot emocionales desde Chesed hasta Yesod; y Nukva, correspondiente a Malkhut. Estos forman la arquitectura del mundo de la emanación. Atik Yomin y Arij Anpin cuentan como dos manifestaciones de un mismo Keter.",
            "Cada Partzuf contiene articulaciones internas que generan subdivisiones propias. Si las cuentas como Partzufim independientes, el número sube a doce:",
            "Atik Yomin.",
            "Nukva de Atik Yomin, su aspecto femenino interno.",
            "Arij Anpin.",
            "Nukva de Arij Anpin, su aspecto femenino interno.",
            "Abba Ilaah, el Padre Superior.",
            "Israel Saba, el Anciano de Israel.",
            "Ima Ilaah, la Madre Superior.",
            "Tevunah, la Comprensión.",
            "Zeir Anpin en su aspecto de Israel.",
            "Zeir Anpin en su aspecto de Yaakov.",
            "Nukva en su aspecto de Leah.",
            "Nukva en su aspecto de Rachel.",
            "Los nombres patriarcales y matriarcales responden a una doctrina precisa sobre el modo en que los Partzufim operan según el nivel de Tikun alcanzado en el mundo inferior. En su aspecto de Yaakov, Zeir Anpin representa un nivel de conciencia más restringido; en su aspecto de Israel, uno más elevado y transparente. Lo mismo se aplica a Nukva: Leah corresponde a un nivel de revelación parcial; Rachel es el aspecto de Nukva más vinculado a la manifestación y al habla."
          ]
        },
        {
          heading: { en: "The Background: Tzimtzum, Adam Kadmon, and the Five Levels of Ohr", es: "El trasfondo: Tzimtzum, Adam Kadmon y los cinco niveles de Ohr" },
          paragraphs: [
            "Para situar a los Partzufim en la cadena del proceso creador, recordemos su posición en el orden general. Ein Sof, la Luz Sin Fin, contrajo su Ohr en el acto primordial del Tzimtzum. Esto generó un Chalal Panui, un espacio conceptual vacío, donde pudieran existir los mundos finitos. Tras el Tzimtzum quedó en ese espacio una huella residual: el Reshimo, la impresión de la luz que había ocupado aquel lugar. Desde Ein Sof penetró el Qav, el rayo de Ohr que interactuó con esa huella para iniciar la emanación.",
            "De este proceso surgió Adam Kadmon, la configuración primordial que precede y trasciende los cuatro mundos. Desde los órganos de Adam Kadmon emanaron cinco niveles de Ohr: Ab, Sag, Mah, Ban y Gulgalta, la corona. Ab, Sag y Gulgalta eran tan intensos que no pudieron descender al espacio delimitado del mundo posterior. Mah y Ban sí descendieron, pero al hacerlo encontraron los Kelim del mundo de Tohu insuficientes para contenerlos. Esa tensión entre Orot y Kelim produjo la Shevirat HaKelim, la ruptura de los recipientes. De las chispas de Ohr que cayeron con los Kelim rotos surgieron las Qlifot. Del proceso de reconstrucción que vino después, el Tikun, emergieron los Partzufim. Los Partzufim son la respuesta del sistema a la ruptura: una forma de organización más compleja y flexible, capaz de sostener lo que la estructura anterior no pudo.",
            "Mah y Ban son los niveles de Ohr que atraviesan y constituyen cada Partzuf. Cuando el texto luriánico habla del Partzuf de Abba o de Ima, designa qué aspecto de Mah y qué aspecto de Ban lo componen, y de qué Sefirot provienen. Este lenguaje es técnico y se lee como tal."
          ]
        }
      ]
    }
  },
  {
    id: "partzufim-atik-yomin",
    parentId: "partzufim",
    level: 2,
    mainNumber: 3.1,
    title: { en: "Atik Yomin", es: "Atik Yomin" },
    hebrew: "עתיק יומין",
    subtitle: { en: "The Ancient of Days", es: "El Anciano de los Días" },
    sections: {
      en: [
        {
          paragraphs: [
            "The name Atik Yomin comes from a vision of the prophet Daniel. In Lurianic Qabalah it designates the most inward and inaccessible aspect of Keter. The root of the name carries the idea of radical separation: Atik Yomin is detached from time and from the processes that govern the lower worlds. Keter functions as the hinge between a higher world and a lower one. Atik Yomin is the pole that faces upward, toward the source. Arikh Anpin is the pole that faces downward, toward what comes afterward.",
            "Atik Yomin is composed of the ten Sefirot of Keter of Mah and the five higher Sefirot of Keter of Ban. The aspect of Mah within this Partzuf has the character of hitpashtut, expansion. The aspect of Ban has the character of histalkut, restriction and withdrawal. The interaction between them is a hitkalelut, a mutual inclusion, in which the qualities of one become integrated within the other. The feminine aspect of Atik Yomin, the Nukva of Atik Yomin, is its inner Malkhut, the point at which this Partzuf delimits its relation with Arikh Anpin, the Partzuf that carries and bears the Ohr downward.",
            "Atik Yomin does not produce complete Kelim as the lower Partzufim do. Its function is the transmission of the Ratzon, the Divine Will in its purest and most hidden expression, which flows from it toward Arikh Anpin and from there to the rest of the chain. It is the level at which will exists without determined form, without particular direction, as a fullness prior to every unfolding."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "El nombre Atik Yomin proviene de una visión del profeta Daniel. En la Qabalah luriánica designa el aspecto más interior e inaccesible de Keter. La raíz del nombre lleva la idea de separación radical: Atik Yomin está desligado del tiempo y de los procesos que gobiernan los mundos inferiores. Keter funciona como bisagra entre un mundo superior y uno inferior. Atik Yomin es el polo que mira hacia arriba, hacia la fuente. Arij Anpin es el polo que mira hacia abajo, hacia lo que viene después.",
            "Atik Yomin se compone de las diez Sefirot de Keter de Mah y de las cinco Sefirot superiores de Keter de Ban. El aspecto de Mah dentro de este Partzuf tiene carácter de hitpashtut, expansión. El aspecto de Ban tiene carácter de histalkut, restricción y repliegue. La interacción entre ambos es una hitkalelut, una inclusión recíproca, en la que las cualidades de uno quedan integradas dentro del otro. El aspecto femenino de Atik Yomin, la Nukva de Atik Yomin, es su Malkhut interna, el punto donde este Partzuf delimita su relación con Arij Anpin, el Partzuf que porta y lleva el Ohr hacia abajo.",
            "Atik Yomin no produce Kelim completos como los producen los Partzufim inferiores. Su función es la transmisión de la Ratzon, la Voluntad Divina en su expresión más pura y oculta, que fluye desde él hacia Arij Anpin y de allí al resto de la cadena. Es el nivel en que la voluntad existe sin forma determinada, sin dirección particular, como una plenitud anterior a todo despliegue."
          ]
        }
      ]
    }
  },
  {
    id: "partzufim-arikh-anpin",
    parentId: "partzufim",
    level: 2,
    mainNumber: 3.2,
    title: { en: "Arikh Anpin", es: "Arij Anpin" },
    hebrew: "אריך אנפין",
    subtitle: { en: "The Long Face", es: "El Rostro Largo" },
    sections: {
      en: [
        {
          paragraphs: [
            "Arikh Anpin, the Long Face, the one of the long nose, describes divine patience, the delay of judgment, the abundance of forgiveness. In Qabalah, the length of the face measures the time between sin and punishment. It is the external aspect of Keter, the one that mediates between Atik Yomin, inaccessible, and the Partzufim of the intellect, Abba and Ima.",
            "Arikh Anpin combines the ten Sefirot of Chokhmah of Mah with the five higher Sefirot of Keter of Ban. The first contribute hitpashtut, expansion; the second histalkut, contraction. This interaction makes it a regulator: without Ban, the Ohr of Mah would expand without form; without Mah, the system would close in on itself.",
            "In the figure of Adam Kadmon, Abba and Ima occupy the right arm of Arikh Anpin. The arrangement shows that the will of Arikh Anpin precedes intellect: the wisdom of Abba and the understanding of Ima are born from the impulse that descends from Keter. The Dikna, the beard, of Arikh Anpin channels the thirteen attributes of mercy, Shelosh Esreh Middot HaRachamim of the Zohar, which allow the Ohr of Arikh Anpin to reach the lower Partzufim when the direct path closes.",
            "The connection between Arikh Anpin and Atik Yomin links manifest will and hidden will. What Atik Yomin bears in absolute concealment, Arikh Anpin carries oriented toward emanation. In the Zoharic texts, Arikh Anpin anchors the passages concerning divine mercy."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Arij Anpin, el Rostro Largo, el de nariz larga, describe la paciencia divina, la demora del juicio, la abundancia del perdón. En la Qabalah, la longitud del rostro mide el tiempo entre el pecado y el castigo. Es el aspecto externo de Keter, el que media entre Atik Yomin, inaccesible, y los Partzufim del intelecto, Abba e Ima.",
            "Arij Anpin combina las diez Sefirot de Jokhmah de Mah con las cinco Sefirot superiores de Keter de Ban. Las primeras aportan hitpashtut, expansión; las segundas histalkut, contracción. Esta interacción lo convierte en regulador: sin Ban, el Ohr de Mah se expandiría sin forma; sin Mah, el sistema se cerraría sobre sí.",
            "En la figura de Adam Kadmon, Abba e Ima ocupan el brazo derecho de Arij Anpin. La disposición muestra que la voluntad de Arij Anpin precede al intelecto: la sabiduría de Abba y la comprensión de Ima nacen del impulso que desciende desde Keter. La Dikna, la barba, de Arij Anpin canaliza los trece atributos de misericordia, Shelosh Esreh Middot HaRachamim del Zohar, que permiten al Ohr de Arij Anpin alcanzar los Partzufim inferiores cuando el camino directo se cierra.",
            "La conexión entre Arij Anpin y Atik Yomin vincula voluntad manifiesta y voluntad oculta. Lo que Atik Yomin porta en ocultamiento absoluto, Arij Anpin lo lleva orientado hacia la emanación. En los textos zoháricos, Arij Anpin ancla los pasajes sobre misericordia divina."
          ]
        }
      ]
    }
  },
  {
    id: "partzufim-abba",
    parentId: "partzufim",
    level: 2,
    mainNumber: 3.3,
    title: { en: "Abba", es: "Abba" },
    hebrew: "אבא",
    subtitle: { en: "Father", es: "Padre" },
    sections: {
      en: [
        {
          paragraphs: [
            "Abba is the first expression of divine intellect in Olam haAtzilut and corresponds to the Sefirah of Chokhmah. Within it two Partzufim are distinguished: Abba Ilaah, which comprises the three higher Sefirot of Abba, and Israel Saba, the Elder of Israel, which comprises the seven lower Sefirot. This distinction is not secondary: Abba Ilaah operates at a level of Chokhmah where understanding has not yet been articulated, where the flash of new perception exists as a point without extension; Israel Saba is that same Ohr in its descent toward formulation, preparing the transmission to the world of Ima.",
            "The internal composition of Abba combines the three higher Sefirot of Binah of Mah with the seven lower Sefirot of Chokhmah of Ban. Although Abba is the masculine Partzuf par excellence, the most active Sefirot within it belong to the left side of Mah, that is, to Binah, which has the character of histalkut. This introduces from the beginning an element of restriction within the expansive force of Mah, and it is this internal tension that gives Abba its particular configuration: the hitpashtut proper to Chokhmah is modulated from within by the counterweight of Binah.",
            "The Sefirot of Netzach, Hod, and Yesod in Israel Saba are the point of contact with Tevunah, the lower Partzuf of Ima. It is in this zone that the formation of the first Kelim proper to Zeir Anpin begins, because the dense Sefirot of Israel Saba, by entering the corresponding Sefirot of Tevunah, produce a hitkalelut from which more solid receptive structures can emerge. The highest Sefirot of Abba, those of Abba Ilaah, are too subtle to reach that level of density: their function is to nourish Ima Ilaah on the plane of the Daat shared between them, the Daat that later extends toward Zeir Anpin.",
            "Abba Ilaah receives its influx from the mazal elyon, the eighth section of the Dikna of Arikh Anpin, which in the terminology of Ets Haim corresponds to the attribute of notzer Chesed, the keeper of lovingkindness. This is the channel through which the mercy of Arikh Anpin reaches directly the highest level of divine intellect. The dynamic between Abba Ilaah and Ima Ilaah, between wisdom in its highest form and understanding in its highest form, constitutes the primordial zivug of the intellect, from which are born the levels of Moach that nourish Zeir Anpin."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Abba es la primera expresión del intelecto divino en Olam haAtzilut y corresponde a la Sefirah de Jokhmah. Dentro de él se distinguen dos Partzufim: Abba Ilaah, que comprende las tres Sefirot superiores de Abba, e Israel Saba, el Anciano de Israel, que comprende las siete Sefirot inferiores. Esta distinción no es secundaria: Abba Ilaah opera a un nivel de Jokhmah donde la comprensión todavía no se ha articulado, donde el destello de la nueva percepción existe como punto sin extensión; Israel Saba es ese mismo Ohr en su descenso hacia la formulación, preparando la entrega al mundo de Ima.",
            "La composición interna de Abba combina las tres Sefirot superiores de Binah de Mah con las siete Sefirot inferiores de Jokhmah de Ban. Aunque Abba sea el Partzuf masculino por excelencia, las Sefirot más activas dentro de él pertenecen al lado izquierdo de Mah, es decir, a Binah, que tiene carácter de histalkut. Esto introduce desde el principio un elemento de restricción dentro de la fuerza expansiva de Mah, y es esa tensión interna la que da a Abba su configuración particular: la hitpashtut propia de Jokhmah queda modulada desde dentro por el contrapeso de Binah.",
            "Las Sefirot de Netzach, Hod y Yesod en Israel Saba son el punto de contacto con Tevunah, el Partzuf inferior de Ima. Es en esa zona donde se inicia la formación de los primeros Kelim propios de Zeir Anpin, porque las Sefirot densas de Israel Saba, al penetrar en las Sefirot correspondientes de Tevunah, producen una hitkalelut de la que pueden emerger estructuras receptoras más sólidas. Las Sefirot más altas de Abba, las de Abba Ilaah, son demasiado sutiles para alcanzar ese nivel de densidad: su función es alimentar a Ima Ilaah en el plano del Daat compartido entre ambos, el Daat que luego se extiende hacia Zeir Anpin.",
            "Abba Ilaah recibe su influjo del mazal elyon, la octava sección de la Dikna de Arij Anpin, que en la terminología del Ets Haim corresponde al atributo de notzer Chesed, el guardador de la bondad amorosa. Este es el canal a través del cual la misericordia de Arij Anpin llega directamente al nivel más alto del intelecto divino. La dinámica entre Abba Ilaah e Ima Ilaah, entre la sabiduría en su forma más alta y la comprensión en su forma más alta, constituye el zivug primordial del intelecto, del que nacen los niveles de Moach que alimentan a Zeir Anpin."
          ]
        }
      ]
    }
  },
  {
    id: "partzufim-ima",
    parentId: "partzufim",
    level: 2,
    mainNumber: 3.4,
    title: { en: "Ima", es: "Ima" },
    hebrew: "אמא",
    subtitle: { en: "Mother", es: "Madre" },
    sections: {
      en: [
        {
          paragraphs: [
            "Abba is the first expression of divine intellect in Olam haAtzilut and corresponds to the Sefirah of Chokhmah. It contains two Partzufim: Abba Ilaah, the three higher Sefirot of Abba, and Israel Saba, the Elder of Israel, the seven lower Sefirot. Abba Ilaah operates where understanding has not yet been articulated, where the flash of new perception exists as a point without extension. Israel Saba carries that same Ohr toward formulation and prepares the transmission to the world of Ima.",
            "Abba combines the three higher Sefirot of Binah of Mah with the seven lower Sefirot of Chokhmah of Ban. Although Abba is the masculine Partzuf par excellence, the most active Sefirot belong to the left side of Mah, Binah, which has the character of histalkut. This internal tension configures Abba: the hitpashtut proper to Chokhmah is modulated by the counterweight of Binah.",
            "The Sefirot of Netzach, Hod, and Yesod in Israel Saba make contact with Tevunah, the lower Partzuf of Ima. Here the first Kelim of Zeir Anpin are formed. The dense Sefirot of Israel Saba enter the corresponding Sefirot of Tevunah and produce a hitkalelut from which more solid receptive structures emerge. The higher Sefirot of Abba lack that density: they nourish Ima Ilaah on the plane of the Daat shared between them, the Daat that later extends toward Zeir Anpin.",
            "Abba Ilaah receives its influx from the mazal elyon, the eighth section of the Dikna of Arikh Anpin, notzer Chesed in Ets Haim, the keeper of lovingkindness. This channel brings the mercy of Arikh Anpin to the highest level of divine intellect. The dynamic between Abba Ilaah and Ima Ilaah, between wisdom in its highest form and understanding in its highest form, forms the primordial zivug of the intellect, from which are born the levels of Moach that nourish Zeir Anpin."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Abba es la primera expresión del intelecto divino en Olam haAtzilut y corresponde a la Sefirah de Jokhmah. Contiene dos Partzufim: Abba Ilaah, las tres Sefirot superiores de Abba, e Israel Saba, el Anciano de Israel, las siete Sefirot inferiores. Abba Ilaah opera donde la comprensión aún no se articula, donde el destello de nueva percepción existe como punto sin extensión. Israel Saba lleva ese mismo Ohr hacia la formulación y prepara la entrega al mundo de Ima.",
            "Abba combina las tres Sefirot superiores de Binah de Mah con las siete Sefirot inferiores de Jokhmah de Ban. Aunque Abba sea el Partzuf masculino por excelencia, las Sefirot más activas pertenecen al lado izquierdo de Mah, Binah, que tiene carácter de histalkut. Esta tensión interna configura a Abba: la hitpashtut propia de Jokhmah queda modulada por el contrapeso de Binah.",
            "Las Sefirot de Netzach, Hod y Yesod en Israel Saba contactan con Tevunah, el Partzuf inferior de Ima. Aquí se forman los primeros Kelim de Zeir Anpin. Las Sefirot densas de Israel Saba penetran en las Sefirot correspondientes de Tevunah y producen una hitkalelut de la que emergen estructuras receptoras más sólidas. Las Sefirot más altas de Abba carecen de esa densidad: alimentan a Ima Ilaah en el plano del Daat compartido entre ambos, el Daat que luego se extiende hacia Zeir Anpin.",
            "Abba Ilaah recibe su influjo del mazal elyon, la octava sección de la Dikna de Arij Anpin, notzer Chesed en el Ets Haim, el guardador de la bondad amorosa. Este canal trae la misericordia de Arij Anpin al nivel más alto del intelecto divino. La dinámica entre Abba Ilaah e Ima Ilaah, entre la sabiduría en su forma más alta y la comprensión en su forma más alta, forma el zivug primordial del intelecto, del que nacen los niveles de Moach que alimentan a Zeir Anpin."
          ]
        }
      ]
    }
  },
  {
    id: "partzufim-zeir-anpin",
    parentId: "partzufim",
    level: 2,
    mainNumber: 3.5,
    title: { en: "Zeir Anpin", es: "Zeir Anpin" },
    hebrew: "זעיר אנפין",
    subtitle: { en: "The Lesser Face", es: "El Rostro Menor" },
    sections: {
      en: [
        {
          paragraphs: [
            "Zeir Anpin, the Lesser Face or short-nosed face, concentrates the six emotional Sefirot: Chesed, Gevurah, Tiferet, Netzach, Hod, and Yesod. It is formed from the six lower Sefirot of Mah combined with the six lower Sefirot of Ban. This combination produces a balance between hitpashtut and histalkut: Chesed, Tiferet, and Netzach incline toward expansion; Gevurah, Hod, and the inner tension of Yesod toward restriction. The symmetry is dynamic, not static, and this dynamic allows Zeir Anpin to function as an active channel of Ohr toward Nukva.",
            "Zeir Anpin has two aspects, Israel and Yaakov, which correspond to two distinct states of its inner consciousness. In its aspect of Yaakov, the Kelim of Zeir Anpin are solid but opaque; in its aspect of Israel, the inner Moach has expanded to include levels of Chokhmah and Binah that do not belong to it, and the Partzuf operates from a higher and more transparent consciousness. This distinction is fundamental in the practice of kavanah: most intentions in prayer and in the fulfillment of the commandments operate with the figure of Zeir Anpin. Knowing which aspect it is in determines the reach of the zivug.",
            "The Ohr Hozer, the reflected light that ascends from Nukva toward Zeir Anpin and from there toward the higher Partzufim, is the counterweight of the Ohr Yashar that descends. In Zeir Anpin, the Kelim of Mah and Ban have reached the proper combination for the system to function without the need for greater density: the Ohr Hozer that rises compensates the Ohr Yashar that descends, and the resulting symmetry allows Olam haAtzilut to remain stable. The same will occur in Nukva. This principle of giving and receiving, of the descent and ascent of Ohr, is structural in Lurianic Qabalah. It is not limited to the divine worlds: it reappears on the human plane every time an act of avodat HaShem elevates nitzotzot and causes the Ohr Hozer to ascend from the lower worlds.",
            "In the Lurianic tradition, Zeir Anpin receives identification with Kudsha Brich Hu, the Holy One, blessed be He. This identification is sustained within the technical framework of Olam haAtzilut: it is the level toward which all the Orot that descend from Atzmut through the higher worlds converge, and from which the Ohr is transmitted to Nukva. In the reading of Ets Haim, the vision of the Merkavah in the prophet Ezekiel can be understood as a perception of the level of Zeir Anpin of Atzilut, although this equivalence requires the distinction between prophetic vision, which operates at the level of the lower worlds, and the structure of Atzilut in itself, which lies beyond the reach of prophecy."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Zeir Anpin, el Rostro Menor o de nariz corta, concentra las seis Sefirot emocionales: Chesed, Gevurah, Tiferet, Netzach, Hod y Yesod. Se forma de las seis Sefirot inferiores de Mah combinadas con las seis Sefirot inferiores de Ban. Esta combinación produce un equilibrio entre hitpashtut e histalkut: Chesed, Tiferet y Netzach se inclinan hacia la expansión; Gevurah, Hod y la tensión interna de Yesod hacia la restricción. La simetría es dinámica, no estable, y esta dinámica permite a Zeir Anpin funcionar como canal activo del Ohr hacia Nukva.",
            "Zeir Anpin tiene dos aspectos, Israel y Yaakov, que corresponden a dos estados distintos de su conciencia interna. En su aspecto de Yaakov, los Kelim de Zeir Anpin son sólidos pero opacos; en su aspecto de Israel, el Moach interno se ha expandido hasta incluir los niveles de Jokhmah y Binah que no le pertenecen, y el Partzuf opera desde una conciencia más transparente y elevada. Esta distinción es fundamental en la práctica de la kavanah: la mayor parte de las intenciones en la oración y en el cumplimiento de los preceptos opera con la figura de Zeir Anpin. Saber en qué aspecto se encuentra determina el alcance del zivug.",
            "El Ohr Hozer, la luz reflejada que asciende desde Nukva hacia Zeir Anpin y desde allí hacia los Partzufim superiores, es el contrapeso del Ohr Yashar que desciende. En Zeir Anpin, los Kelim de Mah y Ban han alcanzado la combinación adecuada para que el sistema funcione sin necesidad de una densidad mayor: el Ohr Hozer que sube compensa el Ohr Yashar que baja, y la simetría resultante permite a Olam haAtzilut mantenerse estable. Lo mismo ocurrirá en Nukva. Este principio del dar y recibir, del descenso y el ascenso del Ohr, es estructural en la Qabalah luriánica. No se limita a los mundos divinos: reaparece en el plano humano cada vez que un acto de avodat HaShem eleva nitzotzot y hace ascender el Ohr Hozer desde los mundos inferiores.",
            "En la tradición luriánica, Zeir Anpin recibe la identificación con el Kudsha Brich Hu, el Santo Bendito Sea. Esta identificación se sostiene dentro del marco técnico de Olam haAtzilut: es el nivel hacia el que convergen todos los Orot que descienden desde Atzmut a través de los mundos superiores, y desde el cual se transmite el Ohr a Nukva. En la lectura del Ets Haim, la visión de la Merkavah en el profeta Ezequiel puede entenderse como una percepción del nivel de Zeir Anpin de Atzilut, aunque esta equiparación requiere la distinción entre la visión profética, que opera en el nivel de los mundos inferiores, y la estructura de Atzilut en sí misma, que está más allá del alcance de la profecía."
          ]
        }
      ]
    }
  },
  {
    id: "partzufim-nukva",
    parentId: "partzufim",
    level: 2,
    mainNumber: 3.6,
    title: { en: "Nukva", es: "Nukva" },
    hebrew: "נוקבה",
    subtitle: { en: "The Bride", es: "La Novia" },
    sections: {
      en: [
        {
          paragraphs: [
            "Nukva is the Partzuf of Malkhut and the densest Keli of Olam haAtzilut. It is composed of the union of Malkhut of Mah with Malkhut of Ban. All the Ohr that descended through the chain of Partzufim, from Atik Yomin to Zeir Anpin, reaches Nukva and there attains its maximum manifestation within the world of emanation. Tradition calls her Shekhinah: the divine presence that dwells in creation, the point where Ohr touches the lower worlds.",
            "Nukva has an internal structure that distinguishes her from the other Partzufim. Zeir Anpin receives its Kelim already formed from Tevunah and begins its existence with ten complete Sefirot. Nukva begins as a single point, the Keter of Malkhut, and must develop the remaining nine Sefirot. This difference opens a structural possibility: the nine Sefirot of Nukva are completed according to the Tikun operating in the world. Human actions - commandments fulfilled with kavanah, Torah studied, prayer directed with intention - contribute to the development of the Kelim of Nukva. The fullness of Nukva depends on what occurs below.",
            "Nukva is connected with Ima: Ima is the elevated principle of histalkut; Nukva is its final expression in Malkhut. This relation contrasts with that of Abba and Zeir Anpin, linked by the axis of hitpashtut. Abba and Ima are in permanent zivug; the union between wisdom and understanding is not interrupted. The zivug between Zeir Anpin and Nukva is intermittent: they are not always united, and when they are, the intensity varies. This asymmetry between the two pairs of Partzufim has implications in the practice of kavanah: increasing consciousness in the moments of the zivug of Zeir Anpin and Nukva is one of the purposes of the intentions prescribed by the Ari.",
            "In the soul, Nukva is identified with speech. What occurs in thought and feeling finds its expression in the spoken word; the Ohr that descends from the higher worlds reaches its visible articulation through Nukva. She is also called the soul of revealed speech: the world in which the divine becomes audible. The zivug of Zeir Anpin and Nukva, the encounter of Kudsha Brich Hu with the Shekhinah, is the axis on which Tikun turns at every level: from the structure of Olam haAtzilut to the act of one who fulfills a commandment with the mind oriented toward the unification of the Name. In the formula that precedes many kavanot, LeShem Yichud Kudsha Brich Hu uShechintei, the structure of the Partzuf is implicit: the one who acts below kindles something above, and what burns above illuminates something below."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Nukva es el Partzuf de Malkhut y el Keli más denso de Olam haAtzilut. Se compone de la unión de Malkhut de Mah con Malkhut de Ban. Todo el Ohr que descendió por la cadena de Partzufim, de Atik Yomin a Zeir Anpin, llega a Nukva y alcanza allí su manifestación máxima dentro del mundo de la emanación. La tradición la llama Shekhinah: la presencia divina que habita en la creación, el punto donde Ohr toca los mundos inferiores.",
            "Nukva tiene una estructura interna que la distingue de los demás Partzufim. Zeir Anpin recibe sus Kelim ya formados desde Tevunah y comienza su existencia con diez Sefirot completas. Nukva comienza como un punto único, el Keter de Malkhut, y necesita desarrollar las nueve Sefirot restantes. Esta diferencia abre una posibilidad estructural: las nueve Sefirot de Nukva se completan en función del Tikun que opera en el mundo. Las acciones humanas - preceptos cumplidos con kavanah, Torá estudiada, oración dirigida con intención - contribuyen al desarrollo de los Kelim de Nukva. La plenitud de Nukva depende de lo que ocurre abajo.",
            "Nukva está conectada con Ima: Ima es el principio de histalkut elevado; Nukva es su expresión última en Malkhut. Esta relación contrasta con la de Abba y Zeir Anpin, vinculados por el eje de hitpashtut. Abba e Ima están en zivug permanente; la unión entre sabiduría y comprensión no se interrumpe. El zivug entre Zeir Anpin y Nukva es intermitente: no siempre están unidos, y cuando lo están, la intensidad varía. Esta asimetría entre los dos pares de Partzufim tiene implicaciones en la práctica de la kavanah: acrecentar la conciencia en los momentos del zivug de Zeir Anpin y Nukva es uno de los propósitos de las intenciones que prescribió el Ari.",
            "En el alma, Nukva se identifica con el habla. Lo que ocurre en el pensamiento y el sentimiento encuentra su expresión en la palabra pronunciada; el Ohr que desciende desde los mundos superiores llega a su articulación visible a través de Nukva. Se la llama también alma del habla revelada: el mundo en que lo divino se hace audible. El zivug de Zeir Anpin y Nukva, el encuentro del Kudsha Brich Hu con la Shekhinah, es el eje sobre el que gira el Tikun en cada nivel: desde la estructura de Olam haAtzilut hasta el acto de quien cumple un precepto con la mente orientada hacia la unificación del Nombre. En la fórmula que precede a muchas kavanot, LeShem Yichud Kudsha Brich Hu uShechintei, está implícita la estructura del Partzuf: quien actúa por abajo enciende algo por arriba, y lo que arde por arriba ilumina algo por abajo."
          ]
        }
      ]
    }
  },
  {
    id: "arba-olamot",
    parentId: null,
    level: 1,
    mainNumber: 4,
    title: { en: "Arba Olamot", es: "Arba Olamot" },
    hebrew: "ארבעה עולמות",
    subtitle: { en: "The Four Worlds", es: "Los cuatro mundos" },
    sections: {
      en: [
        {
          paragraphs: [
            "The emanation of Ein Sof extends through four Olamot, four levels of reality that range from proximity with the divine to the matter we inhabit. Each world is complete in itself and contains in potential the structure of the other three. The Tree of Life is reproduced at each level with its own characteristics, names, and beings. Qabalistic texts call this the principle of reflection between the worlds. Ein Sof cannot be compartmentalized: its inner structure repeats at every scale of creation.",
            "The four Olamot form an ordered chain of descent. Atzilut, Beriah, Yetzirah, and Asiyah follow one another from divine emanation to material action. The order marks distances, not hierarchies: each world is farther from the source, and that distance is the condition of its differentiated existence.",
            "The four worlds correspond to the four letters of the name Havayah. The Yod concentrates in a point the potency of what has not yet taken form: it is associated with Atzilut. The first He, broader and receptive, corresponds to Beriah. The Vav, letter of extension and connection, corresponds to Yetzirah. The final He closes and concretizes: it corresponds to Asiyah. This correspondence, gathered in the Zohar and elaborated by the Ramak in Pardes Rimonim, is the structural key of the chapter."
          ]
        },
        {
          heading: { en: "Olam haAtzilut", es: "Olam haAtzilut" },
          paragraphs: [
            "Olam haAtzilut is the world of emanation. Here the divine manifests through His names, without separation between the Eternal and what emanates from Him. The Zohar formulates it: Hu uShemeh chad, He and His Name are One. In Atzilut, the Sefirot and the Partzufim are bathed in the light of Ein Sof. The concealment that characterizes the lower worlds does not exist here. At the boundary between Ein Sof and Atzilut operates the Tzimtzum, the primordial self-contraction that made possible a space in which the Olamot could unfold. What arises from that boundary is not creation in the full sense, but the first articulation of the divine outward from itself."
          ]
        },
        {
          heading: { en: "Olam haBeriah", es: "Olam haBeriah" },
          paragraphs: [
            "Olam haBeriah is the world of creation, of yesh me-ayin, being that emerges from nothing, according to Rabbi Azriel of Girona and the Zohar. The light of Atzilut ceases to act directly. It passes through a first opacity that allows distinction. Beriah contains pure qualities: goodness, truth, beauty - not as attributes of particular beings, but as realities that subsist in themselves. Tradition calls it Olam haKise, the world of the Throne. It describes it as the seat of the Shekhinah, the Divine Presence whose root is in Malkhut of Atzilut and which shines through Beriah as the Glory that dwells in the heavenly Temple. The Sefirot of Beriah receive in the Heikhalot texts the name of Palaces. Its inhabitants are the archangels, each bearer of the essence of its corresponding Sefirah."
          ]
        },
        {
          heading: { en: "Olam haYetzirah", es: "Olam haYetzirah" },
          paragraphs: [
            "Olam haYetzirah is the world of formation, the Olam haDemuyot, the world of images and forms, according to classical literature. Beriah is being without figure. Yetzirah articulates that being into recognizable forms, words, and images. Your inner life - thoughts, emotions, dreams - is rooted here. Yetzirah contains the angels: the angelic choirs that execute the dispositions of the archangels and carry out the divine will on the formative plane. You experience Yetzirah in prophetic dream, inner vision, and states of intense devekut. In those moments your soul touches the fabric of this world without leaving the body. Your waking consciousness inhabits it without noticing: every thought you elaborate, every image you remember or imagine, belongs to its weave."
          ]
        },
        {
          heading: { en: "Olam haAsiyah", es: "Olam haAsiyah" },
          paragraphs: [
            "Olam haAsiyah is the world of action, where matter, energy, space, and time unfold in the form known by your sensory experience. The term Asiyah points to Tikun, rectification. Your concrete effort, your observance of the commandments, and the refinement of your middot have their most direct effect on the structure of creation. Asiyah is divided into two dimensions: Olam haAsiyah Ruchanit, the spiritual dimension of the world of action, where the celestial spheres and their intelligences operate, and Olam haAsiyah Gashmit, the physical world you inhabit. Here the Sefirot become individualized to the greatest degree, and the divine reaches its deepest concealment, the condition of its fullest revelation.",
            "The Sefirot and the Partzufim appear in each of the four worlds. The Tree of Life pulses in Atzilut, in Asiyah, in Beriah, and in Yetzirah. What changes is the degree of transparency of the light and the density of the vessel that bears it."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "La emanación de Ein Sof se extiende en cuatro Olamot, cuatro niveles de realidad que van desde la proximidad con lo divino hasta la materia que habitamos. Cada mundo es completo en sí mismo y contiene en potencia la estructura de los otros tres. El Árbol de la Vida se reproduce en cada nivel con sus características, nombres y seres propios. Los textos qabalísticos llaman a esto el principio del reflejo entre los mundos. Ein Sof no puede ser compartimentado: su estructura interna se repite en cada escala de la creación.",
            "Los cuatro Olamot forman una cadena de descenso ordenada. Atzilut, Beriah, Yetzirah y Asiyah se suceden desde la emanación divina hasta la acción material. El orden marca distancias, no jerarquías: cada mundo está más alejado de la fuente, y esa distancia es la condición de su existencia diferenciada.",
            "Los cuatro mundos corresponden a las cuatro letras del nombre Havayah. La Yod concentra en un punto la potencia de lo que aún no ha tomado forma: se asocia con Atzilut. La primera He, más amplia y receptiva, corresponde a Beriah. La Vav, letra de extensión y enlace, corresponde a Yetzirah. La He final cierra y concreta: corresponde a Asiyah. Esta correspondencia, recogida en el Zohar y elaborada por el Ramak en Pardes Rimonim, es la clave estructural del capítulo."
          ]
        },
        {
          heading: { en: "Olam haAtzilut", es: "Olam haAtzilut" },
          paragraphs: [
            "Olam haAtzilut es el mundo de la emanación. Aquí lo divino se manifiesta a través de Sus nombres, sin separación entre el Eterno y lo que de Él emana. El Zohar lo formula: Hu uShemeh chad, Él y Su Nombre son Uno. En Atzilut, las Sefirot y los Partzufim están bañados en la luz de Ein Sof. No existe aquí la ocultación que caracteriza a los mundos inferiores. En el límite entre Ein Sof y Atzilut opera el Tzimtzum, la autocontracción primordial que hizo posible un espacio donde los Olamot pudieran desplegarse. Lo que surge de ese límite no es creación en sentido pleno, sino la primera articulación de lo divino hacia fuera de sí mismo."
          ]
        },
        {
          heading: { en: "Olam haBeriah", es: "Olam haBeriah" },
          paragraphs: [
            "Olam haBeriah es el mundo de la creación, del yesh me-ayin, el ser que emerge de la nada, según Rabí Azriel de Girona y el Zohar. La luz de Atzilut deja de actuar de forma directa. Pasa por una primera opacidad que permite la distinción. Beriah contiene las cualidades puras: la bondad, la verdad, la belleza, no como atributos de seres particulares, sino como realidades que subsisten en sí mismas. La tradición lo llama Olam haKise, el mundo del Trono. Lo describe como asiento de la Shekhinah, la Presencia Divina cuya raíz está en Malkhut de Atzilut y que resplandece a través de Beriah como la Gloria que habita el Templo celestial. Las Sefirot de Beriah reciben en los textos de los Heikhalot el nombre de Palacios. Sus habitantes son los arcángeles, cada uno portador de la esencia de su Sefirah correspondiente."
          ]
        },
        {
          heading: { en: "Olam haYetzirah", es: "Olam haYetzirah" },
          paragraphs: [
            "Olam haYetzirah es el mundo de la formación, el Olam haDemuyot, el mundo de las imágenes y las formas, según la literatura clásica. Beriah es el ser sin figura. Yetzirah articula ese ser en formas, palabras e imágenes reconocibles. Tu vida interior, pensamientos, emociones y sueños, se arraiga aquí. Yetzirah contiene los ángeles: los coros angelicales que ejecutan las disposiciones de los arcángeles y llevan a cabo la voluntad divina en el plano formativo. Experimentas Yetzirah en el sueño profético, la visión interior y los estados de devekut intenso. En esos momentos tu alma toca la trama de este mundo sin abandonar el cuerpo. Tu conciencia despierta lo habita sin advertirlo: cada pensamiento que elaboras, cada imagen que recuerdas o imaginas, pertenece a su tejido."
          ]
        },
        {
          heading: { en: "Olam haAsiyah", es: "Olam haAsiyah" },
          paragraphs: [
            "Olam haAsiyah es el mundo de la acción, donde la materia, la energía, el espacio y el tiempo se despliegan en la forma que tu experiencia sensible conoce. El término Asiyah señala el Tikun, la rectificación. Tu esfuerzo concreto, tu observancia de los preceptos y el refinamiento de tus middot tienen su efecto más directo sobre la estructura de la creación. Asiyah se divide en dos dimensiones: Olam haAsiyah Ruchanit, la dimensión espiritual del mundo de la acción, donde operan las esferas celestes y sus inteligencias, y Olam haAsiyah Gashmit, el mundo físico que habitas. Las Sefirot aquí se individualizan al máximo y lo divino alcanza su ocultamiento más profundo, la condición de su revelación más completa.",
            "Las Sefirot y los Partzufim aparecen en cada uno de los cuatro mundos. El Árbol de la Vida late en Atzilut, en Asiyah, en Beriah y en Yetzirah. Lo que cambia es el grado de transparencia de la luz y la densidad del recipiente que la porta."
          ]
        }
      ]
    }
  },
  {
    id: "olam-haatzilut",
    parentId: "arba-olamot",
    level: 2,
    mainNumber: 4.1,
    title: { en: "Olam haAtzilut", es: "Olam haAtzilut" },
    hebrew: "עולם האצילות",
    subtitle: { en: "World of Emanation", es: "Mundo de la Emanación" },
    sections: {
      en: [
        {
          paragraphs: [
            "Atzilut arose after the Shevirat HaKelim, the breaking of the vessels of the world of Tohu, in a state of complete Tikun. The three lower worlds, Beriah, Yetzirah, and Asiyah, have not completed their rectification; they depend on the avodat haneshamot, the spiritual work of embodied souls, to rescue and elevate the nitzotzot, the sparks of divine light that fell into them. Here lies the human mission. The verse of Zechariah 14:9, \"The Eternal will be King over all the earth; on that day the Eternal will be One and His Name One,\" expresses that goal: the pending unification in the lower worlds.",
            "The names of the Eternal are the axis of the meditative practice of Qabalah. Masters teach that the entire Torah, with its six hundred thousand letters, is the writing of a single divine Name unfolded in time. In any kavanah, spiritual intention, consciousness is oriented toward the divine name that corresponds to the Sefirah being worked. The names do not merely designate: they are direct emanations of the divine with their own kedushah, active presences that connect the contemplator with the reality named. Tradition establishes ten principal names, one for each Sefirah of Atzilut. We go through them below."
          ]
        },
        {
          heading: { en: "Keter of Atzilut: אהיה Ehyeh", es: "Keter de Atzilut: אהיה Ehyeh" },
          paragraphs: [
            "This name appears in Shemot 3:14, when the Eternal answers Moshe with the words Ehyeh Asher Ehyeh. The translation \"I Am Who I Am\" ignores the grammar of the term. In biblical Hebrew, Ehyeh uses the imperfect aspect: an action in progress or still to be realized. The precise reading is \"I Will Be What I Will Be.\" It expresses the will to exist, to present itself, to manifest. It refuses fixation in any past instant. It continues arriving.",
            "The complete name, Ehyeh Asher Ehyeh, reflects the three higher Sefirot. The first Ehyeh alludes to Keter in its purest form: existence as pure will, without articulated content. Asher, \"that\" or \"which,\" corresponds to Chokhmah, primordial wisdom where contents exist in the state of an undivided point. In Hebrew, Asher carries the resonance of being, happiness, and full satisfaction. The second Ehyeh corresponds to Binah: the same supreme existence reflected and articulated, the cosmic sea where the contents of Chokhmah unfold and take form.",
            "When pronouncing Ehyeh, you reproduce the movement of breathing: exhalation casts life outward, inhalation gathers it back. The masters of the Zohar point out that in this name one hears the breath of creation. When the Eternal exhales, the Olamot emanate. When He inhales, they return toward their source. The cycle of emanation and return, ratzo vashov, is inscribed in the phonetics of this name."
          ]
        },
        {
          heading: { en: "Chokhmah of Atzilut: י-ה Yah", es: "Jokhmah de Atzilut: י-ה Yah" },
          paragraphs: [
            "Yah is the first half of the name Havayah and the second half, the tangible part, of the preceding Ehyeh. It is called the name of wisdom because Chokhmah is the first flash of divine intelligence, the point prior to every form. Form begins in Binah; Chokhmah is the instant that precedes it, the instant in which something is known before it can be said. This name escapes every exhaustive verbal description: language operates with forms, and Yah is prior to them.",
            "The first word of the Torah, Bereshit, can be read as bereshit, \"in wisdom\" or \"through wisdom,\" in consonance with Psalm 104:24: \"With wisdom You made them all.\" The name Yah appears centrally in Shemot 15:2, in the Shirat haYam, the song the people sang after crossing the sea: \"Ozi vezimrat Yah,\" \"My strength and my song is Yah.\" In that context, the name bears a liberating quality that surpasses the limits of necessity and the law of cause and effect.",
            "In Hebrew, the words ish, איש, and isha, אשה, man and woman, share the root esh, אש, fire. The letter Yod that distinguishes ish and the letter He that distinguishes isha are the two letters of Yah. When the relation between them is inhabited by the divine name, the fire that unites them is that of life and creation. When that name is absent, what remains is only esh, fire without direction, passion without root. This teaching of the Talmud, Sota 17a, illustrates the nature of Yah as the principle that sustains polarity without dissolving either of its terms."
          ]
        },
        {
          heading: { en: "Binah of Atzilut: י-ה-ו-ה with the vowels of Elohim, Yehovi", es: "Binah de Atzilut: י-ה-ו-ה con las vocales de Elohim, Yehovi" },
          paragraphs: [
            "The name of Binah carries the letters of Havayah vocalized with the vowels of Elohim. Havayah, masculine, wisdom, is poured into Elohim, feminine, structure. The two aspects, indistinct in Chokhmah, here separate and cooperate.",
            "Elohim appears in the three Sefirot of the left column of the Tree with different nuances. In Binah it carries its highest meaning: nature in its principle, the law that gives form to what exists. The first chapter of Bereshit uses this name thirty-two times, the number of the thirty-two paths of Chokhmah of Sefer Yetzirah, because it treats the creation of the natural world and its laws. The second chapter uses Havayah Elohim, a compound name: light and vessel, supernatural order and natural law in unity.",
            "Binah is Ima Ilaah, the Higher Mother. She contains the Sefirot of Zeir Anpin in her womb and leads them to unfold. Mother of all forms. From here, the law of cause and effect expresses the divine order. Any break in that order, what the Zohar calls \"the path above nature,\" comes from Chokhmah, which stands above the law without abolishing it."
          ]
        },
        {
          heading: { en: "Chesed of Atzilut: אל El", es: "Chesed de Atzilut: אל El" },
          paragraphs: [
            "The name El expresses divine love without mediation. It is the name of mercy that expands, of generosity that gives without conditions. To orient oneself toward this name is to perceive that the divine will operates for the spiritual good of the being, even when the paths of that good escape immediate understanding. The Eternal manifests under this name as compassionate father and king who forgives. Its energy prevents absolute rigor from taking control of creation.",
            "Chesed is the highest Sefirah below the abyss. It acts as the representative of Chokhmah in the worlds of form, just as Gevurah represents Binah. When Chokhmah and Chesed align, when divine wisdom flows toward generosity, the result is an effusion of grace: the mochin of Chesed that nourish Zeir Anpin. The name El reminds us that the possibility of teshuvah, return, remains open. In the domain of this Sefirah, no situation lies beyond the reach of divine mercy."
          ]
        },
        {
          heading: { en: "Gevurah of Atzilut: אלהים Elohim", es: "Gevurah de Atzilut: אלהים Elohim" },
          paragraphs: [
            "The name Elohim changes according to the Sefirah it inhabits. In Binah it marks the supreme law of nature. In Gevurah it marks strict judgment, din. Here the divine distributes what you have earned through your acts. No more and no less. Chesed gives more than you deserve. Gevurah gives you what you deserve. Chesed dissolves limits. Gevurah establishes and sustains them.",
            "The Zohar calls this Sefirah Pachad, fear or dread, a name it used when manifesting to the patriarchs. Gevurah balances Chesed. Without din, creation dissolves into expansion without form. Without Chesed, din destroys. Elohim in Gevurah supervises: it removes what has expired, opens the way to the new, and sustains the integrity of the created order. It places tests before the soul so that you may develop your latent powers."
          ]
        },
        {
          heading: { en: "Tiferet of Atzilut: י-ה-ו-ה Havayah", es: "Tiferet de Atzilut: י-ה-ו-ה Havayah" },
          paragraphs: [
            "Tiferet is the central Sefirah of the Tree of Life, the axis that links Keter with Malkhut through the middle column. The name that corresponds to it, Havayah, the four-letter Name, is, according to the Zohar, the principal and unifying name: it encompasses the totality of the Tree and synthesizes the relation between all the other names. The four letters of the name, Yod, He, Vav, He, correspond to the four dimensions of time: the past in Yod, the present unfolding in the two letters He, and the bridge between them in Vav. Hence the consecrated translation \"the Eternal,\" which points to a being who transcends time without being absent from any of its moments.",
            "Havayah comes from the root hayah, to be, to exist, in a conjugation that belongs to none of the normal verbal tenses of Hebrew: it contains them all at once. For this reason the Zohar teaches that Havayah in Tiferet expresses divine presence in creation, the spark of divinity you recognize in your own center when you reach a sufficient level of daat, experiential knowledge."
          ]
        },
        {
          heading: { en: "Hod of Atzilut: אלהים צבאות Elohim Tzevaot", es: "Hod de Atzilut: אלהים צבאות Elohim Tzevaot" },
          paragraphs: [
            "Where Havayah Tzevaot marks the expansion of active forces, Elohim Tzevaot marks the structure that organizes them and gives them channel. Elohim in Hod operates as the principle of din that regulates the multiplicity of Netzach, establishing the limits within which energies can act without dissolving order. It is the name of structuring rigor applied to the hosts of the universe.",
            "Netzach and Hod form a functional pair that the mequbalim call the two thighs of the Tree: Netzach bears impulse, Hod bears articulation. One dynamizes, the other configures. The interaction between Havayah Tzevaot and Elohim Tzevaot reflects on the plane of Atzilut the relation between Chesed and Gevurah on the plane of the greater Partzufim: victory and glory, expansion and form, two aspects of the divine flow that need one another in order to produce something real."
          ]
        },
        {
          heading: { en: "Yesod of Atzilut: שדי Shaddai", es: "Yesod de Atzilut: שדי Shaddai" },
          paragraphs: [
            "The name Shaddai appears in Bereshit 17:1, when the Eternal presents Himself to Abraham: Ani El Shaddai, hithalej lefanai veheyeh tamim, \"I am El Shaddai, walk before Me and be whole.\" In Shemot 6:3 the text specifies that the Eternal revealed Himself to the patriarchs under this name, not under the name Havayah. This doctrinal distinction marks two levels of relation: the name Shaddai belongs to the bond the patriarchs maintained with the divine before Sinai, a bond of promises: multiplication, fertility, protective presence.",
            "The name Shaddai condenses three registers. Some masters read it as a combination of roots that allude to the power of limitation: she-amar dai, the One who said enough, the act by which the Eternal halted the expansion of creation and gave it defined form. Yesod is the Sefirah of the channel; it receives from all the higher Sefirot and transmits to Malkhut. Shaddai governs that function of transmission and fecundation. The connection of Yesod with the berit, the covenant, makes Shaddai a name associated with the fulfillment of divine covenants and with the continuity of the spiritual lineage."
          ]
        },
        {
          heading: { en: "Malkhut of Atzilut: אדני Adonai", es: "Malkhut de Atzilut: אדני Adonai" },
          paragraphs: [
            "Malkhut is the distal end of the Tree of Life, the level at which divine light takes its most concrete form and becomes accessible to your direct experience. The name Adonai, Lord, expresses the sovereignty of the Eternal over what exists. In Malkhut, the Eternal is King: His will gives form to reality.",
            "Adonai acts as the threshold between two types of reality. Above Malkhut, the universe is one; below it begins the multiplicity of the individual. This name also belongs to the Shekhinah, the Divine Presence that dwells in the world, and it is the one that halakhic tradition authorizes to be pronounced aloud during prayer, substituting for the ineffable Name. Adonai points to the transcendent Eternal and the immanent Eternal: to the King who is above all and to the Presence that fills every place, the soul of the world that touches every aspect of existence."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Atzilut surgió después de la Shevirat HaKelim, la ruptura de los recipientes del mundo de Tohu, en estado de Tikun completo. Los tres mundos inferiores, Beriah, Yetzirah y Asiyah, no han completado su rectificación; dependen de la avodat haneshamot, el trabajo espiritual de las almas encarnadas, para rescatar y elevar las nitzotzot, las chispas de luz divina que cayeron en ellos. Aquí radica la misión humana. El versículo de Zacarías 14:9, \"Será el Eterno Rey sobre toda la tierra; en aquel día será el Eterno Uno y Su Nombre Uno\", expresa esa meta: la unificación pendiente en los mundos inferiores.",
            "Los nombres del Eterno son el eje de la práctica meditativa de la Qabalah. Los maestros enseñan que la Torá entera, con sus seiscientas mil letras, es la escritura de un único nombre divino desplegado en el tiempo. En cualquier kavanah, intención espiritual, la conciencia se orienta hacia el nombre divino que corresponde a la Sefirah trabajada. Los nombres no designan solamente: son emanaciones directas de lo divino con kedushah propia, presencias activas que conectan al contemplador con la realidad nombrada. La tradición fija diez nombres principales, uno para cada Sefirah de Atzilut. Los recorremos a continuación."
          ]
        },
        {
          heading: { en: "Keter of Atzilut: אהיה Ehyeh", es: "Keter de Atzilut: אהיה Ehyeh" },
          paragraphs: [
            "Este nombre aparece en Shemot 3:14, cuando el Eterno responde a Moshe con las palabras Ehyeh Asher Ehyeh. La traducción \"Soy el que Soy\" ignora la gramática del término. En el hebreo bíblico, Ehyeh usa el aspecto imperfecto: una acción en curso o por realizarse. La lectura precisa es \"Seré el que Seré\". Expresa voluntad de existir, de presentarse, de manifestarse. Rechaza la fijación en cualquier instante pasado. Sigue llegando.",
            "El nombre completo, Ehyeh Asher Ehyeh, refleja las tres Sefirot superiores. El primer Ehyeh alude a Keter en su forma más pura: la existencia como voluntad pura, sin contenido articulado. Asher, \"que\" o \"el cual\", corresponde a Jokhmah, la sabiduría primordial donde los contenidos existen en estado de punto indiviso. En hebreo, Asher porta la resonancia de ser, felicidad y satisfacción plena. El segundo Ehyeh corresponde a Binah: la misma existencia suprema reflejada y articulada, el mar cósmico donde los contenidos de Jokhmah se despliegan y toman forma.",
            "Al pronunciar Ehyeh, reproduces el movimiento de la respiración: la exhalación lanza la vida hacia fuera, la inhalación la recoge de vuelta. Los maestros del Zohar señalan que en este nombre se escucha el aliento de la creación. Cuando el Eterno exhala, los Olamot emanan. Cuando inhala, regresan hacia su fuente. El ciclo de emanación y retorno, ratzo vashov, está inscrito en la fonética de este nombre."
          ]
        },
        {
          heading: { en: "Chokhmah of Atzilut: י-ה Yah", es: "Jokhmah de Atzilut: י-ה Yah" },
          paragraphs: [
            "Yah es la primera mitad del nombre Havayah y la segunda mitad, la parte tangible, del Ehyeh anterior. Se lo llama el nombre de la sabiduría porque Jokhmah es el primer destello de inteligencia divina, el punto anterior a toda forma. La forma comienza en Binah; Jokhmah es el instante que la precede, el instante en que algo es sabido antes de poder ser dicho. Este nombre escapa a toda descripción verbal exhaustiva: el lenguaje opera con formas, y Yah es anterior a ellas.",
            "La primera palabra de la Torá, Bereshit, puede leerse como bereshit, \"en sabiduría\" o \"a través de la sabiduría\", en consonancia con el Salmo 104:24: \"Con sabiduría hiciste todas ellas\". El nombre Yah aparece de manera central en Shemot 15:2, en el Shirat haYam, el canto que el pueblo entonó después de cruzar el mar: \"Ozi vezimrat Yah\", \"Mi fortaleza y mi canto es Yah\". En ese contexto, el nombre porta una cualidad liberadora que supera los límites de la necesidad y de la ley de causa y efecto.",
            "En hebreo, las palabras ish, איש, e isha, אשה, hombre y mujer, comparten la raíz esh, אש, fuego. La letra Yod que distingue a ish y la letra He que distingue a isha son las dos letras de Yah. Cuando la relación entre ambos está habitada por el nombre divino, el fuego que los une es el de la vida y la creación. Cuando ese nombre se ausenta, lo que queda es solo esh, fuego sin dirección, pasión sin arraigo. Esta enseñanza del Talmud, Sota 17a, ilustra la naturaleza de Yah como principio que sostiene la polaridad sin disolver ninguno de sus términos."
          ]
        },
        {
          heading: { en: "Binah of Atzilut: י-ה-ו-ה with the vowels of Elohim, Yehovi", es: "Binah de Atzilut: י-ה-ו-ה con las vocales de Elohim, Yehovi" },
          paragraphs: [
            "El nombre de Binah lleva las letras de Havayah vocalizadas con las vocales de Elohim. Havayah, masculino, sabiduría, se vierte en Elohim, femenino, estructura. Los dos aspectos, indistintos en Jokhmah, aquí se separan y cooperan.",
            "Elohim aparece en las tres Sefirot de la columna izquierda del Árbol con matices distintos. En Binah porta su sentido más alto: la naturaleza en su principio, la ley que da forma a lo existente. El primer capítulo de Bereshit usa este nombre treinta y dos veces, el número de los treinta y dos caminos de Jokhmah del Sefer Yetzirah, porque trata la creación del mundo natural y sus leyes. El segundo capítulo usa Havayah Elohim, nombre compuesto: luz y recipiente, orden sobrenatural y ley natural en unidad.",
            "Binah es Ima Ilaah, la Madre Superior. Contiene en su seno a las Sefirot de Zeir Anpin y las lleva a desplegarse. Madre de todas las formas. Desde aquí, la ley de causa y efecto expresa el orden divino. Cualquier quiebre de ese orden, lo que el Zohar llama \"el camino por encima de la naturaleza\", proviene de Jokhmah, que está sobre la ley sin abolirla."
          ]
        },
        {
          heading: { en: "Chesed of Atzilut: אל El", es: "Chesed de Atzilut: אל El" },
          paragraphs: [
            "El nombre El expresa el amor divino sin mediación. Es el nombre de la misericordia que se expande, de la generosidad que da sin condiciones. Orientarse hacia este nombre es percibir que la voluntad divina opera para el bien espiritual del ser, aunque los caminos de ese bien escapen a la comprensión inmediata. El Eterno se manifiesta bajo este nombre como padre compasivo y rey que perdona. Su energía impide que el rigor absoluto tome el control de la creación.",
            "Chesed es la Sefirah más elevada debajo del abismo. Actúa como representante de Jokhmah en los mundos de la forma, del mismo modo en que Gevurah representa a Binah. Cuando Jokhmah y Chesed se alinean, cuando la sabiduría divina fluye hacia la generosidad, el resultado es una efusión de gracia: los mochin de Chesed que alimentan a Zeir Anpin. El nombre El recuerda que la posibilidad de teshuvah, retorno, permanece abierta. En el ámbito de esta Sefirah, ninguna situación queda fuera del alcance de la misericordia divina."
          ]
        },
        {
          heading: { en: "Gevurah of Atzilut: אלהים Elohim", es: "Gevurah de Atzilut: אלהים Elohim" },
          paragraphs: [
            "El nombre Elohim cambia según la Sefirah que habita. En Binah marca la ley suprema de la naturaleza. En Gevurah marca el juicio estricto, el din. Aquí lo divino reparte lo que ganaste con tus actos. Ni más ni menos. Chesed da más de lo que mereces. Gevurah te da lo que mereces. Chesed disuelve los límites. Gevurah los establece y los sostiene.",
            "El Zohar llama a esta Sefirah Pachad, temor o pavor, nombre que usó al manifestarse a los patriarcas. Gevurah equilibra a Chesed. Sin din, la creación se disuelve en expansión sin forma. Sin Chesed, el din destruye. Elohim en Gevurah supervisa: elimina lo caduco, abre paso a lo nuevo, sostiene la integridad del orden creado. Pone pruebas al alma para que desarrolles tus potencias latentes."
          ]
        },
        {
          heading: { en: "Tiferet of Atzilut: י-ה-ו-ה Havayah", es: "Tiferet de Atzilut: י-ה-ו-ה Havayah" },
          paragraphs: [
            "Tiferet es la Sefirah central del Árbol de la Vida, el eje que vincula Keter con Malkhut a través de la columna del medio. El nombre que le corresponde, Havayah, el Nombre de cuatro letras, es, según el Zohar, el nombre principal y unificador: abarca la totalidad del Árbol y sintetiza la relación entre todos los demás nombres. Las cuatro letras del Nombre, Yod, He, Vav, He, corresponden a las cuatro dimensiones del tiempo: el pasado en la Yod, el presente que se despliega en las dos He, el puente entre ambos en la Vav. De ahí la traducción consagrada \"el Eterno\", que señala un ser que trasciende el tiempo sin estar ausente de ninguno de sus momentos.",
            "Havayah proviene de la raíz hayah, ser, existir, en una conjugación que no pertenece a ninguno de los tiempos verbales normales del hebreo: engloba todos a la vez. Por eso el Zohar enseña que Havayah en Tiferet expresa la presencia divina en la creación, la chispa de divinidad que reconoces en tu propio centro cuando alcanzas un nivel de daat, conocimiento experiencial, suficiente."
          ]
        },
        {
          heading: { en: "Hod of Atzilut: אלהים צבאות Elohim Tzevaot", es: "Hod de Atzilut: אלהים צבאות Elohim Tzevaot" },
          paragraphs: [
            "Donde Havayah Tzevaot marca la expansión de las fuerzas activas, Elohim Tzevaot marca la estructura que las organiza y les da cauce. Elohim en Hod opera como el principio del din que regula la multiplicidad de Netzach, establece los límites dentro de los cuales las energías pueden actuar sin disolver el orden. Es el nombre del rigor estructurador aplicado a las huestes del universo.",
            "Netzach y Hod forman un par funcional que los mequbalim llaman los dos muslos del Árbol: Netzach porta el impulso, Hod porta la articulación. Uno dinamiza, el otro configura. La interacción entre Havayah Tzevaot y Elohim Tzevaot refleja en el plano de Atzilut la relación entre Chesed y Gevurah en el plano de los Partzufim mayores: victoria y gloria, expansión y forma, dos aspectos del flujo divino que se necesitan para producir algo real."
          ]
        },
        {
          heading: { en: "Yesod of Atzilut: שדי Shaddai", es: "Yesod de Atzilut: שדי Shaddai" },
          paragraphs: [
            "El nombre Shaddai aparece en Bereshit 17:1, cuando el Eterno se presenta a Abraham: Ani El Shaddai, hithalej lefanai veheyeh tamim, \"Yo soy El Shaddai, camina ante Mí y sé íntegro\". En Shemot 6:3 el texto precisa que a los patriarcas el Eterno se reveló bajo este nombre, no bajo el nombre Havayah. Esta distinción doctrinal marca dos niveles de relación: el nombre Shaddai pertenece al vínculo que los patriarcas mantuvieron con lo divino antes del Sinaí, un vínculo de promesas: multiplicación, fertilidad, presencia protectora.",
            "El nombre Shaddai condensa tres registros. Algunos maestros lo leen como combinación de raíces que aluden al poder de limitación: she-amar dai, el que dijo basta, el acto por el cual el Eterno detuvo la expansión de la creación y le dio forma definida. Yesod es la Sefirah del canal; recibe de todas las Sefirot superiores y transmite a Malkhut. Shaddai gobierna esa función de transmisión y fecundación. La conexión de Yesod con la berit, la alianza, hace de Shaddai un nombre asociado con el cumplimiento de los pactos divinos y con la continuidad del linaje espiritual."
          ]
        },
        {
          heading: { en: "Malkhut of Atzilut: אדני Adonai", es: "Malkhut de Atzilut: אדני Adonai" },
          paragraphs: [
            "Malkhut es el extremo distal del Árbol de la Vida, el nivel en que la luz divina toma su forma más concreta y se vuelve accesible a tu experiencia directa. El nombre Adonai, Señor, expresa la soberanía del Eterno sobre lo existente. En Malkhut, el Eterno es Rey: Su voluntad da forma a la realidad.",
            "Adonai actúa como umbral entre dos tipos de realidad. Por encima de Malkhut, el universo es uno; por debajo comienza la multiplicidad de lo individual. Este nombre pertenece también a la Shekhinah, la Presencia Divina que habita el mundo, y es el que la tradición halakhica autoriza pronunciar en voz alta durante la oración, sustituyendo al Nombre inefable. Adonai señala al Eterno trascendente y al Eterno inmanente: al Rey que está por encima de todo y a la Presencia que llena cada lugar, el alma del mundo que toca cada aspecto de la existencia."
          ]
        }
      ]
    }
  },
  {
    id: "olam-haberiah",
    parentId: "arba-olamot",
    level: 2,
    mainNumber: 4.2,
    title: { en: "Olam haBeriah", es: "Olam haBeriah" },
    hebrew: "עולם הבריאה",
    subtitle: { en: "World of Creation", es: "Mundo de la Creación" },
    sections: {
      en: [
        {
          paragraphs: [
            "In Beriah, divine light begins to particularize. Here the transparency of Atzilut disappears. A reality arises with its own density, a presence that the Heikhalot texts describe as incandescent, filled with radiance, yet separated from its source. Beriah is Olam haKise, the world of the Throne: the support on which the Shekhinah rests when she manifests toward the lower worlds.",
            "The Sefirot of Beriah are called Heikhalot, Palaces, and each one houses an archangel. The archangel does not decide on its own: it expresses the essence of its Sefirah, the face that this Sefirah presents at the level of Beriah. To contemplate an archangel, in the experiential sense of the prophets and the masters of the Heikhalot, is to contemplate a divine quality in its clearest form, without the veil of matter or the distortion of ego. The archangels are not the divine: they are servants and channels, each with a precise domain and a function within the order of creation."
          ]
        },
        {
          heading: { en: "Keter of Beriah: מטטרון Metatron", es: "Keter de Beriah: מטטרון Metatron" },
          paragraphs: [
            "Metatron occupies the highest position among the angelic beings. He is called Sar haPanim, the Prince of the Face, and Akhtariel, the one who bears the divine crown, a name that links his function with Keter. The Sefer Heikhalot, 3 Enoch, identifies Metatron with Chanoch, the seventh patriarch from Adam. Bereshit says of Chanoch that he walked with Elohim and disappeared because Elohim took him. 3 Enoch describes his transformation: Chanoch was elevated and made into Metatron, keeper of the heavenly archive and mediator between the worlds.",
            "In Shemot 23:20-21, the Eternal announces to Moshe the sending of an angel who will lead the people to the promised place and adds: \"for My name is in him.\" This identity between the angel and the divine name allows the Sefer Heikhalot to call Metatron the little Havayah. It does not affirm divinity. It indicates that Metatron is the instrument through which the Eternal acts in Beriah, the channel of greatest transparency for the divine will to reach the lower worlds."
          ]
        },
        {
          heading: { en: "Chokhmah of Beriah: רזיאל Raziel", es: "Jokhmah de Beriah: רזיאל Raziel" },
          paragraphs: [
            "The name Raziel comes from raz, secret, plus El. In Hebrew, the numerical value of raz equals that of Ohr, light: secret and light share the same numerical root. There lies the key to Raziel. The deepest wisdom remains hidden because its intensity exceeds what you can receive without preparation. Raziel radiates that hidden light over all that exists, keeping it accessible to whoever seeks it without exposing it indiscriminately.",
            "The root raz connects with Ratzon, will, and with raz in its sense of potency that advances. Raziel embodies the Divine Will in action at the level of Chokhmah, what some medieval texts call the Logos or primordial Word: the first light that emanates from Keter and that the Zohar describes as or haganuz, the hidden light that has not been abolished but stored away for the righteous.",
            "The legend of the Sefer Raziel, the book that, according to midrashic tradition, Raziel gave to Adam after his expulsion from Eden as a guide for the Tikun of his soul, circulates in medieval qabalistic literature. The book passed from generation to generation, from Noach to Abraham, from Abraham to Moshe, and from Moshe to Solomon. The knowledge of how to repair what was damaged, the wisdom of Tikun, is transmission, not invention: it comes from above and is perpetuated in the chain of those who receive and guard it."
          ]
        },
        {
          heading: { en: "Binah of Beriah: צפקיאל Zafkiel", es: "Binah de Beriah: צפקיאל Zafkiel" },
          paragraphs: [
            "The name Zafkiel admits two readings: the one who contemplates El, or El who contemplates. The gaze of God upon His creation. This ambiguity reveals his function: Zafkiel is the angel of Providence, the intelligence that supervises the form of each being and guides it toward its Tikun.",
            "In the structure of the Tree, Binah is Ima, Mother. She contains the lower Sefirot in her womb and leads them to unfold. Zafkiel embodies that maternal function on the plane of Beriah: he protects form, sustains the process of maturation, accompanies cycles of development, and leads them to completion. His limits and trials create the conditions for a being to attain the form that belongs to it. Medieval texts call him the angel of the Ideal Temple, of the heavenly Yerushalayim, the perfect form toward which every historical and spiritual process tends."
          ]
        },
        {
          heading: { en: "Chesed of Beriah: צדקיאל Zadqiel", es: "Chesed de Beriah: צדקיאל Zadqiel" },
          paragraphs: [
            "The name Zadqiel bears the root tzedek, justice, righteousness, charity, and the divine name El. These are not alternative meanings but aspects of one reality: in Chesed, justice is exercised with overflowing generosity, righteousness is expressed as grace.",
            "Zadqiel acts as advocate of the soul before the heavenly court. He presents the merits of each human being, magnifies the good, and defends with mercy from the pillar of kindness. The high priest who intercedes for the people, Malki-Tzedek in Bereshit 14:18-19 as biblical prototype, offers the best image of his function. He seeks for each soul to reach the level of tzadik, righteous one: not by exception or favor, but because divine goodness wants every being to attain the fullness of its spiritual possibility."
          ]
        },
        {
          heading: { en: "Gevurah of Beriah: קמואל Qamuel", es: "Gevurah de Beriah: קמואל Qamuel" },
          paragraphs: [
            "Qamuel accuses from heaven. He stands opposite Zadqiel. His name contains qam, to rise, to arise, and El: a force that rises like fire. Zadqiel defends; Qamuel accuses. Zadqiel magnifies merits; Qamuel exposes faults. This function is not malicious. It is structural. Without the force that points to deviation and demands correction, the moral order of the universe loses its integrity.",
            "The fire of Qamuel destroys what obstructs and purifies what can be purified. Qabalistic texts link the number 91, the numerical value of Amen and the union of Havayah, 26, and Adonai, 65, with the divine unity that Qamuel defends. The Pachad, fear, that another nomenclature applies to Gevurah is the fear of altering that unity, of adding to divine reality something that does not belong to it. That fear, when well oriented, leads to correction. When badly oriented, it paralyzes. Qamuel's passion pushes the being to recognize its deviations and return to the unity it never abandoned."
          ]
        },
        {
          heading: { en: "Tiferet of Beriah: מיכאל Mikhael", es: "Tiferet de Beriah: מיכאל Mikhael" },
          paragraphs: [
            "Mikhael is one of the three archangels named in sacred texts and the one who maintains the most direct relation with Israel and humanity. His name poses a rhetorical question: Mi kamokha ba-Elim, Yah?, Who is like You among the mighty, Yah? The question has no answer. It points to the radical transcendence of the Eternal before all that exists, including the highest beings.",
            "Mikhael sustains the cosmic balance and limits the forces of chaos, the dragon or serpent he defeats in iconography. This function maintains the balance of the Tree. The qabalistic vision does not destroy evil: it recognizes its function in the cosmic design and prevents it from exceeding its place. The Eternal governs light and darkness. Mikhael executes that government at the level of Tiferet of Beriah. His most subtle task is to elevate consciousness toward unity. In cosmic reality there is only one Eternal. Every apparent duality is His expression."
          ]
        },
        {
          heading: { en: "Netzach of Beriah: הניאל Haniel", es: "Netzach de Beriah: הניאל Haniel" },
          paragraphs: [
            "The name Haniel comes from chen, grace or favor, and El. Haniel is the angel of divine grace expressed through beauty: sonic, visual, poetic. Everything that moves the soul before the intellect classifies what has been received. In Netzach the divine presence is not reasoned; it is felt. That sensation, when genuine, is the first movement of devekut, adhesion to the Eternal.",
            "Haniel governs the world of the arts when they transmit divine grace, not when they manufacture technique. The pain of love, the nostalgia for a presence intuited but unreachable, also belongs to his domain: that pain, without burying or diverting it, becomes the force that pushes the soul toward its source. Wounded beauty becomes spiritual search. Spiritual search, when honest, ends in the source of all beauty."
          ]
        },
        {
          heading: { en: "Hod of Beriah: רפאל Rafael", es: "Hod de Beriah: רפאל Rafael" },
          paragraphs: [
            "Rafael, Refuah El, the healing of the Eternal, is the archangel of healing. The Book of Tobit presents him as one of the angels before the divine Glory, sent to heal. The Zohar sometimes calls him Boel, a name whose numerical value, 39, coincides with Havayah Echad, the Eternal is One, which closes the Shema. The mequbalim read in this correspondence that healing restores unity: to heal is to return dispersed parts to the coherence proper to being.",
            "The letters of his name, Resh, head, and Peh, mouth, indicate that Rafael governs the passage from thought to speech. In Beriah, language sustains existence: the Palaces, Heikhalot, are built of articulated intelligence. Rafael connects with Zafkiel, archangel of Binah, because both names share the numerical value 311, which is also that of ish, איש, man. Rafael's medicine does not heal only bodies: it understands the structure of a being and, by understanding it, restores it."
          ]
        },
        {
          heading: { en: "Yesod of Beriah: גבריאל Gabriel", es: "Yesod de Beriah: גבריאל Gabriel" },
          paragraphs: [
            "Gabriel, Gevurat El, the strength of the Eternal, bears in his name the energy of Gevurah elevated to divine service. He is the Messenger, the angel of Vision and Revelation, the channel of Ruach HaKodesh manifested through the prophets. As Yesod of Beriah, he receives the higher lights and transmits them toward Malkhut: he gathers the accumulated energy of the previous Sefirot and channels it downward.",
            "Tradition links him with resurrection and with the cycles of life: birth, death, and new beginning. He guards the gate of Daat, the entrance to the higher spiritual worlds. He evaluates whether a soul can ascend to higher levels of consciousness. His records, the accounts of each being's journey, are the criterion. He transmits revelation and ensures that it reaches the one who can receive it."
          ]
        },
        {
          heading: { en: "Malkhut of Beriah: סנדלפון Sandalfon", es: "Malkhut de Beriah: סנדלפון Sandalfon" },
          paragraphs: [
            "Sandalfon does not appear by name in the Tanakh. The literature of the Heikhalot and later traditions identify him with Eliyahu haNavi transformed and elevated, just as Metatron is Chanoch transformed. This correspondence matters: the two ends of the Tree in Beriah, Keter and Malkhut, are inhabited by human souls that completed their ascent. They are not entities alien to the human condition: they are its highest possibility realized.",
            "Sandalfon and Metatron are also the two Keruvim of the Ark of the Testimony, the space between which the divine voice manifests. Their wings touch without obstructing one another: they point to the unity of the extremes of the axis of the world. Sandalfon receives the name Angel of the Height because he operates in Malkhut, the lowest level of Beriah, but his influence reaches up to the Throne of Glory. His function is to elevate the prayers of Israel. He gathers them on the plane of Malkhut and makes them ascend to Keter, closing the circuit between human petition and divine response. In him, Tikun Olam, the repair of the world, has its agent closest to the earth."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "En Beriah, la luz divina comienza a particularizarse. Aquí desaparece la transparencia de Atzilut. Surge una realidad con su propio espesor, una presencia que los textos de los Heikhalot describen como incandescente, llena de resplandor, pero separada de su fuente. Beriah es el Olam haKise, el mundo del Trono: el soporte sobre el que descansa la Shekhinah cuando se manifiesta hacia los mundos inferiores.",
            "Las Sefirot de Beriah se llaman Heikhalot, Palacios, y cada una aloja a un arcángel. El arcángel no decide por su cuenta: expresa la esencia de su Sefirah, el rostro que esa Sefirah presenta en el nivel de Beriah. Contemplar un arcángel, en el sentido experiencial de los profetas y de los maestros de los Heikhalot, es contemplar una cualidad divina en su forma más nítida, sin el velo de la materia ni la distorsión del ego. Los arcángeles no son lo divino: son servidores y canales, cada uno con un dominio preciso y una función dentro del orden de la creación."
          ]
        },
        {
          heading: { en: "Keter of Beriah: מטטרון Metatron", es: "Keter de Beriah: מטטרון Metatron" },
          paragraphs: [
            "Metatron ocupa la posición más alta entre los seres angélicos. Se lo llama Sar haPanim, el Príncipe del Rostro, y Akhtariel, el que porta la corona divina, nombre que vincula su función con Keter. El Sefer Heikhalot, 3 Enoch, identifica a Metatron con Chanoch, el séptimo patriarca desde Adam. Bereshit dice sobre Chanoch que caminó con Elohim y desapareció porque Elohim lo tomó. 3 Enoch describe su transformación: Chanoch fue elevado y convertido en Metatron, depositario del archivo celestial y mediador entre los mundos.",
            "En Shemot 23:20-21, el Eterno anuncia a Moshe el envío de un ángel que llevará al pueblo al lugar prometido y añade: \"porque Mi nombre está en él\". Esta identidad entre el ángel y el nombre divino permite que el Sefer Heikhalot llame a Metatron el pequeño Havayah. No afirma divinidad. Indica que Metatron es el instrumento por el cual el Eterno actúa en Beriah, el canal de mayor transparencia para que la voluntad divina llegue a los mundos inferiores."
          ]
        },
        {
          heading: { en: "Chokhmah of Beriah: רזיאל Raziel", es: "Jokhmah de Beriah: רזיאל Raziel" },
          paragraphs: [
            "El nombre Raziel proviene de raz, secreto, más El. En hebreo, el valor numérico de raz equivale al de Ohr, luz: el secreto y la luz comparten la misma raíz numérica. Ahí está la clave de Raziel. La sabiduría más profunda permanece oculta porque su intensidad supera lo que puedes recibir sin preparación. Raziel irradia esa luz oculta sobre todo lo existente, manteniéndola accesible para quien la busque sin exponerla de manera indiscriminada.",
            "La raíz raz conecta con Ratzon, voluntad, y con raz en su sentido de potencia que avanza. Raziel encarna la Voluntad Divina en acción en el nivel de Jokhmah, lo que algunos textos medievales llaman el Logos o el Verbo primordial: la primera luz que emana de Keter y que el Zohar describe como or haganuz, la luz oculta, que no ha sido abolida sino guardada para los justos.",
            "La leyenda del Sefer Raziel, el libro que, según la tradición midráshica, Raziel entregó a Adam después de su expulsión del Edén como guía para el Tikun de su alma, circula en la literatura qabalística medieval. El libro pasó de generación en generación, de Noach a Abraham, de Abraham a Moshe y de Moshe a Shlomo. El conocimiento de cómo reparar lo dañado, la sabiduría del Tikun, es transmisión, no invención: viene de arriba y se perpetúa en la cadena de quienes lo reciben y custodian."
          ]
        },
        {
          heading: { en: "Binah of Beriah: צפקיאל Zafkiel", es: "Binah de Beriah: צפקיאל Zafkiel" },
          paragraphs: [
            "El nombre Zafkiel admite dos lecturas: el que contempla a El, o El que contempla. La mirada de Dios sobre Su creación. Esta ambigüedad revela su función: Zafkiel es el ángel de la Providencia, la inteligencia que supervisa la forma de cada ser y la conduce hacia su Tikun.",
            "En la estructura del Árbol, Binah es Ima, Madre. Contiene en su seno a las Sefirot inferiores y las lleva a su despliegue. Zafkiel encarna esa función materna en el plano de Beriah: protege la forma, sostiene el proceso de maduración, acompaña los ciclos de desarrollo y los lleva a su completud. Sus límites y sus pruebas crean las condiciones para que un ser alcance la forma que le pertenece. Los textos medievales lo llaman el ángel del Templo Ideal, de la Yerushalayim celestial, la forma perfecta hacia la cual tiende todo proceso histórico y espiritual."
          ]
        },
        {
          heading: { en: "Chesed of Beriah: צדקיאל Zadqiel", es: "Chesed de Beriah: צדקיאל Zadqiel" },
          paragraphs: [
            "El nombre Zadqiel porta la raíz tzedek, justicia, rectitud, caridad, y el nombre divino El. No son acepciones alternativas sino aspectos de una misma realidad: en Chesed, la justicia se ejerce con generosidad desbordante, la rectitud se expresa como gracia.",
            "Zadqiel actúa como abogado del alma ante el tribunal celestial. Presenta los méritos de cada ser humano, amplifica lo bueno y defiende con misericordia desde el pilar de la bondad. El sumo sacerdote que intercede por el pueblo, Malki-Tzedek en Bereshit 14:18-19 como prototipo bíblico, ofrece la mejor imagen de su función. Busca que cada alma alcance el nivel de tzadik, de justo: no por excepción ni por favor, sino porque la bondad divina quiere que cada ser alcance la plenitud de su posibilidad espiritual."
          ]
        },
        {
          heading: { en: "Gevurah of Beriah: קמואל Qamuel", es: "Gevurah de Beriah: קמואל Qamuel" },
          paragraphs: [
            "Qamuel acusa desde el cielo. Se opone a Zadqiel. Su nombre contiene qam, levantarse, surgir, y El: una fuerza que se eleva como fuego. Zadqiel defiende, Qamuel acusa. Zadqiel magnifica los méritos, Qamuel expone las faltas. Esta función no es malévola. Es estructural. Sin la fuerza que señala el desvío y exige corrección, el orden moral del universo pierde su integridad.",
            "El fuego de Qamuel destruye lo que obstruye y purifica lo que puede purificarse. Los textos qabalísticos vinculan el número 91, valor numérico de Amen y unión de Havayah, 26, y Adonai, 65, con la unidad divina que Qamuel defiende. El Pachad, el temor, que otra nomenclatura aplica a Gevurah es el temor a alterar esa unidad, a añadir algo a la realidad divina que no le pertenece. Ese temor, bien orientado, lleva a la corrección. Mal orientado, paraliza. La pasión de Qamuel empuja al ser a reconocer sus desviaciones y a regresar a la unidad que nunca abandonó."
          ]
        },
        {
          heading: { en: "Tiferet of Beriah: מיכאל Mikhael", es: "Tiferet de Beriah: מיכאל Mikhael" },
          paragraphs: [
            "Mikhael es uno de los tres arcángeles nombrados en los textos sagrados y el que mantiene la relación más directa con Israel y la humanidad. Su nombre plantea una pregunta retórica: Mi kamokha ba-Elim, Yah?, ¿quién como Tú entre los poderosos, Yah? La pregunta carece de respuesta. Señala la trascendencia radical del Eterno frente a todo lo que existe, incluidos los seres más elevados.",
            "Mikhael sostiene la balanza cósmica y limita las fuerzas del caos, el dragón o la serpiente que vence en la iconografía. Esta función mantiene el equilibrio del Árbol. La visión qabalística no destruye el mal: le reconoce su función en el diseño cósmico y le impide exceder su lugar. El Eterno gobierna la luz y la oscuridad. Mikhael ejecuta ese gobierno en el nivel de Tiferet de Beriah. Su tarea más sutil es elevar la conciencia hacia la unidad. En la realidad cósmica existe un solo Eterno. Toda dualidad aparente es Su expresión."
          ]
        },
        {
          heading: { en: "Netzach of Beriah: הניאל Haniel", es: "Netzach de Beriah: הניאל Haniel" },
          paragraphs: [
            "El nombre Haniel proviene de chen, gracia o favor, y El. Haniel es el ángel de la gracia divina expresada a través de la belleza: sonora, visual, poética. Todo lo que mueve el alma antes de que el intelecto clasifique lo recibido. En Netzach la presencia divina no se razona: se siente. Esa sensación, cuando es genuina, es el primer movimiento de la devekut, la adhesión al Eterno.",
            "Haniel gobierna el mundo de las artes cuando estas transmiten la gracia divina, no cuando fabrican técnica. El dolor del amor, la nostalgia de una presencia intuida pero inalcanzable, es también su dominio: ese dolor, sin enterrarlo ni desviarlo, se convierte en la fuerza que empuja al alma hacia su fuente. La belleza herida se vuelve búsqueda espiritual. La búsqueda espiritual, cuando es honesta, termina en la fuente de toda belleza."
          ]
        },
        {
          heading: { en: "Hod of Beriah: רפאל Rafael", es: "Hod de Beriah: רפאל Rafael" },
          paragraphs: [
            "Rafael, Refuah El, la curación del Eterno, es el arcángel de la sanación. El libro de Tobit lo presenta como uno de los ángeles ante la Gloria divina, enviado para curar. El Zohar lo llama a veces Boel, nombre cuyo valor numérico, 39, coincide con Havayah Echad, el Eterno es Uno, que cierra el Shema. Los mequbalim leen en esta coincidencia que la curación restablece la unidad: sanar devuelve a las partes dispersas la coherencia propia del ser.",
            "Las letras de su nombre, Resh, cabeza, y Peh, boca, indican que Rafael gobierna el paso del pensamiento a la palabra. En Beriah, el lenguaje sostiene la existencia: los Palacios, Heikhalot, se construyen de inteligencia articulada. Rafael se conecta con Zafkiel, arcángel de Binah, porque ambos nombres comparten el valor numérico 311, que es también el de ish, איש, hombre. La medicina de Rafael no sana solo cuerpos: comprende la estructura de un ser y, al comprenderla, la restaura."
          ]
        },
        {
          heading: { en: "Yesod of Beriah: גבריאל Gabriel", es: "Yesod de Beriah: גבריאל Gabriel" },
          paragraphs: [
            "Gabriel, Gevurat El, la fortaleza del Eterno, porta en su nombre la energía de Gevurah elevada a servicio divino. Es el Mensajero, el ángel de la Visión y de la Revelación, el canal del Ruach HaKodesh que se manifiesta a través de los profetas. Como Yesod de Beriah, recibe las luces superiores y las transmite hacia Malkhut: recoge la energía acumulada de las Sefirot anteriores y la canaliza hacia abajo.",
            "La tradición lo vincula con la resurrección y con los ciclos de la vida: nacimiento, muerte y nuevo comienzo. Guarda la puerta de Daat, la entrada a los mundos espirituales superiores. Evalúa si un alma puede ascender a niveles más altos de conciencia. Sus registros, las cuentas del viaje de cada ser, son el criterio. Transmite la revelación y asegura que llegue a quien puede recibirla."
          ]
        },
        {
          heading: { en: "Malkhut of Beriah: סנדלפון Sandalfon", es: "Malkhut de Beriah: סנדלפון Sandalfon" },
          paragraphs: [
            "Sandalfon no aparece por su nombre en el Tanakh. La literatura de los Heikhalot y las tradiciones posteriores lo identifican con Eliyahu haNavi transformado y elevado, como Metatron es Chanoch transformado. Esta correspondencia importa: los dos extremos del Árbol en Beriah, Keter y Malkhut, los habitan almas humanas que completaron su ascenso. No son entidades ajenas a la condición humana: son su posibilidad más alta realizada.",
            "Sandalfon y Metatron son también los dos Keruvim del Arca del Testimonio, el espacio entre los cuales la voz divina se manifiesta. Sus alas se tocan sin obstaculizarse: señalan la unidad de los extremos del eje del mundo. Sandalfon recibe el nombre de Ángel de la Altura porque opera en Malkhut, el nivel más bajo de Beriah, pero su influencia alcanza hasta el Trono de la Gloria. Su función es elevar las oraciones de Israel. Las recoge en el plano de Malkhut y las hace ascender hasta Keter, cerrando el circuito entre la petición humana y la respuesta divina. En él, el Tikun Olam, la reparación del mundo, tiene su agente más cercano a la tierra."
          ]
        }
      ]
    }
  },
  {
    id: "olam-hayetzirah",
    parentId: "arba-olamot",
    level: 2,
    mainNumber: 4.3,
    title: { en: "Olam haYetzirah", es: "Olam haYetzirah" },
    hebrew: "עולם היצירה",
    subtitle: { en: "World of Formation", es: "Mundo de la Formación" },
    sections: {
      en: [
        {
          paragraphs: [
            "In Yetzirah the Sefirot function as formative powers: they generate images, words, structures, and dispositions of the soul. Sefer Yetzirah describes creation as a process of formation through letters and numbers. Each Sefirah of Yetzirah has its own angelic choir, a set of forces that execute at the formative level what the corresponding archangel sustains at the creative level of Beriah.",
            "The four worlds relate in this way: Atzilut is divine thought in its purest state; Beriah is the intention that arises from that thought; Yetzirah is the articulation of that intention into forms; Asiyah is the concrete realization of those forms. The angels of Yetzirah are sometimes called divine words: they articulate the will of the Eternal, the Devar HaShem in motion. To know the name of one of these forces is to orient oneself toward it and open oneself to its influence."
          ]
        },
        {
          heading: { en: "Keter of Yetzirah: חיות הקודש Chayot haKodesh", es: "Keter de Yetzirah: חיות הקודש Chayot haKodesh" },
          paragraphs: [
            "The Chayot haKodesh, the Holy Living Creatures, occupy the highest rank in Yetzirah. Ezekiel saw them first, Yechezkel 1, and described them in such detail that commentators still study them: four figures with four faces each - human, lion, ox, eagle - united so that they move together, always in fourfold form and at the same time. The text treats them as a singular entity even though they are four; their wings touch, they move as one, and they respond to the same impulse.",
            "From that fourfold unity come four kinds of light. The qabalists read them as life, light, love, and law, the four basic orientations of existence. The Chayot haKodesh correspond to the four fixed signs of the Zodiac: Aryeh, Leo; Shor, Taurus; Nesher, Eagle, which replaces Scorpio in its elevated aspect; and Adam, Aquarius. They are the living form of the Shem in Yetzirah: its four letters, its four elements, the four rivers of Eden. Everything fourfold in creation has its root here."
          ]
        },
        {
          heading: { en: "Chokhmah of Yetzirah: אופנים Ofanim", es: "Jokhmah de Yetzirah: אופנים Ofanim" },
          paragraphs: [
            "The Ofanim, the Wheels, appear in Ezekiel's vision, linked to the Chayot haKodesh but distinct from them. Wheels within wheels, covered with eyes, move in any direction without turning. Their internal structure already contains all directions. When the Chayot move, the Ofanim move with them. But the Ofanim have their own principle of movement: they are the cycles of the universe, the rhythms of time and space.",
            "In correspondence with Chokhmah, the Ofanim represent the cyclical movement of wisdom through time: the eras, seasons, and celestial orbits that mark the rhythms of existence. The eyes of the wheels are the possibilities that wisdom perceives at every point in the cycle. The Zodiac expresses Chokhmah at the level of Asiyah, according to Sefer Yetzirah. The Ofanim express it at the level of Yetzirah."
          ]
        },
        {
          heading: { en: "Binah of Yetzirah: אראלים Erelim", es: "Binah de Yetzirah: אראלים Erelim" },
          paragraphs: [
            "The Erelim, the Strong Ones, the Robust Ones, form the angelic choir of Binah in Yetzirah. The literature of the Heikhalot also calls them Thrones, a name that answers to the vision of Daniel's Throne, 7:9, and to the function of Binah as the stable base of divine order. The Erelim are the archetypes of all forms: every entity in creation has its celestial model in them, its primordial atom that precedes and gives form to its material manifestation.",
            "In the journey of the soul, the Erelim present the limits and challenges that shape the Neshamah. They are angels of Tikun: their interventions in your life do not occur at random. They lead you toward your most proper form. Silent architects of spiritual destiny, forces that give stability in a world that changes without pause."
          ]
        },
        {
          heading: { en: "Chesed of Yetzirah: חשמלים Hashmallim", es: "Chesed de Yetzirah: חשמלים Hashmallim" },
          paragraphs: [
            "Hashmal appears in Ezekiel's vision, 1:4, as one of the final layers before direct prophetic vision. The Talmud, Hagigah 13a, analyzes the word by dividing it into hash, silence, and mal, speech, or, according to another reading, as chashmal, a luminous substance: the level at which silence speaks, where consciousness becomes receptive without losing its clarity. Hashmal is the penultimate barrier before the heart of the Merkavah.",
            "The numerical value of Hashmal, 378, coincides with that of Malbush, garment: Hashmal is a garment of light that conceals and reveals. The Hashmallim are the angels of Chesed in Yetzirah: they radiate generosity, optimism, and expansive energy. They transmit the abundance of Chesed to the forms of the formative world, amplify the positive, and sustain the hope and enthusiasm that make spiritual growth possible."
          ]
        },
        {
          heading: { en: "Gevurah of Yetzirah: שרפים Serafim", es: "Gevurah de Yetzirah: שרפים Serafim" },
          paragraphs: [
            "Isaiah sees them in his inaugural vision, Isaiah 6: beings with six wings surround the Throne and proclaim without ceasing: Kadosh, kadosh, kadosh, Havayah Tzevaot, Holy, holy, holy is the Eternal of hosts. Their name comes from saraf, to burn: they are the Burning Ones. Their fiery nature destroys what is impure and purifies what resists. One touches Isaiah's lips with an ember from the altar. The prophet is cleansed for his mission.",
            "The bronze serpent that Moshe raises in the wilderness, Bamidbar 21:8-9, bears the same name, nachash saraf, and operates under the same principle: the energy that sickens and the energy that heals are the same, differently oriented. The Serafim are the fire of Gevurah in its highest form: fire that transmutes, not judgment that destroys. Their proclamation of divine holiness affirms that the kedushah of the Eternal permeates the whole earth. Nothing escapes His presence."
          ]
        },
        {
          heading: { en: "Tiferet of Yetzirah: מלאכים Malachim", es: "Tiferet de Yetzirah: מלאכים Malachim" },
          paragraphs: [
            "Malachim means messengers, angels. Tradition also reads it as Melachim, kings: these angels inhabit Tiferet of Yetzirah and bear the royal dignity of their function. They are the angels of the Sun; they carry the central energy of the Tree on the formative plane.",
            "They mediate as Tiferet mediates in the system: they receive from the higher levels, distribute toward the lower ones, balance the pillars, and connect the divine with the human. Psalm 68:18 evokes them as a divine presence accompanying the people. They guard your inner coherence - they do not protect you from external threats - they guard the integrity of your spiritual path."
          ]
        },
        {
          heading: { en: "Netzach of Yetzirah: תרשישים Tarshishim", es: "Netzach de Yetzirah: תרשישים Tarshishim" },
          paragraphs: [
            "The Tarshishim, the Radiant Ones, take their name from the golden gleam of topaz, tarshish, which the Zohar and the literature of the Heikhalot associate with Netzach. They are the angels of vitality and of the impulse to live, the forces that sustain the desire to create, to perpetuate oneself, to love. At the level of Yetzirah, Netzach is the domain of passions oriented toward the divine: love that aspires to union, beauty that provokes search, vital energy that becomes devotion when channeled.",
            "The Tarshishim are linked to the Hashmallim and to the Elohim of Netzach in Asiyah, but their function on the formative plane is to give the vital forces their dynamic form, to make impulse acquire the orientation of a movement toward the Eternal instead of remaining diffuse energy."
          ]
        },
        {
          heading: { en: "Hod of Yetzirah: בני האלהים Bene Elohim", es: "Hod de Yetzirah: בני האלהים Bene Elohim" },
          paragraphs: [
            "The Bene Elohim, sons of the Elohim, form the angelic choir of Hod, the Sefirah of intellectual splendor. They bear knowledge in transmissible form: the Tarshishim move vital impulse; the Bene Elohim articulate thought and build the systems of understanding that sustain civilization.",
            "Bereshit 6:2 describes the Bene Elohim taking human women. Qabalistic commentators read the passage as the union of the spiritual principle with bodily matter: celestial knowledge enters human history. Sefer Chanoch elaborates: the Bene Elohim transmitted arts and sciences to humanity. Knowledge that elevates can deviate if it lacks ethical orientation. You are responsible for how you use the gift, not the transmitters."
          ]
        },
        {
          heading: { en: "Yesod of Yetzirah: כרובים Keruvim", es: "Yesod de Yetzirah: כרובים Keruvim" },
          paragraphs: [
            "The Keruvim, Cherubim, guard thresholds. In Bereshit 3:24, two Keruvim with a flaming sword block the way to the Tree of Life after the expulsion from Eden. Their root may be linked to the Mesopotamian karibu, winged sphinxes that flanked temple doors; their function as guardians of entrances persists in the tradition.",
            "In the Ark of the Testimony, two figures of Keruvim with outstretched wings flank the space from which the divine Voice speaks, Shemot 25:22. The masters of the Talmud and Midrash identify them in that context with Metatron and Sandalfon in Beriah. In Yetzirah, the Keruvim govern the substance of the formative world and model it into images. Their dominion over the subconscious - imagination, dreams, complexes that shape personality - reflects that everything that appears in Malkhut first passes through Yesod, where the Keruvim filter and shape it. They also govern the elements on the formative plane: the forces that cohere the psychic and spiritual structures of the human being."
          ]
        },
        {
          heading: { en: "Malkhut of Yetzirah: אישים Ishim", es: "Malkhut de Yetzirah: אישים Ishim" },
          paragraphs: [
            "The Ishim, Souls of Fire or personal fires, form the choir closest to human experience. Psalm 104:4 evokes them: He makes His angels spirits and His servants a flame of fire. Their name points to the fire that gives life to individual beings: the animating force that keeps the living being unified.",
            "They are the angels with the greatest access to our experience. The intuition that suddenly awakens you, the spark that arrives in dreams or meditation, the impulse that moves you toward what is right without a clear reason: this is how the Ishim appear in daily life. Their function on the plane of Asiyah is to orient the soul toward its spiritual development, to fan the inner flame that is extinguished under the weight of material routine. In their name, ish, man, lies their proximity to the human condition: they are the divine fire that burns in every conscious being."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "En Yetzirah las Sefirot funcionan como potencias formadoras: generan imágenes, palabras, estructuras y disposiciones anímicas. El Sefer Yetzirah describe la creación como un proceso de formación a través de letras y números. Cada Sefirah de Yetzirah tiene su propio coro angélico, un conjunto de fuerzas que ejecutan en el nivel formativo lo que el arcángel correspondiente sostiene en el nivel creativo de Beriah.",
            "Los cuatro mundos se relacionan así: Atzilut es el pensamiento divino en su estado más puro, Beriah es la intención que surge de ese pensamiento, Yetzirah es la articulación de esa intención en formas, Asiyah es la realización concreta de esas formas. Los ángeles de Yetzirah son a veces llamados palabras divinas: articulan la voluntad del Eterno, la Devar HaShem en movimiento. Conocer el nombre de una de estas fuerzas es orientarse hacia ella y abrirse a su influencia."
          ]
        },
        {
          heading: { en: "Keter of Yetzirah: חיות הקודש Chayot haKodesh", es: "Keter de Yetzirah: חיות הקודש Chayot haKodesh" },
          paragraphs: [
            "Las Chayot haKodesh, las Criaturas Vivientes Sagradas, ocupan el rango más alto en Yetzirah. Ezequiel las vio primero, Yechezkel 1, y las describió con tanto detalle que los comentaristas aún las estudian: cuatro figuras con cuatro rostros cada una, hombre, león, toro y águila, unidas de modo que se mueven juntas, siempre en cuádruple y al mismo tiempo. El texto las trata como una entidad singular aunque sean cuatro; sus alas se tocan, se mueven como una y responden al mismo impulso.",
            "De esa unidad cuádruple salen cuatro tipos de luz. Los qabalistas las leen como vida, luz, amor y ley, las cuatro orientaciones básicas de la existencia. Las Chayot haKodesh corresponden a los cuatro signos fijos del Zodíaco: Aryeh, Leo; Shor, Tauro; Nesher, Águila, que reemplaza al Escorpión en su aspecto elevado; y Adam, Acuario. Son la forma viva del Shem en Yetzirah: sus cuatro letras, sus cuatro elementos, los cuatro ríos del Edén. Todo lo cuádruple en la creación tiene su raíz aquí."
          ]
        },
        {
          heading: { en: "Chokhmah of Yetzirah: אופנים Ofanim", es: "Jokhmah de Yetzirah: אופנים Ofanim" },
          paragraphs: [
            "Los Ofanim, las Ruedas, aparecen en la visión de Ezequiel, vinculados a las Chayot haKodesh pero separados de ellas. Ruedas dentro de ruedas, cubiertas de ojos, se mueven en cualquier dirección sin girar. Su estructura interna ya contiene todas las direcciones. Cuando las Chayot se mueven, los Ofanim se mueven con ellas. Pero los Ofanim tienen su propio principio de movimiento: son los ciclos del universo, los ritmos del tiempo y del espacio.",
            "En la correspondencia con Jokhmah, los Ofanim representan el movimiento cíclico de la sabiduría a través del tiempo: las eras, las estaciones y las órbitas celestes que marcan los ritmos de la existencia. Los ojos de las ruedas son las posibilidades que la sabiduría percibe en cada punto del ciclo. El Zodíaco expresa Jokhmah en el nivel de Asiyah, según el Sefer Yetzirah. Los Ofanim la expresan en el nivel de Yetzirah."
          ]
        },
        {
          heading: { en: "Binah of Yetzirah: אראלים Erelim", es: "Binah de Yetzirah: אראלים Erelim" },
          paragraphs: [
            "Los Erelim, los Fuertes, los Robustos, forman el coro angélico de Binah en Yetzirah. La literatura de los Heikhalot los llama también Tronos, nombre que responde a la visión del Trono de Daniel, 7:9, y a la función de Binah como base estable del orden divino. Los Erelim son los arquetipos de todas las formas: cada entidad en la creación tiene su modelo celeste en ellos, su átomo primordial que precede y da forma a su manifestación material.",
            "En el viaje del alma, los Erelim presentan los límites y los desafíos que moldean la Neshamah. Son ángeles de Tikun: sus intervenciones en tu vida no ocurren al azar. Te conducen hacia tu forma más propia. Arquitectos silenciosos del destino espiritual, fuerzas que dan estabilidad en un mundo que cambia sin pausa."
          ]
        },
        {
          heading: { en: "Chesed of Yetzirah: חשמלים Hashmallim", es: "Chesed de Yetzirah: חשמלים Hashmallim" },
          paragraphs: [
            "Hashmal aparece en la visión de Ezequiel, 1:4, como una de las últimas capas antes de la visión profética directa. El Talmud, Hagigah 13a, analiza la palabra dividiéndola en hash, silencio, y mal, palabra, o, según otra lectura, como chashmal, una sustancia luminosa: el nivel en que el silencio habla, donde la conciencia se vuelve receptiva sin perder su claridad. El Hashmal es la penúltima barrera antes del corazón de la Merkavah.",
            "El valor numérico de Hashmal, 378, coincide con el de Malbush, vestidura: el Hashmal es un ropaje de luz que oculta y revela. Los Hashmallim son los ángeles de Chesed en Yetzirah: irradian generosidad, optimismo y energía expansiva. Transmiten la abundancia de Chesed a las formas del mundo formativo, amplifican lo positivo, sostienen la esperanza y el entusiasmo que hacen posible el crecimiento espiritual."
          ]
        },
        {
          heading: { en: "Gevurah of Yetzirah: שרפים Serafim", es: "Gevurah de Yetzirah: שרפים Serafim" },
          paragraphs: [
            "Isaías los ve en su visión inaugural, Isaías 6: seres de seis alas rodean el Trono y proclaman sin cesar: Kadosh, kadosh, kadosh, Havayah Tzevaot, Santo, santo, santo es el Eterno de los ejércitos. Su nombre viene de saraf, arder, quemar: son los Ardientes. Su naturaleza ígnea destruye lo impuro y purifica lo que resiste. Uno toca los labios de Isaías con una brasa del altar. El profeta queda limpio para la misión.",
            "La serpiente de bronce que Moshe eleva en el desierto, Bamidbar 21:8-9, porta el mismo nombre, nachash saraf, y opera bajo el mismo principio: la energía que enferma y la que sana son la misma, con distinta orientación. Los Serafim son el fuego de Gevurah en su forma más elevada: fuego que transmuta, no juicio que destruye. Su proclamación de la santidad divina afirma que la kedushah del Eterno impregna toda la tierra. Nada escapa a Su presencia."
          ]
        },
        {
          heading: { en: "Tiferet of Yetzirah: מלאכים Malachim", es: "Tiferet de Yetzirah: מלאכים Malachim" },
          paragraphs: [
            "Malachim significa mensajeros, ángeles. La tradición lo lee también como Melachim, reyes: estos ángeles habitan Tiferet de Yetzirah y portan la dignidad real de su función. Son los ángeles del Sol, transportan la energía central del Árbol en el plano formativo.",
            "Median como Tiferet media en el sistema: reciben de los niveles superiores, distribuyen hacia los inferiores, equilibran los pilares, conectan lo divino con lo humano. El Salmo 68:18 los evoca como presencia divina que acompaña al pueblo. Guardan tu coherencia interna, no te protegen de amenazas externas: custodian la integridad de tu camino espiritual."
          ]
        },
        {
          heading: { en: "Netzach of Yetzirah: תרשישים Tarshishim", es: "Netzach de Yetzirah: תרשישים Tarshishim" },
          paragraphs: [
            "Los Tarshishim, los Resplandecientes, toman su nombre del resplandor dorado del topacio, tarshish, que el Zohar y la literatura de los Heikhalot asocian con Netzach. Son los ángeles de la vitalidad y del impulso de vivir, las fuerzas que sostienen el deseo de crear, de perpetuarse, de amar. En el nivel de Yetzirah, Netzach es el dominio de las pasiones orientadas hacia lo divino: el amor que aspira a unión, la belleza que provoca búsqueda, la energía vital que se convierte en devoción cuando se encauza.",
            "Los Tarshishim están vinculados a los Hashmallim y a los Elohim de Netzach en Asiyah, pero su función en el plano formativo es dar a las fuerzas vitales su forma dinámica, hacer que el impulso adquiera la orientación de un movimiento hacia el Eterno en lugar de quedarse como energía difusa."
          ]
        },
        {
          heading: { en: "Hod of Yetzirah: בני האלהים Bene Elohim", es: "Hod de Yetzirah: בני האלהים Bene Elohim" },
          paragraphs: [
            "Los Bene Elohim, hijos de los Elohim, forman el coro angélico de Hod, la Sefirah del esplendor intelectual. Portan el conocimiento en forma transmisible: los Tarshishim mueven el impulso vital, los Bene Elohim articulan el pensamiento y construyen los sistemas de comprensión que sostienen la civilización.",
            "Bereshit 6:2 describe a los Bene Elohim tomando mujeres humanas. Los comentaristas qabalísticos leen el pasaje como la unión del principio espiritual con la materia corporal: el conocimiento celestial entra en la historia humana. El Sefer Chanoch elabora: los Bene Elohim transmitieron artes y ciencias a la humanidad. El conocimiento que eleva puede desviar si carece de orientación ética. Respondes del uso que haces del don, no los transmisores."
          ]
        },
        {
          heading: { en: "Yesod of Yetzirah: כרובים Keruvim", es: "Yesod de Yetzirah: כרובים Keruvim" },
          paragraphs: [
            "Los Keruvim, Querubines, custodian umbrales. En Bereshit 3:24, dos Keruvim con espada flamígera bloquean el camino al Árbol de la Vida tras la expulsión del Edén. Su raíz podría vincularse a los karibu mesopotámicos, esfinges aladas que flanqueaban puertas de templos; su función como guardianes de entradas persiste en la tradición.",
            "En el Arca del Testimonio, dos figuras de Keruvim con alas extendidas flanquean el espacio desde el cual habla la Voz divina, Shemot 25:22. Los maestros del Talmud y del Midrash los identifican en ese contexto con Metatron y Sandalfon en Beriah. En Yetzirah, los Keruvim gobiernan la sustancia del mundo formativo y la modelan en imágenes. Su dominio sobre el subconsciente, imaginación, sueños y complejos que moldean la personalidad, refleja que todo lo que aparece en Malkhut pasa antes por Yesod, donde los Keruvim filtran y moldean. Gobiernan también los elementos en el plano formativo: las fuerzas que cohesionan las estructuras psíquicas y espirituales del ser humano."
          ]
        },
        {
          heading: { en: "Malkhut of Yetzirah: אישים Ishim", es: "Malkhut de Yetzirah: אישים Ishim" },
          paragraphs: [
            "Los Ishim, Almas de Fuego o fuegos personales, forman el coro más cercano a la experiencia humana. El Salmo 104:4 los evoca: Él hace a Sus ángeles espíritus y a Sus servidores llama de fuego. Su nombre señala el fuego que da vida a los seres individuales: la fuerza anímica que mantiene unido al ser vivo.",
            "Son los ángeles que más acceso tienen a nuestra experiencia. La intuición que te despierta de golpe, la chispa que llega en sueños o meditación, el impulso que te mueve hacia lo correcto sin razón clara: así se presentan los Ishim en la vida diaria. Su función en el plano de Asiyah es orientar el alma hacia su desarrollo espiritual, avivar la llama interior que se apaga bajo el peso de la rutina material. En su nombre, ish, hombre, está su proximidad a la condición humana: son el fuego divino que arde en cada ser consciente."
          ]
        }
      ]
    }
  },
  {
    id: "olam-haasiyah",
    parentId: "arba-olamot",
    level: 2,
    mainNumber: 4.4,
    title: { en: "Olam haAsiyah", es: "Olam haAsiyah" },
    hebrew: "עולם העשיה",
    subtitle: { en: "World of Action", es: "Mundo de la Acción" },
    sections: {
      en: [
        {
          paragraphs: [
            "Asiyah is the last and densest of the four worlds, but not the least sacred. Density is not impurity: it is the condition that makes action possible, the Tikun carried out in time and space. The Zohar teaches that the Shekhinah descends to Asiyah and that here the revelation of divine unity reaches its most complete expression. Multiplicity is at its maximum; unification has the greatest weight.",
            "In Asiyah each being reaches the first full level of self-consciousness, and free will reaches its maximum exercise. The name of the world, Asiyah, action, also carries the resonance of asiyah, healing or rectification: this is the place where decisions produce real Tikun. The world is divided into its spiritual dimension, Olam haAsiyah Ruchnit, where the intelligences of the celestial spheres operate, and its material dimension, Olam haAsiyah Gashmit, the physical universe.",
            "Medieval Jewish cosmology, elaborated from Sefer Yetzirah, systematized by the Ramak in Pardes Rimonim, and articulated by the Ari in Ets Haim, organizes the Sefirot of Asiyah according to the Ptolemaic model of spheres. It is not a scientific description; it is a spiritual map. Each planetary and celestial sphere is a conscious entity with its own intelligence and its own mode of transmitting divine light. The planets are not inert masses: they are instruments of providential order."
          ]
        },
        {
          heading: { en: "Keter of Asiyah: ראשית הגלגולים Reshit haGilgulim", es: "Keter de Asiyah: ראשית הגלגולים Reshit haGilgulim" },
          paragraphs: [
            "The sphere of Keter in Asiyah bears the name Reshit haGilgulim, the First Movement or Beginning of the Spheres. In the cosmological model that medieval Qabalah took from Ptolemaic astronomy, this sphere corresponds to the Primum Mobile, the first sphere of motion that impresses its rotation on all the others. It gives rhythm to the universe without any outer sphere moving it.",
            "The commentators on Sefer Yetzirah, the Ramak among them, identify this sphere as the principle of the temporal order of the cosmos: not a point in space, but the beginning of the movement that makes cycles possible. In it lies the root of all the galgalim, all the spheres that descend to the Earth. Reshit haGilgulim is the Keter of Asiyah because it is what stands closest to pure will in the material world: the first impulse, which has not yet taken a specific form but contains in potential the movements that will follow."
          ]
        },
        {
          heading: { en: "Chokhmah of Asiyah: מזרות Mazzarot", es: "Jokhmah de Asiyah: מזרות Mazzarot" },
          paragraphs: [
            "The Mazzarot, the Zodiac, appears in the book of Iyov, 38:32, when the Eternal asks Iyov whether he can bring out the Mazzarot in its season. It is the system of constellations that marks the cycles of time in the visible universe. Sefer Yetzirah, chapter 5, assigns the twelve signs of the Zodiac to the twelve months, the twelve organs of the body, and the twelve tribes of Israel. This establishes correspondences between cosmic cycles and the structure of human life.",
            "The assignment of the Mazzarot to Chokhmah of Asiyah shows that wisdom, in the material world, manifests as understanding of cycles: the patterns that repeat on galactic, solar, and terrestrial scales. The sidereal Zodiac and the tropical Zodiac are two readings of the same movement from different perspectives. Together, in their 26,000-year precession, they give body to the cycles of human history that the mequbalim call ages or yugas."
          ]
        },
        {
          heading: { en: "Binah of Asiyah: שבתאי Shabbatai", es: "Binah de Asiyah: שבתאי Shabbatai" },
          paragraphs: [
            "Saturn, Shabbatai, is the planet of limit and form. In the system of Sefer Yetzirah and in the Ramak's elaboration, Saturn corresponds to Binah because it gives structure to existence, imposes the law of consequence, and constrains the expansive impulse within a defined channel. Without structure there is no possible form; without Saturn there is no Binah.",
            "The Jewish astrological tradition, reflected in Sefer Yetzirah and in medieval commentators such as Ibn Ezra, describes Shabbatai as the planet of memory, accumulated time, and discipline that matures. Saturnine trials are lessons inscribed in the structure of time: the law of cause and effect that Binah represents at the level of the cosmos. One who reads these trials as spiritual instruction discovers in Saturn a severe but just teacher, whose severity permits growth."
          ]
        },
        {
          heading: { en: "Chesed of Asiyah: צדק Tzedeq", es: "Chesed de Asiyah: צדק Tzedeq" },
          paragraphs: [
            "Jupiter, Tzedeq, justice and rectitude in Hebrew, governs benevolent expansion. In the system of Sefer Yetzirah, Tzedeq gives without reserve: it multiplies, broadens, and blesses what it touches. Its correspondence with Chesed in Asiyah makes it an instrument of divine generosity on the material plane.",
            "The medieval sages link it to Torah study, the practice of tzedakah, and leadership in service of the common good. Its influence sustains one premise: the universe is generous. Abundance, material and spiritual, flows when the channel between the worlds remains open. Tzedeq signs Chesed in the visible heavens."
          ]
        },
        {
          heading: { en: "Gevurah of Asiyah: מאדים Maadim", es: "Gevurah de Asiyah: מאדים Maadim" },
          paragraphs: [
            "Mars, Maadim, embodies the force of Gevurah in Asiyah: combative energy, active discipline. Sefer Yetzirah gives it dominion over physical labor and endurance. Its nature is fire that purifies through effort, will forged in difficulty.",
            "The tension between Maadim and Tzedeq, Mars and Jupiter, Gevurah and Chesed, drives the dynamism of existence: the expansive impulse requires corrective limit; corrective limit needs impulse in order to avoid paralysis. In the Tree, Maadim fulfills its function when the soul reaches the balance of Tiferet, the Sun: only from your center do you receive the energy of Mars without being swept away by it."
          ]
        },
        {
          heading: { en: "Tiferet of Asiyah: חמה Hama", es: "Tiferet de Asiyah: חמה Hama" },
          paragraphs: [
            "The Sun, Hama, is Tiferet in the visible world. Its central position in the solar system replicates the central position of Tiferet in the Tree: everything turns around it, it illuminates everything, and its light makes life in this world possible. In Sefer Yetzirah, Hama governs the day and life; its energy sustains the vitality of the material world.",
            "One who reaches Tiferet within becomes the center of an inner universe: radiating instead of reflecting, acting from one's own axis instead of being moved by circumstances. The correspondence between Tiferet and the Sun appears in Sefer Yetzirah and in later qabalistic systems. The Sun symbolizes the concrete Logos, the divine principle of reason and order, which descends to Asiyah and gives coherence to what exists in it."
          ]
        },
        {
          heading: { en: "Netzach of Asiyah: נוגה Nogah", es: "Netzach de Asiyah: נוגה Nogah" },
          paragraphs: [
            "Venus, Nogah, the radiance, is the planet of Netzach in Asiyah. It carries the energy of beauty, love, and attraction among beings. In Sefer Yetzirah it corresponds to the faculties of imagination and sensitivity to beautiful form. This force causes the human being to perceive creation as something worthy of love, not only of use.",
            "In qabalistic cosmology, Nogah has an aspect that distinguishes it from the other planets: its light is seen both at dawn and at dusk, preceding the Sun or following it. This double position makes it a symbol of the transition between light and darkness, between the inner world and the outer one. Netzach is the Sefirah of eternity and persistence; Nogah expresses that persistence on the plane of Asiyah as inexhaustible beauty and love that does not yield."
          ]
        },
        {
          heading: { en: "Hod of Asiyah: כוכב Kokhav", es: "Hod de Asiyah: כוכב Kokhav" },
          paragraphs: [
            "Mercury, Kokhav, the Star, is the planet of Hod in Asiyah. Sefer Yetzirah assigns it dominion over the tongue, speech, and the faculties of communication. It is the planet of the messenger, of precise words, of thought articulated so that it can be transmitted to another.",
            "The medieval masters said that Kokhav governs the commerce of words and ideas: daily speech, the transmission of knowledge, teaching, and correspondence between levels of understanding. In the Tree of Life, Hod is the splendor that manifests in intellectual precision; Kokhav places that splendor at the service of exchange among beings. Hod's connection with Rafael, whose name joins head and mouth, resonates in the planetary correspondence: thinking clearly and speaking truthfully are, at this level, two aspects of the same spiritual function."
          ]
        },
        {
          heading: { en: "Yesod of Asiyah: לבנה Levanah", es: "Yesod de Asiyah: לבנה Levanah" },
          paragraphs: [
            "The Moon, Levanah, corresponds to Yesod in Asiyah. In the system of Sefer Yetzirah it is the celestial body closest to the Earth and the one that exercises the most direct effect on terrestrial life: it governs fluids, vital cycles, and the tides of body and soul. Its light is reflected, not its own: the Moon transmits the light of the Sun, just as Yesod receives from the higher Sefirot and transmits to Malkhut.",
            "This mirror function makes Levanah the most sensitive instrument of the system: it reflects the state of the Tree as a whole, amplifying or diminishing what it receives according to its cycle. The qabalistic masters describe Levanah as the level where Hod and Netzach, intellect and emotion, unite before passing to Malkhut. The clarity of the lunar reflection depends on the clarity of what is presented to it: keeping thoughts and emotions oriented toward the Eternal means keeping the mirror of Levanah clear."
          ]
        },
        {
          heading: { en: "Malkhut of Asiyah: ארץ Eretz", es: "Malkhut de Asiyah: ארץ Eretz" },
          paragraphs: [
            "Malkhut of Asiyah, Eretz, the Earth, closes the descent of divine light and opens every possible ascent. Sefer Yetzirah, chapter 3, teaches that the four elements, fire, wind, water, and earth, create at the level of Asiyah. They are not physical substances but qualitative principles: modes of being of the energy that manifests across the whole scale of the Tree, but only in Malkhut do they take stable and concrete form.",
            "Every Sefirah has affinity with an element, but in Malkhut the four coexist in balance and combine to give rise to what exists. Sefer Yetzirah describes this combination through the image of Eretz as the synthesis of the other three: the element earth condenses fire, wind, and water in their maximum density. Malkhut does not end the divine path; it reverses it. Here the light, when it touches its limit, begins to return toward its source, and human Tikun, the elevation of the nitzotzot, turns concrete action into spiritual transformation."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Asiyah es el último y más denso de los cuatro mundos, pero no el menos sagrado. La densidad no es impureza: es la condición que hace posible la acción, el Tikun que se realiza en tiempo y espacio. El Zohar enseña que la Shekhinah desciende a Asiyah y que aquí la revelación de la unidad divina alcanza su expresión más completa. La multiplicidad es máxima; la unificación tiene el mayor peso.",
            "En Asiyah cada ser alcanza el primer nivel pleno de autoconciencia y el libre albedrío llega a su máximo ejercicio. El nombre del mundo, Asiyah, acción, lleva también la resonancia de asiyah, curación o rectificación: este es el lugar donde las decisiones producen Tikun real. El mundo se divide en su dimensión espiritual, el Olam haAsiyah Ruchnit, donde operan las inteligencias de las esferas celestes, y su dimensión material, el Olam haAsiyah Gashmit, el universo físico.",
            "La cosmología medieval judía, elaborada a partir del Sefer Yetzirah, sistematizada por el Ramak en el Pardes Rimonim y articulada por el Ari en el Ets Haim, organiza las Sefirot de Asiyah según el modelo ptolemaico de esferas. No es una descripción científica; es un mapa espiritual. Cada esfera planetaria y celeste es una entidad consciente con su propia inteligencia y su propio modo de transmitir la luz divina. Los planetas no son masas inertes: son instrumentos del orden providencial."
          ]
        },
        {
          heading: { en: "Keter of Asiyah: ראשית הגלגולים Reshit haGilgulim", es: "Keter de Asiyah: ראשית הגלגולים Reshit haGilgulim" },
          paragraphs: [
            "La esfera de Keter en Asiyah lleva el nombre de Reshit haGilgulim, el Primer Movimiento o Inicio de las Esferas. En el modelo cosmológico que la Qabalah medieval tomó de la astronomía ptolemaica, esta esfera corresponde al Primum Mobile, la primera esfera de movimiento que imprime su rotación a todas las demás. Da ritmo al universo sin que ninguna esfera exterior lo mueva.",
            "Los comentadores del Sefer Yetzirah, el Ramak entre ellos, identifican esta esfera como el principio del orden temporal del cosmos: no un punto en el espacio, sino el inicio del movimiento que hace posibles los ciclos. En ella está la raíz de todos los galgalim, todas las esferas que descienden hasta la Tierra. El Reshit haGilgulim es el Keter de Asiyah porque es lo más cercano a la voluntad pura en el mundo material: el primer impulso que no ha tomado forma específica pero que contiene en potencia los movimientos que seguirán."
          ]
        },
        {
          heading: { en: "Chokhmah of Asiyah: מזרות Mazzarot", es: "Jokhmah de Asiyah: מזרות Mazzarot" },
          paragraphs: [
            "El Mazzarot, el Zodíaco, aparece en el libro de Iyov, 38:32, cuando el Eterno pregunta a Iyov si puede sacar el Mazzarot en su tiempo. Es el sistema de constelaciones que marca los ciclos del tiempo en el universo visible. El Sefer Yetzirah, capítulo 5, asigna a los doce signos del Zodíaco los doce meses, los doce órganos del cuerpo y las doce tribus de Israel. Esto establece correspondencias entre los ciclos cósmicos y la estructura de la vida humana.",
            "La asignación del Mazzarot a Jokhmah de Asiyah muestra que la sabiduría, en el mundo material, se manifiesta como comprensión de los ciclos: los patrones que se repiten a escala galáctica, solar y terrestre. El Zodíaco sideral y el tropical son dos lecturas del mismo movimiento desde perspectivas distintas. Juntos, en su precesión de 26.000 años, dan cuerpo a los ciclos de la historia humana que los mequbalim llaman eras o iugot."
          ]
        },
        {
          heading: { en: "Binah of Asiyah: שבתאי Shabbatai", es: "Binah de Asiyah: שבתאי Shabbatai" },
          paragraphs: [
            "Saturno, Shabbatai, es el planeta del límite y de la forma. En el sistema del Sefer Yetzirah y en la elaboración del Ramak, Saturno corresponde a Binah porque da estructura a la existencia, impone la ley de la consecuencia y constriñe el impulso expansivo dentro de un cauce definido. Sin estructura no hay forma posible; sin Saturno no hay Binah.",
            "La tradición astrológica judía, reflejada en el Sefer Yetzirah y en comentaristas medievales como Ibn Ezra, describe a Shabbatai como el planeta de la memoria, del tiempo acumulado y de la disciplina que madura. Las pruebas saturninas son lecciones inscritas en la estructura del tiempo: la ley de causa y efecto que Binah representa en el nivel del cosmos. Quien lee sus pruebas como instrucción espiritual descubre en Saturno un maestro severo pero justo, cuya severidad permite el crecimiento."
          ]
        },
        {
          heading: { en: "Chesed of Asiyah: צדק Tzedeq", es: "Chesed de Asiyah: צדק Tzedeq" },
          paragraphs: [
            "Júpiter, Tzedeq, justicia y rectitud en hebreo, gobierna la expansión benevolente. En el sistema del Sefer Yetzirah, Tzedeq da sin reservas: multiplica, amplía, bendice lo que toca. Su correspondencia con Chesed en Asiyah lo convierte en instrumento de la generosidad divina en el plano material.",
            "Los sabios medievales lo vinculan al estudio de la Torá, la práctica de tzedakah y el liderazgo al servicio del bien común. Su influencia sostiene una premisa: el universo es generoso. La abundancia, material y espiritual, fluye cuando el canal entre los mundos permanece abierto. Tzedeq firma a Chesed en el cielo visible."
          ]
        },
        {
          heading: { en: "Gevurah of Asiyah: מאדים Maadim", es: "Gevurah de Asiyah: מאדים Maadim" },
          paragraphs: [
            "Marte, Maadim, encarna la fuerza de Gevurah en Asiyah: energía combativa, disciplina activa. El Sefer Yetzirah le confiere dominio sobre el trabajo físico y la resistencia. Su naturaleza es fuego que purifica mediante el esfuerzo, voluntad forjada en la dificultad.",
            "La tensión entre Maadim y Tzedeq, Marte y Júpiter, Gevurah y Chesed, impulsa el dinamismo de la existencia: el impulso expansivo requiere límite corrector; el límite corrector necesita impulso para evitar la parálisis. En el Árbol, Maadim cumple su función cuando el alma alcanza el equilibrio de Tiferet, el Sol: solo desde tu centro recibes la energía de Marte sin que te arrase."
          ]
        },
        {
          heading: { en: "Tiferet of Asiyah: חמה Hama", es: "Tiferet de Asiyah: חמה Hama" },
          paragraphs: [
            "El Sol, Hama, es Tiferet en el mundo visible. Su posición central en el sistema solar replica la posición central de Tiferet en el Árbol: todo gira alrededor de él, él ilumina todo, su luz permite la vida en este mundo. En el Sefer Yetzirah, Hama rige el día y la vida; su energía sostiene la vitalidad del mundo material.",
            "Quien alcanza Tiferet en sí mismo se vuelve el centro de su universo interior: irradia en lugar de reflejar, actúa desde su propio eje en lugar de ser movido por las circunstancias. La correspondencia entre Tiferet y el Sol aparece en el Sefer Yetzirah y en los sistemas qabalísticos posteriores. El Sol simboliza el Logos concreto, el principio divino de razón y orden, que desciende a Asiyah y da coherencia a lo que existe en él."
          ]
        },
        {
          heading: { en: "Netzach of Asiyah: נוגה Nogah", es: "Netzach de Asiyah: נוגה Nogah" },
          paragraphs: [
            "Venus, Nogah, el resplandor, es el planeta de Netzach en Asiyah. Porta la energía de la belleza, del amor y de la atracción entre los seres. En el Sefer Yetzirah le corresponden las facultades de imaginación y sensibilidad hacia la forma bella. Esta fuerza hace que el ser humano perciba la creación como algo digno de amor, no solo de uso.",
            "En la cosmología qabalística, Nogah tiene un aspecto que la distingue de los otros planetas: su luz se ve tanto al alba como al atardecer, precediendo al Sol o siguiéndolo. Esta doble posición la convierte en símbolo de la transición entre luz y oscuridad, entre el mundo interior y el exterior. Netzach es la Sefirah de la eternidad y la persistencia; Nogah expresa esa persistencia en el plano de Asiyah como belleza inagotable y amor que no cede."
          ]
        },
        {
          heading: { en: "Hod of Asiyah: כוכב Kokhav", es: "Hod de Asiyah: כוכב Kokhav" },
          paragraphs: [
            "Mercurio, Kokhav, la Estrella, es el planeta de Hod en Asiyah. El Sefer Yetzirah le asigna el dominio sobre la lengua, el habla y las facultades de comunicación. Es el planeta del mensajero, de la palabra precisa, del pensamiento articulado para transmitirse a otro.",
            "Los maestros medievales decían que Kokhav rige el comercio de palabras e ideas: el habla cotidiana, la transmisión del conocimiento, la enseñanza, la correspondencia entre niveles de comprensión. En el Árbol de la Vida, Hod es el esplendor que se manifiesta en la precisión intelectual; Kokhav pone ese esplendor al servicio del intercambio entre seres. La conexión de Hod con Rafael, cuyo nombre une cabeza y boca, resuena en la correspondencia planetaria: pensar con claridad y hablar con verdad son, en este nivel, dos aspectos de una misma función espiritual."
          ]
        },
        {
          heading: { en: "Yesod of Asiyah: לבנה Levanah", es: "Yesod de Asiyah: לבנה Levanah" },
          paragraphs: [
            "La Luna, Levanah, corresponde a Yesod en Asiyah. En el sistema del Sefer Yetzirah es el cuerpo celeste más cercano a la Tierra y el que ejerce el efecto más directo sobre la vida terrestre: rige los fluidos, los ciclos vitales, las mareas del cuerpo y del alma. Su luz es reflejada, no propia: la Luna transmite la luz del Sol, del mismo modo en que Yesod recibe de las Sefirot superiores y transmite a Malkhut.",
            "Esta función de espejo hace de Levanah el instrumento más sensible del sistema: refleja el estado del Árbol en su conjunto, amplifica o disminuye lo que recibe según su ciclo. Los maestros qabalísticos describen a Levanah como el nivel en que Hod y Netzach, intelecto y emoción, se unen antes de pasar a Malkhut. La claridad del reflejo lunar depende de la claridad de lo que se le presenta: mantener los pensamientos y las emociones orientados hacia el Eterno es mantener despejado el espejo de Levanah."
          ]
        },
        {
          heading: { en: "Malkhut of Asiyah: ארץ Eretz", es: "Malkhut de Asiyah: ארץ Eretz" },
          paragraphs: [
            "Malkhut de Asiyah, Eretz, la Tierra, cierra el descenso de la luz divina y abre todo ascenso posible. El Sefer Yetzirah, capítulo 3, enseña que los cuatro elementos, fuego, viento, agua y tierra, crean en el nivel de Asiyah. No son sustancias físicas sino principios cualitativos: modos de ser de la energía que se manifiestan en toda la escala del Árbol, pero solo en Malkhut toman forma estable y concreta.",
            "Cada Sefirah tiene afinidad con un elemento, pero en Malkhut los cuatro coexisten en equilibrio y se combinan para dar lugar a lo existente. El Sefer Yetzirah describe esta combinación con la imagen de la Eretz como síntesis de los otros tres: el elemento tierra condensa fuego, viento y agua en su máxima densidad. Malkhut no termina el camino divino; lo invierte. Aquí la luz, al tocar su límite, comienza a regresar hacia su fuente, y el Tikun humano, la elevación de las nitzotzot, convierte la acción concreta en transformación espiritual."
          ]
        }
      ]
    }
  },
  {
    id: "ets-haim",
    parentId: null,
    level: 1,
    mainNumber: 5,
    title: { en: "Ets Haim", es: "Ets Haim" },
    hebrew: "עץ חיים",
    subtitle: { en: "The Tree of Life", es: "El Árbol de la Vida" },
    sections: {
      en: [
        {
          paragraphs: [
            "Ets Haim, the Tree of Life, is the map of Qabalah. It shows how Ein Sof, the Infinite beyond all understanding, reveals itself in Creation through ten modes of manifestation, the Sefirot, and how those Sefirot connect through twenty-two paths, each associated with a letter of the Hebrew alphabet. Ten Sefirot and twenty-two paths form the thirty-two paths of wisdom of Sefer Yetzirah: living structures of reality, not theoretical abstractions.",
            "The Sefirot are the modes through which the Infinite becomes knowable, the midot or attributes by means of which the Creator acts in the worlds. Each Sefirah receives shefa, divine influence, from the previous one and transmits it to the next. The whole Tree is a continuous process of revelation: from Keter, which emerges from Ein Sof, to Malkhut, the threshold of the visible world. The names of the ten Sefirot are: Keter, Crown; Chokhmah, Wisdom; Binah, Understanding; Chesed, Mercy; Gevurah, Strength; Tiferet, Beauty; Netzach, Victory; Hod, Glory; Yesod, Foundation; and Malkhut, Kingdom.",
            "The Tree is an architecture. Its Sefirot are distributed in three vertical columns: pillars. The right pillar, Chokhmah, Chesed, Netzach, is the Pillar of Mercy, the axis of expansion and giving. The left pillar, Binah, Gevurah, Hod, is the Pillar of Severity, the axis of limit and form. The central pillar, Keter, Tiferet, Yesod, Malkhut, is the Pillar of Balance, where both principles are integrated.",
            "The dynamic of the Tree works through groups of three. Every pair of opposites, expansion and contraction, mercy and rigor, requires a third Sefirah that synthesizes them. Chesed and Gevurah find their resolution in Tiferet. This triadic structure belongs to the architecture of the Tree as taught by the Zohar and Lurianic Qabalah.",
            "The side pillars are necessary, but spiritual transformation occurs on the central axis. Work in Hod, study and the articulation of knowledge, or in Netzach, the expression of the midot and the impulse toward good, prepares; it does not complete. The movement that transforms the soul ascends through the central pillar: from Malkhut to Yesod, from Yesod to Tiferet. Without that movement, study and fervor remain suspended in their own pillars without becoming integrated consciousness.",
            "Keter and Malkhut hold a relation of correspondence that qabalistic texts describe as a mirror: what Keter is at the highest level, Malkhut receives at the lowest. The Tree does not rank their value. Each Sefirah fulfills its proper function in the order of Creation. None is more sacred than another. The goal of spiritual work in Qabalah is that each Sefirah operate in its proper measure, neither overflowing nor impoverished."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "El Ets Haim, Árbol de la Vida, es el mapa de la Qabalah. Muestra cómo el Ein Sof, lo Infinito más allá de toda comprensión, se revela en la Creación a través de diez modos de manifestación, las Sefirot, y cómo esas Sefirot se conectan mediante veintidós senderos, cada uno asociado a una letra del alfabeto hebreo. Diez Sefirot y veintidós senderos forman los treinta y dos caminos de sabiduría del Sefer Yetzirah: estructuras vivas de la realidad, no abstracciones teóricas.",
            "Las Sefirot son los modos por los cuales lo Infinito se hace cognoscible, las midot o atributos por medio de los cuales el Creador actúa en los mundos. Cada Sefirah recibe el shefa, influencia divina, de la anterior y la transmite a la siguiente. El Árbol entero es un proceso continuo de revelación: desde Keter, que emerge del Ein Sof, hasta Malkhut, umbral del mundo visible. Los nombres de las diez Sefirot son: Keter, Corona; Jokhmah, Sabiduría; Binah, Entendimiento; Chesed, Misericordia; Gevurah, Fuerza; Tiferet, Belleza; Netzach, Victoria; Hod, Gloria; Yesod, Fundamento; y Malkhut, Reino.",
            "El Árbol es una arquitectura. Sus Sefirot se distribuyen en tres columnas verticales: pilares. El pilar derecho, Jokhmah, Chesed, Netzach, es el Pilar de la Misericordia, el eje de la expansión y el dar. El pilar izquierdo, Binah, Gevurah, Hod, es el Pilar de la Severidad, el eje del límite y la forma. El pilar central, Keter, Tiferet, Yesod, Malkhut, es el Pilar del Equilibrio, donde ambos principios se integran.",
            "La dinámica del Árbol funciona mediante grupos de tres. Toda pareja de opuestos, expansión y contracción, misericordia y rigor, requiere una tercera Sefirah que los sintetice. Chesed y Gevurah hallan su resolución en Tiferet. Esta estructura triádica está en la arquitectura del Árbol tal como lo enseñan el Zohar y la Qabalah lurianica.",
            "Los pilares laterales son necesarios, pero la transformación espiritual ocurre en el eje central. El trabajo en Hod, el estudio y la articulación del conocimiento, o en Netzach, la expresión de las midot y el impulso hacia el bien, prepara, no completa. El movimiento que transforma el alma asciende por el pilar central: de Malkhut hacia Yesod, de Yesod hacia Tiferet. Sin ese movimiento, el estudio y el fervor quedan suspendidos en sus propios pilares, sin volverse conciencia integrada.",
            "Keter y Malkhut guardan entre sí una relación de correspondencia que los textos qabalísticos describen como espejo: lo que Keter es en lo más alto, Malkhut lo recibe en lo más bajo. El Árbol no jerarquiza su valor. Cada Sefirah cumple la función que le corresponde en el orden de la Creación. Ninguna es más sagrada que otra. La meta del trabajo espiritual en la Qabalah es que cada Sefirah opere en su medida propia, ni desbordada ni empobrecida."
          ]
        }
      ]
    }
  },
  {
    id: "sefirot",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.1,
    title: { en: "Sefirot", es: "Sefirot" },
    hebrew: "ספירות",
    sections: {
      en: [
        {
          paragraphs: [
            "The word Sefirah comes from the Hebrew safar, to count or number, and has been related to sapir, sapphire, and sifur, communication. The three senses appear in the doctrine: the Sefirot are counted, they emit light, and they function as language between the Infinite and the finite. Qabalistic literature speaks of ten Sefirot, although in certain contexts it mentions eleven. This responds to the relation between Keter and Daat: Keter is the supraconscious dimension of the soul, the will that precedes thought; Daat is its conscious manifestation, the knowledge that Chokhmah and Binah produce together. Ten are counted because Keter or Daat is included according to the system, never both.",
            "The Sefirot are organized in three overlapping ways. The first is the three pillars already described. The second is three functional triads. Each triad corresponds to a level of the soul and to an aspect of the Tzelem Elohim, the divine image in which the human being was created. The upper triad, Keter, Chokhmah, Binah, corresponds to intellect and the supra-rational faculties. The middle triad, Chesed, Gevurah, Tiferet, corresponds to the emotional midot, the qualities of character. The lower triad, Netzach, Hod, Yesod, corresponds to the forces that mediate between the inner world and its expression in action. Malkhut, the tenth, gathers everything and manifests it in concrete reality.",
            "The third organization is the four Olamot, worlds of progressive manifestation: Atzilut, world of Emanation; Beriah, world of Creation; Yetzirah, world of Formation; and Asiyah, world of Action. The ten Sefirot exist in each world with different density and mode of revelation. In Atzilut they manifest in their state nearest to the source, almost undifferentiated from the Divinity that originates them. In Beriah and Yetzirah, the relations among them become more complex and spiritual realities acquire greater specificity. In Asiyah, the densest world, the Sefirot coexist with the Qlifot, the shells that arose from Shevirat HaKelim, the breaking of the vessels.",
            "Each Sefirah contains two inseparable elements: the Ohr, the divine light that inhabits it, and the Keli, the vessel that gives it form and makes it accessible to the lower worlds. The Ohr always exceeds what the Keli can contain. From this comes the tension of the Tree: revelation against immanence, what is shown against what is veiled.",
            "On the relation between the Sefirot and the Aseret HaDibrot, some qabalistic authors have explored symbolic correspondences between the ten utterances of the Torah and the ten Sefirot. The approach has meditative and homiletic value. But the classical sources do not articulate a systematic table of these correspondences. What can be affirmed is this: observance of the commandments constitutes an act of Tikun. Each mitzvah acts at some level of the structure of the worlds and contributes to the rectification of divine order. The relation between mitzvot and Sefirot exists, but it requires precision, not mechanical schemes."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "La palabra Sefirah viene del hebreo safar, contar o numerar, y se ha relacionado con sapir, zafiro, y sifur, comunicación. Los tres sentidos aparecen en la doctrina: las Sefirot se cuentan, emiten luz y funcionan como lenguaje entre lo Infinito y lo finito. La literatura qabalística habla de diez Sefirot, aunque en ciertos contextos menciona once. Esto responde a la relación entre Keter y Daat: Keter es la dimensión supraconsciente del alma, el querer que precede al pensamiento; Daat es su manifestación consciente, el conocimiento que Jokhmah y Binah producen juntas. Se cuentan diez porque se incluye Keter o Daat según el sistema, nunca ambos.",
            "Las Sefirot se organizan de tres maneras superpuestas. La primera: los tres pilares ya descritos. La segunda: tres triadas funcionales. Cada triada corresponde a un nivel del alma y a un aspecto de la Tzelem Elohim, la imagen divina en la que fue creado el ser humano. La triada superior, Keter, Jokhmah, Binah, corresponde al intelecto y las facultades supraracionales. La triada media, Chesed, Gevurah, Tiferet, corresponde a las midot emocionales, las cualidades del carácter. La triada inferior, Netzach, Hod, Yesod, corresponde a las fuerzas que median entre el mundo interior y su expresión en la acción. Malkhut, la décima, recoge todo y lo manifiesta en la realidad concreta.",
            "La tercera organización: los cuatro Olamot, mundos de manifestación progresiva: Atzilut, mundo de la Emanación; Beriah, mundo de la Creación; Yetzirah, mundo de la Formación; y Asiyah, mundo de la Acción. Las diez Sefirot existen en cada mundo con distinta densidad y modo de revelación. En Atzilut se manifiestan en su estado más próximo a la fuente, casi indiferenciadas de la divinidad que las origina. En Beriah y Yetzirah las relaciones entre ellas se vuelven más complejas, y las realidades espirituales adquieren mayor especificidad. En Asiyah, el mundo más denso, las Sefirot coexisten con las Qlifot, las cáscaras que surgieron de la Shevirat HaKelim, la ruptura de los recipientes.",
            "Cada Sefirah contiene dos elementos inseparables: el Ohr, la luz divina que la habita, y el Keli, el recipiente que le da forma y la hace accesible a los mundos inferiores. El Ohr supera siempre lo que el Keli puede contener. De ahí la tensión del Árbol: revelación contra inmanencia, lo mostrado contra lo velado.",
            "Sobre la relación entre las Sefirot y el Aseret HaDibrot: algunos autores qabalísticos han explorado correspondencias simbólicas entre los diez enunciados de la Torá y las diez Sefirot. La aproximación tiene valor meditativo y homilético. Pero las fuentes clásicas no articulan una tabla sistemática de estas correspondencias. Lo que se puede afirmar: la observancia de los mandamientos constituye un acto de Tikun. Cada mitzvah actúa en algún nivel de la estructura de los mundos y contribuye a la rectificación del orden divino. La relación entre mitzvot y Sefirot existe, pero exige precisión, no esquemas mecánicos."
          ]
        }
      ]
    }
  },
  {
    id: "qlifot",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.2,
    title: { en: "Qlifot", es: "Qlifot" },
    hebrew: "קליפות",
    sections: {
      en: [
        {
          paragraphs: [
            "The doctrine of the Qlifot arises from the same event as the Sefirot: Shevirat HaKelim, the breaking of the vessels.",
            "In the Lurianic tradition, Ein Sof contracted His light through Tzimtzum and opened a space, the Halal, in which worlds could exist. In that space the Kelim were formed to receive the Ohr Elyon, the supreme light. The first three Kelim, Keter, Chokhmah, and Binah, sustained it. The seven lower ones broke. The fragments fell and became the Qlifot: structures that enclose sparks of holiness, nitzotzot, but in separation and distortion. Tikun identifies those sparks and returns them to their source.",
            "The tradition describes ten Qlifot, a deformed reflection of the ten Sefirot. They represent states of rupture, imbalance, Ohr without Keli or Keli without Ohr. Three states precede the formation of the worlds: Tohu, chaos without form; Bohu, emptiness without content; and Nogah, intermediate radiance where light and darkness coexist and rectification remains possible. Tohu and Bohu are the most broken states. Nogah is the threshold where spiritual work has effect.",
            "The Qlifot give souls the obstacles through which free choice can be exercised, and so they are a condition of Tikun. The human being in the world of Asiyah recognizes the Qlifot for what they are, does not project onto them an autonomy they do not possess, and through the mitzvot and inner rectification frees the sparks they contain."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "La doctrina de las Qlifot surge del mismo evento que las Sefirot: la Shevirat HaKelim, la ruptura de los recipientes.",
            "En la tradición luriánica, el Ein Sof contrajo Su luz mediante el Tzimtzum y abrió un espacio, el Halal, donde pudieran existir mundos. En ese espacio se formaron los Kelim para recibir el Ohr Elyon, la luz suprema. Los tres primeros Kelim, Keter, Jokhmah y Binah, la sostuvieron. Los siete inferiores se quebraron. Los fragmentos cayeron y se convirtieron en las Qlifot: estructuras que encierran chispas de santidad, nitzotzot, pero en separación y distorsión. El Tikun identifica esas chispas y las devuelve a su fuente.",
            "La tradición describe diez Qlifot, reflejo deformado de las diez Sefirot. Representan estados de ruptura, desequilibrio, Ohr sin Keli o Keli sin Ohr. Tres estados preceden a la formación de los mundos: Tohu, caos sin forma; Bohu, vacío sin contenido; y Nogah, resplandor intermedio donde luz y oscuridad coexisten y la rectificación permanece posible. Tohu y Bohu son los estados más rotos. Nogah es el umbral donde el trabajo espiritual tiene efecto.",
            "Las Qlifot dan a las almas los obstáculos para ejercer la elección libre, y así son condición del Tikun. El ser humano en el mundo de Asiyah reconoce las Qlifot como lo que son, no les proyecta una autonomía que no tienen, y mediante las mitzvot y la rectificación interior libera las chispas que contienen."
          ]
        }
      ]
    }
  },
  {
    id: "netivot",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.3,
    title: { en: "Netivot", es: "Netivot" },
    hebrew: "נתיבות",
    subtitle: { en: "Paths", es: "Senderos" },
    sections: {
      en: [
        {
          paragraphs: [
            "The ten Sefirot form a network of twenty-two netivot, paths. Sefer Yetzirah names them otiyot yesod, letters of foundation: the instruments with which HaShem formed everything. Ten Sefirot plus twenty-two paths make the thirty-two netivot chokhmah, the thirty-two paths of wisdom that open Sefer Yetzirah. Thirty-two is the numerical value of lev, heart. The wisdom of the Tree of Life arises from the heart, not from the intellect.",
            "Daat is the energy that circulates through the Tree. The twenty-two paths are the channels. Tradition uses the image of blood: dam, דם, is formed with Dalet and Mem. Dalet points to Daat, the knowledge that opens doors; Mem points to water, symbol of change and transformation of the soul in qabalistic literature. The paths keep the system alive. If circulation is interrupted, the node without flow operates in imbalance.",
            "The image points deeper. Dam becomes Adam, אדם, with one letter: Alef. The Alef contains unity in its form, a diagonal Vav held by two Yod at opposite ends, what is above and what is below in balance. Adam, the complete human being, has integrated the consciousness of Alef, the consciousness of the unity of HaShem, into the circulation of inner life. The difference between biological circulation and human existence is this: the presence of Alef, the consciousness of divine unity that passes through and gives meaning to everything else.",
            "Sefer Yetzirah organizes the twenty-two letters into three groups that reflect three distinct types of energy. This classification sustains any serious understanding of the netivot.",
            "The three mother letters, אמש, Alef, Mem, and Shin, correspond to the three primordial elements: air, water, and fire. They articulate the three horizontal axes of the Tree. Shin governs fire on the upper axis; Alef balances air on the middle axis; Mem sustains water on the lower axis. The three vertical columns of the Tree also appear here: Mem symbolizes mercy, Shin rigor, and Alef central balance. From these three principles there does not arise mixture but creation: when fire and water operate together under the mediation of air, they produce an energy neither could generate alone. Sefer Yetzirah insists that synthesis does not dilute the forces that compose it.",
            "The seven double letters, בגדכפרת, admitted in ancient Hebrew two pronunciations, one soft and one strong. Sefer Yetzirah associates them with seven polarities of human existence: life and death, peace and war, wisdom and folly, wealth and poverty, grace and ugliness, sowing and desolation, dominion and servitude. They also correspond to the seven days of the week and, in classical cosmology, to the seven planets. The double pronunciation of each letter expresses something the tradition knows: every real force operates in two directions. Spiritual maturity consists in learning to direct that force toward its constructive expression.",
            "The twelve simple letters, ה ו ז ח ט י ל נ ס ע צ ק, correspond to the twelve months of the year, the twelve tribes of Israel, and the twelve senses or activities that Sefer Yetzirah attributes to the human being. They structure the ordinary fabric of life, everyday experience from within. If the three mothers are the principles and the seven doubles are the axes of time and the cosmos, the twelve simples are the material with which you build your concrete existence.",
            "This division does not classify types. Each group of letters operates within you in a different way. The work of one who walks the Tree also consists in recognizing what kind of energy is active at each moment of life. Tikun, the inner correction pursued by every qabalistic practice, requires knowing not only which Sefirot need balance, but which paths lead to that balance and what kind of energy circulates through them.",
            "The detailed study of each letter, its specific nature according to Sefer Yetzirah and the mequbalim who commented on it, and the dynamic it unfolds between the Sefirot it joins, is an undertaking that deserves its own space. The correspondences between letters and pairs of Sefirot have been developed by different schools, from the Ramak in Pardes Rimonim to the Ari in Ets Haim, with significant differences between systems that should not be homogenized. That material, treated with the rigor it requires, belongs to a chapter dedicated exclusively to the letters and their paths."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Las diez Sefirot forman una red de veintidós netivot, senderos. El Sefer Yetzirah los nombra otiyot yesod, letras de fundamento: los instrumentos con que HaShem formó todo. Diez Sefirot más veintidós senderos suman los treinta y dos netivot chokhmah, los treinta y dos senderos de sabiduría que abren el Sefer Yetzirah. Treinta y dos es el valor numérico de lev, corazón. La sabiduría del Árbol de la Vida surge del corazón, no del intelecto.",
            "Daat es la energía que circula por el Árbol. Los veintidós senderos son los canales. La tradición usa la imagen de la sangre: dam, דם, se forma con Dalet y Mem. Dalet remite a Daat, el conocimiento que abre puertas; Mem al agua, símbolo del cambio y la transformación del alma en la literatura qabalística. Los senderos mantienen vivo el sistema. Si la circulación se interrumpe, el nodo sin flujo opera en desequilibrio.",
            "La imagen señala más hondo. Dam se convierte en Adam, אדם, con una letra: Alef. El Alef contiene la unidad en su grafía, una Vav diagonal sostenida por dos Yod en extremos opuestos, lo de arriba y lo de abajo en equilibrio. Adam, el ser humano pleno, ha integrado la conciencia del Alef, la conciencia de la unidad de HaShem, en la circulación de su vida interior. La diferencia entre circulación biológica y existencia humana es esa: la presencia de Alef, la conciencia de la unidad divina que atraviesa y da sentido a lo demás.",
            "El Sefer Yetzirah organiza las veintidós letras en tres grupos que reflejan tres tipos de energía distintos. Esta clasificación sostiene cualquier comprensión seria de los netivot.",
            "Las tres letras madres, אמש, Alef, Mem y Shin, corresponden a los tres elementos primordiales: aire, agua y fuego. Articulan los tres ejes horizontales del Árbol. Shin rige el fuego en el eje superior; Alef equilibra el aire en el eje medio; Mem sostiene el agua en el eje inferior. Las tres columnas verticales del Árbol aparecen también aquí: Mem simboliza la misericordia, Shin el rigor, Alef el equilibrio central. De estos tres principios no surge mezcla sino creación: cuando el fuego y el agua operan juntos bajo la mediación del aire, producen una energía que ninguno podía generar solo. El Sefer Yetzirah insiste: la síntesis no diluye las fuerzas que la componen.",
            "Las siete letras dobles, בגדכפרת, admitían en el hebreo antiguo dos pronunciaciones, una suave y una fuerte. El Sefer Yetzirah las asocia con siete polaridades de la existencia humana: vida y muerte, paz y guerra, sabiduría e insensatez, riqueza y pobreza, gracia y fealdad, siembra y desolación, dominio y servidumbre. Corresponden también a los siete días de la semana y, en la cosmología clásica, a los siete planetas. La doble pronunciación de cada letra expresa algo que la tradición conoce: toda fuerza real opera en dos sentidos. La madurez espiritual consiste en aprender a dirigir esa fuerza hacia su expresión constructiva.",
            "Las doce letras simples, ה ו ז ח ט י ל נ ס ע צ ק, corresponden a los doce meses del año, las doce tribus de Israel y los doce sentidos o actividades que el Sefer Yetzirah atribuye al ser humano. Estructuran el tejido ordinario de la vida, la experiencia cotidiana desde el interior. Si las tres madres son los principios y las siete dobles los ejes del tiempo y el cosmos, las doce simples son el material con el que construyes tu existencia concreta.",
            "Esta división no clasifica tipos. Cada grupo de letras opera en ti de una manera diferente. El trabajo de quien recorre el Árbol consiste también en reconocer qué tipo de energía está activa en cada momento de tu vida. El Tikun, la corrección interior que persigue toda práctica qabalística, requiere saber no solo qué Sefirot necesitan equilibrio, sino qué senderos llevan a ese equilibrio y de qué naturaleza es la energía que circula por ellos.",
            "El estudio pormenorizado de cada letra, de su naturaleza específica según el Sefer Yetzirah y los mequbalim que lo comentaron, y de la dinámica que despliega entre las Sefirot que une, es una empresa que merece un espacio propio. Las correspondencias entre letras y pares de Sefirot han sido desarrolladas por distintas escuelas, desde el Ramak en el Pardes Rimonim hasta el Ari en el Ets Haim, con diferencias significativas entre sistemas que no deben homogeneizarse. Ese material, tratado con el rigor que requiere, pertenece a un capítulo dedicado exclusivamente a las letras y sus senderos."
          ]
        }
      ]
    }
  },
  {
    id: "sefirot-keter",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.4,
    title: { en: "Keter", es: "Keter" },
    hebrew: "כתר",
    subtitle: { en: "Crown", es: "Corona" },
    sections: {
      en: [
        {
          paragraphs: [
            "Keter, the Crown, is the first Sefirah and the one nearest to Ein Sof, without being Ein Sof. Ein Sof is infinite Divinity: without form, without attribute, without relation to Creation. In Keter the divine will begins to determine itself. It is the upper limit of what can be known. The mequbalim formulate it this way: from Chokhmah, Keter is Ayin, nothingness, because it lacks any thinkable form; from Ein Sof, Keter is already a contour, a first edge of being.",
            "The word Keter means crown, but in Hebrew it also carries the senses of waiting and surrounding. As crown, Keter is above the head, above the brain, where the human being receives divine influence without the ordinary mind processing it. As waiting, it names the anticipation of a revelation that Chokhmah and Binah will articulate. As surrounding, it points to Ratzon, the divine will that surrounds all the Sefirot without any one of them exhausting it.",
            "The Lurianic structure unfolds Keter into two Partzufim, two configurations of the supraconscious soul. Arikh Anpin, the Long Face, embodies supraconscious Ratzon: the will to give without limit, patience without bottom. Atik Yomin, the Ancient of Days, embodies supraconscious Taanug: the divine delight underlying all Creation, which the soul perceives as Ayin, as full and serene nothingness. In Atik Yomin resides the root of the soul of the Messiah, a spark that at first is neither recognized nor self-recognizing, but bears the potential of final rectification.",
            "Within Keter, tradition distinguishes three rashim, three heads, with different degrees of bond to the divine. The first, Reish DeArikh, the elongated head, is the source of Ratzon. From Ayin, from non-being prior to every form, springs the will to forge a rectified reality. The second, Reish DeLo Ityada, the unknown head, escapes all consciousness: here lives the faith of every Jewish soul, the anticipated Taanug of Olam HaBa. The third, Reish DeAyin, the head of nothingness, embodies supreme pleasure and the stillness of the divine soul in its state of Ayin. From there intuitive wisdom is born, the flash no rational category can contain.",
            "In the human soul, these dimensions of Keter reveal themselves as the highest and least conscious powers of the person: Emunah, Etzem, Taanug, and Ratzon. Emunah corresponds to the unknowable root of Keter: it is not born from reasoning, although reasoning can articulate it, but from the essential bond of the soul with HaShem. It is the faith that remains when the mind finds no answer, the force that allows the soul to sustain itself in HaShem even when visible facts offer no confirmation. Etzem is still more inward: the intact essence of the soul, the point that is not corrupted by errors, habits, or spiritual distance. From there every Tikun begins, because even when the outer layers have darkened, the essence preserves its bond with divine Atzmut.",
            "Taanug is the supraconscious delight that precedes directed desire. Before wanting something concrete, the soul possesses a root of simple pleasure, linked to its nearness to HaShem and to the primordial joy of Torah. When avodat HaShem is born from that Taanug, devotion does not depend only on obligation or fear, but on deep joy in the service itself. Ratzon, for its part, is the will that emerges from Keter toward all lower levels. In its higher form it needs no justification: it wills because it is aligned with the divine will. In its lower form, it joins the intellect and orients practical life. When the Ratzon of the soul aligns with its root in HaShem, it ceases to be egocentric desire and becomes spiritual direction.",
            "Chokhmah is the Reshit, the beginning. The first word of the Torah, Bereshit, admits the reading Be-Reshit: with Wisdom. Without Keter, Chokhmah would have no impulse to expand. Keter is the source from which Chokhmah drinks, although Keter remains, from Chokhmah's perspective, unfathomable.",
            "The virtue proper to Keter is recognizing that limit. One who believes he has reached definitive understanding, that he has grasped the vastness of the divine, falls into the Qlifah of Keter: intellectual pride that turns proximity to the infinite into an illusion of possession. Access to Keter deepens the consciousness that one is nothing before the greatness of the Creator. The Tanya teaches that bitul, nullification of the self, does not destroy the being but places it in its true proportion.",
            "Devekut is not fusion or dissolution of the soul into Divinity. The distinction between Creator and creature is irreducible in Jewish theology; the soul remains a creature even at the highest levels of adhesion to HaShem. Devekut orients the whole will of the soul toward the divine will: its desires align with the supreme Ratzon, its acts emanate from that orientation. The first utterance of the Aseret HaDibrot, Anochi HaShem Elohekha, resonates here: HaShem presents Himself as the One who frees from slavery, and the liberation He offers is that of the soul that abandons its inner idols in order to orient itself toward Him.",
            "The ascent toward Keter begins in Chokhmah. An inherited faith without personal contact with divine reality stops the path there. The faith that Keter demands is not the faith of habit but the faith of inner knowledge, the one Rambam calls Emunah and the Tanya develops as the first level of ahavat HaShem: knowing that there is One, and that this One is the origin and destiny of everything."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Keter, la Corona, es la primera Sefirah y la más cercana al Ein Sof, sin ser el Ein Sof. El Ein Sof es la divinidad infinita: sin forma, sin atributo, sin relación con la Creación. En Keter la voluntad divina empieza a determinarse. Es el límite superior de lo cognoscible. Los mequbalim lo formulan así: desde Jokhmah, Keter es Ayin, nada, porque carece de forma pensable; desde el Ein Sof, Keter ya es un contorno, un primer borde del ser.",
            "La palabra Keter significa corona, pero en hebreo carga también los sentidos de espera y de rodear. Como corona, Keter está sobre la cabeza, por encima del cerebro, donde el ser humano recibe la influencia divina sin que la mente ordinaria la procese. Como espera, nombra la anticipación de una revelación que Jokhmah y Binah irán articulando. Como rodear, apunta al Ratzon, la voluntad divina que envuelve todas las Sefirot sin que ninguna la agote.",
            "La estructura luriánica despliega Keter en dos Partzufim, dos configuraciones del alma supraconsciente. Arij Anpin, el Rostro Largo, encarna el Ratzon superconsciente: la voluntad de dar sin límite, la paciencia sin fondo. Atik Yomin, el Anciano de los Días, encarna el Taanug superconsciente: el deleite divino que subyace a toda Creación, que el alma percibe como Ayin, como nada plena y serena. En Atik Yomin reside la raíz del alma del Mesías, una chispa que al principio no se reconoce ni es reconocida, pero que porta el potencial de la rectificación última.",
            "Dentro de Keter, la tradición distingue tres rashim, tres cabezas, con grados distintos de vínculo con lo divino. La primera, Reish DeArij, la cabeza alargada, es la fuente del Ratzon. Del Ayin, del no-ser anterior a toda forma, brota la voluntad de forjar una realidad rectificada. La segunda, Reish DeLo Ityada, la cabeza desconocida, escapa a toda conciencia: aquí vive la fe de cada alma judía, el Taanug anticipado del Olam HaBa. La tercera, Reish DeAyin, la cabeza de la nada, encarna el placer supremo y la quietud del alma divina en su estado de Ayin. De ahí nace la sabiduría intuitiva, el destello que ninguna categoría racional puede contener.",
            "En el alma humana, estas dimensiones de Keter se revelan como los poderes más altos y menos conscientes de la persona: Emunah, Etzem, Taanug y Ratzon. La Emunah corresponde a la raíz incognoscible de Keter: no nace del razonamiento, aunque el razonamiento pueda articularla, sino del vínculo esencial del alma con HaShem. Es la fe que permanece cuando la mente no encuentra respuesta, la fuerza que permite al alma sostenerse en HaShem incluso cuando los hechos visibles no ofrecen confirmación. El Etzem es todavía más interior: la esencia intacta del alma, el punto que no queda corrompido por los errores, los hábitos ni la distancia espiritual. Desde ahí comienza todo Tikun, porque incluso cuando las capas externas se han oscurecido, la esencia conserva su vínculo con el Atzmut divino.",
            "El Taanug es el deleite supraconsciente que precede al deseo dirigido. Antes de querer algo concreto, el alma posee una raíz de placer simple, vinculada a su cercanía con HaShem y al gozo primordial de la Torá. Cuando la avodat HaShem nace de ese Taanug, la devoción no depende solo de la obligación ni del temor, sino de una alegría profunda en el propio servicio. El Ratzon, por su parte, es la voluntad que emerge de Keter hacia todos los niveles inferiores. En su forma superior no necesita justificación: quiere porque está alineada con la voluntad divina. En su forma inferior, se une al intelecto y orienta la vida práctica. Cuando el Ratzon del alma se alinea con su raíz en HaShem, deja de ser deseo egocéntrico y se convierte en dirección espiritual.",
            "Jokhmah es el Reshit, el comienzo. La primera palabra de la Torá, Bereshit, admite la lectura Be-Reshit: con la Sabiduría. Sin Keter, Jokhmah no tendría impulso para expandirse. Keter es la fuente de la que Jokhmah bebe, aunque Keter permanezca, desde la perspectiva de Jokhmah, insondable.",
            "La virtud propia de Keter es reconocer ese límite. Quien cree haber alcanzado la comprensión definitiva, haber aprehendido la vastedad de lo divino, cae en la Qlifah de Keter: la soberbia intelectual que convierte la proximidad con lo infinito en ilusión de posesión. El acceso a Keter profundiza la conciencia de que uno no es nada ante la grandeza del Creador. El Tanya enseña que el bitul, la anulación del yo, no destruye al ser sino que lo coloca en su verdadera proporción.",
            "El devekut no es fusión ni disolución del alma en la divinidad. La distinción entre el Creador y la criatura es irreductible en la teología judía; el alma sigue siendo criatura incluso en los niveles más altos de adhesión a HaShem. El devekut orienta toda la voluntad del alma hacia la voluntad divina: sus deseos se alinean con el Ratzon supremo, sus actos emanan de esa orientación. El primer enunciado del Aseret HaDibrot, Anochi HaShem Elohekha, resuena aquí: HaShem se presenta como el que libera de la esclavitud, y la liberación que ofrece es la del alma que abandona sus ídolos interiores para orientarse hacia Él.",
            "El ascenso hacia Keter comienza en Jokhmah. Una fe heredada sin contacto personal con la realidad divina detiene el camino ahí mismo. La fe que Keter demanda no es la fe de la costumbre sino la del conocimiento interior, la que el Rambam llama Emunah y el Tanya desarrolla como primer nivel de ahavat HaShem: saber que hay un Uno, y que ese Uno es el origen y el destino de todo."
          ]
        }
      ]
    }
  },
  {
    id: "sefirot-chokhmah",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.5,
    title: { en: "Chokhmah", es: "Jokhmah" },
    hebrew: "חכמה",
    subtitle: { en: "Wisdom", es: "Sabiduría" },
    sections: {
      en: [
        {
          paragraphs: [
            "Chokhmah occupies the upper right vertex of the Tree. It is the first Sefirah with cognitive content, the first Reshit, the beginning that the Torah names in its first word. The Zohar, in Shemot 220b, reads Chokhmah as Koach Mah: the power of What, the force of the question. One who asks \"what is this?\" with openness breaks the illusion of already possessed certainty and makes understanding capable of receiving something new.",
            "Koach Mah also means the power of self-nullity, the power of bitul. The two meanings are the same meaning. The question is born when the student abandons prefabricated certainty. The state of the soul that corresponds to Chokhmah is this: bitul, the detachment of the self as center of reference, which does not annul the person but opens the person to a wisdom above ordinary thought.",
            "The inner koach of Chokhmah is Bitul. Wisdom, at its root, does not begin as accumulation of concepts, but as openness: the self ceases to occupy the center and allows the light to enter. For this reason Bitul does not destroy the person, but places the person in proper proportion before HaShem. At its highest level, Bitul b'metziut, the consciousness of separate existence disappears before the divine presence; this level belongs to the order of Atzilut and is not forced from ordinary practice. At the level proper to daily avodat HaShem, Bitul hayesh, the person continues to exist as an entity, but works to dissolve the illusion of absolute independence.",
            "One who cultivates Bitul ceases to act from the need for self-assertion. Study, tefilah, and mitzvot do not seek to magnify the self, but to open it to the divine will. In human relationships, this same power is expressed as active humility: the other ceases to be a threat, competition, or mirror of the ego, and begins to be seen as a creature of HaShem. Thus true Chokhmah does not produce intellectual arrogance, but an ever clearer consciousness that all received knowledge must lead to greater nullification before the source.",
            "In the spiritual physiology of the Tzelem Elohim, Chokhmah corresponds to the right hemisphere of the brain. Its mode of knowing does not pass through analysis or deduction: it is the flash, the global and instantaneous perception that precedes the articulation of the intellect. Dreams, prophecies, visions, and moments of sudden understanding belong to the domain of Chokhmah. When the sleeper wakes and reasons about what was dreamed, Binah takes over.",
            "Chokhmah is the active and masculine pole, Abba, the cosmic Father in the terminology of the Partzufim. The Zohar affirms that Chokhmah and Binah do not separate: they are two companions who always go together, and from their constant union emerge the seven days of Creation and the lower worlds. Chokhmah bears the seed of the reality that is to manifest; Binah receives it, contains it, develops it, and articulates it into knowable forms. The image of sperm and womb used by qabalistic literature is not ornamental: it expresses the functional asymmetry of the two principles. Chokhmah without Binah is a spark without a vessel; Binah without Chokhmah is an empty vessel.",
            "One who immerses oneself in spirituality only from intuitive impulse, without the containment of Binah, can fall into states of imbalance. Qabalah records figures who accessed flashes of Chokhmah without integrating them into Binah, and tradition warns about the dangers of entering the Pardes without adequate preparation. The healthy path lets intuitive flashes be received by the analytical capacity of Binah, where they become real understanding.",
            "The virtue of Chokhmah is openness to continue learning. The sage at the level of Chokhmah recognizes that his limits are the limits of the creature before the infinity of the Creator, and that consciousness keeps him open. Sharing wisdom is not a secondary virtue: it is the condition of its growth. Tradition lives in the chain of transmission, and one who retains knowledge for himself interrupts it. The Mequbal receives in order to transmit.",
            "The Qlifah of Chokhmah is intellectual arrogance: the sage who accumulates knowledge and uses it to reaffirm himself instead of serving neighbor and HaShem. This defect is dangerous because it hides under the garment of knowledge, confusing erudition with wisdom, knowing about the divine with knowledge of the divine."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Jokhmah ocupa el vértice superior derecho del Árbol. Es la primera Sefirah con contenido cognitivo, el primer Reshit, el inicio que la Torá nombra en su primera palabra. El Zohar, en Shemot 220b, lee Jokhmah como Koach Mah: el poder del Qué, la fuerza de la pregunta. Quien pregunta \"¿qué es esto?\" con apertura rompe la ilusión de la certeza ya poseída y vuelve el entendimiento capaz de recibir algo nuevo.",
            "Koach Mah significa también el poder de la nulidad del yo, el poder del bitul. Los dos sentidos son el mismo sentido. La pregunta nace cuando el estudiante abandona la certeza prefabricada. El estado del alma que corresponde a Jokhmah es ese: el bitul, el desprendimiento del yo como centro de referencia, que no anula la persona sino que la abre a una sabiduría por encima del pensamiento ordinario.",
            "El koach interior de Jokhmah es el Bitul. La sabiduría, en su raíz, no comienza como acumulación de conceptos, sino como apertura: el yo deja de ocupar el centro y permite que la luz entre. Por eso el Bitul no destruye a la persona, sino que la coloca en su proporción correcta ante HaShem. En su nivel más alto, Bitul b'metziut, la conciencia de existencia separada desaparece ante la presencia divina; este nivel pertenece al orden de Atzilut y no se fuerza desde la práctica ordinaria. En el nivel propio de la avodat HaShem cotidiana, Bitul hayesh, la persona sigue existiendo como entidad, pero trabaja para disolver la ilusión de independencia absoluta.",
            "Quien cultiva Bitul deja de actuar desde la necesidad de afirmarse. Su estudio, su tefilah y sus mitzvot no buscan engrandecer el yo, sino abrirse a la voluntad divina. En las relaciones humanas, este mismo poder se expresa como humildad activa: el otro deja de ser amenaza, competencia o espejo del ego, y empieza a ser visto como criatura de HaShem. Así, la Jokhmah verdadera no produce arrogancia intelectual, sino una conciencia cada vez más clara de que todo conocimiento recibido debe conducir a mayor anulación ante la fuente.",
            "En la fisiología espiritual de la Tzelem Elohim, Jokhmah corresponde al hemisferio derecho del cerebro. Su modo de conocer no pasa por el análisis ni la deducción: es el destello, la percepción global e instantánea que precede a la articulación del intelecto. Los sueños, las profecías, las visiones y los momentos de comprensión súbita pertenecen al dominio de Jokhmah. Cuando el durmiente despierta y razona sobre lo que soñó, Binah toma el relevo.",
            "Jokhmah es el polo activo y masculino, Abba, el Padre cósmico en la terminología de los Partzufim. El Zohar afirma que Jokhmah y Binah no se separan: son dos compañeros que siempre van juntos, y de su unión constante emergen los siete días de la Creación y los mundos inferiores. Jokhmah porta la semilla de la realidad que ha de manifestarse; Binah la recibe, la contiene, la desarrolla y la articula en formas cognoscibles. La imagen del espermatozoide y el útero que emplea la literatura qabalística no es ornamental: expresa la asimetría funcional de los dos principios. Jokhmah sin Binah es una chispa sin recipiente; Binah sin Jokhmah es un recipiente vacío.",
            "Quien se sumerge en la espiritualidad solo desde el impulso intuitivo, sin la contención de Binah, puede caer en estados de desequilibrio. La Qabalah registra figuras que accedieron a destellos de Jokhmah sin integrarlos en Binah, y la tradición advierte sobre los peligros de entrar en el Pardes sin la preparación adecuada. El camino sano deja que los destellos intuitivos sean recibidos por la capacidad analítica de Binah, donde se transforman en entendimiento real.",
            "La virtud de Jokhmah es la apertura para seguir aprendiendo. El sabio en el nivel de Jokhmah reconoce que sus límites son los límites de la criatura frente a la infinitud del Creador, y esa conciencia lo mantiene abierto. Compartir la sabiduría no es virtud secundaria: es la condición de su crecimiento. La tradición vive en la cadena de transmisión, y quien retiene el conocimiento para sí la interrumpe. El Mequbal recibe para transmitir.",
            "La Qlifah de Jokhmah es la arrogancia intelectual: el sabio que acumula conocimiento y lo usa para reafirmarse a sí mismo en lugar de servir al prójimo y a HaShem. Este defecto es peligroso porque se oculta bajo el ropaje del conocimiento, confundiendo la erudición con la sabiduría, el saber sobre lo divino con el conocimiento de lo divino."
          ]
        }
      ]
    }
  },
  {
    id: "sefirot-binah",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.6,
    title: { en: "Binah", es: "Binah" },
    hebrew: "בינה",
    subtitle: { en: "Understanding", es: "Entendimiento" },
    sections: {
      en: [
        {
          paragraphs: [
            "Binah occupies the upper left vertex of the Tree, the third level, the first mode of articulated cognition. Chokhmah is the flash; Binah is the process that turns it into structure: it analyzes, organizes, distinguishes, and gives form to the material it receives from Chokhmah. In the Tzelem Elohim it corresponds to the left hemisphere of the brain.",
            "The name says it: Binah comes from bin, to distinguish. Binah separates, differentiates, classifies. From it emerge the Olamot, the worlds of plurality, because the multiplication of forms begins here. Although distinct worlds emerge from Binah, in Binah there is not yet division: the worlds are contained as unified concepts, as plans before the first stone. Multiplicity unfolds when it descends to Chesed and the lower Sefirot.",
            "The Zohar calls Binah Ima, the Mother, and situates it as the origin of the seven days of Creation. Those first seven days express the shefa that descends from Binah toward the seven lower Sefirot. From this follow precise doctrinal consequences: the holiness of Shabbat has its root in Binah, which in Lurianic Qabalah is the dwelling of the soul during the sacred day. The rest of Shabbat, the cessation of creative activity, reflects in time something that exists permanently in Binah: the capacity to contain without being exhausted, to receive without being filled.",
            "The spiritual state associated with Binah is Simchah, joy. Binah is also the root of Severity, the root of Din, and establishes the limits that make form possible. Without form there is no revelation; without limit there is no creature. When the soul understands that these limits are a condition of the good, understanding produces joy. The Tanya calls this Simchah shel mitzvah: the joy that arises from understanding that observing the mitzvah is adhesion to the will of the Creator, and that this alignment between human will and divine will is the highest form of fullness.",
            "The Simchah of Binah is not euphoria or reaction to favorable circumstances. It is the joy born from matured understanding. Chokhmah delivers the seed; Binah receives it, develops it, and turns it into something intelligible. When that understanding reaches the heart, it produces a stable joy, because the soul perceives that even limit, din, and form participate in divine good. For this reason the Simchah of Binah can coexist with difficulty without being destroyed by it: it does not deny suffering, but rests on a deeper layer of understanding.",
            "In avodat HaShem, this Simchah has a structural function. Torah study, tefilah, and mitzvot performed with joy open channels that inner heaviness keeps closed. Joy is not an emotional decoration of divine service; it is a sign that understanding has descended from the mind to the heart. Cultivating Simchah means exercising gratitude and learning to recognize the goodness of HaShem even in the difficult folds of life.",
            "According to Qabalah, souls are born from Binah. They descend through the worlds to Malkhut, and through the process of Tikun they return. The return to Binah is what tradition calls Teshuvah, ordinarily translated as repentance but literally meaning return. Real Teshuvah is not only remorse: it is the reorientation of the soul toward its origin, the return to the level of Binah where connection with the divine is fuller. The jubilee, the release of debts, and the restoration of divine order that appear in the Torah are historical and halakhic reflections of this metaphysical reality.",
            "One feature defines Binah with precision: silence as the condition of understanding. Before organizing, it is necessary to listen; before structuring, to stop. The silence of Binah is denser than that of Malkhut: Malkhut silences external noise; Binah silences internal noise, the chatter of the ego that occupies the space where understanding should enter.",
            "The Qlifah of Binah has two manifestations: dogmatism and disorganization. In dogmatism, the structure that should have been a vehicle of understanding becomes a wall; the category that should have ordered reality becomes a prison. The system replaces the object it was meant to systematize, and Ein Sof is replaced by narrow perspectives dressed as absolute certainty. In disorganization, the soul rejects every structure for fear that it will become dogma, and loses the capacity to pass from the flash of Chokhmah to the articulated knowledge of Daat. In both cases knowledge does not flower."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Binah ocupa el vértice superior izquierdo del Árbol, tercer nivel, primer modo de cognición articulada. Jokhmah es el destello; Binah es el proceso que lo vuelve estructura: analiza, organiza, distingue, da forma al material que recibe de Jokhmah. En la Tzelem Elohim corresponde al hemisferio izquierdo del cerebro.",
            "El nombre lo dice: Binah viene de bin, distinguir. Binah separa, diferencia, clasifica. De ella emergen los Olamot, los mundos de la pluralidad, porque la multiplicación de formas comienza aquí. Aunque de Binah emergen mundos distintos, en ella no hay todavía división: los mundos están contenidos como conceptos unificados, como planos antes de la primera piedra. La multiplicidad se despliega al descender a Chesed y las Sefirot inferiores.",
            "El Zohar llama a Binah la Ima, la Madre, y la sitúa como origen de los siete días de la Creación. Esos primeros siete días expresan el shefa que baja de Binah hacia las siete Sefirot inferiores. De esto se siguen consecuencias doctrinales precisas: la santidad del Shabbat tiene raíz en Binah, que en la Qabalah luriánica es la morada del alma durante el día sagrado. El descanso del Shabbat, la cesación de la actividad creadora, refleja en el tiempo algo que en Binah existe de modo permanente: la capacidad de contener sin agotarse, de recibir sin llenarse.",
            "El estado espiritual asociado a Binah es la Simchah, la alegría. Binah es también raíz de la Severidad, raíz del Din, y establece los límites que hacen posible la forma. Sin forma no hay revelación; sin límite no hay criatura. Cuando el alma comprende que esos límites son condición del bien, la comprensión produce alegría. El Tanya llama a esto Simchah shel mitzvah: la alegría que surge de entender que observar la mitzvah es adherirse a la voluntad del Creador, y que ese ajuste entre voluntad humana y voluntad divina es la forma más alta de plenitud.",
            "La Simchah de Binah no es euforia ni reacción ante circunstancias favorables. Es la alegría que nace de una comprensión madurada. Jokhmah entrega la semilla; Binah la recibe, la desarrolla y la convierte en algo inteligible. Cuando esa comprensión llega al corazón, produce una alegría estable, porque el alma percibe que incluso el límite, el din y la forma participan del bien divino. Por eso la Simchah de Binah puede convivir con la dificultad sin ser destruida por ella: no niega el sufrimiento, sino que descansa en una capa más profunda de comprensión.",
            "En la avodat HaShem, esta Simchah tiene una función estructural. El estudio de Torá, la tefilah y las mitzvot realizadas con alegría abren canales que la pesadez interior mantiene cerrados. La alegría no es decoración emocional del servicio divino; es señal de que la comprensión ha descendido desde la mente hasta el corazón. Cultivar Simchah implica ejercitar la gratitud y aprender a reconocer la bondad de HaShem incluso en los pliegues difíciles de la vida.",
            "Según la Qabalah, las almas nacen desde Binah. Descienden a través de los mundos hasta Malkhut, y por el proceso de Tikun retornan. El retorno a Binah es lo que la tradición llama Teshuvah, que se traduce ordinariamente como arrepentimiento pero significa literalmente retorno. La Teshuvah real no es solo remordimiento: es la reorientación del alma hacia su origen, el regreso al nivel de Binah donde la conexión con lo divino es más plena. El jubileo, la liberación de deudas y la restauración del orden divino que aparecen en la Torá son reflejos históricos y halájicos de esta realidad metafísica.",
            "Un rasgo define a Binah con precisión: el silencio como condición del entendimiento. Antes de organizar es necesario escuchar; antes de estructurar, detenerse. El silencio de Binah es más denso que el de Malkhut: Malkhut silencia el ruido externo, Binah silencia el ruido interno, la charla del ego que ocupa el espacio donde debería entrar la comprensión.",
            "La Qlifah de Binah tiene dos manifestaciones: el dogmatismo y la desorganización. En el dogmatismo, la estructura que debía ser vehículo de comprensión se vuelve muro; la categoría que debía ordenar la realidad se vuelve prisión. El sistema reemplaza al objeto que debía sistematizar, y Ein Sof queda sustituido por perspectivas estrechas vestidas de certeza absoluta. En la desorganización, el alma rechaza toda estructura por miedo a que se vuelva dogma, y pierde la capacidad de pasar del destello de Jokhmah al conocimiento articulado de Daat. En ambos casos el conocimiento no florece."
          ]
        }
      ]
    }
  },
  {
    id: "sefirot-chesed",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.7,
    title: { en: "Chesed", es: "Chesed" },
    hebrew: "חסד",
    subtitle: { en: "Mercy", es: "Misericordia" },
    sections: {
      en: [
        {
          paragraphs: [
            "Chesed is the fourth Sefirah and the first of the emotional triad. It occupies the right side of the Tree, beneath Chokhmah, and in the Tzelem Elohim it corresponds to the right arm: the gesture of giving, of extending oneself toward the other. The state of the soul that corresponds to it is Ahavah, love.",
            "Ahavah is the inner force of Chesed. It is born when the soul recognizes the goodness of HaShem and responds to it with expansion toward Him and toward His creatures. In its initial form, love appears as attraction; in its mature form, it becomes an active force that seeks the good of the beloved. The Shema expresses this complete structure: to love HaShem with all the heart, with all the soul, and with all the strength. These are not only degrees of intensity, but different ways of orienting all levels of the person toward HaShem.",
            "True Ahavah does not remain enclosed in the private relation between the soul and its Creator. One who loves HaShem also loves what HaShem loves, and therefore that love overflows toward the neighbor: in tzedakah, generosity, care for the vulnerable, and the capacity to create bonds. When Chesed is rectified, goodness does not seek to be seen or rewarded; it flows because the soul recognizes that it has received from HaShem and desires to transmit what it has received.",
            "The name has no exact translation into English. It has been rendered as mercy, benevolence, lovingkindness. It contains all these meanings and exceeds them: it is the disposition to give without calculation, because the goodness of the Creator is the source from which the soul drinks and to which it wants to become similar. In Bereshit, Chesed is linked to the first day of Creation, when light appears and is seen to be good. Creating is an act of Chesed because it means giving existence to what did not exist before.",
            "Chesed does not act alone. Its partner in the Tree is Gevurah, and its integration occurs in Tiferet. That triad forms the core of character: the capacity to give without limit needs to be contained by the capacity to judge and limit, and the balance between the two is called Rachamim, compassion. The Midrash teaches that the world could not exist only with rigor or only with mercy. Tiferet embodies the combination adjusted to the situation.",
            "Chesed is also called Gedolah, greatness. There is in this Sefirah a magnanimity that exceeds proportional exchange: it gives even when the one who receives does not deserve it, because giving emanates from the nature of the giver, not from the merits of the receiver. This is how hashpaa works, the abundance that flows from the higher Sefirot without creatures having done anything to earn it. The Creator gives by being what He is.",
            "The relation between Chesed and water established by some texts is not arbitrary. Water fills the vessels it finds, descends effortlessly toward low places, and nourishes without discriminating. The shefa of Chesed flows in a similar way, seeking where it can manifest as good.",
            "The practical challenge of Chesed is the authenticity of giving. Giving from what one projects as the other's need, without attending to what the other truly needs, is a generosity that speaks more of the giver than of the receiver. Authentic Chesed requires asking what the other needs, not what would make me feel good to give. For this reason Chesed is also a Sefirah of self-knowledge: to give well, one must have looked at oneself honestly.",
            "The observance of Shabbat resonates at the level of Chesed in a way that goes beyond the legal command. Shabbat is the day on which the human being ceases to create and recognizes that he is creature, not creator. That cessation, menuchah, is the highest form of Chesed the soul can practice in time: giving HaShem the time that is His, recognizing that all existence is a received gift, not a conquered possession.",
            "The Qlifah of Chesed takes several forms. Excess Chesed without the containment of Gevurah leads to blind indulgence: giving without discernment turns generosity into an instrument of harm. The false mercy that avoids necessary rigor, that does not correct the one who errs in order not to cause pain, is also a Qlifah of Chesed. The worst of its manifestations is hypocrisy: ostentatious goodness that seeks to be seen, that gives in order to receive recognition, that confuses ego with generosity."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Chesed es la cuarta Sefirah y la primera de la triada emocional. Ocupa el lado derecho del Árbol, bajo Jokhmah, y en la Tzelem Elohim corresponde al brazo derecho: el gesto de dar, de extenderse hacia el otro. El estado del alma que le corresponde es la Ahavah, el amor.",
            "Ahavah es la fuerza interior de Chesed. Nace cuando el alma reconoce la bondad de HaShem y responde a ella con expansión hacia Él y hacia Sus criaturas. En su forma inicial, el amor aparece como atracción; en su forma madura, se convierte en fuerza activa que busca el bien del amado. El Shema expresa esta estructura completa: amar a HaShem con todo el corazón, con toda el alma y con todas las fuerzas. No son solo grados de intensidad, sino modos distintos de orientar todos los niveles de la persona hacia HaShem.",
            "La Ahavah verdadera no permanece encerrada en la relación privada entre el alma y su Creador. Quien ama a HaShem ama también lo que HaShem ama, y por eso ese amor se desborda hacia el prójimo: en la tzedakah, en la generosidad, en el cuidado de los vulnerables y en la capacidad de crear vínculos. Cuando Chesed está rectificado, la bondad no busca ser vista ni recompensada; fluye porque el alma reconoce que ha recibido de HaShem y desea transmitir lo recibido.",
            "El nombre no tiene traducción exacta al castellano. Se ha vertido como misericordia, benevolencia, bondad amable. Contiene todos esos sentidos y los supera: es la disposición de dar sin cálculo, porque la bondad del Creador es la fuente de la que el alma bebe y a la que quiere parecerse. En Bereshit, Chesed se vincula al primer día de la Creación, cuando aparece la luz y se ve que es buena. Crear es un acto de Chesed porque implica dar existencia a lo que antes no existía.",
            "Chesed no actúa solo. Su pareja en el Árbol es Gevurah, y su integración ocurre en Tiferet. Esa triada forma el núcleo del carácter: la capacidad de dar sin límite necesita ser contenida por la capacidad de juzgar y limitar, y el equilibrio entre ambas se llama Rachamim, compasión. El Midrash enseña que el mundo no podría existir solo con rigor ni solo con misericordia. Tiferet encarna la combinación ajustada según la situación.",
            "Chesed también se llama Gedolah, grandeza. Hay en esta Sefirah una magnanimidad que excede el intercambio proporcional: da aun cuando quien recibe no lo merece, porque el dar emana de la naturaleza del dador, no de los méritos del receptor. Así funciona la hashpaa, la abundancia que fluye de las Sefirot superiores sin que las criaturas hayan hecho nada para ganarla. El Creador da por ser lo que es.",
            "La relación entre Chesed y el agua que establecen algunos textos no es arbitraria. El agua llena los recipientes que encuentra, desciende sin esfuerzo hacia los lugares bajos, nutre sin discriminar. El shefa de Chesed fluye de manera similar, buscando dónde puede manifestarse como bien.",
            "El desafío práctico de Chesed es la autenticidad del dar. Dar a partir de lo que uno proyecta como necesidad del otro, sin atender a lo que el otro verdaderamente necesita, es una generosidad que habla más del dador que del receptor. El Chesed auténtico exige preguntarse qué necesita el otro, no qué me haría sentir bien dar. Por eso Chesed es también una Sefirah de autoconocimiento: para dar bien, hay que haberse mirado con honestidad.",
            "La observancia del Shabbat resuena en el nivel de Chesed de un modo que va más allá del mandato legal. El Shabbat es el día en que el ser humano cesa de crear y reconoce que es criatura, no creador. Esa cesación, menuchah, es la forma más alta de Chesed que el alma puede practicar en el tiempo: dar a HaShem el tiempo que es suyo, reconocer que la existencia entera es un regalo recibido, no una posesión conquistada.",
            "La Qlifah de Chesed toma varias formas. El exceso de Chesed sin contención de Gevurah lleva a la complacencia ciega: dar sin discernir convierte la generosidad en instrumento de daño. La falsa misericordia que evita el rigor necesario, que no corrige al que yerra por no causarle dolor, es también una Qlifah de Chesed. La peor de sus manifestaciones es la hipocresía: la bondad ostentosa que busca ser vista, que da para recibir reconocimiento, que confunde el ego con la generosidad."
          ]
        }
      ]
    }
  },
  {
    id: "sefirot-gevurah",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.8,
    title: { en: "Gevurah", es: "Gevurah" },
    hebrew: "גבורה",
    subtitle: { en: "Strength", es: "Fuerza" },
    sections: {
      en: [
        {
          paragraphs: [
            "Gevurah is the fifth Sefirah. In the diagram of the Tree it occupies the left side, beneath Binah. In the Tzelem Elohim it corresponds to the left arm: the gesture that delimits, contains, and says no. Its name is also Midat haDin, the attribute of judgment.",
            "The spiritual state that Gevurah embodies is Yirah, fear of HaShem. Yirah is not the fear that flees punishment. It is awe before the holiness of the Creator, the recognition of a truth that admits no negotiation and before which the soul bows. This Yirah produces humility, self-control, and fidelity. Without it, the Ahavah of Chesed degenerates into sentimentalism. Without Chesed, Yirah becomes servility.",
            "Yirah has levels. The lower one is yirat haonesh, fear of punishment: valid as an initial restraint, but insufficient as a mature root of avodat HaShem, because it still operates from self-interest. The higher level is yirat haromemut, reverential awe before the greatness of HaShem. Here the soul does not avoid transgression only out of fear of its consequences, but because consciousness of divine majesty makes acting against His will inconceivable.",
            "For this reason Yirah introduces limit, prudence, and seriousness. Where Ahavah tends to expand and give, Yirah asks whether that giving will be right, whether it will serve the good or feed harm. It is not petty distrust, but spiritual responsibility. The mitzvot observed from Yirah acquire weight: they are not custom or social convention, but careful response before the divine order.",
            "Gevurah is limit in its purest form. Chesed expands; Gevurah concentrates. Chesed multiplies bonds; Gevurah defines them. Expansion without limit produces nothing recognizable. Limit without expansion produces death. Breath, heartbeat, and the cycle of contraction and dilation in every living organism are figures of what Chesed and Gevurah sustain.",
            "In the soul, Gevurah develops the capacity to say no: no to one's own impulses when they depart from the divine will, no to the demands of the environment when they violate the integrity of one's path. That no must be pronounced from Tiferet, from the balanced center, not from fear or rigidity. Rigor born from fear is cruelty disguised. Rigor born from clear knowledge of what must be done is din emet, true judgment.",
            "The commandment to honor father and mother, which some relate to Gevurah, transcends biology. Father and mother represent everything that has preceded and shaped the individual: tradition, the chain of generations, the collective foundation on which each existence is built. Honoring them means recognizing that no one becomes who they are from nothing. Chokhmah and Binah, the Abba and Ima of the Partzufim, are the parents in a metaphysical sense. The individual must distinguish himself from that substrate in order to be himself, but that distinction first requires recognizing the debt.",
            "The Qlifah of Gevurah is cruelty: rigor that serves no good but the satisfaction of subjugating. Destruction for its own sake, the no that suffocates without building anything, anger that does not correct but dominates. Tradition is precise here: severity sustained beyond what is necessary becomes a source of harm. One who knows when to pronounce a firm no and when to keep it back shows that Gevurah is integrated into Tiferet. One who only knows how to say no shows that Gevurah has fallen into its own Qlifah."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Gevurah es la quinta Sefirah. En el diagrama del Árbol ocupa el lado izquierdo, bajo Binah. En la Tzelem Elohim corresponde al brazo izquierdo: el gesto que delimita, que contiene, que dice no. Su nombre es también Midat haDin, el atributo del juicio.",
            "El estado espiritual que Gevurah encarna es la Yirah, el temor de HaShem. La Yirah no es el miedo que huye del castigo. Es el asombro ante la santidad del Creador, el reconocimiento de una verdad que no admite negociación y ante la cual el alma se inclina. Esa Yirah produce humildad, autocontrol y fidelidad. Sin ella, la Ahavah de Chesed degenera en sentimentalismo. Sin Chesed, la Yirah se vuelve servilismo.",
            "La Yirah tiene niveles. El inferior es yirat haonesh, el temor al castigo: válido como freno inicial, pero insuficiente como raíz madura de la avodat HaShem, porque todavía opera desde el interés propio. El nivel superior es yirat haromemut, el asombro reverencial ante la grandeza de HaShem. Aquí el alma no evita la transgresión solo por miedo a sus consecuencias, sino porque la conciencia de la majestad divina vuelve inconcebible actuar contra Su voluntad.",
            "Por eso Yirah introduce límite, prudencia y seriedad. Donde Ahavah tiende a expandirse y dar, Yirah pregunta si ese dar será recto, si servirá al bien o si alimentará el daño. No es desconfianza mezquina, sino responsabilidad espiritual. Las mitzvot observadas desde Yirah adquieren peso: no son costumbre ni convención social, sino respuesta cuidadosa ante el orden divino.",
            "Gevurah es el límite en su forma más pura. Chesed expande; Gevurah concentra. Chesed multiplica los lazos; Gevurah los define. La expansión sin límite no produce nada reconocible. El límite sin expansión produce muerte. La respiración, el latido del corazón y el ciclo de contracción y dilatación en todo organismo vivo son figuras de lo que Chesed y Gevurah sostienen.",
            "En el alma, Gevurah desarrolla la capacidad de decir no: no a los propios impulsos cuando se alejan de la voluntad divina, no a las demandas del entorno cuando vulneran la integridad del propio camino. Ese no debe pronunciarse desde Tiferet, desde el centro equilibrado, no desde el miedo ni la rigidez. El rigor que nace del miedo es crueldad disfrazada. El rigor que nace del conocimiento claro de lo que debe hacerse es din emet, juicio verdadero.",
            "El mandamiento de honrar al padre y a la madre, que algunos relacionan con Gevurah, trasciende la biología. Padre y madre representan todo lo que ha precedido y conformado al individuo: la tradición, la cadena de generaciones, el fundamento colectivo sobre el que cada existencia se construye. Honrarlos es reconocer que nadie llega a ser quien es desde la nada. Jokhmah y Binah, el Abba y la Ima de los Partzufim, son los padres en sentido metafísico. El individuo ha de distinguirse de ese sustrato para ser él mismo, pero esa distinción exige primero reconocer la deuda.",
            "La Qlifah de Gevurah es la crueldad: el rigor que no sirve a ningún bien sino a la satisfacción de someter. La destrucción por sí misma, el no que ahoga sin construir nada, la ira que no corrige sino que domina. La tradición es precisa aquí: la severidad sostenida más allá de lo necesario se convierte en fuente de daño. Quien sabe cuándo pronunciar un no firme y cuándo guardarlo demuestra que Gevurah está integrada en Tiferet. Quien solo sabe decir no demuestra que Gevurah ha caído en su propia Qlifah."
          ]
        }
      ]
    }
  },
  {
    id: "sefirot-tiferet",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.9,
    title: { en: "Tiferet", es: "Tiferet" },
    hebrew: "תפארת",
    subtitle: { en: "Beauty", es: "Belleza" },
    sections: {
      en: [
        {
          paragraphs: [
            "Tiferet, Beauty, occupies the sixth place in the Tree and the center of the diagram: the heart in the Tzelem Elohim. Eight paths unite it with the Sefirot around it, and that connectivity makes it the vertex of the whole structure. Only with Malkhut is there no direct contact: to reach it, Tiferet must pass through Yesod.",
            "The root of Tiferet also means pride, in the elevated sense: the pride that HaShem feels, tradition says, for His people when they act according to the Torah. One who turns to HaShem from Tiferet does so wanting that pride to be awakened, wanting one's acts to be worthy of the covenant. Beauty here is not aesthetic: it is the proportion between what one is and what one does, between inner world and conduct.",
            "The attribute of Tiferet is Rachamim, compassion. Not the expansive mercy of Chesed, not the rigor of Gevurah, but the integration of the two. Compassion sees the other in his complete reality, his merits and his faults, his needs and his limits, and responds to that reality without reducing it. Here judgment and grace are reconciled.",
            "Rachamim is the inner force of Tiferet. It does not consist in giving without discernment or judging without pain, but in seeing the other from a breadth that Chesed and Gevurah do not reach separately. Ahavah tends to see possible recipients of goodness; Yirah tends to examine whether that reception is just. Rachamim looks deeper: it recognizes that the soul of the other possesses a value that his current acts do not exhaust. From there it can help, correct, accompany, or set a limit without losing compassion.",
            "To serve HaShem from Rachamim is to recognize Him as Av HaRachamim, the merciful Father. This consciousness also transforms Teshuvah: it is no longer only remorse or self-punishment, but return to the Father. Forgiveness belongs to Rachamim because it does not ignore the fault, but orients itself toward rectification and not condemnation. For this reason Tiferet is beauty: a response that is just and warm, firm and open, where judgment and goodness find proportion.",
            "The mequbalim call Tiferet the heart of the person: not the feelings projected into the world, which belong to Yesod, but the most intimate self-evaluation. This self-knowledge does not depend on external reflection. It is not built upon the approval or rejection of others. It is found only in one's own presence before HaShem.",
            "Reaching Tiferet implies sacrifice. Identifications with work, social role, and projected image must be abandoned. Relationships that transform, situations that change, ways of seeing the world that become unsustainable. Tradition calls Tiferet the Sefirah of sacrifice because access requires letting go of what one believed oneself to be.",
            "The first arrival is fragile. The inner coherence that Tiferet produces is real, but the soul does not yet know how to inhabit it with stability. Continued work in Chesed and Gevurah roots it. The compassion that was previously an occasional state becomes a permanent orientation.",
            "Love in Tiferet has its own texture. Chesed gives without receiving; Gevurah receives but conditions. Tiferet gives without keeping account and receives without demanding. It is the love that Rambam describes in the context of Ahavat HaShem: not that of the servant who fears punishment nor that of the employee who calculates the wage, but that of the child who loves the father for what the father is.",
            "The Qlifah of Tiferet is spiritual pride: believing that the light that shines at this level is one's own, that one is the source and not the channel. The error is subtler than the vanity of Yesod because in Tiferet there is real light, a coherence gained through genuine work. The danger lies in confusing the vehicle with the source. Believing that one already inhabits Tiferet permanently and completely is the clearest sign that the Qlifah has entered.",
            "The commandment lo tirtzach, you shall not murder, finds here its deepest dimension. Living from the heart of the Tree requires a relation with life, one's own and another's, that excludes gratuitous destruction. If something must be eliminated, let it be for a constructive reason and from clear consciousness. The obligation to help one who has erred correct his path responds to the same logic: the mature love of Tiferet does not abandon the neighbor; it sustains him."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Tiferet, Belleza, ocupa el sexto lugar en el Árbol y el centro del diagrama: el corazón en la Tzelem Elohim. Ocho senderos la unen a las Sefirot que la rodean, y esa conectividad la convierte en el vértice de toda la estructura. Solo con Malkhut no hay contacto directo: para alcanzarla, Tiferet debe pasar por Yesod.",
            "La raíz de Tiferet significa también orgullo, en el sentido elevado: el orgullo que HaShem siente, dice la tradición, por Su pueblo cuando actúa conforme a la Torá. Quien se dirige a HaShem desde Tiferet lo hace queriendo que ese orgullo se avive, que sus actos sean dignos de la alianza. La belleza aquí no es estética: es la proporción entre lo que uno es y lo que hace, entre el mundo interior y la conducta.",
            "El atributo de Tiferet es el Rachamim, la compasión. No la misericordia expansiva de Chesed, no el rigor de Gevurah, sino la integración de los dos. La compasión ve al otro en su realidad completa, sus méritos y sus faltas, sus necesidades y sus límites, y responde a esa realidad sin reducirla. Aquí el juicio y la gracia se reconcilian.",
            "Rachamim es la fuerza interior de Tiferet. No consiste en dar sin discernimiento ni en juzgar sin dolor, sino en ver al otro desde una amplitud que Chesed y Gevurah no alcanzan por separado. Ahavah tiende a ver receptores posibles de bondad; Yirah tiende a examinar si esa recepción es justa. Rachamim mira más hondo: reconoce que el alma del otro posee un valor que sus actos actuales no agotan. Desde ahí puede ayudar, corregir, acompañar o poner límite sin perder la compasión.",
            "Servir a HaShem desde Rachamim es reconocerlo como Av HaRachamim, el Padre misericordioso. Esta conciencia transforma también la Teshuvah: ya no es solo remordimiento ni autopunición, sino retorno al Padre. El perdón pertenece a Rachamim porque no ignora la falta, pero se orienta hacia la rectificación y no hacia la condena. Por eso Tiferet es belleza: una respuesta justa y cálida, firme y abierta, donde el juicio y la bondad encuentran proporción.",
            "Los mequbalim llaman a Tiferet el corazón de la persona: no los sentimientos que se proyectan al mundo, que pertenecen a Yesod, sino la autoevaluación más íntima. Este autoconocimiento no depende del reflejo externo. No se construye sobre la aprobación o el rechazo de los demás. Solo se encuentra en la propia presencia ante HaShem.",
            "Llegar a Tiferet implica sacrificio. Las identificaciones con el trabajo, el rol social, la imagen proyectada deben abandonarse. Relaciones que se transforman, situaciones que cambian, maneras de ver el mundo que se vuelven insostenibles. La tradición llama a Tiferet la Sefirah del sacrificio porque el acceso exige soltar lo que uno creía ser.",
            "La primera llegada es frágil. La coherencia interna que Tiferet produce es real, pero el alma aún no sabe habitarla con estabilidad. El trabajo continuado en Chesed y Gevurah la arraiga. La compasión que antes era un estado ocasional se vuelve orientación permanente.",
            "El amor en Tiferet tiene su propia textura. Chesed da sin recibir; Gevurah recibe pero condiciona. Tiferet da sin llevar la cuenta y recibe sin exigir. Es el amor que el Rambam describe en el contexto de la Ahavat HaShem: no el del siervo que teme el castigo ni el del empleado que calcula el salario, sino el del hijo que ama al padre por lo que el padre es.",
            "La Qlifah de Tiferet es el orgullo espiritual: creer que la luz que brilla en este nivel es propia, que uno es la fuente y no el canal. El error es más sutil que la vanidad de Yesod porque en Tiferet hay una luz real, una coherencia ganada con trabajo genuino. El peligro está en confundir el vehículo con la fuente. Creer que ya se habita Tiferet de manera permanente y completa es la señal más clara de que la Qlifah ha entrado.",
            "El mandamiento lo tirtzach encuentra aquí su dimensión más profunda. Vivir desde el corazón del Árbol exige una relación con la vida, propia y ajena, que excluye la destrucción gratuita. Si algo debe eliminarse, que sea por una razón constructiva y desde una conciencia clara. La obligación de ayudar al que ha errado a corregir su camino responde a la misma lógica: el amor maduro de Tiferet no abandona al prójimo, lo sostiene."
          ]
        }
      ]
    }
  },
  {
    id: "sefirot-netzach",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.10,
    title: { en: "Netzach", es: "Netzach" },
    hebrew: "נצח",
    subtitle: { en: "Victory", es: "Victoria" },
    sections: {
      en: [
        {
          paragraphs: [
            "Netzach, the seventh Sefirah, occupies the right pillar beneath Chesed. In the Tzelem Elohim it corresponds to the right leg: the impulse that advances, the force that passes through the obstacle. The name carries two meanings at once: victory in the present struggle and victory over what is definitive, because netzach also means eternity, and the ultimate victory of Netzach is over death.",
            "The spiritual state of Netzach is Bitachon, trust. Not in circumstances, which change, but in the fact that the providential direction of HaShem gives meaning to everything that occurs, including what is incomprehensible. Bitachon does not suppress effort: it orients it. One who trusts in HaShem works, struggles, perseveres, but without the anguish of one who believes that if control is released, everything will collapse.",
            "Bitachon has an active form that corresponds to Netzach. It is trust in the capacities that HaShem has deposited in the person in order to fulfill his mission. It is not arrogance, because it recognizes that strength comes from HaShem; but neither is it passivity, because it understands that this strength was given to be used. The Bitachon of Netzach acts, decides, perseveres, and passes through obstacles without being paralyzed by them.",
            "When this trust is rectified, human effort and divine providence do not oppose one another. The person does what corresponds to him with determination, but not from the anxiety of one who believes that everything depends exclusively on himself. Netzach contributes the energy of advancing; its Bitachon allows movement to be sustained even when the result is not yet visible.",
            "Netzach operates in the domain of the emotional midot in their expressive mode. Tiferet is the heart where emotions exist in an essential state; Netzach is where they come out. Musicians, painters, and dancers who work from inner movement to communicate what concept cannot reach work from Netzach. Emotions are not born here; here they find the bridge toward shared reality.",
            "The relation between Netzach and Hod is structural. Netzach contributes the impulse, the emotional force that seeks expression; Hod contributes the form, the language that structures that impulse. Without Netzach, Hod is an empty system; without Hod, Netzach is a torrent without a channel. Unarticulated emotions become destructive because no one can receive or understand them.",
            "Tradition points in Netzach to the danger of projection. The emotions that the individual does not recognize as his own are deposited in others, who become distorted mirrors of what one refuses to see in oneself. There lies the root of many conflicts: selfishness disguised as perception of the other, rejection of one's own turned into hostility toward what is alien. Work in Netzach requires looking inward before judging outward.",
            "The virtue of Netzach is genuine care for the other: empathy born not from projection but from real recognition of the other's otherness. The commandment associated with this level, lo tin'af, you shall not commit adultery, speaks of the integrity of bonds. Fidelity is not only an external norm; it indicates that one's own midot are sufficiently integrated for commitment to be sustained. Adultery in the broad sense is every form of adulterating: corrupting the purity of a bond, of a body, of the relation with Creation.",
            "Reason regulates emotions. This does not mean suppressing them, because suppression produces exactly the blockages that Netzach points to as a problem, but recognizing them, naming them in Hod, and directing them from Tiferet. Emotions expressed without mediation cause harm; those suppressed permanently accumulate and finally erupt outside all control. When the balance between Netzach and Hod is well tuned, expression is emotionally truthful and socially integrated."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Netzach, la séptima Sefirah, ocupa el pilar derecho bajo Chesed. En la Tzelem Elohim corresponde a la pierna derecha: el impulso que avanza, la fuerza que atraviesa el obstáculo. El nombre carga dos sentidos al mismo tiempo: vencer en la lucha presente y vencer lo definitivo, porque netzach significa también eternidad, y la victoria última de Netzach es sobre la muerte.",
            "El estado espiritual de Netzach es el Bitachon, la confianza. No en las circunstancias, que cambian, sino en que la dirección providencial de HaShem da sentido a todo lo que ocurre, incluido lo incomprensible. El Bitachon no suprime el esfuerzo: lo orienta. El que confía en HaShem trabaja, lucha, persevera, pero sin la angustia del que cree que si suelta el control, todo colapsa.",
            "El Bitachon tiene una forma activa que corresponde a Netzach. Es la confianza en las capacidades que HaShem ha depositado en la persona para cumplir su misión. No es arrogancia, porque reconoce que la fuerza viene de HaShem; pero tampoco es pasividad, porque entiende que esa fuerza fue dada para ser usada. El Bitachon de Netzach actúa, decide, persevera y atraviesa obstáculos sin quedar paralizado por ellos.",
            "Cuando esta confianza está rectificada, el esfuerzo humano y la providencia divina no se oponen. La persona hace lo que le corresponde con determinación, pero no desde la ansiedad de quien cree que todo depende exclusivamente de sí. Netzach aporta la energía de avanzar; su Bitachon permite sostener el movimiento incluso cuando el resultado todavía no se ve.",
            "Netzach opera en el dominio de las midot emocionales en su modo expresivo. Tiferet es el corazón donde las emociones existen en estado esencial; Netzach es donde salen. Los músicos, pintores y bailarines que trabajan desde el movimiento interior para comunicar lo que el concepto no alcanza trabajan desde Netzach. Las emociones no nacen aquí, sino que aquí encuentran el puente hacia la realidad compartida.",
            "La relación entre Netzach y Hod es estructural. Netzach aporta el impulso, la fuerza emocional que busca expresión; Hod aporta la forma, el lenguaje que estructura ese impulso. Sin Netzach, Hod es un sistema vacío; sin Hod, Netzach es un caudal sin cauce. Las emociones no articuladas se vuelven destructivas porque nadie puede recibirlas ni comprenderlas.",
            "La tradición señala en Netzach el peligro de la proyección. Las emociones que el individuo no reconoce como propias las deposita en los demás, que se convierten en espejos deformados de lo que uno rechaza ver en sí mismo. Ahí está la raíz de muchos conflictos: el egoísmo disfrazado de percepción del otro, el rechazo de lo propio convertido en hostilidad hacia el ajeno. Trabajar en Netzach exige mirar adentro antes de juzgar afuera.",
            "La virtud de Netzach es el cuidado genuino por el otro: la empatía que nace no de la proyección sino del reconocimiento real de su otredad. El mandamiento asociado a este nivel, lo tin'af, no cometerás adulterio, habla de la integridad de los vínculos. La fidelidad no es solo norma externa; indica que las midot propias están bastante integradas para que el compromiso se sostenga. El adulterio en sentido amplio es toda forma de adulterar: corromper la pureza de un vínculo, de un cuerpo, de la relación con la Creación.",
            "La razón regula las emociones. Eso no significa suprimirlas, porque la supresión produce exactamente los bloqueos que Netzach señala como problema, sino reconocerlas, nombrarlas en Hod y dirigirlas desde Tiferet. Las emociones que se expresan sin intermediación causan daño; las que se suprimen de manera permanente se acumulan y terminan por estallar fuera de todo control. Cuando el equilibrio entre Netzach y Hod está bien afinado, la expresión es emocionalmente veraz y socialmente integrada."
          ]
        }
      ]
    }
  },
  {
    id: "sefirot-hod",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.11,
    title: { en: "Hod", es: "Hod" },
    hebrew: "הוד",
    subtitle: { en: "Glory", es: "Gloria" },
    sections: {
      en: [
        {
          paragraphs: [
            "Hod is the eighth Sefirah, on the left pillar beneath Gevurah. In the Tzelem Elohim it corresponds to the left leg. Its name, glory or splendor, names what occurs when consciousness conceals nothing: it shines because it does not filter.",
            "The spiritual state of Hod is Temimut, integrity. Not honesty as a social code, although that is included, but coherence between what a person is and what he says, between heart and mouth, between intention and word. The Talmud teaches that the seal of HaShem is emet, truth. Hod embodies that quality on the plane of language.",
            "Temimut is the inner force of Hod: the completeness of one who is not divided between what he professes and what he lives. Tradition distinguishes Temimut haRatzon, integrity of the will; Temimut haLev, integrity of the heart; and Temimut haMaaseh, integrity of action. At the three levels, the person serves HaShem without hidden reserve, without facade, and without double standard. The difficulty of Temimut does not lie in its complexity, but in the subtlety of self-deception.",
            "Hod also receives a dimension of Bitachon: its passive form, trust in divine providence. In contrast to the active Bitachon of Netzach, which advances and acts, the Bitachon of Hod knows how to release control and accept that what HaShem disposes exceeds what the person would have planned. When Netzach and Hod are balanced, the soul acts with energy and rests in peace: it does what it must do, but hands over the result.",
            "Language is the territory of Hod. Not only words: also letters, the minimal units of speech. Qabalah teaches that the world was created through divine language, and that each Hebrew letter is a channel of shefa. The human being, by speaking, shapes shared reality, builds bonds, transmits knowledge. For this reason lies, rumors, slander, and deception carry so much weight in the qabalistic perspective: they are not only ethical transgressions, but ruptures in the fabric that language sustains.",
            "The Talmud and Mussar treat lashon hara, harmful speech, as one of the transgressions of greatest weight. From Hod, the explanation is precise: every spoken word is registered in the structure of the worlds. True words strengthen the Keli that bears them; false ones deteriorate it. Honesty in Hod is a spiritual practice with real consequences.",
            "Netzach is the emotional content that seeks expression. Hod is the linguistic form that gives it structure. When a person articulates genuine emotions in precise words, communication produces real connection. When he uses the language of Hod to mask the emotions of Netzach, imbalance appears: carefully chosen words that sustain formal truth and conceal substantial truth. This is the Qlifah of Hod in its most sophisticated form.",
            "Hod receives its Ohr from Binah, at the lower end of the left pillar. The light it carries is that of articulated understanding, law, the structure that makes knowledge possible. The danger of Hod is taking that structure as the whole: confusing rationality with reality. The intellect organizes and names, but it does not reach what is above it. The illusion that what cannot be named does not exist is the most widespread Qlifah of Hod in modernity.",
            "The virtue is honesty that includes consciousness of one's own cognitive limits. The honest person in Hod does not pretend to understand everything; he transmits with precision what he understands and indicates the limits of that understanding. Trust in human relationships is built on that basis: not on the omniscience of the one who speaks, but on the coherence between what he says he knows and what he really knows.",
            "The commandment lo tignov, you shall not steal, connects with Hod because theft is a lie applied to the social domain: taking without giving, appropriating what was not received. In a broad sense, a person steals time, credit, and reputation through defamation. All these forms of theft transgress Hod because they destroy the trust that language and social exchange require in order to function."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Hod es la octava Sefirah, en el pilar izquierdo bajo Gevurah. En la Tzelem Elohim corresponde a la pierna izquierda. Su nombre, gloria o esplendor, nombra lo que ocurre cuando la conciencia no oculta nada: brilla porque no filtra.",
            "El estado espiritual de Hod es la Temimut, la integridad. No la honestidad como código social, aunque eso está incluido, sino la coherencia entre lo que la persona es y lo que dice, entre el corazón y la boca, entre la intención y la palabra. El Talmud enseña que el sello de HaShem es la emet, la verdad. Hod encarna esa cualidad en el plano del lenguaje.",
            "Temimut es la fuerza interior de Hod: la completitud de quien no está dividido entre lo que profesa y lo que vive. La tradición distingue Temimut haRatzon, la integridad de la voluntad; Temimut haLev, la integridad del corazón; y Temimut haMaaseh, la integridad de la acción. En los tres niveles, la persona sirve a HaShem sin reserva oculta, sin fachada y sin doble estándar. La dificultad de Temimut no está en su complejidad, sino en la sutileza del autoengaño.",
            "Hod también recibe una dimensión del Bitachon: su forma pasiva, la confianza en la providencia divina. Frente al Bitachon activo de Netzach, que avanza y actúa, el Bitachon de Hod sabe soltar el control y aceptar que lo que HaShem dispone supera lo que la persona habría planeado. Cuando Netzach y Hod se equilibran, el alma actúa con energía y descansa con paz: hace lo que debe hacer, pero entrega el resultado.",
            "El lenguaje es el territorio de Hod. No solo las palabras: también las letras, las unidades mínimas del habla. La Qabalah enseña que el mundo fue creado por el lenguaje divino, y que cada letra hebrea es un canal de shefa. El ser humano, al hablar, moldea la realidad compartida, construye vínculos, transmite conocimiento. Por eso la mentira, el rumor, la calumnia y el engaño pesan tanto en la perspectiva qabalística: no son solo transgresiones éticas, sino rupturas en el tejido que el lenguaje sostiene.",
            "El Talmud y el Mussar tratan el lashon hara, el lenguaje dañino, como una de las transgresiones de mayor peso. Desde Hod, la explicación es precisa: toda palabra pronunciada queda registrada en la estructura de los mundos. Las palabras verdaderas fortalecen el Keli que las porta; las falsas lo deterioran. La honestidad en Hod es una práctica espiritual con consecuencias reales.",
            "Netzach es el contenido emocional que busca expresión. Hod es la forma lingüística que le da estructura. Cuando la persona articula emociones genuinas en palabras precisas, la comunicación produce conexión real. Cuando usa el lenguaje de Hod para enmascarar las emociones de Netzach, aparece el desequilibrio: palabras cuidadosamente elegidas que sostienen la verdad formal y ocultan la verdad sustancial. Esta es la Qlifah de Hod en su forma más sofisticada.",
            "Hod recibe su Ohr de Binah, en el extremo inferior del pilar izquierdo. La luz que porta es la de la comprensión articulada, la ley, la estructura que hace posible el conocimiento. El peligro de Hod es tomar esa estructura por la totalidad: confundir la racionalidad con lo real. El intelecto organiza y nombra, pero no alcanza lo que está por encima de él. La ilusión de que lo que no puede nombrarse no existe es la Qlifah de Hod más extendida en la modernidad.",
            "La virtud es la honestidad que incluye la conciencia de los propios límites cognitivos. La persona honesta en Hod no finge comprender todo; transmite con precisión lo que comprende y señala los límites de esa comprensión. La confianza en las relaciones humanas se construye sobre esa base: no sobre la omnisciencia del que habla, sino sobre la coherencia entre lo que dice saber y lo que realmente sabe.",
            "El mandamiento lo tignov, no robarás, conecta con Hod porque el robo es mentira aplicada al dominio social: tomar sin dar, apropiarse de lo que no se recibió. En sentido amplio, la persona roba tiempo, crédito y reputación mediante la difamación. Todas esas formas de robo transgreden Hod porque destruyen la confianza que el lenguaje y el intercambio social requieren para funcionar."
          ]
        }
      ]
    }
  },
  {
    id: "sefirot-yesod",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.12,
    title: { en: "Yesod", es: "Yesod" },
    hebrew: "יסוד",
    subtitle: { en: "Foundation", es: "Fundamento" },
    sections: {
      en: [
        {
          paragraphs: [
            "Yesod, Foundation, is the ninth Sefirah. It occupies the central axis directly beneath Tiferet and corresponds, in the Tzelem Elohim, to the reproductive organs: the place where life is transmitted between generations. The image has its reason: Yesod channels what the higher Sefirot have elaborated toward Malkhut, just as generative power carries the accumulated life of one generation to the next.",
            "The spiritual state of Yesod is emet, truth understood as coherence between interior and exterior. The faith of Keter, the wisdom of Chokhmah, the understanding of Binah, the midot of the emotional triad: all of this must be able to express itself in concrete reality. Yesod is that passage, the hinge between what the soul is and what the soul does.",
            "Emet is the inner force of Yesod because Yesod transmits. If the channel is distorted, what reaches Malkhut remains mixed with ego, interest, or falsehood. For this reason truth is not only absence of lies, but coherence between inner root and outward manifestation. The letters of Emet - Alef, Mem, and Tav - span the alef-bet from beginning to end: truth sustains the totality and certifies the authenticity of what is transmitted.",
            "The search for Emet requires constant review, humility to recognize error, and willingness to do Teshuvah. One who lives from Emet does not hide his faults from himself or from HaShem, because he knows that all rectification begins by bringing falsehood into the light. In relationships, this truth permits real trust: not only because the person does not lie, but because there is consistency between word, intention, and action. Thus Yesod can fulfill its function as foundation and clean channel toward Malkhut.",
            "Tradition links Yesod to the figure of the tzadik. The verse of Mishle says it: tzadik yesod olam, the righteous one is the foundation of the world. The tzadik is not one who merely avoids sin, but one whose life has become a channel of shefa. His study generates new perspectives in Torah; his conduct orients those around him. The tzadik in Yesod has achieved that the coherence between Tiferet and Malkhut be a lived reality, not an aspiration.",
            "Yesod gathers the shefa of the six Sefirot that form Zeir Anpin - Chesed, Gevurah, Tiferet, Netzach, Hod, and Yesod itself - and channels it toward Malkhut. It acts as a filter: it causes the light of the higher Sefirot to reach Malkhut in a form that the material world can receive. Without that filter, the distance between Chokhmah and Malkhut would have no bridge.",
            "The psychological dimension of Yesod is where the soul forms its image before the world. That image is not false by definition: it is the mode in which Tiferet expresses itself in the time and space of relationships. The problem appears when that image becomes autonomous, when the self of Yesod ceases to be an expression of Tiferet and becomes a substitute. One who defines himself by what others see, who needs the external mirror in order to sustain himself, has cut the bond between Yesod and Tiferet.",
            "Qabalah uses the Moon for Yesod: it receives the light of the Sun and reflects it. When that reflection is clean, Malkhut receives a faithful image. When dimyon, uncontrolled imagination, or the weight of unintegrated experiences clouds it, the image that reaches Malkhut is distorted, and the actions that derive from it are distorted as well.",
            "Imagination belongs to Yesod. This is one of the central intuitions of Lurianic Qabalah: dimyon is not a game without consequences but a power that shapes reality before it manifests. The images the soul cultivates have consequences that go beyond psychology. For this reason tradition insists on care for thoughts, purity of imagination, and the holiness of bonds: all of this operates in Yesod and affects what manifests in Malkhut.",
            "The virtues of Yesod are trust and autonomy. Bitachon operates here at the level of concrete action: trusting that the order of the worlds carries a purpose, even where there is no understanding. Acting from one's own center without seeking external validation at every step. Excessive dependency - emotional, economic, ideological - is the sign that Yesod has lost its alignment with Tiferet.",
            "The Qlifah of Yesod appears as laziness or reactive hypersensitivity. Laziness replaces action with image: the imaginative power of Yesod, without orientation toward Malkhut, replaces reality instead of opening a path for it. Reactive hypersensitivity is the opposite extreme: being shaken by any external influence, losing the axis. Both extremes indicate that the filter of Yesod is broken."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Yesod, Fundamento, es la novena Sefirah. Ocupa el eje central directamente debajo de Tiferet y corresponde, en la Tzelem Elohim, a los órganos reproductivos: el lugar donde la vida se transmite entre generaciones. La imagen tiene su razón: Yesod canaliza lo que las Sefirot superiores elaboraron hacia Malkhut, como el poder generativo lleva la vida acumulada de una generación a la siguiente.",
            "El estado espiritual de Yesod es el emet, la verdad entendida como coherencia entre interior y exterior. La fe de Keter, la sabiduría de Jokhmah, el entendimiento de Binah, las midot de la triada emocional: todo eso debe poder expresarse en la realidad concreta. Yesod es ese paso, la bisagra entre lo que el alma es y lo que el alma hace.",
            "Emet es la fuerza interior de Yesod porque Yesod transmite. Si el canal está distorsionado, lo que llega a Malkhut queda mezclado con ego, interés o falsedad. Por eso la verdad no es solo ausencia de mentira, sino coherencia entre la raíz interior y la manifestación exterior. Las letras de Emet - Alef, Mem y Tav - abarcan el alef-bet de principio a fin: la verdad sostiene la totalidad y certifica la autenticidad de lo que se transmite.",
            "La búsqueda de Emet exige revisión constante, humildad para reconocer el error y disposición a hacer Teshuvah. Quien vive desde Emet no oculta sus fallos ante sí mismo ni ante HaShem, porque sabe que toda rectificación comienza al sacar la falsedad a la luz. En las relaciones, esta verdad permite confianza real: no solo porque la persona no miente, sino porque hay consistencia entre su palabra, su intención y su acción. Así Yesod puede cumplir su función de fundamento y canal limpio hacia Malkhut.",
            "La tradición vincula Yesod a la figura del tzadik. El versículo de Mishle lo dice: tzadik yesod olam, el justo es el fundamento del mundo. El tzadik no es quien evita el pecado, sino aquel cuya vida se ha convertido en canal de shefa. Su estudio genera perspectivas nuevas en la Torá; su comportamiento orienta a quienes lo rodean. El tzadik en Yesod ha logrado que la coherencia entre Tiferet y Malkhut sea una realidad vivida, no una aspiración.",
            "Yesod recoge la shefa de las seis Sefirot que forman el Zeir Anpin, Chesed, Gevurah, Tiferet, Netzach, Hod y Yesod mismo, y la canaliza hacia Malkhut. Actúa como filtro: hace que la luz de las Sefirot superiores llegue a Malkhut en una forma que el mundo material puede recibir. Sin ese filtro, la distancia entre Jokhmah y Malkhut no tendría puente.",
            "La dimensión psicológica de Yesod es donde el alma forma su imagen ante el mundo. Esa imagen no es falsa por definición: es el modo en que Tiferet se expresa en el tiempo y en el espacio de las relaciones. El problema aparece cuando esa imagen se autonomiza, cuando el yo de Yesod deja de ser expresión de Tiferet y se convierte en sustituto. Quien se define por lo que los demás ven, quien necesita del espejo externo para sostenerse, ha cortado el vínculo entre Yesod y Tiferet.",
            "La Qabalah usa la Luna para Yesod: recibe la luz del Sol y la refleja. Cuando ese reflejo está limpio, Malkhut recibe una imagen fiel. Cuando el dimyon, la imaginación descontrolada, o el peso de experiencias no integradas lo empañan, la imagen que llega a Malkhut está distorsionada, y las acciones que de ella derivan también.",
            "La imaginación pertenece a Yesod. Esta es una de las intuiciones centrales de la Qabalah luriánica: el dimyon no es un juego sin consecuencias sino una potencia que moldea la realidad antes de que se manifieste. Las imágenes que el alma cultiva tienen consecuencias que van más allá de la psicología. Por eso la tradición insiste en el cuidado de los pensamientos, la pureza de la imaginación, la santidad de los vínculos: todo eso opera en Yesod, e incide en lo que se manifiesta en Malkhut.",
            "Las virtudes de Yesod son la confianza y la autonomía. El Bitachon, operando aquí en el nivel de la acción concreta: confiar en que el orden de los mundos lleva un propósito, incluso donde no hay comprensión. Actuar desde el propio centro sin buscar validación externa en cada paso. La dependencia excesiva, emocional, económica, ideológica, es la señal de que Yesod ha perdido su alineación con Tiferet.",
            "La Qlifah de Yesod aparece como pereza o hipersensibilidad reactiva. La pereza sustituye la acción por la imagen: el poder imaginativo de Yesod, sin orientación hacia Malkhut, reemplaza la realidad en lugar de abrirle paso. La hipersensibilidad reactiva es el extremo opuesto: dejarse sacudir por cualquier influencia externa, perder el eje. Ambos extremos señalan que el filtro de Yesod está roto."
          ]
        }
      ]
    }
  },
  {
    id: "sefirot-malkhut",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.13,
    title: { en: "Malkhut", es: "Malkhut" },
    hebrew: "מלכות",
    subtitle: { en: "Kingdom", es: "Reino" },
    sections: {
      en: [
        {
          paragraphs: [
            "Malkhut, the tenth Sefirah, occupies the lower end of the central axis, beneath Yesod, and gathers all the shefa that has traveled through the Tree from Keter. In the Tzelem Elohim it corresponds to the mouth, or according to some readings to the lower part of the body: the place where speech comes out, where the act ends.",
            "Its spiritual state is shiflut, humility. Not renunciation of one's own worth, but the disposition to receive and recognize that one is not the source. Malkhut comes from melekh, king: a king without a kingdom does not exist as king; a kingdom without a king has no unity. Here divine sovereignty manifests in the concrete world, and the human being who accepts that sovereignty becomes its expression.",
            "Shiflut is the inner force of Malkhut. It should be distinguished from Bitul: in Bitul, the self is nullified before the light of HaShem; in Shiflut, the person continues to feel his existence, but from an honest consciousness of smallness, dependence, and distance before the Creator. This humility does not crush the soul. On the contrary, it makes it capable of receiving, because it ceases to present itself as source and recognizes itself as vessel.",
            "The greatness of Malkhut lies precisely in having no light of its own. It receives from the higher Sefirot and transmits to the world. In the same way, the person who embodies Shiflut does not seek recognition or dominion, but to become a channel. For this reason humility can elevate: one who does not appropriate the light allows it to flow toward those who need it. In the qabalistic sense, the true king governs from Shiflut, because his power is not born from himself, but from what he receives from HaShem and gives to the people.",
            "The Zohar calls Malkhut the Shekhinah, the Presence that dwells in the world. It also calls her the Daughter, the Bride, the Queen. All these names point to the same thing: Malkhut is where the infinite touches the finite, where the Ohr Elyon becomes knowable to the creature. The light seems less intense here than in the higher Sefirot, but the Zohar teaches that divine light is the same at all levels; what changes is the capacity of the Keli that contains it.",
            "Malkhut is the world of speech. The other Sefirot think, feel, form; Malkhut speaks. The wisdom of Chokhmah, the understanding of Binah, the midot of the emotional triad, the impulses of the lower triad: all of it reaches the mouth and becomes word. For this reason tradition examines speech with such attention. What comes out of the mouth shows the state of the whole inner chain.",
            "In the spiritual order, Malkhut is the point of arrival of the descent and the point of departure of the ascent. Every soul reaches Malkhut when it incarnates, and from Malkhut begins its return. The sha'ar tzadikim, the gate of the righteous mentioned by the Psalm, is Malkhut. There is no access to the higher Sefirot without passing through honest recognition of one's own situation in the physical world.",
            "Spiritual work in Malkhut consists in sanctifying the material: receiving the physical world while knowing that divine light inhabits it, using it as the platform of Tikun, not identifying with it as if it were the totality of reality. Qabalah does not teach contempt for the material; that error would be the mirror of the materialism it seeks to correct. It teaches that the material world has a precise purpose in Creation: to be the place where human freedom produces acts that rectify or damage the worlds. Without a material world there is no choice; without choice there is no possible Tikun.",
            "The Qlifah of Malkhut is the belief that only the physical is real. Few people formulate it in that way. There are those who say they believe in something beyond the material, but whose decisions, priorities, and values reveal a world in which the economic and the tangible are the only criteria. Lo tachmod, you shall not covet, the commandment associated with Malkhut, does not designate only the desire for what another has: it designates the incapacity to find sufficiency in one's own portion, the gaze fixed on what is lacking. Tikun Olam begins here: in the disposition to use what one has for the good, knowing that HaShem gives wealth and poverty to see how each person will use his own.",
            "Silence is the first practice of Malkhut. Before speaking, be silent. Before acting, observe. This receptive silence is not passivity; it is the opening that allows the light of the higher Sefirot to reach Malkhut without distortion. The discernment that Malkhut requires - distinguishing the true from the apparent, the substantial from the decorative, what serves Tikun from what satisfies the ego - requires the mouth to close long enough for the soul to listen."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Malkhut, la décima Sefirah, ocupa el extremo inferior del eje central, bajo Yesod, y recoge toda la shefa que ha recorrido el Árbol desde Keter. En la Tzelem Elohim corresponde a la boca, o según algunas lecturas a la parte inferior del cuerpo: el lugar donde el habla sale, donde el acto termina.",
            "Su estado espiritual es la shiflut, la humildad. No la renuncia a la propia valía, sino la disposición a recibir y reconocer que uno no es la fuente. Malkhut viene de melekh, rey: un rey sin reino no existe como rey; el reino sin rey no tiene unidad. Aquí la soberanía divina se manifiesta en el mundo concreto, y el ser humano que acepta esa soberanía se convierte en su expresión.",
            "Shiflut es la fuerza interior de Malkhut. Conviene distinguirla del Bitul: en el Bitul, el yo se anula ante la luz de HaShem; en la Shiflut, la persona sigue sintiendo su existencia, pero desde una conciencia honesta de pequeñez, dependencia y distancia ante el Creador. Esta humildad no aplasta al alma. Al contrario, la vuelve capaz de recibir, porque deja de presentarse como fuente y se reconoce como recipiente.",
            "La grandeza de Malkhut está precisamente en no tener luz propia. Recibe de las Sefirot superiores y transmite al mundo. Del mismo modo, la persona que encarna Shiflut no busca reconocimiento ni dominio, sino convertirse en canal. Por eso la humildad puede elevar: quien no se apropia de la luz permite que esta fluya hacia quienes la necesitan. En el sentido qabalístico, el verdadero rey gobierna desde Shiflut, porque su poder no nace de sí mismo, sino de lo que recibe de HaShem y entrega al pueblo.",
            "El Zohar llama a Malkhut la Shekhinah, la Presencia que habita en el mundo. La llama también la Hija, la Esposa, la Reina. Todos estos nombres apuntan a lo mismo: Malkhut es donde lo infinito toca lo finito, donde el Ohr Elyon se vuelve cognoscible para la criatura. La luz parece menos intensa aquí que en las Sefirot superiores, pero el Zohar enseña que la luz divina es la misma en todos los niveles; lo que cambia es la capacidad del Keli que la contiene.",
            "Malkhut es el mundo del habla. Las otras Sefirot piensan, sienten, forman; Malkhut habla. La sabiduría de Jokhmah, el entendimiento de Binah, las midot de la triada emocional, los impulsos de la triada inferior: todo llega a la boca y se convierte en palabra. Por eso la tradición examina el habla con tanta atención. Lo que sale de la boca muestra el estado de toda la cadena interior.",
            "En el orden espiritual, Malkhut es el punto de llegada del descenso y el punto de partida del ascenso. Toda alma llega a Malkhut al encarnarse y desde Malkhut comienza su retorno. El sha'ar tzadikim, la puerta de los justos que menciona el Salmo, es Malkhut. No hay acceso a las Sefirot superiores sin pasar por el reconocimiento honesto de la propia situación en el mundo físico.",
            "El trabajo espiritual en Malkhut consiste en santificar lo material: recibir el mundo físico sabiendo que la luz divina lo habita, usarlo como plataforma del Tikun, no identificarse con él como si fuera la totalidad de la realidad. La Qabalah no enseña el desprecio de lo material; ese error sería el espejo del materialismo que pretende corregir. Enseña que el mundo material tiene un propósito preciso en la Creación: ser el lugar donde la libertad humana produce actos que rectifican o dañan los mundos. Sin mundo material no hay elección; sin elección no hay Tikun posible.",
            "La Qlifah de Malkhut es la creencia de que solo lo físico es real. Pocas personas la formulan así. Hay quienes dicen creer en algo más que lo material pero cuyas decisiones, prioridades y valores revelan un mundo en el que lo económico y lo tangible son los únicos criterios. Lo tachmod, no codiciarás, el mandamiento asociado a Malkhut, no designa solo el deseo de lo que tiene el otro: designa la incapacidad de encontrar suficiencia en la propia porción, la mirada fija en lo que falta. El Tikun Olam comienza aquí: en la disposición de usar lo que se tiene para el bien, sabiendo que HaShem da riqueza y pobreza para ver cómo cada persona usará la suya.",
            "El silencio es la primera práctica de Malkhut. Antes de hablar, callar. Antes de actuar, observar. Este silencio receptivo no es pasividad; es la apertura que permite que la luz de las Sefirot superiores llegue a Malkhut sin distorsión. El discernimiento que Malkhut exige, distinguir lo verdadero de lo aparente, lo sustancial de lo decorativo, lo que sirve al Tikun de lo que satisface el ego, requiere que la boca se cierre el tiempo suficiente para que el alma pueda escuchar."
          ]
        }
      ]
    }
  },
  {
    id: "sefirot-daat",
    parentId: "ets-haim",
    level: 2,
    mainNumber: 5.14,
    title: { en: "Daat", es: "Daat" },
    hebrew: "דעת",
    subtitle: { en: "Knowledge", es: "Conocimiento" },
    sections: {
      en: [
        {
          paragraphs: [
            "Daat appears in the Tree when the mequbalim omit Keter from the enumeration. It occupies Keter's place as representative on the plane of active consciousness, but it is not a Sefirah. It is the channel that carries the energy of Chokhmah and Binah toward the lower Sefirot. It is not a node: it is what keeps the nodes in communication.",
            "The name confirms it. Daat, knowledge, shares a root with the verb used in Bereshit 4:1 when the Torah says that Adam knew Chavah: a knowledge that is union, total presence, not accumulation of data. Qabalah applies this key at all its levels. To know something is to make it part of oneself. For this reason Daat is not erudition; it is the capacity to integrate what is known until it changes thought, word, and action.",
            "The inner koach of Daat is Yichud, unification. Daat does not know from outside: it unites the subject with what is known until that knowledge transforms the inner structure. For this reason the kavanot also receive the name yichudim: their function is not to add devotional thoughts to an action, but to gather separated dimensions of reality and return them to their root in HaShem. An action performed leshem shamayim becomes Yichud hamaaseh, unification of action, because lower and higher converge in a single act.",
            "In the soul, Yichud means integration. A truth known only in the mind has not yet reached Daat; it reaches Daat when it descends to the heart and modifies conduct. In human relationships, this power appears when the encounter with another does not remain a superficial exchange, but touches something inward and produces transformation. Daat is therefore the point where knowledge ceases to be information and becomes life.",
            "Tradition distinguishes two modes. Daat Haneelam, hidden knowledge, is the inner connection between Chokhmah and Binah that the usual diagram of the Tree does not show, because it operates before articulation. This bond prevents the intuitive wisdom of Chokhmah and the structuring intelligence of Binah from functioning as separated faculties. Only those who have worked the higher Sefirot reach it, and its opening does not depend on ordinary intellectual effort but on the avodah that refines the midot from within.",
            "Daat Hamitpashet, the knowledge that extends, is the bridge between intellect and emotions. From here what Chokhmah and Binah elaborate reaches Chesed, Gevurah, and Tiferet, and is translated into conduct. Without this bridge, the highest understanding remains inert. The difference between one who knows he should be patient and one who is patient: the first has information, the second has Daat.",
            "In Zoharic language, Chokhmah is Abba and Binah is Ima. Daat is the fruit of their union. From Chokhmah it inherits the capacity to work with symbols and analogies, to apprehend truths that logic does not catch. From Binah it inherits structure and discrimination, the capacity to give form to what would remain amorphous. The result is neither intuition nor analysis: it is a third thing that includes both.",
            "In the design of the Tree, Daat connects the higher Sefirot with the lower ones. Binah contains the ten lower Sefirot in potential. Daat is the channel through which that energy descends. The mequbalim speak of the fifty gates of Binah, sha'arei Binah: forty-nine are the levels through which the energy flows toward Zeir Anpin and Malkhut, and Daat gathers that energy and conducts it toward Chokhmah and Binah. The fiftieth gate, which Binah itself represents, opens only when the practitioner has worked through the previous forty-nine levels. The mequbalim compare that opening to a new birth.",
            "Daat and Yesod share a precise bond. Yesod operates on the plane of transmission and action; Daat, on the plane of knowledge that becomes part of being. The same word that describes the union of Adam and Chavah describes the act of knowing with totality. In both cases, what is produced is not information but life.",
            "The specific obstacle that blocks access to Daat is the illusion of knowing. The Talmud illustrates it in different registers and Mussar literature develops it: intellectual arrogance is a form of avodah zarah, because the practitioner turns the image of his own understanding into an idol. Daat demands the opposite posture. The more true Daat grows, the greater the consciousness of what remains to be known.",
            "This openness is not passivity. The practitioner who remains still does not learn; one who does not move through the world does not find what the world has to teach. The gate of Daat opens inward, but it must be pushed. The impulse that opens it is not accumulation but the disposition not to cling to the answers one already has. One who accumulates data without allowing himself to be transformed by them has information. One who integrates knowledge until it changes his way of acting and relating advances toward Daat even if his library is modest.",
            "One who reaches Daat gains discernment, not certainty. He knows his limits and therefore moves within them with greater precision. The capacity to distinguish between what the yetzer hara presents as desirable and what the soul recognizes as true depends on the level of Daat attained."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Daat aparece en el Árbol cuando los mequbalim omiten a Keter de la enumeración. Ocupa su lugar como representante en el plano de la conciencia activa, pero no es una Sefirah. Es el canal que lleva la energía de Jokhmah y Binah hacia las Sefirot inferiores. No es un nodo: es lo que mantiene a los nodos en comunicación.",
            "El nombre lo confirma. Daat, conocimiento, comparte raíz con el verbo que usa Bereshit 4:1 cuando la Torá dice que Adam conoció a Chavah: un conocimiento que es unión, presencia total, no acumulación de datos. La Qabalah aplica esta clave en todos sus niveles. Conocer algo es hacerlo parte de uno. Por eso Daat no es erudición; es la capacidad de integrar lo sabido hasta que cambia el pensamiento, la palabra y la acción.",
            "El koach interior de Daat es el Yichud, la unificación. Daat no conoce desde fuera: une al sujeto con lo conocido hasta que ese conocimiento transforma la estructura interior. Por eso las kavanot reciben también el nombre de yichudim: su función no es añadir pensamientos devocionales a una acción, sino reunir dimensiones separadas de la realidad y devolverlas a su raíz en HaShem. Una acción realizada leshem shamayim se convierte así en Yichud hamaaseh, unificación de la acción, porque lo inferior y lo superior convergen en un solo acto.",
            "En el alma, Yichud significa integración. Una verdad conocida solo en la mente aún no ha llegado a Daat; llega a Daat cuando desciende al corazón y modifica la conducta. En las relaciones humanas, este poder aparece cuando el encuentro con otro no queda en intercambio superficial, sino que toca algo interior y produce transformación. Daat es, por tanto, el punto donde el conocimiento deja de ser información y se convierte en vida.",
            "La tradición distingue dos modos. Daat Haneelam, el conocimiento oculto, es la conexión interna entre Jokhmah y Binah que el diagrama habitual del Árbol no muestra, porque opera antes de la articulación. Este lazo impide que la sabiduría intuitiva de Jokhmah y la inteligencia estructurante de Binah funcionen como facultades separadas. Solo lo alcanzan quienes han trabajado las Sefirot superiores, y su apertura no depende del esfuerzo intelectual ordinario sino de la avodah que refina las midot desde adentro.",
            "Daat Hamitpashet, el conocimiento que se extiende, es el puente entre el intelecto y las emociones. Desde aquí lo que Jokhmah y Binah elaboran llega a Chesed, Gevurah y Tiferet, y se traduce en conducta. Sin este puente, la comprensión más elevada permanece inerte. La diferencia entre quien sabe que debe ser paciente y quien lo es: el primero tiene información, el segundo tiene Daat.",
            "En el lenguaje zohárico, Jokhmah es Abba y Binah es Ima. Daat es el fruto de su unión. De Jokhmah hereda la capacidad de trabajar con símbolos y analogías, de aprehender verdades que la lógica no atrapa. De Binah hereda la estructura y la discriminación, la capacidad de dar forma a lo que permanecería amorfo. El resultado no es intuición ni análisis: es una tercera cosa que incluye a ambos.",
            "En el diseño del Árbol, Daat conecta las Sefirot superiores con las inferiores. Binah contiene en potencia las diez Sefirot inferiores. Daat es el canal por el que esa energía desciende. Los mequbalim hablan de las cincuenta puertas de Binah, sha'arei Binah: cuarenta y nueve son los niveles por los que discurre la energía hacia Zeir Anpin y Malkhut, y Daat recoge esa energía y la conduce hacia Jokhmah y Binah. La puerta cincuenta, que Binah misma representa, solo se abre cuando el practicante ha trabajado los cuarenta y nueve niveles anteriores. Los mequbalim comparan esa apertura con un nuevo nacimiento.",
            "Daat y Yesod comparten un vínculo preciso. Yesod opera en el plano de la transmisión y la acción; Daat, en el plano del conocimiento que se vuelve parte del ser. La misma palabra que describe la unión de Adam y Chavah describe el acto de conocer con totalidad. En los dos casos, lo que se produce no es información sino vida.",
            "El obstáculo específico que bloquea el acceso a Daat es la ilusión de saber. El Talmud lo ilustra en distintos registros y la literatura musarística lo desarrolla: la arrogancia intelectual es una forma de avodah zarah, porque el practicante convierte en ídolo la imagen de su propio entendimiento. Daat exige la postura contraria. Cuanto más crece el Daat verdadero, mayor es la conciencia de lo que queda por conocer.",
            "Esta apertura no es pasividad. El practicante que permanece quieto no aprende; el que no se mueve por el mundo no encuentra lo que el mundo tiene para enseñarle. La puerta de Daat se abre hacia adentro, pero hay que empujar. El impulso que la abre no es la acumulación sino la disposición de no aferrarse a las respuestas que ya se tienen. El que acumula datos sin dejarse transformar por ellos tiene información. El que integra el conocimiento hasta que cambia su manera de actuar y de relacionarse avanza hacia Daat aunque su biblioteca sea modesta.",
            "Quien alcanza Daat gana en discernimiento, no en certeza. Conoce sus límites y por eso se mueve dentro de ellos con mayor precisión. La capacidad de distinguir entre lo que el yetzer hara presenta como deseable y lo que el alma reconoce como verdadero depende del nivel de Daat alcanzado."
          ]
        }
      ]
    }
  },
  {
    id: "neshamot",
    parentId: null,
    level: 1,
    mainNumber: 6,
    title: { en: "Neshamot", es: "Neshamot" },
    hebrew: "נשמות",
    subtitle: { en: "Souls", es: "Almas" },
    sections: {
      en: [
        {
          paragraphs: [
            "The doctrine of the soul in Qabalah is the most articulated in all Jewish literature. It does not speculate about the immaterial: it builds a doctrinal architecture raised over centuries, from the Zohar to Ets Haim, where Rav Chaim Vital gathers the teaching of the Ari, Rav Yitzhak Luria, and continuing to Nefesh HaChaim of Rav Chaim of Volozhin. Each of these masters examined the structure of the soul with technical rigor. Their differences of emphasis are real and deserve to be distinguished.",
            "Tradition articulates five levels of the soul: Nefesh, Ruach, Neshamah, Chayah, and Yechidah. Each level corresponds to one of the worlds of creation and marks a degree of proximity to the Divine. This correspondence sustains a precise conviction: the inner structure of the soul traverses the same ladder of worlds that organizes reality. The human being contains within himself all strata of existence.",
            "Sefer Yetzirah situates the four elements - earth, water, fire, and air - as fundamental categories of creation. Medieval commentators incorporated them into the understanding of body and soul. In the world of Asiyah, each element names an operative quality of the Nefesh: the solidity and perseverance of earth, the purifying and adaptive capacity of water, the transformative energy of fire, the mobility and openness of air. On that elemental substratum rests the life of the soul in the material world."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "La doctrina del alma en la Qabalah es la más articulada de toda la literatura judía. No especula sobre lo inmaterial: construye una arquitectura doctrinal levantada durante siglos, desde el Zohar hasta el Ets Haim, donde Rav Chaim Vital recoge la enseñanza del Ari, Rav Yitzhak Luria, y hasta el Nefesh HaChaim de Rav Chaim de Volozhin. Cada uno de estos maestros examinó la estructura del alma con rigor técnico. Sus diferencias de énfasis son reales y merecen distinguirse.",
            "La tradición articula cinco niveles del alma: Nefesh, Ruach, Neshamah, Chayah y Yechidah. Cada nivel corresponde a uno de los mundos de la creación y marca un grado de proximidad a lo Divino. Esta correspondencia sostiene una convicción precisa: la estructura interior del alma recorre la misma escalera de mundos que organiza la realidad. El ser humano contiene en sí todos los estratos de la existencia.",
            "El Sefer Yetzirah sitúa los cuatro elementos, tierra, agua, fuego y aire, como categorías fundamentales de la creación. Los comentaristas medievales los incorporaron a la comprensión del cuerpo y del alma. En el mundo de Asiyah, cada elemento nombra una cualidad operativa del Nefesh: la solidez y perseverancia de la tierra, la capacidad purificadora y adaptativa del agua, la energía transformadora del fuego, la movilidad y apertura del aire. Sobre ese sustrato elemental descansa la vida del alma en el mundo material."
          ]
        }
      ]
    }
  },
  {
    id: "neshamot-nefesh",
    parentId: "neshamot",
    level: 2,
    mainNumber: 6.1,
    title: { en: "Nefesh", es: "Nefesh" },
    hebrew: "נפש",
    subtitle: { en: "Physical Life", es: "Vida física" },
    sections: {
      en: [
        {
          paragraphs: [
            "Nefesh is the primary level of the soul. It resides in Olam haAsiyah, the world of action, and fulfills a vital function: it animates the body, sustains its processes, and houses the basic impulses: hunger, thirst, desires of the flesh, sensory perception. The five senses are its domain. Through them Nefesh orients the human being in the physical world and puts him in contact with concrete reality.",
            "The Lurianic tradition associates Nefesh with Malkhut, the kingdom, the lowest Sefirah of the sefiratic tree and the one most directly linked to matter. The position does not indicate inferiority. Olam haAsiyah is the place where the divine will is realized in acts: here the practitioner fulfills the mitzvot, sanctifies the body through practice, and gives tangible form to the spiritual. Nefesh is the meeting point between soul and world. Its rectification, through care of the body, mastery of impulses, and correct action, inaugurates all authentic avodat HaShem.",
            "Nefesh also carries emotions in their rawest form: passions, fears, joys that arise before judgment. They are not elaborated emotions; they burst forth with the force of the instinctive. Spiritual work begins at this level. The practitioner learns to recognize these inner forces and channel them toward higher ends."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "El Nefesh es el nivel primario del alma. Reside en el Olam haAsiyah, el mundo de la acción, y cumple una función vital: anima el cuerpo, sostiene sus procesos y aloja los impulsos básicos: el hambre, la sed, los deseos de la carne, la percepción sensorial. Los cinco sentidos son su dominio. A través de ellos el Nefesh orienta al ser humano en el mundo físico y lo pone en contacto con la realidad concreta.",
            "La tradición luriánica asocia el Nefesh con Malkhut, el reino, la Sefirah más baja del árbol sefirótico y la más directamente ligada a la materia. La posición no indica inferioridad. El Olam haAsiyah es el lugar donde la voluntad divina se realiza en actos: aquí el practicante cumple las mitzvot, santifica el cuerpo mediante la práctica y da forma tangible a lo espiritual. El Nefesh es el punto de encuentro entre el alma y el mundo. Su rectificación, a través del cuidado del cuerpo, el dominio de los impulsos y la acción correcta, inaugura toda avodat HaShem auténtica.",
            "El Nefesh carga también las emociones en su forma más cruda: las pasiones, los miedos, las alegrías que brotan antes del juicio. No son emociones elaboradas; irrumpen con la fuerza de lo instintivo. El trabajo espiritual comienza en este nivel. El practicante aprende a reconocer estas fuerzas internas y a encauzarlas hacia fines más elevados."
          ]
        }
      ]
    }
  },
  {
    id: "neshamot-ruach",
    parentId: "neshamot",
    level: 2,
    mainNumber: 6.2,
    title: { en: "Ruach", es: "Ruach" },
    hebrew: "רוח",
    subtitle: { en: "Spirit", es: "Espíritu" },
    sections: {
      en: [
        {
          paragraphs: [
            "The word ruach designates three things: wind, breath, spirit. In Genesis, the ruach of God hovers over the waters. This triple semantic charge is not ornament: the Ruach of the human soul introduces movement, orientation, and meaning into what Nefesh only experiences.",
            "In the Lurianic structure, Ruach belongs to Olam haYetzirah, the world of formation, and is anchored in the emotional Sefirot: Chesed, Gevurah, Tiferet, Netzach, Hod, and Yesod. Its territory is the midot, the moral and emotional qualities of character: love, rigor, compassion, constancy, humility, bond. Here the affective soul reaches elaborated form, capable of reflection and moral orientation.",
            "Ruach sustains ethical consciousness. Discernment between good and evil, remorse, aspiration toward rectitude: all of this operates at this level. For this reason work on the midot, central in the Mussar tradition and among practical mequbalim, is work on Ruach. One who refines his moral qualities prepares Ruach to receive the light that descends from Neshamah.",
            "Ruach also mediates. It takes the experiences of Nefesh and elaborates them. It receives the light of Neshamah and converts it into concrete dispositions. Without this work of translation, the lower and higher levels of the soul do not touch."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "La palabra ruach designa tres cosas: viento, aliento, espíritu. En Bereshit, el ruach de Dios se cierne sobre las aguas. Esa triple carga semántica no es ornamento: el Ruach del alma humana introduce movimiento, orientación y sentido en lo que el Nefesh solo experimenta.",
            "En la estructura luriánica, el Ruach pertenece al Olam haYetzirah, el mundo de la formación, y se ancla en las Sefirot emocionales: Chesed, Gevurah, Tiferet, Netzach, Hod y Yesod. Su territorio son las midot, las cualidades morales y emocionales del carácter: amor, rigor, compasión, constancia, humildad, vínculo. Aquí el alma afectiva alcanza forma elaborada, capaz de reflexión y orientación moral.",
            "El Ruach sostiene la conciencia ética. El discernimiento entre el bien y el mal, el remordimiento, la aspiración a la rectitud: todo eso opera en este nivel. Por eso el trabajo sobre las midot, central en la tradición musarista y entre los mequbalim prácticos, es trabajo sobre el Ruach. Quien refina sus cualidades morales dispone el Ruach para recibir la luz que desciende de Neshamah.",
            "El Ruach también media. Toma las experiencias del Nefesh y las elabora. Recibe la luz de Neshamah y la convierte en disposiciones concretas. Sin ese trabajo de traducción, los niveles inferiores y superiores del alma no se tocan."
          ]
        }
      ]
    }
  },
  {
    id: "neshamot-neshamah",
    parentId: "neshamot",
    level: 2,
    mainNumber: 6.3,
    title: { en: "Neshamah", es: "Neshamah" },
    hebrew: "נשמה",
    subtitle: { en: "Soul", es: "Alma" },
    sections: {
      en: [
        {
          paragraphs: [
            "Neshamah operates in Olam haBeriah, the world of creation, and corresponds to Binah, the dimension of divine intellect that gives form to existence. From this level the soul contemplates the divine, penetrates the meaning of Torah, and reaches understandings that ordinary experience cannot produce.",
            "The Zohar situates Neshamah as the component that proceeds from the Divine in the strict sense, hence its relation with holiness. When a person studies Torah in depth or fulfills a mitzvah with full intention, Neshamah vibrates and is nourished. Genuine spiritual inspiration is born from this level, not from Ruach, which belongs to the register of transitory emotion.",
            "Neshamah is not a Sefirah. It is a level of the human soul, with its own logic and correspondence in the tree of the worlds. To fuse both categories introduces a doctrinal error that damages the understanding of both. Neshamah dwells in Beriah, receives the light of Chayah and Yechidah from above, radiates toward Ruach and Nefesh below, and transfers to them the purpose that only spiritual intellect can set.",
            "Sustained study and practice open Neshamah. This is not a phenomenon reserved for the chosen: when the practitioner orders Nefesh and Ruach, the higher levels manifest as the natural consequence of accumulated work."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Neshamah opera en el Olam haBeriah, el mundo de la creación, y se corresponde con Binah, la dimensión del intelecto divino que da forma a la existencia. Desde este nivel el alma contempla lo divino, penetra en el sentido de la Torá y alcanza comprensiones que la experiencia ordinaria no puede producir.",
            "El Zohar sitúa a Neshamah como el componente que procede de lo Divino en sentido estricto, de ahí su relación con la santidad. Cuando una persona estudia Torá con profundidad o cumple una mitzvah con intención plena, Neshamah vibra y se nutre. La inspiración espiritual genuina nace de este nivel, no del Ruach, que pertenece al registro de la emoción transitoria.",
            "Neshamah no es una Sefirah. Es un nivel del alma humana, con lógica propia y correspondencia en el árbol de los mundos. Fusionar ambas categorías introduce un error doctrinal que daña la comprensión de las dos. Neshamah habita en Beriah, recibe la luz de Chayah y Yechidah desde arriba, irradia hacia Ruach y Nefesh desde abajo, y les transfiere el propósito que solo el intelecto espiritual puede fijar.",
            "El estudio y la práctica sostenidos abren Neshamah. No se trata de un fenómeno reservado a los elegidos: cuando el practicante ordena Nefesh y Ruach, los niveles superiores se manifiestan por consecuencia natural del trabajo acumulado."
          ]
        }
      ]
    }
  },
  {
    id: "neshamot-chayah",
    parentId: "neshamot",
    level: 2,
    mainNumber: 6.4,
    title: { en: "Chayah", es: "Chayah" },
    hebrew: "חיה",
    subtitle: { en: "Transcendent Life", es: "Vida trascendente" },
    sections: {
      en: [
        {
          paragraphs: [
            "Chayah belongs to Olam haAtzilut, the world of emanation, the closest to the Divine within the created order. The three previous levels accompany the human being in ordinary existence and admit conscious and progressive work; Chayah, by contrast, transcends individual consciousness as we know it.",
            "The word chayah means life in Hebrew, but here it designates the spiritual vitality that emanates from the divine will, not the biological process. In Ets Haim, Chayah corresponds to Chokhmah, primordial wisdom, the first flash of consciousness before all differentiation. At this level the perception of the soul ceases to be individual: consciousness encompasses an understanding of unity that exceeds the limits of the personal self.",
            "Chayah acts as a source of vitality for the lower levels. From Atzilut it channels divine light toward Neshamah, Ruach, and Nefesh. The classical mequbalim associate experiential access to this level with states of prophecy or with the highest degrees of devekut, adhesion to the Divine, reached by the great tzadikim. Few human beings reach this in life."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Chayah pertenece al Olam haAtzilut, el mundo de la emanación, el más cercano a lo Divino dentro del orden creado. Los tres niveles anteriores acompañan al ser humano en su existencia ordinaria y admiten trabajo consciente y progresivo; Chayah, en cambio, trasciende la conciencia individual tal como la conocemos.",
            "La palabra chayah significa vida en hebreo, pero aquí designa la vitalidad espiritual que emana de la voluntad divina, no el proceso biológico. En el Ets Haim, Chayah corresponde a Jokhmah, la sabiduría primordial, primer destello de conciencia antes de toda diferenciación. En este nivel la percepción del alma deja de ser individual: la conciencia abarca una comprensión de la unidad que supera los límites del yo personal.",
            "Chayah actúa como fuente de vitalidad para los niveles inferiores. Desde Atzilut canaliza la luz divina hacia Neshamah, Ruach y Nefesh. Los mequbalim clásicos asocian el acceso experiencial a este nivel con estados de profecía o con los grados más elevados de devekut, la adhesión a lo Divino, alcanzados por los grandes tzadikim. Pocos seres humanos llegan ahí en vida."
          ]
        }
      ]
    }
  },
  {
    id: "neshamot-yechidah",
    parentId: "neshamot",
    level: 2,
    mainNumber: 6.5,
    title: { en: "Yechidah", es: "Yechidah" },
    hebrew: "יחידה",
    subtitle: { en: "Unity", es: "Unidad" },
    sections: {
      en: [
        {
          paragraphs: [
            "Yechidah derives from echad, one. It names the point of the soul where uniqueness admits no degrees: the root of being that cannot separate from its divine source because it comes directly from it. In Ets Haim, Yechidah corresponds to Keter, the Crown, or transcends the order of the worlds in order to connect with Adam Kadmon.",
            "The mequbalim recognized from the beginning the difficulty of describing this level. Yechidah does not fit within intellectual or emotional categories, nor within any form of ordinary subjective experience. The lower levels of the soul are cultivated through accumulated effort. Yechidah is not: it is what the soul already is in its root, before every manifestation in the worlds.",
            "Some readings have confused here a point that deserves precision. The maximum proximity of Yechidah to the Divine does not imply ontological identity between the created soul and the Creator. Rav Chaim of Volozhin argued against this reading in Nefesh HaChaim. Supreme adhesion is adhesion, not fusion: the person remains a created entity even at the highest degree of nearness to the Divine. That distinction marks the boundary between rigorous monotheistic theology and pantheism, which tradition rejects.",
            "Yechidah also acts as a channel. From this level, divine light descends to Chayah and from there to the lower levels of the soul, sustaining the whole structure."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Yechidah deriva de echad, uno. Nombra el punto del alma donde la unicidad no admite grados: la raíz del ser que no puede separarse de su fuente divina porque proviene directamente de ella. En el Ets Haim, Yechidah corresponde a Keter, la corona, o trasciende el orden de los mundos para conectar con Adam Kadmon.",
            "Los mequbalim reconocieron desde el principio la dificultad de describir este nivel. Yechidah no cabe en categorías intelectuales ni emocionales, ni en ninguna forma de experiencia subjetiva ordinaria. Los niveles inferiores del alma se cultivan por esfuerzo acumulado. Yechidah no: es lo que el alma ya es en su raíz, antes de toda manifestación en los mundos.",
            "Algunas lecturas han confundido aquí un punto que merece precisión. La máxima proximidad de Yechidah a lo Divino no implica identidad ontológica entre el alma creada y el Creador. Rav Chaim de Volozhin polemizó contra esta lectura en el Nefesh HaChaim. La adhesión suprema es adhesión, no fusión: la persona permanece como entidad creada incluso en el grado más alto de cercanía a lo Divino. Esa distinción traza la frontera entre la teología monoteísta rigurosa y el panteísmo, que la tradición rechaza.",
            "Yechidah actúa también como canal. Desde este nivel, la luz divina desciende a Chayah y de allí a los niveles inferiores del alma, sosteniendo toda la estructura."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-hakodesh",
    parentId: null,
    level: 1,
    mainNumber: 7,
    title: { en: "Shemot HaKodesh", es: "Shemot HaKodesh" },
    hebrew: "שמות הקודש",
    subtitle: { en: "Sacred Names", es: "Nombres Sagrados" },
    sections: {
      en: [
        {
          paragraphs: [
            "Qabalah holds that the Names of God are not theological labels, but real manifestations of Divinity in language: points where the Infinite touches creation. Each Name reveals how God governs the world. Rabbi Yosef Gikatilla, in Sha'are Orah, describes them as gates toward the levels of emanation. To study them is to study the inner structure of the Torah and of reality.",
            "Each Name corresponds to a Sefirah, operates in its own register, and reveals one dimension of divine governance. For this reason the tradition distinguishes them carefully, recognizing the singularity of each one.",
            "The prohibition against pronouncing the Names in vain has its own doctrinal weight and forms part of the foundations of halakhah. The commandment Lo tisa et shem Havayah Elohekha lashav establishes that the sacred Name requires an appropriate context: tefilah, study, blessing, and legitimate oath.",
            "Whoever invokes the Name without intention or for personal benefit damages his own soul and transgresses one of the gravest commandments of the Torah. Gikatilla warns that knowledge of the sacred Names serves the refinement of the soul and nearness to HaShem, not one's own ends. This warning is the condition from which everything that follows must be read."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "La Qabalah sostiene que los Nombres de Dios no son etiquetas teológicas sino manifestaciones reales de la Divinidad en el lenguaje: puntos donde el Infinito toca la creación. Cada Nombre revela cómo Dios gobierna el mundo. Rabbi Yosef Gikatilla, en Sha'are Orah, los describe como puertas hacia los niveles de la emanación. Estudiarlos es estudiar la estructura interior de la Torá y de la realidad.",
            "Cada Nombre corresponde a una Sefirah, opera en su propio registro y revela una dimensión del gobierno divino. Por eso la tradición los distingue con cuidado, reconociendo en cada uno su singularidad.",
            "La prohibición de pronunciar los Nombres en vano tiene peso doctrinal propio y forma parte de los fundamentos de la halakhah. El mandamiento Lo tisa et shem Havayah Elohekha lashav establece que el Nombre sagrado exige un contexto apropiado: la tefilah, el estudio, la bendición, el juramento legítimo.",
            "Quien invoca el Nombre sin intención o para beneficio personal daña su propia alma y transgrede uno de los mandamientos más graves de la Torá. Gikatilla advierte que el conocimiento de los Nombres sagrados sirve al refinamiento del alma y al acercamiento a HaShem, no a fines propios. Esta advertencia es la condición desde la que debe leerse todo lo que sigue."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-hameforash",
    parentId: "shemot-hakodesh",
    level: 2,
    mainNumber: 7.1,
    title: { en: "Shem HaMeforash", es: "Shem HaMeforash" },
    hebrew: "שם המפורש",
    subtitle: { en: "The Explicit Name", es: "El Nombre explícito" },
    sections: {
      en: [
        {
          paragraphs: [
            "Before the worlds, the Sefirot, or any distinguishable form, there exists a reality that the qabalists name with two terms: Ein Sof, the Infinite, and Ayin, Nothingness. Ein Sof says that Divinity lacks limit, edge, or measure. Ayin says that this reality exceeds every category by which the human mind could understand it, and that before it every description remains empty. Ayin is the apophatic dimension of Ein Sof: the recognition that the Infinite exceeds what can be said.",
            "From that impossible-to-know ground emanates the Ohr Ein Sof, the Infinite Light. From that Light, through Tzimtzum and the emanation taught by the Lurianic tradition, arises the structure of the worlds: Adam Kadmon as the first configuration, the Sefirot as vessels of that Light, and the four Olamot as levels of manifestation. This entire unfolding is contained in one Name: י-ה-ו-ה, the Shem HaMeforash."
          ]
        },
        {
          heading: { en: "The Name and Its Place in the Tradition", es: "El Nombre y su lugar en la tradición" },
          paragraphs: [
            "Shem HaMeforash is the Explicit Name, the Name that names God in the most inward aspect of His being. Out of reverence, the tradition calls it HaShem, the Name, or substitutes Adonai when reading it. Its place is central.",
            "Rabbi Yosef Gikatilla, in Sha'are Orah, explains what these Names are not: not formulas, not passwords, not tools for obtaining power. They are keys that open access to the different emanations of Divinity. Each Name shows a facet of Ein Sof in His relation with the world; each Name is a form of presence. The highest, י-ה-ו-ה, is situated in Tiferet of Atzilut, because Tiferet is the axis of Ets Haim, the Tree of Life: the point that unites the higher Sefirot with the lower ones and distributes the light in every direction. For this reason י-ה-ו-ה also receives the name Havayah, derived from the verb to be: hayah, hoveh, yihyeh, was, is, and will be. God is not inside time; time is contained in Him, and the Name expresses this.",
            "The Zohar teaches, as does Nachmanides in his introduction to the Torah, that the whole Torah is a single Holy Name. The narratives, laws, and commandments are its outer garment; the soul of the Torah is the Name of the Eternal unfolding in letters, words, and combinations. Whoever alters a single letter of the Torah damages the Name itself. The Torah and the Name cannot be separated, because Revelation is the unfolded expression of the same reality that the Name concentrates.",
            "To study the divine Names is to understand the forces they express, the attributes they channel, and the worlds to which they belong. The intention with which that study is undertaken changes everything. The highest aim of qabalistic practice with the sacred Names is devekut, union or adhesion to God. The yichudim, the unifications, seek to order in the consciousness of the one who prays the connection between the parts of the Name, restoring within the practitioner the order that the Name represents in the cosmos. The qabalist who meditates on י-ה-ו-ה does not seek power, but transformation: to become more capable of containing the Light, more transparent to it, more aligned with the will of the Eternal.",
            "The Torah offers examples of this understanding. Abraham, according to Genesis 12:8, invoked the Name of the Eternal. Tradition understands that act as something deeper than a public proclamation: it was an alignment of the soul with divine presence through a deep understanding of the Name. Moses, before the burning bush, receives two revelations of the Name. First, Ehyeh Asher Ehyeh, I Will Be What I Will Be, which points to the eternal aspect of Divinity. Then, י-ה-ו-ה, the Name by which God addresses Israel within history. The qabalists point out that in these two Names the entire Torah is summarized: the first points to the transcendent root, the second to the presence that acts in the worlds. The commandments are the skeleton and soul of Revelation; the narratives are the body that wraps and transmits it."
          ]
        },
        {
          heading: { en: "Iehi Or: The Name and the Light of Creation", es: "Iehi Or: el Nombre y la Luz de la Creación" },
          paragraphs: [
            "The Lurianic qabalists found a numerical relation in the Name י-ה-ו-ה. They wrote each letter in four complete forms, miluyim, developing it with added letters. The numerical value of the Name changes according to those inner letters: 72, 63, 45, and 52. The four together sum to 232, the same value as Iehi Or, \"let there be Light,\" the first creative utterance of Genesis 1:3. When God pronounces the Light, the Name emanates in all its dimensions. The Name contains the Light; the Light unfolds the Name.",
            "Ab: יוד הי ויו הי, sum 72.",
            "Sag: יוד הי ואו הי, sum 63.",
            "Mah: יוד הא ואו הא, sum 45.",
            "Ban: יוד הה וו הה, sum 52.",
            "Total: 232, יהי אור, \"Let there be Light.\"",
            "The four forms receive names from the initial letters of their values: Ab, 72; Sag, 63; Mah, 45; and Ban, 52. Each form corresponds to one letter of the Shem, Yod, He, Vav, and final He, and to one of the four worlds of emanation: Atzilut, Beriah, Yetzirah, and Asiyah.",
            "The sequence traces the cosmic history of the Light: Ab contains the fullness in which the giver and what is given are indistinguishable. Sag brings differentiation and chaos. Mah marks the breaking and the beginning of repair. Ban reaches reconstruction within the multiplicity of the created worlds. Only Mah and Ban entered the space of the universe after Tzimtzum. Ab and Sag remained in the heights. Within Mah and Ban, the ten Sefirot were projected in fragmented form as the ten point-lights of Olam HaNekudim. The combined force of that light overloaded the vessels and caused the Shevirah. The cosmos we inhabit contains sparks of light trapped in fragments of Kelim. The mitzvot and spiritual purification elevate them.",
            "Moshe Chaim Luzzatto wrote that everything that exists rests on the mystery of this Name and on the mystery of the letters that form it. The order and laws of creation derive from the order of those four letters. This is not an ornament of language. Ab, Sag, Mah, and Ban are the forms in which the Infinite Light becomes world without destroying what it touches.",
            "Ab, 72, corresponds to the world of Atzilut, to the Sefirah of Chokhmah, and to the Partzuf of Abba. Each letter of the Shem carries the letter Yod within it: Yod is written Yod-Vav-Dalet, He is written He-Yod, Vav is written Vav-Yod-Vav, and the final He is written He-Yod. The Yod, whose value is ten and which symbolizes the primordial divine spark, appears in all of them. This level shows the divine Light and its vessels in harmony, without separation. In Ab, unity remains complete. In the human soul, Yechidah, its highest level, reflects this state: it is the spark of pure union with God that remains intact when the lower levels of the person are divided.",
            "Sag, 63, corresponds to Beriah and to the Sefirah of Binah. Here the Vav ceases to be written with Yod inside it and comes to be written Vav-Alef-Vav. Alef, whose value is one before the ten of Yod, marks a first diminishment: the Light begins to differentiate itself from its vessels, and the Sefirot begin to perceive themselves as realities with their own identity. Sag is associated with Binah, the Supreme Mother, the capacity to distinguish, order, and give structure. It is the level of Olam HaNekudim, the world of points, where the lights are intense but the vessels are weak and cannot sustain them in relation to one another. Sag introduces the concealment necessary for a creation with multiplicity to exist. After the breaking of the vessels, many lights of Sag descend to the level of Ban; part of rectification consists in Ban rising again toward its source.",
            "Mah, 45, corresponds to Yetzirah and to the Partzuf of Zeir Anpin. Here both the He and the Vav are written with Alef inside them: He-Alef, Vav-Alef-Vav. The contraction becomes deeper. Only the initial Yod preserves its full writing with Vav and Dalet. The name itself suggests it: mah in Hebrew means \"what,\" in the sense of what we are, what we can claim before God. When Moses responds to the rebellion of Korach with the words Ve'anachnu mah, \"and what are we?\" in Bamidbar 16:7, he expresses the attitude that Mah represents: radical humility, the recognition that we depend entirely on the divine will. At this level occurs the Shevirat HaKelim, the breaking of the vessels: the light was too intense and the vessels too rigid in their desire for autonomy, and for that reason they broke. But rectification also begins here. The entities influenced by Mah preserve awareness of their origin and desire to return to it; for this reason Mah purifies and is related to the service of the tzadikim, who draw the Light through bitul, the nullification of their own will before the will of the Creator.",
            "Ban, 52, corresponds to Asiyah and Malkhut, the Partzuf of Nukva or Shekhinah. Alef disappears from the intermediate letters: He is written He-He, Vav is written Vav-Vav. The Yod preserves its form Yod-Vav-Dalet. The Light contracts and the connection with the higher planes breaks. This world is your daily experience: the divine presence is concealed and you perceive the material surface. The Yod, the original spark, remains hidden within the structure. Ban reorganizes the fragments of the broken vessels into Partzufim where the Light and the vessels are balanced, where the Sefirot relate to one another, love and rigor unite in mercy, expansion and limit compensate one another, and avoid the isolation that caused the breaking in Tohu. Ban contains the Light and reflects it: creation ceases merely to receive and participates, returning Light to the Creator through the mitzvot, praise, and the intention of the heart. In the final rectification, Ban will reunite with Mah, reorder, and reabsorb what was fractured."
          ]
        },
        {
          heading: { en: "The Name as a Map of the Cosmos and the Soul", es: "El Nombre como mapa del cosmos y del alma" },
          paragraphs: [
            "The Shem maps the cosmos and the human soul. Its four letters relate to four worlds: Yod with Atzilut, He with Beriah, Vav with Yetzirah, and the final He with Asiyah. They relate to the Partzufim: Yod with Abba, the upper He with Ima, Vav with Zeir Anpin, and the final He with Nukva. And they relate to levels of the soul: Yechidah, Neshamah, Ruach, and Nefesh. The system unfolds from these four letters.",
            "The Yod is a point charged with potency. The Zohar says that its upper tip alludes to Keter, the crown that rises toward the unknowable; the main part of the letter is Chokhmah, the wisdom that expands; the downward extension is the current of Binah, the understanding that descends toward the lower worlds. The Yod contains emanation: Keter, Chokhmah, and Binah in one tiny letter. In inner experience, it is that intuitive flash that arrives without visible preparation.",
            "The upper He is Binah. Its open form, like a window according to the qabalists, points to the expansion of wisdom into developed understanding. Chokhmah is the lightning flash; Binah is the rain that fertilizes. The Zohar teaches that Chokhmah and Binah are united as Abba ve-Ima, father and mother in perpetual embrace. Although Yod is Chokhmah and He is Binah, the first two letters of the Name form a unity: Yah, י-ה, the Name that appears in Halleluyah. Yah is the transcendent half of the Name, that of the higher worlds, divine reality beyond the cosmos. Without Binah, Chokhmah would remain undeveloped; without Chokhmah, Binah would have nothing to develop. From their union the rest is born: Binah gives birth to the seven lower Sefirot, which form the revealed half of the Name, V-H, ו-ה.",
            "The Vav has the value six and alludes to the six Sefirot that form Zeir Anpin: Chesed, Gevurah, Tiferet, Netzach, Hod, and Yesod. Its form, a vertical line descending, represents the passage of divine influence from the higher worlds to final manifestation. The Vav is the channel, the nail, as the qabalists call it from the meaning of vav, that joins the upper He to the lower He. In the human soul it corresponds to Ruach, the spiritual and emotional level that serves as a bridge between higher intuition and concrete action.",
            "The final He is Malkhut, Nukva, the Shekhinah. Its form is the same as that of the first He, but it occupies the last place: it receives everything that came before and carries it into visible reality. Malkhut is the mirror of Binah, as the Zohar repeats, because it receives the Light that Binah pours forth and manifests it in deeds, words, and the fabric of the material world. This final He closes the cycle of emanation, but not as a definitive end; rather, as a return: manifested reality returns praise to the Creator, and that praise becomes the seed of a new cycle.",
            "The first half of the Name, Yah, י-ה, is the transcendent aspect: God as He is in Himself, beyond every relation with the cosmos. The second half, V-H, ו-ה, is the immanent aspect: God present within the cosmos, giving it life from within and sustaining every atom of existence with His Name. Transcendence ensures that God is not exhausted by the world He creates. Immanence ensures that nothing in the world is separated from Him. The complete Name gathers the two poles into a single unity: י-ה-ו-ה."
          ]
        },
        {
          heading: { en: "The Name in Practice: Pronunciation, Meditation, and Yichud", es: "El Nombre en la práctica: pronunciación, meditación y yichud" },
          paragraphs: [
            "In Jewish practice, the Shem is not pronounced as it is written. When read, it is replaced by Adonai or by HaShem. Only the Kohen Gadol pronounced it in its true form, inside the Kodesh HaKodashim, on Yom Kippur, while the people, prostrated in the courtyard, heard the Name and responded with the formula of blessing. Today, its exact vocalization is considered lost or reserved for the messianic era.",
            "The qabalists point to something in the composition of its letters. Yod, He, and Vav are, in classical Hebrew, imot hakriyah: letters that support vowel sounds. Yod sustains the sound \"i\"; He can express \"a\" or \"e\"; Vav can indicate \"o\" or \"u\". The four-letter Name is formed from these vowel-bearing letters. For this reason the qabalists observe that י-ה-ו-ה is the pure breath of language, the vocality that gives life to the consonants. Consonants remain mute without the vowels that give them life; creation would be silence without the breath of the Name that sustains it.",
            "Here the practice of yichud, unification, opens. To meditate on the letters Yod-He-Vav-He, to visualize them and contemplate their forms and correspondences, is an exercise of inner alignment: the one who meditates seeks to unite within his own consciousness the parts that the Name orders, restoring in himself the harmony that the Name expresses in the cosmos. The goal is not to pronounce it outwardly, but to make it resonate inwardly: for the soul to become more capable of containing what the Name indicates. The great qabalists who used the Names with visible effects insisted on the same point: those effects do not come from a mechanical formula, but from the purity of kavanah, intention, and the degree of devekut attained. The Name does not act by itself; it acts through the soul that has emptied itself of itself in order to become a channel."
          ]
        },
        {
          heading: { en: "The Extensions of the Name", es: "Las extensiones del Nombre" },
          paragraphs: [
            "The absolute centrality of the Shem led qabalistic literature to develop several extended forms of the Name. The best known are the Name of Twelve Letters, the Name of Forty-Two Letters, whose public form is the prayer Ana Bekoach, and the Name of Seventy-Two Letters, extracted from the three verses of Shemot 14:19-21, each of exactly seventy-two letters, arranged in direct, retrograde, and direct writing to produce seventy-two triplets. Each of these extensions amplifies a particular domain of emanation; none is independent of the Shem from which all derive. Gikatilla and the later qabalists are unanimous on this: these extended forms are keys for understanding specific aspects of creation, means of study and meditation, never ends in themselves or instruments of personal power."
          ]
        },
        {
          heading: { en: "The Name of Twelve Letters", es: "El Nombre de doce letras" },
          paragraphs: [
            "The Talmudic tradition mentions a Name of Twelve Letters that was transmitted among the priests of the Temple without being written publicly (Kiddushin 71a). Medieval qabalistic literature identified this form with the union of three divine Names of four letters each: אהיה י-ה-ו-ה אדני.",
            "The first, Ehyeh, \"I Will Be,\" corresponds to Keter, the crown, the point at which Divinity touches its own unknowability. The second is the Tetragrammaton itself, axis of Tiferet, center of the Tree and source from which all other forms derive. The third, Adonai, is the name pronounced when the ineffable is read aloud, and corresponds to Malkhut, kingdom, the threshold between the divine and the created. Their union is not a sum, but a vertical description: the axis that connects the three fundamental levels of emanation, from the crown to the base of the world. To meditate on this Name, for Gikatilla and those who continued his path, is to contemplate the central column of the Tree in its totality; to study it is to understand that the unknowable, the mediating, and the manifest are not three separate realities, but a single reality unfolded in three levels."
          ]
        },
        {
          heading: { en: "The Name of Forty-Two Letters", es: "El Nombre de cuarenta y dos letras" },
          paragraphs: [
            "The Name of Forty-Two Letters is the only one of the extended forms that found a path of regular liturgical expression. Its vehicle is the prayer Ana Bekoach, attributed by tradition to Rabbi Nechunyah ben HaKanah. The Name does not appear exposed in the text of the prayer, but encoded within it: the initial letters of each of the forty-two words, distributed in seven verses of six words, form seven groups of six letters. Those groups are the Name:",
            "אבגיתץ, קרעשטן, נגדיכש, בטרצתג, חקבטנע, יגלפזק, שקוצית",
            "The full text of the prayer is:",
            "אנא בכח גדלת ימינך תתיר צרורה. קבל רנת עמך שגבנו טהרנו נורא. נא גבור דורשי יחודך כבבת שמרם. ברכם טהרם רחמי צדקתך תמיד גמלם. חסין קדוש ברוב טובך נהל עדתך. יחיד גאה לעמך פנה זוכרי קדשתך. שועתנו קבל ושמע צעקתנו יודע תעלומות.",
            "Each of the seven groups corresponds to one of the seven days of creation and, by extension, to one of the seven lower Sefirot that order time and the world. Tradition prescribes reciting this prayer silently or in a very low voice: the Name that sustains it is not meant to be proclaimed, but to act as the invisible structure on which the recitation rests. The prayer is not a means of reaching the Name; rather, the Name gives the prayer its efficacy as a means of adhesion to the source. Commentators also noted that from the first verse of Genesis until Israel's arrival in Egypt there are exactly forty-two journeys. They read that correspondence as a structural cipher, not as a coincidence: the Name of Forty-Two is the cipher of the creative act itself, and sacred history repeats it in its own rhythm."
          ]
        },
        {
          heading: { en: "The Name of Seventy-Two Letters", es: "El Nombre de setenta y dos letras" },
          paragraphs: [
            "The Name of Seventy-Two, Shem Ayin-Bet, is the extended form that received the greatest development in late medieval literature and in the schools of Safed. Its extraction comes from three consecutive verses of the Book of Shemot, each composed of exactly seventy-two letters in the Hebrew text:",
            "Verse 14:19: ויסע מלאך האלהים ההלך לפני מחנה ישראל וילך מאחריהם ויסע עמוד הענן מפניהם ויעמד מאחריהם",
            "Verse 14:20: ויבא בין מחנה מצרים ובין מחנה ישראל ויהי הענן והחשך ויאר את הלילה ולא קרב זה אל זה כל הלילה",
            "Verse 14:21: ויט משה את ידו על הים ויולך י-ה-ו-ה את הים ברוח קדים עזה כל הלילה וישם את הים לחרבה ויבקעו המים",
            "The procedure of extraction is geometric before it is linguistic. The first verse is placed in direct writing; the second, in retrograde writing, reversed; the third, again in direct writing. The three verses are superimposed in seventy-two columns of three letters each, and the vertical reading of each column produces a triplet.",
            "Each of these seventy-two triplets is, in qabalistic terminology, a name in a derived sense: not an autonomous divine name, but a concrete angle from which the light of the Tetragrammaton acts in creation. The literature of the Zohar and the schools of Luria associated each triplet with one of the seventy-two angels who govern the divisions of cosmic providence, and with the seventy peoples of the nations, whose multiplicity is sustained by the unity that the Shem Ayin-Bet unfolds by differentiating itself internally. Plurality does not contradict the unity of the Shem; it expresses it."
          ]
        },
        {
          heading: { en: "The Unity of the Three Forms", es: "La unidad de las tres formas" },
          paragraphs: [
            "Gikatilla, and with him the whole chain that runs from Nachmanides to the Ari, is categorical on this point: the three extended forms are not independent names, but modalities of the Shem from which they derive. The Name of Twelve Letters shows the vertical axis of emanation; the Name of Forty-Two, the structure of the creative act; the Name of Seventy-Two, providence in its most differentiated unfolding. The Shem HaMeforash branches without fragmenting, because divine unity contains within itself the capacity to articulate itself on every level of reality without ceasing to be one. To study these forms is to approach the same source from different angles; to want to use them as ends or as instruments of personal power is, in the same way, to misunderstand them."
          ]
        },
        {
          heading: { en: "The Horizon of Tikun", es: "El horizonte del Tikun" },
          paragraphs: [
            "This whole set of ideas - the four worlds, the four miluyim, the breaking and rectification - points toward a goal, which is what gives meaning to everything. The prophecy of Zechariah (14:9) says: bayom hahu yihyeh י-ה-ו-ה echad ushmo echad, \"on that day the Eternal will be One and His Name One.\" Qabalah understands this phrase as the description of the final state of the cosmic process: when the Tikun is completed, the ineffable Name will be able to be pronounced openly, because all reality will have become capable of containing it without breaking. What is above and what is below will have been reunited. What the breaking scattered will have been elevated and reintegrated. Ayin and Yesh, infinite and finite, transcendence and immanence, will find an unveiled expression.",
            "Meanwhile, in the present situation, the study of the Shem HaMeforash is a way of participating in that process. To understand that Ab summarizes the fullness before differentiation, that Sag introduces necessary autonomy but also fragility, that Mah opens the path of humility and rectification, and that Ban is the field of our daily work, gives avodat HaShem a depth that practice alone, without understanding, cannot give. The mitzvot are the instruments of Tikun; kavanah upon the Name during tefilah is the fire that animates them. Each act of Torah fulfilled with intention, each prayer pronounced with awareness of the letters that sustain it, is a real movement within the process of rectifying the worlds. The Name acts as door and mirror: it shows us the structure of what exists and orients us toward what still has to happen."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Antes de los mundos, las Sefirot o cualquier forma distinguible, existe una realidad que los qabalistas nombran con dos términos: Ein Sof, lo Infinito, y Ayin, la Nada. Ein Sof dice que la Divinidad carece de límite, borde o medida. Ayin dice que esa realidad rebasa todas las categorías con las que la mente humana podría comprenderla, y que frente a ella cualquier descripción queda vacía. Ayin es la dimensión apofática de Ein Sof: el reconocimiento de que lo Infinito rebasa lo que puede decirse.",
            "De ese fondo imposible de conocer emana el Ohr Ein Sof, la Luz Infinita. De esa Luz, mediante el Tzimtzum y la emanación que enseña la tradición luriánica, surge la estructura de los mundos: Adam Kadmon como primera configuración, las Sefirot como recipientes de esa Luz, y los cuatro Olamot como niveles de manifestación. Ese despliegue entero está contenido en un Nombre: י-ה-ו-ה, el Shem HaMeforash."
          ]
        },
        {
          heading: { en: "The Name and Its Place in the Tradition", es: "El Nombre y su lugar en la tradición" },
          paragraphs: [
            "Shem HaMeforash es el Nombre explícito, el que nombra a Dios en lo más íntimo de Su ser. Por reverencia, la tradición lo llama HaShem, el Nombre, o lo sustituye por Adonai al leerlo. Su lugar es central.",
            "Rabí Yosef Gikatilla, en Sha'are Orah, explica qué no son estos Nombres: ni fórmulas, ni contraseñas, ni herramientas para obtener poder. Son llaves que abren el acceso a las distintas emanaciones de la Divinidad. Cada Nombre muestra una faceta de Ein Sof en Su relación con el mundo; cada Nombre es una forma de presencia. El más alto, י-ה-ו-ה, se sitúa en Tiferet de Atzilut, porque Tiferet es el eje del Ets Haim, el Árbol de la Vida: el punto que une las Sefirot superiores con las inferiores y reparte la luz hacia todos los lados. Por eso י-ה-ו-ה recibe también el nombre de Havayah, derivado del verbo ser: hayah, hoveh, yihyeh, fue, es y será. Dios no está dentro del tiempo; el tiempo está contenido en Él, y el Nombre lo expresa.",
            "El Zohar enseña, como Nachmanides en su introducción a la Torá, que toda la Torá es un único Nombre Santo. Los relatos, las leyes y los preceptos son su vestidura exterior; el alma de la Torá es el Nombre del Eterno desplegándose en letras, palabras y combinaciones. Quien altera una sola letra de la Torá daña el propio Nombre. La Torá y el Nombre no pueden separarse, porque la Revelación es la expresión desplegada de la misma realidad que el Nombre concentra.",
            "Estudiar los Nombres divinos es entender las fuerzas que expresan, los atributos que canalizan y los mundos a los que pertenecen. La intención con la que se hace ese estudio lo cambia todo. El fin más alto de la práctica qabalística con los Nombres sagrados es la devekut, la unión o adhesión a Dios. Los yichudim, las unificaciones, buscan ordenar en la conciencia de quien ora la conexión entre las partes del Nombre, restaurando dentro del practicante el orden que el Nombre representa en el cosmos. El qabalista que medita en י-ה-ו-ה no busca poder, sino transformación: volverse más capaz de contener la Luz, más transparente a ella, más alineado con la voluntad del Eterno.",
            "La Torá ofrece ejemplos de esta comprensión. Abraham, según Génesis 12:8, invocó el Nombre del Eterno. La tradición entiende ese acto como algo más profundo que una proclamación pública: fue una alineación del alma con la presencia divina por medio de una comprensión profunda del Nombre. Moshe, ante la zarza ardiente, recibe dos revelaciones del Nombre. Primero, Ehyeh Asher Ehyeh, Seré el que Seré, que apunta al aspecto eterno de la Divinidad. Después, י-ה-ו-ה, el Nombre con el que Dios se dirige a Israel dentro de la historia. Los qabalistas señalan que en estos dos Nombres está resumida toda la Torá: el primero apunta a la raíz trascendente, el segundo a la presencia que actúa en los mundos. Los preceptos son el esqueleto y el alma de la Revelación; las narraciones son el cuerpo que la envuelve y la transmite."
          ]
        },
        {
          heading: { en: "Iehi Or: The Name and the Light of Creation", es: "Iehi Or: el Nombre y la Luz de la Creación" },
          paragraphs: [
            "Los qabalistas luriánicos encontraron una relación numérica en el Nombre י-ה-ו-ה. Escribieron cada letra de cuatro formas completas, miluyim, desarrollándola con letras añadidas. El valor numérico del Nombre cambia según esas letras internas: 72, 63, 45 y 52. Los cuatro suman 232, el mismo valor de Iehi Or, \"sea la Luz\", la primera palabra creadora de Bereshit 1:3. Cuando Dios pronuncia la Luz, emana el Nombre en todas sus dimensiones. El Nombre contiene la Luz; la Luz despliega el Nombre.",
            "Ab: יוד הי ויו הי, suma 72.",
            "Sag: יוד הי ואו הי, suma 63.",
            "Mah: יוד הא ואו הא, suma 45.",
            "Ban: יוד הה וו הה, suma 52.",
            "Total: 232, יהי אור, \"Haya luz\".",
            "Las cuatro formas reciben nombres de las letras iniciales de sus valores: Ab, 72; Sag, 63; Mah, 45; y Ban, 52. Cada forma corresponde a una letra del Shem, Yod, He, Vav y He final, y a uno de los cuatro mundos de la emanación: Atzilut, Beriah, Yetzirah y Asiyah.",
            "La secuencia traza la historia cósmica de la Luz: Ab contiene la plenitud donde quien da y lo dado se confunden. Sag trae diferenciación y caos. Mah marca la ruptura y el inicio de la reparación. Ban alcanza la reconstrucción dentro de la multiplicidad de los mundos creados. Solo Mah y Ban entraron al espacio del universo después del Tzimtzum. Ab y Sag permanecieron en las alturas. Dentro de Mah y Ban, las diez Sefirot se proyectaron fragmentadas como las diez luces puntuales del Olam HaNekudim. La fuerza conjunta de esa luz sobrecargó los recipientes y provocó la Shevirah. El cosmos que habitamos contiene chispas de luz atrapadas en fragmentos de Kelim. Las mitzvot y la purificación espiritual las elevan.",
            "Moshe Chaim Luzzatto escribió que todo lo que existe se apoya en el misterio de este Nombre y en el misterio de las letras que lo forman. El orden y las leyes de la creación se derivan del orden de esas cuatro letras. Esto no adorna el lenguaje. Ab, Sag, Mah y Ban son las formas en que la Luz Infinita se convierte en mundo sin destruir lo que toca.",
            "Ab, 72, corresponde al mundo de Atzilut, a la Sefirah de Jokhmah y al Partzuf de Abba. Cada letra del Shem lleva la letra Yod en su interior: la Yod se escribe Yod-Vav-Dalet, la He se escribe He-Yod, la Vav se escribe Vav-Yod-Vav, y la He final se escribe He-Yod. La Yod, cuyo valor es diez y simboliza la chispa divina primordial, aparece en todas. Este nivel muestra la Luz divina y sus recipientes en armonía, sin separación. En Ab, la unidad se mantiene completa. En el alma humana, la Yechidah, su nivel más alto, refleja este estado: es la chispa de unión pura con Dios que permanece intacta cuando los niveles más bajos de la persona se dividen.",
            "Sag, 63, corresponde a Beriah y a la Sefirah de Binah. Aquí la Vav deja de escribirse con Yod en su interior y pasa a escribirse Vav-Alef-Vav. La Alef, cuyo valor es uno frente al diez de la Yod, marca una primera disminución: la Luz empieza a diferenciarse de sus recipientes, y las Sefirot comienzan a percibirse como realidades con identidad propia. Sag se asocia con Binah, la Madre Suprema, la capacidad de distinguir, ordenar y dar estructura. Es el nivel del Olam HaNekudim, el mundo de los puntos, donde las luces son intensas, pero los recipientes son débiles y no pueden sostenerlas en relación unas con otras. Sag introduce el ocultamiento necesario para que exista una creación con multiplicidad. Después de la ruptura de los recipientes, muchas luces de Sag descienden al nivel de Ban; parte de la rectificación consiste en que Ban vuelva a elevarse hacia su origen.",
            "Mah, 45, corresponde a Yetzirah y al Partzuf de Zeir Anpin. Aquí tanto la He como la Vav se escriben con Alef en su interior: He-Alef, Vav-Alef-Vav. La contracción se vuelve más profunda. Solo la Yod inicial conserva su escritura plena con Vav y Dalet. El nombre mismo lo sugiere: mah en hebreo significa \"qué\", en el sentido de qué somos, qué podemos reclamar ante Dios. Cuando Moshe responde a la rebelión de Korach con las palabras Ve'anachnu mah, \"y nosotros, ¿qué somos?\", en Bamidbar 16:7, expresa la actitud que Mah representa: una humildad radical, el reconocimiento de que dependemos por completo de la voluntad divina. En este nivel ocurre la Shevirat HaKelim, la ruptura de los recipientes: la luz era demasiado intensa y los recipientes demasiado rígidos en su deseo de autonomía, y por eso se quebraron. Pero también empieza aquí la rectificación. Las entidades influenciadas por Mah conservan conciencia de su origen y desean volver a él; por eso Mah purifica y se relaciona con el servicio de los tzadikim, que atraen la Luz por medio del bitul, la anulación de la propia voluntad ante la voluntad del Creador.",
            "Ban, 52, corresponde a Asiyah y Malkhut, el Partzuf de Nukva o Shekhinah. La Alef desaparece de las letras intermedias: la He se escribe He-He, la Vav se escribe Vav-Vav. La Yod conserva su forma Yod-Vav-Dalet. La Luz se contrae y rompe la conexión con los planos superiores. Este mundo es tu experiencia diaria: la presencia divina se oculta y percibes la superficie material. La Yod, la chispa original, permanece escondida en la estructura. Ban reorganiza los fragmentos de los recipientes rotos en Partzufim donde la Luz y los recipientes se equilibran, donde las Sefirot se relacionan, amor y rigor se unen en misericordia, expansión y límite se compensan, y evitan el aislamiento que causó la ruptura en Tohu. Ban contiene la Luz y la refleja: la creación deja de recibir solamente y participa, devuelve Luz al Creador mediante las mitzvot, la alabanza y la intención del corazón. En la rectificación final, Ban se reunirá con Mah, reordenará y reabsorberá lo fracturado."
          ]
        },
        {
          heading: { en: "The Name as a Map of the Cosmos and the Soul", es: "El Nombre como mapa del cosmos y del alma" },
          paragraphs: [
            "El Shem mapea el cosmos y el alma humana. Sus cuatro letras se relacionan con cuatro mundos: Yod con Atzilut, He con Beriah, Vav con Yetzirah, He final con Asiyah. Se relacionan con los Partzufim: Yod con Abba, He superior con Ima, Vav con Zeir Anpin, He final con Nukva. Y con niveles del alma: Yechidah, Neshamah, Ruach, Nefesh. El sistema se despliega desde estas cuatro letras.",
            "La Yod es un punto cargado de potencia. El Zohar dice que su ápice superior alude a Keter, la corona que se eleva hacia lo incognoscible; la parte principal de la letra es Jokhmah, la sabiduría que se expande; la prolongación hacia abajo es la corriente de Binah, el entendimiento que desciende hacia los mundos inferiores. La Yod contiene la emanación: Keter, Jokhmah y Binah en una letra diminuta. En la experiencia interior, es ese destello intuitivo que llega sin preparación visible.",
            "La He superior es Binah. Su forma abierta, como una ventana según los qabalistas, señala la expansión de la sabiduría en entendimiento desarrollado. Jokhmah es el relámpago; Binah es la lluvia que fecunda. El Zohar enseña que Jokhmah y Binah están unidas como Abba ve-Ima, padre y madre en abrazo perpetuo. Aunque la Yod sea Jokhmah y la He sea Binah, las dos primeras letras del Nombre forman una unidad: Yah, י-ה, el Nombre que aparece en Halleluyah. Yah es la mitad trascendente del Nombre, la de los mundos superiores, la realidad divina más allá del cosmos. Sin Binah, Jokhmah quedaría sin desplegarse; sin Jokhmah, Binah no tendría nada que desarrollar. De su unión nace lo demás: Binah da a luz a las siete Sefirot inferiores, que forman la mitad revelada del Nombre, V-H, ו-ה.",
            "La Vav vale seis y alude a las seis Sefirot que forman Zeir Anpin: Chesed, Gevurah, Tiferet, Netzach, Hod y Yesod. Su forma, una línea vertical que desciende, representa el paso de la influencia divina desde los mundos superiores hasta la manifestación final. La Vav es el canal, el clavo, como los qabalistas la llaman por el sentido de vav, que une la He de arriba con la He de abajo. En el alma humana corresponde a Ruach, el nivel espiritual y emocional que sirve de puente entre la intuición superior y la acción concreta.",
            "La He final es Malkhut, Nukva, la Shekhinah. Su forma es igual a la de la primera He, pero ocupa el último lugar: recibe todo lo anterior y lo lleva a la realidad visible. Malkhut es el espejo de Binah, como repite el Zohar, porque recibe la Luz que Binah derrama y la manifiesta en hechos, en palabras y en el tejido del mundo material. Esta He final cierra el ciclo de la emanación, pero no como un final definitivo, sino como un retorno: la realidad manifestada devuelve alabanza al Creador, y esa alabanza se convierte en la semilla de un nuevo ciclo.",
            "La primera mitad del Nombre, Yah, י-ה, es el aspecto trascendente: Dios tal como es en Sí mismo, más allá de toda relación con el cosmos. La segunda mitad, V-H, ו-ה, es el aspecto inmanente: Dios presente dentro del cosmos, dándole vida desde dentro y sosteniendo cada átomo de existencia con Su Nombre. La trascendencia asegura que Dios no se agota en el mundo que crea. La inmanencia asegura que nada en el mundo está separado de Él. El Nombre completo reúne los dos polos en una sola unidad: י-ה-ו-ה."
          ]
        },
        {
          heading: { en: "The Name in Practice: Pronunciation, Meditation, and Yichud", es: "El Nombre en la práctica: pronunciación, meditación y yichud" },
          paragraphs: [
            "En la práctica judía, el Shem no se pronuncia tal como está escrito. Al leerlo, se reemplaza por Adonai o por HaShem. Solo el Kohen Gadol lo pronunciaba en su forma verdadera, dentro del Kodesh HaKodashim, en Yom Kippur, mientras el pueblo, postrado en el atrio, escuchaba el Nombre y respondía con la fórmula de bendición. Hoy, su vocalización exacta se considera perdida o reservada para la era mesiánica.",
            "Los qabalistas señalan algo en la composición de sus letras. Yod, He y Vav son, en el hebreo clásico, imot hakriyah: letras que sirven de apoyo a los sonidos vocálicos. La Yod sostiene el sonido \"i\"; la He puede expresar \"a\" o \"e\"; la Vav puede indicar \"o\" o \"u\". El Nombre de cuatro letras está formado por estas letras vocálicas. Por eso los qabalistas observan que י-ה-ו-ה es el aliento puro del lenguaje, la vocalidad que da vida a las consonantes. Las consonantes permanecen mudas sin las vocales que les dan vida; la creación sería silencio sin el aliento del Nombre que la sostiene.",
            "Aquí se abre la práctica del yichud, la unificación. Meditar en las letras Yod-He-Vav-He, visualizarlas y contemplar sus formas y sus correspondencias, es un ejercicio de alineación interior: quien medita busca unir dentro de su propia conciencia las partes que el Nombre ordena, restaurando en sí mismo la armonía que el Nombre expresa en el cosmos. El objetivo no es pronunciarlo hacia fuera, sino hacer que resuene por dentro: que el alma llegue a ser más capaz de contener aquello que el Nombre señala. Los grandes qabalistas que usaron los Nombres con efectos visibles insistieron en lo mismo: esos efectos no vienen de una fórmula mecánica, sino de la pureza de la kavanah, la intención, y del grado de devekut alcanzado. El Nombre no actúa por sí solo; actúa a través del alma que se ha vaciado de sí misma para convertirse en canal."
          ]
        },
        {
          heading: { en: "The Extensions of the Name", es: "Las extensiones del Nombre" },
          paragraphs: [
            "La centralidad absoluta del Shem llevó a la literatura qabalística a desarrollar diversas formas extendidas del Nombre. Las más conocidas son el Nombre de doce letras, el Nombre de cuarenta y dos letras, cuya forma pública es la plegaria Ana Bekoach, y el Nombre de setenta y dos letras, extraído de los tres versículos de Shemot 14:19-21, cada uno de exactamente setenta y dos letras, dispuestos en escritura directa, retrógrada y directa para producir setenta y dos tripletes. Cada una de estas extensiones amplifica un dominio particular de la emanación; ninguna es independiente del Shem del que se derivan todas. Gikatilla y los qabalistas posteriores son unánimes en esto: estas formas extendidas son llaves para comprender aspectos específicos de la creación, medios de estudio y meditación, nunca fines en sí mismos ni instrumentos de poder personal."
          ]
        },
        {
          heading: { en: "The Name of Twelve Letters", es: "El Nombre de doce letras" },
          paragraphs: [
            "La tradición talmúdica menciona un Nombre de doce letras que se transmitía entre los sacerdotes del Templo sin escribirse públicamente (Kiddushin 71a). La literatura qabalística medieval identificó esta forma con la unión de tres Nombres divinos de cuatro letras cada uno: אהיה י-ה-ו-ה אדני.",
            "El primero, Ehyeh, \"Seré\", corresponde a Keter, la corona, el punto en el que la Divinidad roza su propia incognoscibilidad. El segundo es el Tetragrammaton propiamente dicho, eje de Tiferet, centro del Árbol y fuente de la que se derivan todas las demás formas. El tercero, Adonai, es el Nombre que se pronuncia cuando el inefable se lee en voz alta, y corresponde a Malkhut, el reino, umbral entre lo divino y lo creado. Su unión no es una suma, sino una descripción vertical: el eje que conecta los tres niveles fundamentales de la emanación, desde la corona hasta la base del mundo. Meditar en este Nombre, para Gikatilla y sus continuadores, es contemplar la columna central del Árbol en su totalidad; estudiarlo es comprender que lo incognoscible, lo mediador y lo manifiesto no son tres realidades separadas, sino una sola desplegada en tres niveles."
          ]
        },
        {
          heading: { en: "The Name of Forty-Two Letters", es: "El Nombre de cuarenta y dos letras" },
          paragraphs: [
            "El Nombre de cuarenta y dos letras es la única de las formas extendidas que encontró una vía de expresión litúrgica regular. Su vehículo es la plegaria Ana Bekoach, atribuida por la tradición a Rabí Nechunyah ben HaKanah. El Nombre no aparece expuesto en el texto de la plegaria, sino cifrado en él: las letras iniciales de cada una de las cuarenta y dos palabras, distribuidas en siete versos de seis palabras, forman siete grupos de seis letras. Esos grupos son el Nombre:",
            "אבגיתץ, קרעשטן, נגדיכש, בטרצתג, חקבטנע, יגלפזק, שקוצית",
            "El texto completo de la plegaria es:",
            "אנא בכח גדלת ימינך תתיר צרורה. קבל רנת עמך שגבנו טהרנו נורא. נא גבור דורשי יחודך כבבת שמרם. ברכם טהרם רחמי צדקתך תמיד גמלם. חסין קדוש ברוב טובך נהל עדתך. יחיד גאה לעמך פנה זוכרי קדשתך. שועתנו קבל ושמע צעקתנו יודע תעלומות.",
            "Cada uno de los siete grupos corresponde a uno de los siete días de la creación y, por extensión, a una de las siete Sefirot inferiores que ordenan el tiempo y el mundo. La tradición prescribe recitar esta plegaria en silencio o en voz muy baja: el Nombre que la sostiene no está destinado a proclamarse, sino a actuar como la estructura invisible sobre la que se apoya la recitación. La plegaria no es un medio para llegar al Nombre; es el Nombre el que le da a la plegaria su eficacia como medio de adhesión a la fuente. Los comentaristas también señalaron que desde el primer versículo de Bereshit hasta la llegada de Israel a Egipto se cuentan exactamente cuarenta y dos jornadas. Leyeron esa correspondencia como una cifra estructural, no como una coincidencia: el Nombre de cuarenta y dos es la cifra del propio acto creador, y la historia sagrada lo repite en su mismo ritmo."
          ]
        },
        {
          heading: { en: "The Name of Seventy-Two Letters", es: "El Nombre de setenta y dos letras" },
          paragraphs: [
            "El Nombre de setenta y dos, Shem Ayin-Bet, es la forma extendida que recibió el mayor desarrollo en la literatura tardomedieval y en las escuelas de Safed. Su extracción procede de tres versículos contiguos del libro de Shemot, cada uno compuesto exactamente por setenta y dos letras en el texto hebreo:",
            "Verso 14:19: ויסע מלאך האלהים ההלך לפני מחנה ישראל וילך מאחריהם ויסע עמוד הענן מפניהם ויעמד מאחריהם",
            "Verso 14:20: ויבא בין מחנה מצרים ובין מחנה ישראל ויהי הענן והחשך ויאר את הלילה ולא קרב זה אל זה כל הלילה",
            "Verso 14:21: ויט משה את ידו על הים ויולך י-ה-ו-ה את הים ברוח קדים עזה כל הלילה וישם את הים לחרבה ויבקעו המים",
            "El procedimiento de extracción es geométrico antes que lingüístico. El primer versículo se coloca en escritura directa; el segundo, en escritura retrógrada, invertido; el tercero, otra vez en directa. Los tres versículos se superponen en setenta y dos columnas de tres letras cada una, y la lectura vertical de cada columna produce un triplete.",
            "Cada uno de estos setenta y dos tripletes es, en terminología qabalística, un nombre en sentido derivado: no un nombre divino autónomo, sino un ángulo concreto desde el que la luz del Tetragrammaton actúa en la creación. La literatura del Zohar y las escuelas de Luria asociaron cada triplete con uno de los setenta y dos ángeles que rigen las divisiones de la providencia cósmica, y con los setenta pueblos de las naciones, cuya multiplicidad es sostenida por la unidad que el Shem Ayin-Bet despliega al diferenciarse internamente. La pluralidad no contradice la unidad del Shem; la expresa."
          ]
        },
        {
          heading: { en: "The Unity of the Three Forms", es: "La unidad de las tres formas" },
          paragraphs: [
            "Gikatilla, y con él toda la cadena que va de Nachmanides hasta el Ari, es tajante en este punto: las tres formas extendidas no son nombres independientes, sino modalidades del Shem del que se derivan. El Nombre de doce letras muestra el eje vertical de la emanación; el de cuarenta y dos, la estructura del acto creador; el de setenta y dos, la providencia en su despliegue más diferenciado. El Shem HaMeforash se ramifica sin fragmentarse, porque la unidad divina contiene en sí la capacidad de articularse en todos los niveles de la realidad sin dejar de ser una. Estudiar estas formas es acercarse a la misma fuente desde ángulos distintos; querer usarlas como fines o como instrumentos de poder personal es, del mismo modo, entenderlas mal."
          ]
        },
        {
          heading: { en: "The Horizon of Tikun", es: "El horizonte del Tikun" },
          paragraphs: [
            "Todo este conjunto de ideas - los cuatro mundos, los cuatro miluyim, la ruptura y la rectificación - apunta a una meta, que es la que le da sentido a todo. La profecía de Zacarías (14:9) dice: bayom hahu yihyeh י-ה-ו-ה echad ushmo echad, \"en ese día el Eterno será Uno y Su Nombre será Uno\". La Qabalah entiende esta frase como la descripción del estado final del proceso cósmico: cuando el Tikun se complete, el Nombre inefable podrá pronunciarse abiertamente, porque toda la realidad habrá llegado a ser capaz de contenerlo sin romperse. Lo de arriba y lo de abajo se habrán reunido. Lo que la ruptura dispersó habrá sido elevado y reintegrado. Ayin y Yesh, infinito y finito, trascendencia e inmanencia, encontrarán una expresión sin velo.",
            "Mientras tanto, en la situación presente, el estudio del Shem HaMeforash es una forma de participar en ese proceso. Entender que Ab resume la plenitud anterior a la diferenciación, que Sag introduce la autonomía necesaria pero también la fragilidad, que Mah abre el camino de la humildad y de la rectificación, y que Ban es el ámbito de nuestro trabajo diario, le da a la avodat HaShem una profundidad que la práctica sola, sin comprensión, no puede dar. Las mitzvot son los instrumentos del Tikun; la kavanah sobre el Nombre durante la tefilah es el fuego que las anima. Cada acto de Torá cumplido con intención, cada rezo pronunciado con conciencia de las letras que lo sostienen, es un movimiento real dentro del proceso de rectificación de los mundos. El Nombre actúa como puerta y como espejo: nos muestra la estructura de lo que existe y nos orienta hacia lo que todavía tiene que suceder."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-havayah",
    parentId: "shemot-hakodesh",
    level: 2,
    mainNumber: 7.2,
    title: { en: "Havayah", es: "Havayah" },
    hebrew: "י-ה-ו-ה",
    subtitle: { en: "The Four-Letter Name", es: "El Nombre de cuatro letras" },
    sections: {
      en: [
        {
          paragraphs: [
            "The four-letter Name, which the mequbalim call Havayah in order not to pronounce it outside the liturgical context, is the proper Name of God. The whole Torah, according to Qabalah, is nothing other than the unfolding of this Name; the other divine names are its facets at different levels of reality.",
            "Its four letters trace the emanation. The Yod, the smallest point of the alphabet, corresponds to Chokhmah, primordial wisdom: the first flash of divine thought before it takes articulated form. The first He corresponds to Binah, understanding, where that seed is articulated into structure and possibility. The Vav, a vertical column, represents Zeir Anpin, the six central Sefirot of the Tree: Chesed, Gevurah, Tiferet, Netzach, Hod, and Yesod, through which the Divine descends into recognizable attributes. The final He is Malkhut, the kingdom, the level where divine presence settles in the world and the human being can receive it.",
            "This reading of the letters as a map of the Tree has concrete consequences in meditation and tefilah. The Ari taught that the vocalization of Havayah varies according to the intention of the one who prays: each Sefirah has its corresponding vowel, and to meditate on the Name with the Kamatz of Keter orients consciousness toward the highest root of mercy; with the Patach, the opening, the one who prays accesses the level of Chokhmah. The Siddur of the Ari systematized this doctrine, and the Hasidic masters developed it until the inner pronunciation of the Name became an act of yichud: the unification of the levels of emanation.",
            "What that meditation produces in doctrinal terms is the union of Y-H, the first two letters and the higher Sefirot, with V-H, the final two letters, Zeir Anpin and Malkhut. Qabalah seeks this yichud in every act of tefilah: to unite the source with its manifestation. The act of genuine kindness, the word of Torah pronounced with intention, the prayer offered with the heart."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "El Nombre de cuatro letras, que los mequbalim llaman Havayah para no pronunciarlo fuera del contexto litúrgico, es el Nombre propio de Dios. La Torá entera, según la Qabalah, no es sino el desarrollo de este Nombre; los demás nombres divinos son facetas suyas en distintos niveles de la realidad.",
            "Sus cuatro letras trazan la emanación. La Yod, el punto más pequeño del alfabeto, corresponde a Jokhmah, la sabiduría primordial: primer destello del pensamiento divino antes de que tome forma articulada. La primera He corresponde a Binah, el entendimiento, donde esa semilla se articula en estructura y posibilidad. La Vav, columna vertical, representa a Zeir Anpin, las seis Sefirot centrales del Árbol: Chesed, Gevurah, Tiferet, Netzach, Hod y Yesod, por las que lo Divino desciende a atributos reconocibles. La última He es Malkhut, el reino, nivel en que la presencia divina se asienta en el mundo y el ser humano puede recibirla.",
            "Esta lectura de las letras como mapa del Árbol tiene consecuencias concretas en la meditación y la tefilah. El Ari enseñó que la vocalización de Havayah varía según la intención del orante: cada Sefirah tiene su vocal correspondiente, y meditar sobre el Nombre con el Kamatz de Keter orienta la conciencia hacia la raíz más alta de la misericordia; con el Patach, la apertura, el orante accede al nivel de Jokhmah. El Siddur del Ari sistematizó esta doctrina, y los maestros jasídicos la desarrollaron hasta convertir la pronunciación interior del Nombre en un acto de yichud: la unificación de los niveles de la emanación.",
            "Lo que esa meditación produce en términos doctrinales es la unión de Y-H, las dos primeras letras y las Sefirot superiores, con V-H, las dos últimas letras, Zeir Anpin y Malkhut. La Qabalah busca ese yichud en cada acto de tefilah: unir la fuente con su manifestación. El acto de bondad genuina, la palabra de Torá pronunciada con intención, la plegaria ofrecida con el corazón."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-ehyeh",
    parentId: "shemot-hakodesh",
    level: 2,
    mainNumber: 7.3,
    title: { en: "Ehyeh", es: "Ehyeh" },
    hebrew: "אהיה",
    subtitle: { en: "I Will Be", es: "Seré" },
    sections: {
      en: [
        {
          paragraphs: [
            "Ehyeh is the divine Name of Keter, the highest Sefirah. The verbal root He-Yod-He functions in the Hebrew imperfect, a tense that does not indicate future alone but continuous existence, without beginning or end. Rashi translates it as: \"I will be with them in this distress as I will be in future distresses.\" Ramban reads something different in Ehyeh Asher Ehyeh: the declaration of necessary and unconditioned existence, God as Being who exists by His own nature, without external cause. Hebrew does not admit a single translation. The ambiguity belongs to the Name.",
            "God pronounced that phrase before Moshe at the burning bush. The mequbalim recognize there the revelation of Keter in human language. The numerical value of Ehyeh is twenty-one; the three components of the complete phrase form a total that the qabalistic masters analyze in relation to the Shem Mem-Bet, the Name of Forty-Two Letters that sustains the tefilah Ana Bekoach. The connection between Ehyeh and that Name is not decorative: the teaching affirms that the power of creation and redemption springs from the same source that Keter represents.",
            "Keter is the origin of every blessing, the level where divine mercy exists before the distinction between mercy and judgment is possible. When the tradition speaks of opening the gates of Keter, it describes the highest mercy descending without the filters of judgment that act in the lower levels. The mequbalim call that mercy Rachamim Ila'im, supernal mercy. The Zohar describes it as the force that acts beyond merits, extending goodness where ordinary justice finds no justification.",
            "Ehyeh names the divine presence that is prior to every form and sustains every form. Whoever directs intention toward that Name in tefilah points toward the unconditioned root of existence: HaShem is prior to every attribute, His existence depends on nothing external, and from that source descends everything that exists. The soul that approaches Ehyeh with sincere intention reaches a level where petition dissolves into recognition: the one who prays and the One invoked belong to the same fabric."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Ehyeh es el Nombre divino de Keter, la Sefirah más alta. La raíz verbal He-Yod-He funciona en el imperfecto hebreo, tiempo que no señala futuro solamente sino existencia continua, sin inicio ni fin. Rashi lo traduce como: \"Seré con ellos en esta angustia como lo estaré en las futuras\". El Ramban lee en Ehyeh Asher Ehyeh algo distinto: la declaración de una existencia necesaria e incondicionada, Dios como ser que existe por naturaleza propia, sin causa exterior. El hebreo no admite una sola traducción. La ambigüedad pertenece al Nombre.",
            "Dios pronunció esa frase ante Moshe en la zarza ardiente. Los mequbalim reconocen ahí la revelación de Keter en lenguaje humano. El valor numérico de Ehyeh es veintiuno; los tres componentes de la frase completa forman un total que los maestros qabalistas analizan en relación con el Shem Mem-Bet, el Nombre de cuarenta y dos letras que sostiene la tefilah Ana Bekoach. La conexión entre Ehyeh y ese Nombre no es decorativa: la enseñanza afirma que el poder de la creación y la redención brotan de la misma fuente que Keter representa.",
            "Keter es el origen de toda bendición, el nivel donde la misericordia divina existe antes de que la distinción entre misericordia y juicio sea posible. Cuando la tradición habla de abrir las puertas de Keter, describe la misericordia más alta descendiendo sin los filtros del juicio que actúan en los niveles inferiores. Los mequbalim llaman a esa misericordia Rachamim Ila'im, misericordia superna. El Zohar la describe como la fuerza que actúa más allá de los merecimientos, extendiendo bondad donde la justicia ordinaria no encuentra justificación.",
            "Ehyeh nombra la presencia divina anterior a toda forma y que sostiene toda forma. Quien dirige la intención hacia ese Nombre en la tefilah apunta hacia la raíz incondicionada de la existencia: HaShem es anterior a cualquier atributo, su existencia no depende de nada externo, y de esa fuente desciende todo lo que existe. El alma que se acerca a Ehyeh con intención sincera llega a un nivel donde la petición se disuelve en reconocimiento: quien ora y quien es invocado pertenecen al mismo tejido."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-yah",
    parentId: "shemot-hakodesh",
    level: 2,
    mainNumber: 7.4,
    title: { en: "Yah", es: "Yah" },
    hebrew: "יה",
    subtitle: { en: "The Name of Chokhmah", es: "El Nombre de Jokhmah" },
    sections: {
      en: [
        {
          paragraphs: [
            "Yah is the first two letters of Havayah, Yod and He, and forms the Name linked to Chokhmah, the second Sefirah. In the Siddur and the Tehillim it appears frequently, above all in expressions of praise: Halleluyah, praise Yah. The brevity of the Name reflects the nature of Chokhmah: a point of wisdom so concentrated that it barely admits articulation. Chokhmah is the first thought, prior to language. Yah is its Name.",
            "The tradition locates at this level the point where judgment loses influence. The Qlifot, forces of concealment, do not reach Chokhmah; primordial divine wisdom lies outside the reach of structured impurity. The mequbalim teach that when the one who prays ascends, through meditation and intention, to the level of Yah, blessings descend without obstacle. Here lies the teaching on Koach Mah, the power of what: Chokhmah corresponds to the indeterminate pronoun mah because at that level fixed categories do not yet exist, only the open power of a wisdom that has not yet been limited into form.",
            "To invoke Yah in tefilah with due kavanah is to orient intention toward the level where ordinary understanding yields before direct perception of divine presence. The mequbalim distinguish discursive knowledge, which operates in Binah, from the instantaneous apprehension proper to Chokhmah. Yah names that second form of knowledge: it is not built argument by argument; it arrives suddenly, like light entering a dark room."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Yah son las dos primeras letras de Havayah, Yod y He, y forman el Nombre vinculado a Jokhmah, la segunda Sefirah. En el Siddur y los Tehillim aparece con frecuencia, sobre todo en expresiones de alabanza: Halleluyah, alabad a Yah. La brevedad del Nombre refleja la naturaleza de Jokhmah: un punto de sabiduría tan concentrada que apenas admite articulación. Jokhmah es el primer pensamiento, anterior al lenguaje. Yah es su Nombre.",
            "La tradición ubica en este nivel el punto donde el juicio pierde influencia. Las Qlifot, fuerzas de ocultamiento, no alcanzan a Jokhmah; la sabiduría divina primordial está fuera del alcance de la impureza estructurada. Los mequbalim enseñan que cuando el orante asciende, mediante meditación e intención, hasta el nivel de Yah, las bendiciones bajan sin obstáculo. Aquí radica la enseñanza sobre Koach Mah, la fuerza del qué: Jokhmah corresponde al pronombre indeterminado mah porque en ese nivel no existen categorías fijas, solo el poder abierto de una sabiduría que aún no se ha limitado en forma.",
            "Invocar Yah en la tefilah con la kavanah debida es orientar la intención hacia el nivel donde la comprensión ordinaria cede ante una percepción directa de la presencia divina. Los mequbalim distinguen el conocimiento discursivo, que opera en Binah, de la aprehensión instantánea propia de Jokhmah. Yah nombra esa segunda forma de conocimiento: no se construye argumento por argumento, llega de golpe, como la luz que entra en una habitación a oscuras."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-el",
    parentId: "shemot-hakodesh",
    level: 2,
    mainNumber: 7.5,
    title: { en: "El", es: "El" },
    hebrew: "אל",
    subtitle: { en: "The Name of Chesed", es: "El Nombre de Chesed" },
    sections: {
      en: [
        {
          paragraphs: [
            "El is the divine Name of Chesed, mercy. Abraham is its paradigmatic figure in the Torah. The tradition maintains that Abraham rectified the Sefirah of Chesed in the world and anchored it in human history through his own life. Hospitality without limit, intercession for Sedom, the fulfillment of every trial with unshakable faith: these acts are the conductual expression of what El represents on the Sefirotic plane.",
            "El Elyon, God Most High, is the form of the Name that Abraham pronounced when he blessed King Malki-Tzedek. The mequbalim read something concrete in that formula: divine goodness operates above every level of judgment. Above the left column of the Tree, above Gevurah, Din, and restriction, mercy runs without counterpart. Abraham received the stranger and extended good without calculating return. Whoever does the same aligns with the current designated by the Name El.",
            "The connection between El and Chokhmah passes through the concept of Koach Mah. Chokhmah, the \"power of what,\" is the source from which Chesed flows without calculation, because at that level the distinction between deserving and undeserving does not yet operate. The outpouring of Chesed from Chokhmah does not ask whether the recipient deserves it. It flows because that is its nature. Abraham understood this and taught the world to recognize God as Havayah El olam, where olam designates both \"universe\" and \"eternity.\" The sages read the formula as \"Havayah is God-universe,\" not \"God of the universe.\" The difference is theological: God is not outside the world like a king outside his kingdom. All reality exists within His presence."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "El es el Nombre divino de Chesed, la misericordia. Abraham es su figura paradigmática en la Torá. La tradición sostiene que Abraham rectificó la Sefirah de Chesed en el mundo y la ancló en la historia humana a través de su propia vida. La hospitalidad sin límite, la intercesión por Sedom, el cumplimiento de cada prueba con fe inquebrantable: esos actos son la expresión conductual de lo que El representa en el plano sefirótico.",
            "El Elyon, Dios Altísimo, es la forma del Nombre que Abraham pronunció al bendecir al rey Malki-Tzedek. Los mequbalim leen en esa fórmula algo concreto: la bondad divina opera por encima de cualquier nivel de juicio. Por encima de la columna izquierda del Árbol, por encima de Gevurah, Din y la restricción, la misericordia corre sin contrapartida. Abraham acogió al extraño y extendió el bien sin calcular el retorno. Quien hace lo mismo se alinea con la corriente que el Nombre El designa.",
            "La conexión entre El y Jokhmah pasa por el concepto de Koach Mah. Jokhmah, la \"fuerza del qué\", es la fuente desde la cual Chesed fluye sin cálculo, porque en ese nivel la distinción entre merecedor y no merecedor todavía no opera. El derrame de Chesed desde Jokhmah no pregunta si el destinatario lo merece. Fluye porque esa es su naturaleza. Abraham comprendió esto y enseñó al mundo a reconocer a Dios como Havayah El olam, donde olam designa tanto \"universo\" como \"eternidad\". Los sabios leen la fórmula como \"Havayah es Dios-universo\", no \"Dios del universo\". La diferencia es teológica: Dios no es exterior al mundo como un rey a su reino. La realidad entera existe dentro de su presencia."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-eloah",
    parentId: "shemot-hakodesh",
    level: 2,
    mainNumber: 7.6,
    title: { en: "Eloah", es: "Eloah" },
    hebrew: "אלוה",
    subtitle: { en: "The Creative Arc", es: "El arco creativo" },
    sections: {
      en: [
        {
          paragraphs: [
            "Eloah shares with El the link to Chesed and to Abraham, but its gematric analysis opens dimensions that El does not reach. The numerical value of Eloah is forty-two, double twenty-one, the value of Ehyeh. In Qabalah, forty-two corresponds to the Shem Mem-Bet, the Name of Forty-Two Letters by which the world was created. The Zohar places that potency within the first verse of the Torah.",
            "The arc of the creative act has two ends: yehi, \"let there be,\" has the value twenty-five; tov, \"good,\" has the value seventeen. Twenty-five plus seventeen: forty-two. The initial will and the recognition that what has been created is good together form the value of Eloah. The gematria of the Name does not allude to creation; it contains it.",
            "The at-bash system expands the structure. The first two letters of Eloah, Alef and Lamed, which form the Name El, sum by at-bash to four hundred and twenty, ten times forty-two. The remaining two letters, Vav and He, sum to one hundred and seventy, ten times seventeen, the value of tov. The four letters of Eloah thus reproduce the complete arc of the creative act multiplied by ten: creation and the judgment of goodness that closes it, extended to a cosmic scale.",
            "The complete spelling of Eloah sums to two hundred and three. Bara, \"He created,\" the second word of the Torah, has the value two hundred and three. The first three letters of Bereshit also have that value. Abraham enters here: his name can be read as barah-ma, \"created what,\" and its letters sum to two hundred and three plus forty-five, the value of the complete spelling of Havayah. Abraham was the first to reveal the divine presence through his teaching and example. His name bears that mission inscribed within it, and the gematria of Eloah sustains it."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Eloah comparte con El la vinculación a Chesed y a Abraham, pero su análisis gematríaco abre dimensiones que el de El no alcanza. El valor numérico de Eloah es cuarenta y dos, el doble de veintiuno, valor de Ehyeh. En la Qabalah, cuarenta y dos corresponde al Shem Mem-Bet, el Nombre de cuarenta y dos letras por el que el mundo fue creado. El Zohar sitúa esa potencia dentro del primer versículo de la Torá.",
            "El arco del acto creativo tiene dos extremos: yehi, \"que sea\", vale veinticinco; tov, \"bueno\", vale diecisiete. Veinticinco más diecisiete: cuarenta y dos. La voluntad inicial y el reconocimiento de que lo creado es bueno forman juntos el valor de Eloah. La gematria del Nombre no alude a la creación, la contiene.",
            "El sistema at-bash amplía la estructura. Las dos primeras letras de Eloah, Alef y Lamed, que forman el Nombre El, suman por at-bash cuatrocientos veinte, diez veces cuarenta y dos. Las dos letras restantes, Vav y He, suman ciento setenta, diez veces diecisiete, el valor de tov. Las cuatro letras de Eloah reproducen así el arco completo del acto creativo multiplicado por diez: la creación y el juicio de bondad que la cierra, extendidos a escala cósmica.",
            "La grafía completa de Eloah suma doscientos tres. Bara, \"Él creó\", segunda palabra de la Torá, vale doscientos tres. Las tres primeras letras de Bereshit también. Abraham entra aquí: su nombre puede leerse como barah-ma, \"creó el qué\", y sus letras suman doscientos tres más cuarenta y cinco, el valor de la grafía completa de Havayah. Abraham fue el primero en revelar la presencia divina mediante su enseñanza y su ejemplo. Su nombre lleva inscrita esa misión, y la gematria de Eloah la sostiene."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-elohim",
    parentId: "shemot-hakodesh",
    level: 2,
    mainNumber: 7.7,
    title: { en: "Elohim", es: "Elohim" },
    hebrew: "אלהים",
    subtitle: { en: "Creation, Judgment, and Law", es: "Creación, juicio y ley" },
    sections: {
      en: [
        {
          paragraphs: [
            "The Name Elohim opens the Torah, Bereshit bara Elohim, and is the Name with which God acts in creation. Qabalah links it to Gevurah, the Sefirah of judgment, restriction, and force. Creation requires limit: for something distinct from God to exist, divine being contracts and traces a boundary. Elohim operates at that boundary, establishing natural law and moral order.",
            "The Zohar observes that the Torah could have begun with Havayah, the Name of mercy, but began with Elohim in order to show that the world was born under rigor. Havayah was introduced when the world could not sustain itself under pure judgment. Elohim decrees with equity and without favoritism; Havayah bends that decree toward mercy. The history of the world, in qabalistic terms, is the history of the tension between these two Names.",
            "The decrees of Elohim do not distinguish. Rain falls on the fields of the righteous and of the wrongdoer; winter comes for everyone. The tradition teaches that the presence of a tzadik has the power to modify the effect of the decree without annulling it: it does not cancel the law of Elohim, but draws the mercy of Havayah toward the community he inhabits. The survival of a collective may depend on a single righteous person, as the Torah illustrates repeatedly.",
            "Suffering, illness, and loss are not arbitrary or signs of divine abandonment. They are the expression of Elohim, whose justice operates according to a logic that exceeds human comprehension. The Torah traces a path for facing that severity: strengthening the right column of the Tree through tefilah from the intention of Chesed, the study of Torah as an act of love, and meditation on the Names of the right side: Yah in Chokhmah and El in Chesed. The mequbalim point out that the combination El Havayah, whose numerical value is fifty-seven, nourishes the world with mercy, and they see the same principle in the fifty-seven verses of Psalm twenty-two: the numerical structure of tefilah as a tool for drawing mercy over the severe decree."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "El Nombre Elohim abre la Torá, Bereshit bara Elohim, y es el Nombre con el que Dios actúa en la creación. La Qabalah lo vincula a Gevurah, la Sefirah del juicio, la restricción y la fuerza. La creación exige límite: para que exista algo distinto de Dios, el ser divino se contrae y traza una frontera. Elohim opera en esa frontera, establece la ley natural y el orden moral.",
            "El Zohar observa que la Torá podría haber comenzado con Havayah, el Nombre de la misericordia, pero comenzó con Elohim para mostrar que el mundo nació bajo rigor. Havayah se introdujo cuando el mundo no pudo sostenerse bajo juicio puro. Elohim decreta con equidad sin acepción de personas; Havayah dobla ese decreto hacia la misericordia. La historia del mundo, en términos qabalísticos, es la historia de la tensión entre esos dos Nombres.",
            "Los decretos de Elohim no distinguen. La lluvia cae sobre los campos del justo y del malhechor; el invierno llega para todos. La tradición enseña que la presencia de un tzadik tiene el poder de modificar el efecto del decreto sin anularlo: no cancela la ley de Elohim, sino que atrae la misericordia de Havayah hacia la comunidad que habita. La supervivencia de un colectivo puede depender de un único hombre justo, como la Torá ilustra en repetidas ocasiones.",
            "El sufrimiento, la enfermedad, la pérdida no son arbitrarios ni señal de abandono divino. Son la expresión de Elohim, cuya justicia opera con una lógica que excede la comprensión humana. La Torá traza un camino para enfrentar esa severidad: fortalecer la columna derecha del Árbol mediante la tefilah desde la intención de Chesed, el estudio de Torá como acto de amor, la meditación sobre los Nombres de la derecha: Yah en Jokhmah y El en Chesed. Los mequbalim señalan que la combinación El Havayah, cuyo valor numérico es cincuenta y siete, nutre el mundo de misericordia, y ven en los cincuenta y siete versículos del Salmo veintidós el mismo principio: la estructura numérica de la tefilah como herramienta para atraer misericordia sobre el decreto severo."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-tzevaot",
    parentId: "shemot-hakodesh",
    level: 2,
    mainNumber: 7.8,
    title: { en: "Tzevaot", es: "Tzevaot" },
    hebrew: "צבאות",
    subtitle: { en: "Hosts", es: "Ejércitos" },
    sections: {
      en: [
        {
          paragraphs: [
            "Tzevaot, Hosts, appears late in the biblical text, from the books of Samuel onward, and always together with another Name: Havayah Tzevaot or Elohim Tzevaot. This dependence is not accidental. Tzevaot does not function alone; the Name that accompanies it defines its register.",
            "Havayah Tzevaot corresponds to Netzach, the Sefirah of eternity and perseverance. The Talmud notes that Chanah introduced this Name for the first time in her tefilah in the Mishkan, and that story defines it: Havayah Tzevaot invokes the permanence of the divine covenant with Israel above immediate merit. Samuel, born from that tefilah, embodies the rectification of Netzach, the prophet who restores spiritual order to a generation that had lost it.",
            "Elohim Tzevaot corresponds to Hod, the Sefirah of divine glory in the order of nature. While Havayah Tzevaot operates in the historical dynamic of the covenant, Elohim Tzevaot points to the laws that govern the cosmos with invariable precision. The mequbalim teach that whoever invokes this Name aligns with that order and recognizes the will of God in the structure of what exists.",
            "The numerical value of Tzevaot is four hundred and ninety-nine. The sages link it with union and procreation, with the capacity to give life, a central theme of Hod and Netzach as a pair of Sefirot. The transformation of Tzevaot through at-bash confirms its collaborative nature: the hosts of Tzevaot are angels and souls that execute the divine will on every plane. The person who directs tefilah toward this Name recognizes himself as part of that undertaking."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Tzevaot, Ejércitos, aparece tarde en el texto bíblico, desde los libros de Samuel, y siempre junto a otro Nombre: Havayah Tzevaot o Elohim Tzevaot. Esta dependencia no es accidental. Tzevaot no funciona solo; el Nombre que lo acompaña define su registro.",
            "Havayah Tzevaot corresponde a Netzach, la Sefirah de la eternidad y la perseverancia. El Talmud señala que Chanah introdujo este Nombre por primera vez en su tefilah en el Mishkan, y esa historia lo define: Havayah Tzevaot invoca la permanencia del pacto divino con Israel por encima del mérito inmediato. Samuel, nacido de esa tefilah, encarna la rectificación de Netzach, el profeta que devuelve el orden espiritual a una generación que lo perdió.",
            "Elohim Tzevaot corresponde a Hod, la Sefirah de la gloria divina en el orden de la naturaleza. Mientras Havayah Tzevaot opera en la dinámica histórica del pacto, Elohim Tzevaot señala las leyes que rigen el cosmos con precisión invariable. Los mequbalim enseñan que quien invoca este Nombre se alinea con ese orden y reconoce la voluntad de Dios en la estructura de lo que existe.",
            "El valor numérico de Tzevaot es cuatrocientos noventa y nueve. Los sabios lo vinculan con la unión y la procreación, con la capacidad de dar vida, tema central de Hod y Netzach como par de Sefirot. La transformación de Tzevaot mediante at-bash confirma su naturaleza colaborativa: los ejércitos de Tzevaot son ángeles y almas que ejecutan la voluntad divina en todos los planos. La persona que dirige su tefilah hacia este Nombre se reconoce parte de esa empresa."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-shaddai",
    parentId: "shemot-hakodesh",
    level: 2,
    mainNumber: 7.9,
    title: { en: "Shaddai", es: "Shaddai" },
    hebrew: "שדי",
    subtitle: { en: "The Name of Yesod", es: "El Nombre de Yesod" },
    sections: {
      en: [
        {
          paragraphs: [
            "Gikatilla devotes the third sha'ar of Sha'are Orah to Shaddai, the divine Name of Yesod. The popular etymology, \"the One who said to the world: enough, dai,\" fixes the doctrinal meaning: Shaddai places a limit on unlimited expansion and traces the contour within which creation can exist. Limit is not mere restriction; it is the condition of every form. Without boundary there is no recognizable entity.",
            "Yesod is the channel through which the abundance of the higher Sefirot descends toward Malkhut. The lights of Chesed, the structure of Gevurah, and the harmony of Tiferet pass through Yesod before manifesting in perceptible reality. Shaddai names that function: divine sufficiency that channels and measures what each reality can receive according to its capacity. The mezuzot carry that Name on the parchment, visible at the threshold, because Shaddai marks the point where interior and exterior meet and divine presence guards the house.",
            "The classical qabalistic text develops the technical relation between Yesod and Binah: the waters of wisdom descend from Binah through the central channels of the Tree to Yesod, which receives and transmits them. The study of the mysteries of the Torah, which correspond to Binah, nourishes the channel of Yesod and enriches the reality of Malkhut. The mequbalim associate Shabbat with Binah as the World to Come accessible in time; every week that flow intensifies. The Shekhinah, which is Malkhut, receives on Shabbat the abundance of Binah through the channel of Yesod-Shaddai. For this reason the sages teach that whoever observes Shabbat guards the whole Torah: on that day the connection between source and manifestation is fully actualized.",
            "To invoke Shaddai is to recognize that the boundaries of body, time, and circumstance do not obstruct divine presence, but are the form that presence chose in order to manifest. The mercy that descends through Yesod gives each creature what it can contain, neither more nor less. That exactness is an act of love."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Gikatilla dedica el tercer sha'ar de Sha'are Orah a Shaddai, el Nombre divino de Yesod. La etimología popular, \"el que dijo al mundo: basta, dai\", fija el sentido doctrinal: Shaddai pone límite a la expansión ilimitada y traza el contorno dentro del cual la creación puede existir. El límite no es mera restricción; es la condición de toda forma. Sin frontera no hay entidad reconocible.",
            "Yesod es el canal por el que la abundancia de las Sefirot superiores baja hacia Malkhut. Las luces de Chesed, la estructura de Gevurah, la armonía de Tiferet pasan por Yesod antes de manifestarse en la realidad perceptible. Shaddai nombra esa función: la suficiencia divina que canaliza y mide lo que cada realidad puede recibir según su capacidad. Las mezuzot llevan ese Nombre en el pergamino, visibles en el umbral, porque Shaddai marca el punto donde lo interior y lo exterior se encuentran y la presencia divina guarda la casa.",
            "El texto qabalístico clásico desarrolla la relación técnica entre Yesod y Binah: las aguas de la sabiduría bajan desde Binah por los canales centrales del Árbol hasta Yesod, que las recibe y las transmite. El estudio de los misterios de la Torá, que corresponden a Binah, alimenta el canal de Yesod y enriquece la realidad de Malkhut. Los mequbalim asocian el Shabbat a Binah como Olam Haba accesible en el tiempo; cada semana ese flujo se intensifica. La Shekhinah, que es Malkhut, recibe en Shabbat la abundancia de Binah por el canal de Yesod-Shaddai. Por eso los sabios enseñan que quien observa el Shabbat guarda toda la Torá: ese día la conexión entre la fuente y su manifestación se actualiza completa.",
            "Invocar a Shaddai es reconocer que las fronteras del cuerpo, del tiempo y de las circunstancias no obstruyen la presencia divina sino que son la forma que esa presencia eligió para manifestarse. La misericordia que baja por Yesod da a cada criatura lo que puede contener, ni más ni menos. Esa exactitud es un acto de amor."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-adonai",
    parentId: "shemot-hakodesh",
    level: 2,
    mainNumber: 7.10,
    title: { en: "Adonai", es: "Adonai" },
    hebrew: "אדני",
    subtitle: { en: "The Name of Malkhut", es: "El Nombre de Malkhut" },
    sections: {
      en: [
        {
          paragraphs: [
            "Adonai orally replaces Havayah: where the written text shows י-ה-ו-ה, the mouth says Adonai. Halakhah fixed this substitution in order to protect the holiness of the ineffable Name, and the weight of that decision is not exhausted in liturgy. Adonai, the Name of Malkhut, clothes Havayah as the body clothes the soul: it makes audible what without that garment would remain mute.",
            "Qabalah calls this relation a fundamental yichud. Havayah is the supernal essence, the transcendent aspect of God; Adonai is the Shekhinah that dwells in the world and can be invoked by the human being. Their numerical values sum to ninety-one: twenty-six plus sixty-five, equal to the value of Amen. Amen is the seal that ratifies the union between the celestial and the earthly in the blessing pronounced. By saying it, the listener enters the yichud between Havayah and Adonai.",
            "The at-bash technique applied to Adonai yields five hundred and forty-nine. The mequbalim read that number as a multiplicity of ani, the pronoun that Malkhut uses when speaking from its own perspective. That \"I\" does not declare autonomy: it is the voice of the Shekhinah recognizing that the nine higher Sefirot sustain her and pour their abundance over her. The complete spelling of Adonai, each letter written by its name, sums to six hundred and seventy-one, the value of the Aramaic tara, \"gate.\" Malkhut is that in the system: the threshold through which the human being enters the mystery of the Sefirot.",
            "The blessing that flowed from Abraham, Yitzhak, and Yaakov through the lineage of the righteous reaches its condensation in Yosef HaTzadik, archetype of Yesod. His righteousness transmits that inheritance to Malkhut. Adonai is the Name in which that transmission is fixed: the covenant between the channel and its destination.",
            "When the one who prays pronounces Adonai with intention, he performs that yichud. He affirms that divine presence dwells in the world, that the everyday is not separate from the sacred, and that the human being finds God within ordinary life."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Adonai sustituye oralmente a Havayah: donde el texto escrito muestra י-ה-ו-ה, la boca dice Adonai. La halakhah fijó esta sustitución para proteger la santidad del Nombre inefable, y el peso de esa decisión no se agota en la liturgia. Adonai, el Nombre de Malkhut, viste a Havayah como el cuerpo viste al alma: convierte en audible lo que sin ese revestimiento permanecería mudo.",
            "La Qabalah llama yichud fundamental a esta relación. Havayah es la esencia superna, el aspecto trascendente de Dios; Adonai es la Shekhinah que habita en el mundo, invocable por el ser humano. Sus valores numéricos suman noventa y uno: veintiséis más sesenta y cinco, igual al valor de Amen. Amen es el sello que ratifica la unión entre lo celestial y lo terrenal en la bendición pronunciada. Al decirlo, el oyente entra en el yichud entre Havayah y Adonai.",
            "La técnica at-bash aplicada a Adonai arroja quinientos cuarenta y nueve. Los mequbalim leen ese número como una multiplicidad de ani, el pronombre que Malkhut usa cuando habla desde su propia perspectiva. Ese \"yo\" no declara autonomía: es la voz de la Shekhinah reconociendo que las nueve Sefirot superiores la sostienen y vierten sobre ella su abundancia. La grafía completa de Adonai, cada letra escrita por su nombre, suma seiscientos setenta y uno, valor del arameo tara, \"puerta\". Malkhut es eso en el sistema: el umbral por el que el ser humano entra al misterio de las Sefirot.",
            "La bendición que fluyó de Abraham, Yitzhak y Yaakov por el linaje de los justos llega a su condensación en Yosef HaTzadik, arquetipo de Yesod. Su rectitud transmite esa herencia a Malkhut. Adonai es el Nombre en que esa transmisión se fija: la alianza entre el canal y su destino.",
            "Cuando el orante pronuncia Adonai con intención, realiza ese yichud. Afirma que la presencia divina habita el mundo, que lo cotidiano no está separado de lo sagrado, que el ser humano encuentra a Dios dentro de la vida ordinaria."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-ahavah",
    parentId: "shemot-hakodesh",
    level: 2,
    mainNumber: 7.11,
    title: { en: "Ahavah", es: "Ahavah" },
    hebrew: "אהוה",
    subtitle: { en: "Love and the Masculine Aspect of Daat", es: "Amor y el aspecto masculino de Daat" },
    sections: {
      en: [
        {
          paragraphs: [
            "Ahavah, love in Hebrew, shares its writing with a permutation of the Shem: Alef, He, Vav, He. The Alef opens the Name and points to unity and origin; the two He letters flank the Vav, the connector, in an arrangement almost identical to that of Havayah, except that here the Alef replaces the Yod. The qabalistic tradition reads this structural proximity as function: Ahavah names the masculine aspect of Daat, the hidden Sefirah that the mequbalim locate between Chokhmah and Binah.",
            "Daat occupies a singular place. The mequbalim count ten Sefirot and describe Daat as the inner knowledge of Keter, excluded from the usual count but not from the system. There knowledge ceases to be contemplation and becomes union: Chokhmah and Binah join in Daat as father and mother whose union generates life. Ahavah belongs to that level because love, in its deepest dimension, does not understand the beloved object from outside but unites with it.",
            "The numerical value of Ahavah is seventeen, equal to that of tov, good. The mequbalim read in this equivalence an identity: what God calls good at the close of each creative day is the same reality that Ahavah names from another angle. The Or HaGanuz, the primordial light separated and reserved for the righteous, finds in Ahavah its proper name: hidden goodness awaiting revelation."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Ahavah, amor en hebreo, comparte escritura con una permutación del Shem: Alef, He, Vav, He. La Alef abre el Nombre y señala unidad y origen; las dos He flanquean la Vav, el conector, en una disposición casi idéntica a la de Havayah, salvo que aquí la Alef sustituye a la Yod. La tradición qabalística lee esta proximidad estructural como función: Ahavah nombra el aspecto masculino de Daat, la Sefirah oculta que los mequbalim ubican entre Jokhmah y Binah.",
            "Daat ocupa un lugar singular. Los mequbalim cuentan diez Sefirot y describen a Daat como el conocimiento interior de Keter, excluida del recuento habitual pero no del sistema. Ahí el conocimiento deja de ser contemplación para convertirse en unión: Jokhmah y Binah se juntan en Daat como el padre y la madre cuya unión genera la vida. Ahavah pertenece a ese nivel porque el amor, en su dimensión más honda, no comprende el objeto amado desde fuera sino que se une con él.",
            "El valor numérico de Ahavah es diecisiete, igual al de tov, bueno. Los mequbalim leen en esta equivalencia una identidad: lo que Dios llama bueno al cerrar cada jornada creativa es la misma realidad que Ahavah nombra desde otro ángulo. El Or HaGanuz, la luz primordial separada y reservada para los justos, encuentra en Ahavah su nombre propio: bondad oculta que aguarda revelación."
          ]
        }
      ]
    }
  },
  {
    id: "shemot-ehevi",
    parentId: "shemot-hakodesh",
    level: 2,
    mainNumber: 7.12,
    title: { en: "Ehevi", es: "Ehevi" },
    hebrew: "אהוי",
    subtitle: { en: "The Feminine Aspect of Daat", es: "El aspecto femenino de Daat" },
    sections: {
      en: [
        {
          paragraphs: [
            "Ehevi, Alef, He, Vav, Yod, is the complement of Ahavah and corresponds to the feminine aspect of Daat. Ahavah gives; Ehevi receives and structures. Between them they articulate the complete hidden Sefirah.",
            "These four letters have a property that separates them from all the others in the Hebrew alphabet: they also function as vowels. Grammarians call them imot hakriyah, mothers of reading, because their presence in a syllable fixes the vowel sound without niqqud. Without them, Hebrew consonants have no voice. The mequbalim call them the soul of the alphabet. It is not accidental that these four signs compose the fundamental divine Names: Havayah, Yah, Ehyeh, Ahavah, and now Ehevi. The Names of God are built with the letters that make human language speak.",
            "Their position in alphabetical order traces the ten Sefirot in miniature: Alef is one, He five, Vav six, and Yod ten. The sum is twenty-two, the exact number of letters in the Hebrew alphabet. Ehevi contains the totality of the alphabet in potency.",
            "Ahavah and Ehevi sum to thirty-nine, identical to the value of Havayah Echad, Havayah is one. The union of the two aspects of Daat expresses divine unity. The Torah confirms this structurally: the initial letters of the first four words of et hashamayim ve'et ha'aretz sum to seventeen, equal to Ahavah; the initials of the seven words of the first verse sum to twenty-two, equal to Ehevi.",
            "The cross-multiplication of the letters of both Names yields one hundred and twelve, the value of Havayah Elohim, the combination of mercy and judgment that operates through Daat as a harmonizing principle. In at-bash codification, Ehevi has the value six hundred and ten and Elohim five hundred and sixty; together they sum to one thousand one hundred and seventy, which is twenty-six by forty-five, the value of Havayah multiplied by that of its full spelling, which coincides with Adam. In that number, the divine Name integrates with human reality.",
            "The full spellings of Ahavah and Ehevi sum to one thousand two hundred and twenty-six, exactly double six hundred and thirteen. The mequbalim read there that the two aspects of Daat are the two poles from which the human being is linked to the six hundred and thirteen commandments. Love moves one to fulfill because one desires the good; reverential fear moves one to fulfill because one recognizes the greatness of the One who commands. Each has its Name."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Ehevi, Alef, He, Vav, Yod, es el complemento de Ahavah y corresponde al aspecto femenino de Daat. Ahavah da; Ehevi recibe y estructura. Entre los dos articulan la Sefirah oculta completa.",
            "Estas cuatro letras tienen una propiedad que las separa de todas las demás en el alfabeto hebreo: funcionan también como vocales. Los gramáticos las llaman imot hakriyah, letras madre de la lectura, porque su presencia en una sílaba fija el sonido vocálico sin niqqud. Sin ellas, las consonantes hebreas no tienen voz. Los mequbalim las llaman el alma del alfabeto. No es accidental que estos cuatro signos compongan los Nombres divinos fundamentales: Havayah, Yah, Ehyeh, Ahavah, y ahora Ehevi. Los Nombres de Dios se construyen con las letras que hacen hablar al lenguaje humano.",
            "Su posición en el orden alfabético traza las diez Sefirot en miniatura: Alef vale uno, He cinco, Vav seis, Yod diez. La suma es veintidós, el número exacto de letras del alfabeto hebreo. Ehevi contiene en potencia la totalidad del alfabeto.",
            "Ahavah y Ehevi suman treinta y nueve, valor idéntico a Havayah Echad, Havayah es uno. La unión de los dos aspectos de Daat expresa la unicidad divina. La Torá lo confirma estructuralmente: las letras iniciales de las primeras cuatro palabras de et hashamayim ve'et ha'aretz suman diecisiete, igual a Ahavah; las iniciales de las siete palabras del primer versículo suman veintidós, igual a Ehevi.",
            "La multiplicación cruzada de las letras de ambos Nombres da ciento doce, valor de Havayah Elohim, la combinación de misericordia y juicio que opera a través de Daat como principio armonizador. En la codificación at-bash, Ehevi vale seiscientos diez y Elohim quinientos sesenta; juntos suman mil ciento setenta, que es veintiséis por cuarenta y cinco, el valor de Havayah multiplicado por el de su grafía plena, que coincide con Adam. En esa cifra, el Nombre divino se integra con la realidad humana.",
            "Las grafías completas de Ahavah y Ehevi suman mil doscientos veintiséis, el doble exacto de seiscientos trece. Los mequbalim leen ahí que los dos aspectos de Daat son los dos polos desde los que el ser humano se vincula con los seiscientos trece mandamientos. El amor mueve a cumplir porque se quiere el bien; el temor reverencial mueve a cumplir porque se reconoce la grandeza de quien manda. Cada uno tiene su Nombre."
          ]
        }
      ]
    }
  },
  {
    id: "derej-haavodah",
    parentId: null,
    level: 1,
    mainNumber: 8,
    title: { en: "Derej HaAvodah", es: "Derej HaAvodah" },
    hebrew: "דרך העבודה",
    subtitle: { en: "The Spiritual Path", es: "El camino espiritual" },
    sections: {
      en: [
        {
          paragraphs: [
            "A new phase begins. Knowledge has settled, the vessel has taken form, the inner structure is available. Movement no longer occurs only on the plane of understanding: it occurs in practice. The soul acts. Awakened consciousness must be sustained day by day.",
            "Spiritual work is not born from extraordinary moments. It is cultivated when waking, speaking, looking, eating, studying, and remaining silent. When the will is oriented with clarity, inner movement becomes ordered. The flow of light finds space.",
            "Qabalah is not studied in order to accumulate concepts. Knowledge of the Sefirot, the worlds, the divine Names, the Partzufim, and the structure of the soul has a concrete purpose: to transform the way the human being lives before HaShem. If knowledge does not descend into conduct, it remains suspended. If it does not change speech, desire, choice, and relation with others, it has not yet entered life.",
            "For this reason the path begins before the more visible practices. Before working with divine Names, before meditating with letters, before performing yichudim, the student must learn to look. The qabalistic gaze does not see a life separated from spiritual life. Every circumstance, encounter, difficulty, desire, and reaction forms part of the same field of work. There is not one place where one lives and another where one practices. The whole of life is the field of avodah."
          ]
        },
        {
          heading: { en: "Hashgachah Pratit", es: "Hashgachah pratit" },
          paragraphs: [
            "The first foundation of that gaze is hashgachah pratit, particular providence. Nothing in existence occurs outside divine supervision. This statement is neither a pious phrase nor a consolation for difficult moments. It is the structural basis from which Qabalah operates. Every event, delay, obstacle, loss, encounter, and repetition that appears in a person's life participates in a precise spiritual causality, even when that precision cannot always be seen from ordinary consciousness.",
            "The Ramchal, in Derej HaShem, treats this principle as one of the pillars of spiritual understanding. HaShem governs existence without a void. Human life does not move by chance, even if chance is the way human ignorance names what it does not yet understand. The Zohar expresses this idea with a radical image: even a leaf that falls from a tree falls because there is a decree moving it. The teaching does not intend to annul human responsibility, but to situate it within a wider order.",
            "Whoever understands this begins to read life differently. Suffering ceases to be only interruption. An obstacle ceases to be only blockage. A difficult person ceases to be only annoyance. Delay ceases to be only frustration. Everything can become message, mirror, matter for Tikun. The question changes. It is no longer only: \"How do I get out of this?\" but also: \"What is this showing me? What part of my soul is revealed here? What is asking for rectification?\"",
            "This understanding is indispensable because it corrects a frequent deviation in one who approaches qabalistic wisdom. Many seek blessing, protection, clarity, strength, success, or the opening of paths. None of that is illegitimate in itself. The problem appears when the student approaches spiritual practice as if it were a technology of control. If the world is perceived as chaos, and Qabalah is used to manipulate invisible forces in favor of one's own desire, the channel is already twisted from the beginning.",
            "Hashgachah pratit straightens that intention. Spiritual work does not force reality toward the will of the practitioner. It aligns the will of the practitioner with reality read in its depth. Avodah does not consist in defeating the will of HaShem, but in learning to respond to it. The soul does not become more spiritual because it succeeds in imposing its desire, but because it learns to discover what is being asked of it in each situation."
          ]
        },
        {
          heading: { en: "Emunah and Bechirah Chofshit", es: "Emunah y bechirah chofshit" },
          paragraphs: [
            "From this understanding emunah is born. Particular providence describes how the world is sustained; emunah describes how the soul is sustained within that world. Emunah is not simple belief or religious optimism. It is active certainty. It is the inner disposition that recognizes the presence of HaShem even when the mind does not understand the path along which it is being led.",
            "Doubt, safek, acts as its counterweight. In the tradition, safek and Amalek share the same numerical value, and the equivalence is not accidental. Amalek represents the force that cools divine consciousness, that introduces confusion at the point where there should be clarity, that cuts the thread between the event and its higher root. Spiritual doubt does not always deny HaShem frontally. Sometimes it does something subtler: it suspends His presence precisely when one most needs to remember it.",
            "True emunah does not look away from what is difficult. It does not consist in pretending that everything is clear, in calling good what still hurts, or in denying the gravity of a situation. A certainty that needs not to look at reality is evasion. Emunah looks difficulty in the face and nevertheless sustains itself in a deeper affirmation: ein od milvado, there is nothing besides Him. Everything proceeds from a single source, even what has not yet revealed its meaning.",
            "King David expresses it in Psalm 23: \"Even though I walk through the valley of the shadow of death, I will fear no evil, for You are with me.\" Emunah is not the absence of the valley. It is the presence of HaShem within the valley. In Exodus 14, Israel stands between the closed sea and Pharaoh's army. From ordinary logic, there is no exit. Moshe says to the people: \"Do not fear, stand firm and see the salvation of HaShem that He will do for you today. HaShem will fight for you, and you shall remain still.\" Emunah is tested precisely when the exit is not visible.",
            "But this certainty does not turn the human being into a passive creature. That everything is under providence does not mean that everything is decided from the point of view of avodah. Here the second foundation appears: bechirah chofshit, free will.",
            "Jewish tradition sustains at the same time two truths that the human mind never fully reconciles: HaShem knows and supervises everything, and the human being truly chooses. Rambam writes in Hilkhot Teshuvah that every person has authority over himself to incline toward good or toward evil. This statement is not secondary. Without real choice, there is no responsibility. Without responsibility, there is no teshuvah. Without teshuvah, there is no Tikun. And without Tikun, avodah loses its meaning.",
            "Rambam himself recognizes that the relation between divine knowledge and human freedom cannot be completely resolved from ordinary intelligence. The knowledge of HaShem does not function like human knowledge. A human being knows within time: before, after, cause, consequence. HaShem does not know in that way. His knowledge does not force choice as a cause forces an effect. It operates on another plane. From below, the tension remains; from above, there is no contradiction.",
            "What matters for the practitioner is this: in every situation there is some margin of choice. It may be broad or narrow. Sometimes the person does not choose what happens, but does choose how to respond, how to speak, how to interpret, how to repair, how to contain an impulse, how to ask forgiveness, how to withdraw, how to insist, how to accept. That margin is the exact place where avodah occurs."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Una nueva fase comienza. El conocimiento se asentó, la vasija tomó forma, la estructura interna está disponible. El movimiento ya no ocurre solo en el plano del entendimiento: ocurre en la práctica. El alma actúa. La conciencia despertada necesita sostenerse en el día a día.",
            "El trabajo espiritual no nace de momentos extraordinarios. Se cultiva al despertar, al hablar, al mirar, al comer, al estudiar, al callar. Cuando la voluntad se orienta con claridad, el movimiento interior se ordena. El flujo de luz encuentra espacio.",
            "La Qabalah no se estudia para acumular conceptos. El conocimiento de las Sefirot, de los mundos, de los Nombres divinos, de los Partzufim y de la estructura del alma tiene una finalidad concreta: transformar la manera en que el ser humano vive ante HaShem. Si el conocimiento no desciende a la conducta, permanece suspendido. Si no cambia la palabra, el deseo, la elección y la relación con los demás, todavía no ha entrado en la vida.",
            "Por eso este camino comienza antes de las prácticas más visibles. Antes de trabajar con Nombres divinos, antes de meditar con letras, antes de realizar yichudim, el alumno necesita aprender a mirar. La mirada qabalística no ve una vida separada de la vida espiritual. Cada circunstancia, cada encuentro, cada dificultad, cada deseo y cada reacción forman parte del mismo campo de trabajo. No hay un lugar donde se vive y otro donde se practica. La vida entera es el terreno de la avodah."
          ]
        },
        {
          heading: { en: "Hashgachah Pratit", es: "Hashgachah pratit" },
          paragraphs: [
            "El primer fundamento de esa mirada es la hashgachah pratit, la providencia particular. Nada en la existencia ocurre al margen de la supervisión divina. Esta afirmación no es una frase piadosa ni una consolación para los momentos difíciles. Es la base estructural desde la cual opera la Qabalah. Cada evento, cada demora, cada obstáculo, cada pérdida, cada encuentro y cada repetición que aparece en la vida de una persona participa de una causalidad espiritual precisa, aunque esa precisión no siempre pueda verse desde la conciencia ordinaria.",
            "El Ramchal, en Derej HaShem, trata este principio como una de las columnas de la comprensión espiritual. HaShem gobierna la existencia sin vacío. La vida humana no se mueve por azar, aunque el azar sea la forma en que la ignorancia humana nombra lo que todavía no entiende. El Zohar expresa esta idea con una imagen radical: incluso una hoja que cae de un árbol cae porque hay un decreto que la mueve. La enseñanza no pretende anular la responsabilidad humana, sino situarla dentro de un orden más amplio.",
            "Quien comprende esto empieza a leer su vida de otro modo. El sufrimiento deja de ser solo interrupción. El obstáculo deja de ser solo bloqueo. La persona difícil deja de ser solo molestia. La demora deja de ser solo frustración. Todo puede convertirse en mensaje, en espejo, en materia de Tikun. La pregunta cambia. Ya no es solamente: \"¿cómo salgo de esto?\", sino también: \"¿qué me está mostrando esto?, ¿qué parte de mi alma se revela aquí?, ¿qué está pidiendo rectificación?\".",
            "Esta comprensión es indispensable porque corrige una desviación frecuente en quien se acerca a la sabiduría qabalística. Muchos buscan bendición, protección, claridad, fuerza, éxito o apertura de caminos. Nada de eso es ilegítimo en sí mismo. El problema aparece cuando el alumno se aproxima a la práctica espiritual como si fuera una tecnología de control. Si el mundo se percibe como caos, y la Qabalah se usa para manipular fuerzas invisibles a favor del propio deseo, el canal ya está torcido desde el origen.",
            "La hashgachah pratit endereza esa intención. El trabajo espiritual no fuerza la realidad hacia la voluntad del practicante. Alinea la voluntad del practicante con la realidad leída en su profundidad. La avodah no consiste en vencer la voluntad de HaShem, sino en aprender a responder a ella. El alma no se vuelve más espiritual porque consiga imponer su deseo, sino porque aprende a descubrir qué se le está pidiendo en cada situación."
          ]
        },
        {
          heading: { en: "Emunah and Bechirah Chofshit", es: "Emunah y bechirah chofshit" },
          paragraphs: [
            "De esta comprensión nace la emunah. La providencia particular describe cómo está sostenido el mundo; la emunah describe cómo se sostiene el alma dentro de ese mundo. Emunah no es simple creencia ni optimismo religioso. Es certeza activa. Es la disposición interior que reconoce la presencia de HaShem incluso cuando la mente no entiende el camino por el que está siendo conducida.",
            "La duda, safek, actúa como su contrapeso. En la tradición, safek y Amalek comparten el mismo valor numérico, y la equivalencia no es casual. Amalek representa la fuerza que enfría la conciencia divina, que introduce confusión en el punto donde debería haber claridad, que corta el hilo entre el acontecimiento y su raíz superior. La duda espiritual no siempre niega a HaShem de manera frontal. A veces hace algo más sutil: suspende Su presencia justo cuando más se necesita recordarla.",
            "La emunah verdadera no aparta la mirada de lo difícil. No consiste en fingir que todo es claro, ni en llamar bueno a lo que todavía duele, ni en negar la gravedad de una situación. Una certeza que necesita no mirar la realidad es evasión. La emunah mira la dificultad de frente y aun así se sostiene en una afirmación más profunda: ein od milvado, no hay nada fuera de Él. Todo procede de una única fuente, incluso aquello cuyo sentido todavía no se ha revelado.",
            "El rey David lo expresa en el Salmo 23: \"aunque ande en valle de sombra de muerte, no temeré mal alguno, porque Tú estarás conmigo\". La emunah no es ausencia de valle. Es presencia de HaShem dentro del valle. En Éxodo 14, Israel se encuentra entre el mar cerrado y el ejército de Faraón. Desde la lógica ordinaria, no hay salida. Moshe dice al pueblo: \"No temáis, estad firmes y ved la salvación de HaShem que Él hará hoy por vosotros. HaShem peleará por vosotros, y vosotros estaréis tranquilos\". La emunah se prueba precisamente cuando la salida no es visible.",
            "Pero esta certeza no convierte al ser humano en una criatura pasiva. Que todo esté bajo providencia no significa que todo esté decidido desde el punto de vista de la avodah. Aquí aparece el segundo fundamento: la bechirah chofshit, el libre albedrío.",
            "La tradición judía sostiene al mismo tiempo dos verdades que la mente humana no termina de reconciliar: HaShem conoce y supervisa todo, y el ser humano elige realmente. El Rambam escribe en Hilkhot Teshuvah que cada persona tiene autoridad sobre sí misma para inclinarse hacia el bien o hacia el mal. Esta afirmación no es secundaria. Sin elección real, no hay responsabilidad. Sin responsabilidad, no hay teshuvah. Sin teshuvah, no hay Tikun. Y sin Tikun, la avodah pierde su sentido.",
            "El mismo Rambam reconoce que la relación entre el conocimiento divino y la libertad humana no puede resolverse por completo desde la inteligencia ordinaria. El conocimiento de HaShem no funciona como el conocimiento humano. El ser humano conoce dentro del tiempo: antes, después, causa, consecuencia. HaShem no conoce así. Su conocimiento no obliga la elección como una causa obliga un efecto. Opera en otro plano. Desde abajo, la tensión permanece; desde arriba, no hay contradicción.",
            "Lo que importa para el practicante es esto: en cada situación existe algún margen de elección. Puede ser amplio o estrecho. A veces la persona no elige lo que ocurre, pero sí elige cómo responder, cómo hablar, cómo interpretar, cómo reparar, cómo contener un impulso, cómo pedir perdón, cómo retirarse, cómo insistir, cómo aceptar. Ese margen es el lugar exacto donde ocurre la avodah."
          ]
        }
      ]
    }
  },
  {
    id: "derej-yeshut",
    parentId: "derej-haavodah",
    level: 2,
    mainNumber: 8.1,
    title: { en: "Yeshut", es: "Yeshut" },
    subtitle: { en: "The Ego and the Education of Desire", es: "El ego y la educación del deseo" },
    sections: {
      en: [
        {
          paragraphs: [
            "The quality of choice depends on the level of Daat. Daat is not information. It is integrated knowledge. A person may know that he must be patient and not be patient. He may know that he must forgive and remain chained to resentment. He may know that he must trust HaShem and live from anxiety. In those cases there is information, but not Daat. Daat appears when what is known descends into the heart and modifies conduct. The more Daat the soul has, the clearer choice becomes, because it distinguishes with greater precision between real good and the trap disguised as necessity.",
            "The main obstacle to that clean choice is not usually lack of knowledge. It is yeshut: the feeling of being a separate self that needs to affirm itself, defend itself, justify itself, and dominate its surroundings. Yeshut is one of the deepest roots of spiritual blockage. It does not always appear as obvious pride. Many times it operates silently, confused with personality, sensitivity, prudence, or the right to react.",
            "Anger is one of its most recognizable forms. It may be open or subtle: explosion, coldness, irony, impatience, a comment that wounds with precision. In every case, the root is the same: the friction between what reality offers and what the self expected to receive. Yeshut has expectations. It wants the world to confirm its image, respect its timing, obey its desires, and recognize its value. When reality does not do so, it reacts.",
            "The desire for control is born from the same place. Whoever needs to impose, correct others, direct every situation, or anticipate every result often conceals a deeper fear: fear of losing, fear of disorder, fear of discovering one's own fragility. Hashgachah pratit acts here as medicine. When the soul recognizes that every situation is sustained by a higher order, the urgency of control begins to loosen. Action does not disappear, but its root changes. It ceases to be born from fear and begins to be born from clarity.",
            "Judgment is a more refined form of yeshut because it can disguise itself as discernment. The person criticizes, compares, points out defects, measures the value of others, and believes he is seeing objectively. But often judgment serves to sustain an image of superiority. Diminishing the other calms the self that does not feel firm. Anavah, humility, does not eliminate discernment. It allows one to see truthfully without needing to place oneself above.",
            "Pride defends self-image. It rejects criticism, denies error, and hardens before any correction. It appears as strength, but often is born from fear of losing an imaginary position. Whoever can recognize an error without collapsing shows a soul that has begun to leave yeshut. Whoever can receive guidance from one who knows more, without feeling diminished, opens a channel through which light can enter.",
            "Hatred is separation carried to its extreme. It divides the world between one's own and outsiders, the righteous and the mistaken, those who deserve compassion and those who do not. An unrectified yeshut does not tolerate difference because difference threatens its self-image. Against this, Qabalah teaches that all existence participates in a deeper unity. Perceived separation belongs to the level of limited consciousness; it is not the ultimate truth.",
            "Anger, control, judgment, pride, and hatred arise from one belief: that the self is separated from the whole and must defend its existence as if it were an autonomous entity. Spiritual work does not intend to destroy individuality. The person has his own form, mission, responsibility, and dignity. What must be emptied is not individual existence, but its claim to absolute autonomy. When the self stops insisting on being the center, it can become a channel."
          ]
        },
        {
          heading: { en: "Latet Ulekabel and Lechem Busha", es: "Latet ulekabel y Lechem Busha" },
          paragraphs: [
            "Then desire begins to be reeducated. This is the meaning of latet ulekabel, to give and receive. Spiritual movement is born from that cycle. Receiving is not negative. The whole of creation exists because HaShem gives and creatures receive. The problem is not receiving, but the intention that governs reception.",
            "When desire points only toward itself, the vessel narrows. What is received accumulates, hardens, becomes corrupted, or generates attachment. When desire is oriented toward HaShem, toward the other, toward a purpose higher than personal satisfaction, the vessel becomes a channel. The same abundance that in a closed soul produces heaviness, in an open soul produces blessing.",
            "The structure of the Sefirot teaches this dynamic. Chokhmah gives direct light. Malkhut receives. If Malkhut only retains, she remains below. If Malkhut returns Ohr Hozer, returning light, she ascends. Returning does not impoverish the vessel; it widens it. The more what has been received becomes giving, the more capacity is generated to receive again without distortion.",
            "This occurs on every level. Whoever receives knowledge and keeps it in order to magnify himself narrows the channel. Whoever transmits it responsibly widens it. Whoever receives money and turns it only into selfish security remains trapped in fear of losing it. Whoever also uses it to sustain, repair, and help allows the shefa to circulate. Whoever receives love and uses it to possess darkens it. Whoever turns it into care elevates it.",
            "Even a prayer for another performs this movement. When the soul asks only from its own lack, it may contract around what it lacks. When it includes the other, when it asks for one who suffers, for one who needs, for one who is lost, the vessel changes form. Desire ceases to revolve only around the self. Reception is prepared through giving.",
            "But the soul cannot receive with dignity what it has not built a vessel for. Here appears the principle of Lechem Busha, the bread of shame. Receiving what has not been earned leaves a crack in the soul. The person may enjoy what was received, may even defend it, but somewhere he knows that he is not equal to what he has. A distance opens between abundance and vessel.",
            "This principle is not reduced to material goods. There is recognition not earned, authority not sustained by maturity, affection received without reciprocity, success without inner structure, spiritual knowledge without moral refinement. All of this can become Lechem Busha. What is received before its time does not always bless. Sometimes it weighs down, confuses, or deforms.",
            "The gravest case is that of an impure origin. What comes through manipulation, falsehood, abuse, appropriation, or dishonesty contaminates the channel. Abundance wrongly obtained does not sustain itself cleanly because it introduces into the receiver's life something that does not belong to him. It may produce external results for a time, but inwardly it generates disorder.",
            "The dissolution of Lechem Busha requires work. Effort makes the fruit one's own. Not because the human being is the ultimate source of what he receives, but because effort builds the vessel capable of receiving without shame. The soul in movement can receive with dignity. The stagnant soul accumulates and sinks under the weight of what it does not know how to sustain."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "La calidad de la elección depende del nivel de Daat. Daat no es información. Es conocimiento integrado. Una persona puede saber que debe ser paciente y no serlo. Puede saber que debe perdonar y seguir encadenada al resentimiento. Puede saber que debe confiar en HaShem y vivir desde la ansiedad. En esos casos hay información, pero no Daat. Daat aparece cuando lo sabido desciende al corazón y modifica la conducta. Cuanto más Daat tiene el alma, más clara se vuelve la elección, porque distingue con mayor precisión entre el bien real y la trampa disfrazada de necesidad.",
            "El principal obstáculo para esa elección limpia no suele ser la falta de conocimiento. Es la yeshut: la sensación de ser un yo separado que necesita afirmarse, defenderse, justificarse y dominar su entorno. La yeshut es una de las raíces más profundas del bloqueo espiritual. No siempre aparece como soberbia evidente. Muchas veces opera en silencio, confundida con la personalidad, con la sensibilidad, con la prudencia o con el derecho a reaccionar.",
            "La ira es una de sus formas más reconocibles. Puede ser abierta o sutil: explosión, frialdad, ironía, impaciencia, comentario que hiere con precisión. En todos los casos, la raíz es la misma: la fricción entre lo que la realidad ofrece y lo que el yo esperaba recibir. La yeshut tiene expectativas. Quiere que el mundo confirme su imagen, respete sus tiempos, obedezca sus deseos, reconozca su valor. Cuando la realidad no lo hace, reacciona.",
            "El deseo de control nace del mismo lugar. Quien necesita imponer, corregir a otros, dirigir cada situación o anticipar cada resultado suele encubrir un miedo más profundo: miedo a perder, miedo al desorden, miedo a descubrir la propia fragilidad. La hashgachah pratit actúa aquí como medicina. Cuando el alma reconoce que cada situación está sostenida por un orden superior, la urgencia de control empieza a aflojar. La acción no desaparece, pero cambia de raíz. Deja de nacer del miedo y empieza a nacer de la claridad.",
            "El juicio es una forma más refinada de yeshut porque puede disfrazarse de discernimiento. La persona critica, compara, señala defectos, mide el valor de otros, y cree que está viendo con objetividad. Pero muchas veces el juicio sirve para sostener una imagen de superioridad. Disminuir al otro tranquiliza al yo que no se siente firme. La anavah, la humildad, no elimina el discernimiento. Permite ver con verdad sin necesidad de colocarse por encima.",
            "El orgullo defiende la autoimagen. Rechaza la crítica, niega el error, se endurece ante cualquier corrección. Parece fuerza, pero muchas veces nace del temor a perder una posición imaginaria. Quien puede reconocer el error sin derrumbarse muestra un alma que ha comenzado a salir de la yeshut. Quien puede recibir guía de quien sabe más, sin sentirse disminuido, abre un canal por el que la luz puede entrar.",
            "El odio es la separación llevada al extremo. Divide el mundo entre los propios y los ajenos, los justos y los equivocados, los que merecen compasión y los que no. Una yeshut no rectificada no tolera la diferencia porque la diferencia amenaza su autoimagen. Frente a esto, la Qabalah enseña que toda existencia participa de una unidad más profunda. La separación percibida pertenece al nivel de la conciencia limitada; no es la verdad última.",
            "Ira, control, juicio, orgullo y odio brotan de una misma creencia: que el yo está separado de la totalidad y debe defender su existencia como si fuera una entidad autónoma. El trabajo espiritual no pretende destruir la individualidad. La persona tiene forma, misión, responsabilidad y dignidad propias. Lo que debe vaciarse no es la existencia individual, sino su pretensión de autonomía absoluta. Cuando el yo deja de insistir en ser centro, puede convertirse en canal."
          ]
        },
        {
          heading: { en: "Latet Ulekabel and Lechem Busha", es: "Latet ulekabel y Lechem Busha" },
          paragraphs: [
            "Entonces el deseo empieza a reeducarse. Este es el sentido de latet ulekabel, dar y recibir. El movimiento espiritual nace de ese ciclo. Recibir no es negativo. La creación entera existe porque HaShem da, y las criaturas reciben. El problema no está en recibir, sino en la intención que gobierna la recepción.",
            "Cuando el deseo apunta solo hacia sí mismo, la vasija se estrecha. Lo recibido se acumula, se endurece, se corrompe o genera apego. Cuando el deseo se orienta hacia HaShem, hacia el prójimo, hacia un propósito más alto que la satisfacción personal, la vasija se vuelve canal. La misma abundancia que en un alma cerrada produce pesadez, en un alma abierta produce bendición.",
            "La estructura de las Sefirot enseña esta dinámica. Jokhmah da luz directa. Malkhut recibe. Si Malkhut solo retiene, queda abajo. Si Malkhut devuelve Ohr Hozer, luz de retorno, asciende. La devolución no empobrece la vasija; la ensancha. Cuanto más lo recibido se convierte en entrega, mayor capacidad se genera para recibir de nuevo sin distorsión.",
            "Esto ocurre en todos los niveles. Quien recibe conocimiento y lo guarda para engrandecerse, estrecha el canal. Quien lo transmite con responsabilidad, lo amplía. Quien recibe dinero y lo convierte solo en seguridad egoísta, queda atrapado en el miedo a perderlo. Quien lo usa también para sostener, reparar y ayudar, permite que el shefa circule. Quien recibe amor y lo usa para poseer, lo oscurece. Quien lo convierte en cuidado, lo eleva.",
            "Incluso una oración por otro realiza este movimiento. Cuando el alma pide solo desde su propia carencia, puede contraerse alrededor de lo que le falta. Cuando incluye al otro, cuando pide por quien sufre, por quien necesita, por quien está perdido, la vasija cambia de forma. El deseo deja de girar solo alrededor del yo. La recepción se prepara mediante la entrega.",
            "Pero el alma no puede recibir con dignidad aquello para lo que no ha construido recipiente. Aquí aparece el principio del Lechem Busha, el pan de vergüenza. Recibir lo que no se ha ganado deja una grieta en el alma. La persona puede disfrutar lo recibido, puede incluso defenderlo, pero en algún lugar sabe que no está a la altura de lo que tiene. Entre la abundancia y el recipiente se abre una distancia.",
            "Este principio no se reduce a los bienes materiales. Hay reconocimiento no ganado, autoridad no sostenida por madurez, afecto recibido sin reciprocidad, éxito sin estructura interior, conocimiento espiritual sin refinamiento moral. Todo eso puede convertirse en Lechem Busha. Lo recibido antes de tiempo no siempre bendice. A veces pesa, confunde o deforma.",
            "El caso más grave es el del origen impuro. Lo que llega por manipulación, mentira, abuso, apropiación o deshonestidad contamina el canal. La abundancia mal obtenida no se sostiene limpiamente porque introduce en la vida del receptor algo que no le pertenece. Puede producir resultados exteriores durante un tiempo, pero interiormente genera desorden.",
            "La disolución del Lechem Busha exige trabajo. El esfuerzo hace propio al fruto. No porque el ser humano sea la fuente última de lo que recibe, sino porque el esfuerzo construye el recipiente capaz de recibir sin vergüenza. El alma en movimiento puede recibir con dignidad. El alma estancada acumula y se hunde bajo el peso de lo que no sabe sostener."
          ]
        }
      ]
    }
  },
  {
    id: "derej-kavanah-teshuvah",
    parentId: "derej-haavodah",
    level: 2,
    mainNumber: 8.2,
    title: { en: "Kavanah, Teshuvah, and Devekut", es: "Kavanah, teshuvah y devekut" },
    subtitle: { en: "Intention, Return, and Adhesion", es: "Intención, retorno y adhesión" },
    sections: {
      en: [
        {
          heading: { en: "Kavanah and Teshuvah", es: "Kavanah y teshuvah" },
          paragraphs: [
            "For this reason, before asking, before meditating, before performing a spiritual action, the practitioner must examine his kavanah. Kavanah is the inner orientation that sustains the act. It is not an ornament of practice. It is its soul. The same action can open a channel or remain on the surface according to the intention from which it is born.",
            "Kavanah requires clarity of purpose, sustained attention, and real presence. But it also requires something more difficult: purification of motive. It is not enough to want to do something that appears good. One must ask where that desire is born from. Do I seek to serve HaShem or to feel elevated? Do I seek to help or to be seen helping? Do I seek to rectify or to control? Do I seek to learn or to be right? Do I seek to draw near to the light or to possess a spiritual image of myself?",
            "Kavanah creates correspondence between planes. When thought, speech, desire, and action align with a high purpose, light can flow with less distortion. Tefilah, study, meditation, tzedakah, and fulfillment of the mitzvot acquire strength when intention is clear. If intention is scattered, the act may preserve its external form, but its inner effect is weakened.",
            "Preparation is not a dispensable preamble. Centering consciousness, refining desire, clarifying motive, and directing the will determine whether the act reaches its destination. Qabalistic practice does not begin when a divine Name is pronounced. It begins before, in the instant when the soul asks honestly why it is about to act.",
            "When that question is asked truthfully, it inevitably reveals deviated zones. Errors, mixed motives, self-deceptions, wounds, habits, and unrectified impulses appear. The path is not interrupted by this. On the contrary: there teshuvah opens.",
            "Teshuvah means return. The human being moves away from HaShem through acts, thoughts, words, and inner dispositions; teshuvah undoes that distance. Returning to HaShem is also returning to the true root of the soul, because the deepest part of the person never ceased to belong to its source.",
            "The masters of musar and the Rishonim describe the stages of this process. First, recognizing the error: not justifying it, not reducing it, not explaining it until it disappears, but seeing it. Then comes remorse, not as sterile guilt, but as living pain for having moved away from what is right. Then, the firm decision not to repeat the act. After that, vidui, verbal confession, because what is named comes out of inner fog and becomes real. If harm was done to another person, teshuvah requires concrete repair. Finally, sustained change demonstrates that the return was not merely a momentary emotion.",
            "The tradition adds a qabalistic depth: teshuvah can be read as tashuv He, return the He. That He is linked with Binah, the place of deep understanding and return. To perform teshuvah is to reorient consciousness toward its origin, to read life again from a higher plane. It is not only a matter of correcting an isolated conduct, but of restoring the direction of the soul.",
            "The Talmud states that in the place where baalei teshuvah stand, perfect tzadikim cannot stand. This does not glorify the fall. It teaches that distance traversed can become depth. The soul that knew separation and chose to return acquires a particular density. Its light is not the light of one who never descended, but of one who descended and transformed descent into return.",
            "Superficial teshuvah is not enough. Saying the correct words without moving deep desire does not produce real return. HaShem does not ask for perfection, but He does ask for honesty. A soul that returns truthfully, even if it returns slowly, is already in movement. And sincere movement opens channels that immobility had closed."
          ]
        },
        {
          heading: { en: "Tzedakah and Devekut", es: "Tzedakah y devekut" },
          paragraphs: [
            "That movement is also expressed in tzedakah. Tzedakah comes from tzedek: justice. Giving to one who needs is not optional generosity; it is returning to the flow what should never have remained enclosed in a single hand. What a person possesses does not belong to him as an absolute. It was entrusted to him. If he retains it only for himself, the flow hardens. If he shares it with righteousness, the channel opens.",
            "Tzedakah is not limited to money. It includes food, shelter, and material help, but also time, teaching, presence, listening, the right word, and accompaniment. Rambam places at the summit of tzedakah the help that returns to the other his capacity to sustain himself: work, loan, association, dignity. Not only giving something to one in need, but helping him stand on his feet.",
            "In the qabalistic reading, tzedakah imitates Tzimtzum. HaShem contracted His infinite light in order to create space where something distinct could exist. Giving is making space. The ego wants to occupy, secure, retain. Tzedakah requires it to contract so another can live, breathe, rise, receive. Each time the practitioner gives something that costs him, a Qlifah fractures.",
            "For this reason tzedakah before practice has deep meaning. It is not a payment or a formula of exchange. No one buys blessing. But the act of giving cleans the channel. Whoever prepares to ask without first having opened his hand may still be too enclosed in himself. Whoever gives before asking declares with the body that he understands the structure of shefa: what is received must circulate.",
            "The sustained practice of tzedakah reorganizes consciousness. One's own and the other's cease to be rigidly opposed. Giving ceases to feel like loss. The person begins to recognize himself not as absolute owner of what he possesses, but as administrator of something that comes from above and must find its correct destination below.",
            "All these foundations converge in devekut. Devekut is adhesion to HaShem. It is not fusion or dissolution of the soul into Divinity. The creature remains creature. The ontological distance between Creator and created does not disappear. But the soul can adhere to HaShem by orienting will, thought, speech, and action toward Him.",
            "Devekut does not belong only to a few exceptional souls. It is the natural horizon of avodah. Emunah sustains consciousness. Bechirah assumes responsibility. Work on yeshut empties the ego of its claim. Desire is reoriented to receive in order to give. Lechem Busha is dissolved through effort and righteousness. Kavanah directs the act. Teshuvah returns the soul to its root. Tzedakah opens the channel. From all this is born a life that begins to remain with HaShem.",
            "Nefesh HaChaim teaches that devekut is not necessarily reached through ecstatic states or extraordinary experiences, but through Torah study and the fulfillment of mitzvot with real inner presence. Tanya shows how even everyday avodah, without perceptible elevation, generates a real bond between the soul and HaShem when it is done with fear, love, and consciousness. The Zohar describes the study of the secrets of the Torah as a union of the soul with its higher root. All these teachings point to the same thing: adhesion is built in concrete acts.",
            "The same act can be done from habit or from presence. One can pray without being present. One can study in order to feed pride. One can give in order to be seen. One can fulfill a mitzvah as one executes an empty form. But the same thing can also be done from another depth: as a way of being with HaShem. Devekut does not always demand new acts. It demands a different quality in existing acts.",
            "Ramchal writes in Mesillat Yesharim that the human being was created to delight in HaShem and enjoy the radiance of the Shekhinah. That pleasure belongs fully to Olam Haba, but devekut anticipates it in this world as a flash. It does not replace it, possess it, or force it. It lets it be glimpsed. The soul adhered to HaShem tastes something of its destiny.",
            "Adhesion does not erase the soul: it reveals it. The self emptied of yeshut does not disappear, but finds its true form. The person ceases to live as an isolated center and begins to live as a channel. His individuality no longer competes with HaShem, but serves the mission for which it was created.",
            "This is the meaning of Derej HaAvodah: to prepare the student so that qabalistic practice is not technique without soul. Qabalah requires knowledge, but it also requires character. It requires spiritual language, but also honesty. It requires understanding of the higher worlds, but also care with speech, desire, money, judgment, and the way one treats the other.",
            "Emunah as the basis of consciousness, bechirah as real responsibility, the dissolution of yeshut, the correct movement of giving and receiving, the dignity of what is earned through effort, kavanah as the root of every act, teshuvah as constant return, tzedakah as opening of the channel, and devekut as horizon are not separate concepts. They are facets of a single inner disposition.",
            "Only from that disposition can Tikun HaNefesh begin. The rectification of the soul does not begin when the practitioner discovers his defects, but when he has already accepted that his whole life is the field where those defects are revealed in order to be corrected. Providence shows him the material. Emunah allows him to sustain himself. Bechirah reminds him that he must choose. Work on yeshut shows him what blocks the channel. Kavanah directs the act. Teshuvah returns it. Tzedakah opens the hand. Devekut teaches him where he is going."
          ]
        }
      ],
      es: [
        {
          heading: { en: "Kavanah and Teshuvah", es: "Kavanah y teshuvah" },
          paragraphs: [
            "Por eso, antes de pedir, antes de meditar, antes de realizar una acción espiritual, el practicante debe examinar su kavanah. La kavanah es la orientación interior que sostiene el acto. No es un adorno de la práctica. Es su alma. Una misma acción puede abrir un canal o quedarse en la superficie según la intención desde la que nace.",
            "La kavanah exige claridad de propósito, atención sostenida y presencia real. Pero exige también algo más difícil: purificación del motivo. No basta querer hacer algo que parece bueno. Hay que preguntar desde dónde nace ese querer. ¿Busco servir a HaShem o busco sentirme elevado? ¿Busco ayudar o busco ser visto ayudando? ¿Busco rectificar o busco controlar? ¿Busco aprender o busco tener razón? ¿Busco acercarme a la luz o busco poseer una imagen espiritual de mí mismo?",
            "La kavanah crea correspondencia entre planos. Cuando pensamiento, palabra, deseo y acción se alinean con una finalidad elevada, la luz puede fluir sin tanta distorsión. La tefilah, el estudio, la meditación, la tzedakah y el cumplimiento de las mitzvot adquieren fuerza cuando la intención es clara. Si la intención está dispersa, el acto puede conservar su forma exterior, pero su efecto interior queda debilitado.",
            "La preparación no es un preámbulo prescindible. Centrar la conciencia, refinar el deseo, aclarar el motivo y dirigir la voluntad determinan si el acto llega a destino. La práctica qabalística no empieza cuando se pronuncia un Nombre divino. Empieza antes, en el instante en que el alma se pregunta honestamente para qué va a actuar.",
            "Cuando esa pregunta se hace con verdad, inevitablemente revela zonas desviadas. Aparecen errores, motivos mezclados, autoengaños, heridas, hábitos, impulsos no rectificados. El camino no se interrumpe por eso. Al contrario: ahí se abre la teshuvah.",
            "Teshuvah significa retorno. El ser humano se aleja de HaShem mediante actos, pensamientos, palabras y disposiciones interiores; la teshuvah deshace esa distancia. Volver a HaShem es también volver a la raíz verdadera del alma, porque la parte más profunda de la persona nunca dejó de pertenecer a su fuente.",
            "Los maestros del musar y los Rishonim describen las etapas de este proceso. Primero, reconocer el error. No justificarlo, no reducirlo, no explicarlo hasta hacerlo desaparecer, sino verlo. Después viene el remordimiento, no como culpa estéril, sino como dolor vivo por haberse alejado de lo correcto. Luego, la decisión firme de no repetir el acto. Después, el vidui, la confesión verbal, porque lo que se nombra sale de la niebla interior y se vuelve real. Si hubo daño a otra persona, la teshuvah exige reparación concreta. Finalmente, el cambio sostenido demuestra que el retorno no fue solo emoción momentánea.",
            "La tradición añade una profundidad qabalística: teshuvah puede leerse como tashuv He, devolver la He. Esa He se vincula con Binah, el lugar del entendimiento profundo y del retorno. Hacer teshuvah es reorientar la conciencia hacia su origen, volver a leer la vida desde un plano más alto. No se trata solo de corregir una conducta aislada, sino de restaurar la dirección del alma.",
            "El Talmud afirma que en el lugar donde están los baalei teshuvah los tzadikim perfectos no pueden estar. Esto no glorifica la caída. Enseña que la distancia atravesada puede convertirse en profundidad. El alma que conoció la separación y eligió volver adquiere una densidad particular. Su luz no es la de quien nunca descendió, sino la de quien descendió y transformó el descenso en regreso.",
            "La teshuvah superficial no basta. Decir las palabras correctas sin mover el deseo profundo no produce retorno real. HaShem no pide perfección, pero sí honestidad. Un alma que vuelve con verdad, aunque vuelva lentamente, ya está en movimiento. Y el movimiento sincero abre canales que la inmovilidad cerraba."
          ]
        },
        {
          heading: { en: "Tzedakah and Devekut", es: "Tzedakah y devekut" },
          paragraphs: [
            "Ese movimiento se expresa también en la tzedakah. Tzedakah viene de tzedek: justicia. Dar a quien necesita no es generosidad opcional; es devolver al flujo lo que nunca debió quedar encerrado en una sola mano. Lo que una persona posee no le pertenece como absoluto. Le fue confiado. Si lo retiene solo para sí, el flujo se endurece. Si lo comparte con rectitud, el canal se abre.",
            "La tzedakah no se limita al dinero. Incluye alimento, refugio, ayuda material, pero también tiempo, enseñanza, presencia, escucha, palabra adecuada, acompañamiento. El Rambam coloca en la cima de la tzedakah aquella ayuda que devuelve al otro su capacidad de sostenerse: trabajo, préstamo, asociación, dignidad. No solo dar algo al necesitado, sino ayudarlo a ponerse de pie.",
            "En la lectura qabalística, la tzedakah imita el Tzimtzum. HaShem contrajo Su luz infinita para crear espacio donde algo distinto pudiera existir. Dar es hacer espacio. El ego quiere ocupar, asegurar, retener. La tzedakah le exige contraerse para que otro pueda vivir, respirar, levantarse, recibir. Cada vez que el practicante da algo que le cuesta, una Qlifah se fractura.",
            "Por eso la tzedakah antes de la práctica tiene sentido profundo. No es un pago ni una fórmula de intercambio. Nadie compra bendición. Pero el acto de dar limpia el canal. Quien se dispone a pedir sin haber abierto antes la mano puede estar todavía demasiado encerrado en sí mismo. Quien da antes de pedir declara con el cuerpo que entiende la estructura del shefa: lo recibido debe circular.",
            "La práctica sostenida de la tzedakah reorganiza la conciencia. Lo propio y lo ajeno dejan de oponerse de manera rígida. El dar deja de sentirse como pérdida. La persona empieza a reconocerse no como dueña absoluta de lo que posee, sino como administradora de algo que viene de arriba y debe encontrar destino correcto abajo.",
            "Todos estos fundamentos convergen en la devekut. Devekut es adherencia a HaShem. No es fusión ni disolución del alma en la Divinidad. La criatura sigue siendo criatura. La distancia ontológica entre Creador y creado no desaparece. Pero el alma puede adherirse a HaShem orientando su voluntad, su pensamiento, su palabra y su acción hacia Él.",
            "La devekut no pertenece solo a unas pocas almas excepcionales. Es el horizonte natural de la avodah. La emunah sostiene la conciencia. La bechirah asume la responsabilidad. El trabajo sobre la yeshut vacía el ego de su pretensión. El deseo se reorienta para recibir con el fin de dar. El Lechem Busha se disuelve mediante esfuerzo y rectitud. La kavanah dirige el acto. La teshuvah devuelve el alma a su raíz. La tzedakah abre el canal. De todo eso nace una vida que empieza a permanecer junto a HaShem.",
            "El Nefesh HaChaim enseña que la devekut no se alcanza necesariamente mediante estados extáticos ni experiencias extraordinarias, sino por el estudio de Torá y el cumplimiento de las mitzvot con presencia interior real. El Tanya muestra cómo incluso la avodah cotidiana, sin elevación perceptible, genera un vínculo real entre el alma y HaShem cuando se hace con temor, amor y conciencia. El Zohar describe el estudio de los secretos de la Torá como una unión del alma con su raíz superior. Todas estas enseñanzas apuntan a lo mismo: la adherencia se construye en actos concretos.",
            "Un mismo acto puede hacerse desde el hábito o desde la presencia. Se puede rezar sin estar presente. Se puede estudiar para alimentar el orgullo. Se puede dar para ser visto. Se puede cumplir una mitzvah como quien ejecuta una forma vacía. Pero también se puede hacer lo mismo desde otra profundidad: como una manera de estar con HaShem. La devekut no siempre exige actos nuevos. Exige una cualidad distinta en los actos existentes.",
            "El Ramchal escribe en Mesillat Yesharim que el ser humano fue creado para deleitarse en HaShem y disfrutar del resplandor de la Shekhinah. Ese placer pertenece plenamente al Olam Haba, pero la devekut lo anticipa en este mundo como destello. No lo sustituye, no lo posee, no lo fuerza. Lo deja entrever. El alma adherida a HaShem prueba algo de su destino.",
            "La adherencia no borra al alma: la revela. El yo que se vacía de yeshut no desaparece, sino que encuentra su forma verdadera. La persona deja de vivir como centro aislado y empieza a vivir como canal. Su individualidad ya no compite con HaShem, sino que sirve a la misión para la que fue creada.",
            "Este es el sentido de Derej HaAvodah: preparar al alumno para que la práctica qabalística no sea técnica sin alma. La Qabalah exige conocimiento, pero también exige carácter. Exige lenguaje espiritual, pero también honestidad. Exige comprensión de los mundos superiores, pero también cuidado con la palabra, con el deseo, con el dinero, con el juicio, con el modo de tratar al otro.",
            "La emunah como base de la conciencia, la bechirah como responsabilidad real, la disolución de la yeshut, el movimiento correcto de dar y recibir, la dignidad de lo ganado con esfuerzo, la kavanah como raíz de todo acto, la teshuvah como retorno constante, la tzedakah como apertura del canal y la devekut como horizonte no son conceptos separados. Son facetas de una única disposición interior.",
            "Solo desde esa disposición puede comenzar el Tikun HaNefesh. Porque la rectificación del alma no empieza cuando el practicante descubre sus defectos, sino cuando ya ha aceptado que toda su vida es el campo donde esos defectos se revelan para ser corregidos. La providencia le muestra el material. La emunah le permite sostenerse. La bechirah le recuerda que debe elegir. El trabajo sobre la yeshut le muestra qué bloquea el canal. La kavanah dirige el acto. La teshuvah lo devuelve. La tzedakah abre la mano. La devekut le enseña hacia dónde va."
          ]
        }
      ]
    }
  },
  {
    id: "tikun-hanefesh",
    parentId: null,
    level: 1,
    mainNumber: 9,
    title: { en: "Tikun HaNefesh", es: "Tikun HaNefesh" },
    hebrew: "תיקון הנפש",
    subtitle: { en: "Rectification of the Soul", es: "Rectificación del alma" },
    sections: {
      en: [
        {
          heading: { en: "The Rectification of the Soul and the Preparation of the Vessel", es: "La rectificación del alma y la preparación del recipiente" },
          paragraphs: [
            "All spiritual work begins with an honest question: in what state is the soul? The tradition calls the rectification of the soul Tikun haNefesh. It does not conceive it as perfection toward an abstract ideal, but as the effort to align each layer of consciousness with its higher root. The soul descends into the world with a precise charge. The path consists in fulfilling it.",
            "Nefesh, the dimension of the soul closest to the body, is the first territory of this work. Every thought, emotion, and act leaves a trace in its structure. When those expressions arise from the yetzer hara, pride, anger, attachment, and the desire to dominate, they generate opacity in the soul. That opacity forms veils that obstruct the flow of Ohr, the divine light that descends from above. Tikun, in its most concrete sense, is the work of lifting those veils.",
            "The practitioner observes his own reactions, identifies the roots of the states that separate the soul from its source, quick judgment, attachment to results, desire for recognition, and redirects them with discipline toward a more refined expression. Each middah has its elevated pole and its fallen pole. Tikun works on that axis: it converts what obstructs into what serves.",
            "The rectification of the soul is also a restoration of inner order. Dispersion yields to center; confusion, to clarity. The rectified soul is not one that has reached perfection, a condition foreign to earthly time, but one that bears the marks of honest and continuous effort. It listens more and judges less. It reacts less and responds with greater presence. It relates to others from compassion and to the Creator from humility.",
            "The Kli, the inner vessel, is the central concept of this process. The light of the Creator flows without interruption, with inexhaustible force, from Ein Sof downward, through the worlds and the Sefirot. Its reception depends on the state of the vessel. An unprepared vessel does not contain the light that arrives: it overflows it, distorts it, or receives from it a correction that the practitioner feels as pressure, tension, or confusion. What the soul experiences as discomfort on the spiritual path is often the effect of that friction between a light that descends and a vessel that does not yet have the capacity to house it.",
            "The expansion of the Kli is the aim of all inner practice. Refinement of character, study, tefilah with intention, and every act of honest self-correction produce that expansion. A narrow Kli receives little light and retains it. A worked Kli can receive more and, instead of retaining, transmits. The axis changes: from the desire to receive for oneself to the desire to receive for the purpose of giving. Qabalah calls this transformation the rectification of ratzon, desire.",
            "Desire is neither cancelled nor repressed. It is reconfigured. The human being who learns to receive with the intention of sharing turns his own life into a channel of blessing. The abundance that flows through that channel does not stop in him: it passes through him and reaches others. This is the dynamic of shefa, the divine flow of fullness. It depends on the permeability of the vessel, and that permeability is built step by step, from within.",
            "Whoever begins this path without a solid inner structure runs a real risk. Qabalah does not ask the practitioner to empty himself before he has something from which to empty himself. Emptying is the act of a being who already has consistency, who has already developed a stable personality and a clear sense of personal responsibility. Whoever empties himself from weakness does not create space for the light: he creates disorder. The first stretch of the qabalistic path is work on character, avodat ha-middot, which builds the vessel from its most basic materials. With this warning given, the path can begin."
          ]
        }
      ],
      es: [
        {
          heading: { en: "The Rectification of the Soul and the Preparation of the Vessel", es: "La rectificación del alma y la preparación del recipiente" },
          paragraphs: [
            "Todo trabajo espiritual comienza con una pregunta honesta: ¿en qué estado se encuentra el alma? La tradición llama Tikun haNefesh a la rectificación del alma. No la concibe como un perfeccionamiento hacia un ideal abstracto, sino como el esfuerzo de alinear cada capa de la conciencia con su raíz superior. El alma desciende al mundo con un encargo preciso. El camino consiste en cumplirlo.",
            "La Nefesh, la dimensión del alma más cercana al cuerpo, es el primer territorio de este trabajo. Cada pensamiento, emoción y acto deja una huella en su estructura. Cuando esas expresiones brotan del yetzer hara, el orgullo, la ira, el apego, el deseo de dominar, generan opacidad en el alma. Esa opacidad forma velos que obstruyen el flujo del Ohr, la luz divina que desciende desde lo Alto. El Tikun es, en su sentido más concreto, el trabajo de levantar esos velos.",
            "El practicante observa sus propias reacciones, identifica las raíces de los estados que separan al alma de su fuente, el juicio rápido, el apego a los resultados, el deseo de reconocimiento, y los redirige con disciplina hacia una expresión más refinada. Cada middah tiene su polo elevado y su polo caído. El Tikun trabaja sobre ese eje: convierte lo que obstaculiza en lo que sirve.",
            "La rectificación del alma es también una restauración del orden interno. La dispersión cede al centro; la confusión, a la claridad. El alma rectificada no es la que ha alcanzado perfección, condición ajena al tiempo terrenal, sino la que lleva las marcas de un esfuerzo honesto y continuo. Escucha más y juzga menos. Reacciona menos y responde con más presencia. Se relaciona con los demás desde la compasión y con el Creador desde la humildad.",
            "El Kli, la vasija interior, es el concepto central de este proceso. La luz del Creador fluye sin interrupción, con fuerza inagotable, desde Ein Sof hacia abajo, a través de los mundos y las Sefirot. Su recepción depende del estado del recipiente. Una vasija sin preparar no contiene la luz que llega: la desborda, la distorsiona, o recibe de ella una corrección que el practicante siente como presión, tensión o confusión. Lo que el alma experimenta como incomodidad en el camino espiritual es, con frecuencia, el efecto de esa fricción entre una luz que desciende y un recipiente que aún no tiene capacidad para alojarla.",
            "La ampliación del Kli es el objetivo de toda la práctica interior. El refinamiento del carácter, el estudio, la tefilah con intención y cada acto de autocorrección honesta producen esa ampliación. Un Kli estrecho recibe poca luz y la retiene. Un Kli trabajado puede recibir más y, en lugar de retener, transmite. El eje cambia: del deseo de recibir para uno mismo al deseo de recibir con el propósito de dar. La Qabalah llama a esta transformación la rectificación del ratzon, el deseo.",
            "El deseo no se cancela ni se reprime. Se reconfigura. El ser humano que aprende a recibir con la intención de compartir convierte su propia vida en un canal de bendición. La abundancia que fluye por ese canal no se detiene en él: lo atraviesa y llega a los demás. Esta es la dinámica del shefa, el flujo divino de plenitud. Depende de la permeabilidad del recipiente, y esa permeabilidad se construye paso a paso, desde dentro.",
            "Quien inicia este camino sin una estructura interior sólida corre un riesgo real. La Qabalah no pide que el practicante se vacíe antes de tener algo desde lo que vaciarse. El vaciamiento es el acto de un ser que ya tiene consistencia, que ya ha desarrollado una personalidad estable y un sentido claro de responsabilidad personal. Quien se vacía desde la debilidad no crea espacio para la luz: crea desorden. El primer tramo del camino qabalístico es el trabajo sobre el carácter, la avodat ha-middot, que construye el recipiente desde sus materiales más básicos. Hecha esta advertencia, el camino puede comenzar."
          ]
        }
      ]
    }
  },
  {
    id: "tikun-beritot",
    parentId: "tikun-hanefesh",
    level: 2,
    mainNumber: 9.1,
    title: { en: "Beritot", es: "Beritot" },
    subtitle: { en: "The Inner Governance of Body and Soul", es: "El gobierno interior del cuerpo y del alma" },
    sections: {
      en: [
        {
          paragraphs: [
            "The word berit means covenant. In the Hebrew tradition, a covenant is a formal commitment with real effects: it creates a relation, generates responsibility, and establishes an alliance with consequences. The qabalistic berit starts from this principle: it is the practitioner's commitment to each dimension of his being. Circumcision, the physical covenant par excellence, points beyond itself, toward the circumcision of the heart that the Torah itself requires. Each berit described below extends that principle to a different organ or dimension of the person.",
            "The theological foundation is concrete: the human being was created with a dual nature. He has inclinations that, when not governed, drag the soul toward fragmentation. The beritot build inner governance. Qabalah understands the name Israel, Yashar El, the one who goes straight toward God, as the description of one who has consolidated that governance: one who has passed from impulsive reflex to conscious act, from reactivity to response."
          ]
        },
        {
          heading: { en: "Berit of the Sexual Organ", es: "Berit del órgano sexual" },
          paragraphs: [
            "Sexual energy is the densest manifestation of the vital force of the soul. In qabalistic terminology, it is associated with Yesod, the Sefirah that concentrates and channels vitality toward Malkhut, the world of action. When that energy is spent in purely egocentric pleasure, the spiritual vessel loses potential. The berit of this organ consists in dedicating that force toward a higher end: conjugal union performed with intention of kedushah, holiness, which the tradition situates on Shabbat. Friday night is not an arbitrary moment: it coincides with the time of greatest flow of light from the higher worlds, and the conjugal act performed with elevated intention participates in that flow, creating an effect of peace and blessing in the world."
          ]
        },
        {
          heading: { en: "Berit of the Lips", es: "Berit de los labios" },
          paragraphs: [
            "The world was created through ten divine utterances. Words are the mechanism of creation, and those of the human being have the same active principle, though on another scale. Every word pronounced with intention is a sowing in the field of reality. Words of anger, defamation, empty flattery, or falsehood form negative structures in that field. Words of teaching, blessing, truth, and encouragement create structures that sustain.",
            "The voice corresponds to Yesod, and dibbur, speech as articulation, to Tiferet. When both are united in a word pronounced with pure intention, the word ascends. The practice of the berit of the lips is concrete: pronounce only what builds. When there is nothing constructive to say, silence is the highest word. For one who wants to work with divine Names and the techniques of yichud, discipline of the mouth is an inescapable prerequisite. Yichud consists in the meditative union of two divine Names by interlacing their letters; by uniting שדי with י-ה-ו-ה, the sequence ישהדויה is obtained, concentrating and directing intention toward a specific spiritual operation. That work requires already educated lips."
          ]
        },
        {
          heading: { en: "Berit of the Hands", es: "Berit de las manos" },
          paragraphs: [
            "The hands are the organ of the will, ratzon, in its physical expression. What the hand extends toward the world reveals the inner direction of the one who moves it. The Zohar teaches that the hands should be raised only to bless: extended in the priestly blessing, they show the palm, which corresponds to the soul, and not the back of the hand, which corresponds to the body. The handshake, physical contact with another human being, is an exchange of presence: for this reason consciousness about to whom one extends the hand and with what inner disposition forms part of the berit."
          ]
        },
        {
          heading: { en: "Berit of the Eyes", es: "Berit de los ojos" },
          paragraphs: [
            "Envy is one of the most destructive forces of character, and it enters through the eyes. The berit of the eyes is the work of looking without comparing, of seeing what the other has without turning it into the measure of one's own. The tradition teaches that the visible is only the surface of reality. Whoever learns to look in this way does not feed the ayin hara, the evil eye, either outwardly or inwardly."
          ]
        },
        {
          heading: { en: "Berit of the Ear", es: "Berit del oído" },
          paragraphs: [
            "Lashon hara, defamatory speech, exists only if there is someone to receive it. The berit of the ear is the commitment not to be that vessel. Defamation of an absent person, in halakhah and in the Zohar, is equivalent to a form of destruction of the other. Whoever listens becomes a participant. The practice is direct: withdraw from conversations that defame, and when withdrawal is not possible, do not respond or assent."
          ]
        },
        {
          heading: { en: "Berit of the Stomach", es: "Berit del estómago" },
          paragraphs: [
            "The body has its demands. Eating is the most constant of them, and its unreflective satisfaction keeps consciousness anchored in Malkhut of Asiyah, the densest level of existence. Fasting reverses that tendency: the body yields, and in that space the soul recovers presence. The tradition establishes voluntary fasts on specific days, from Sunday evening to Monday evening, and from Wednesday evening to Thursday evening, which coincide with days of deep Torah study. Shabbat is excluded: it is a day of oneg, delight, and no voluntary fast interrupts it. Kosher eating is not only a set of restrictions: it is the recognition that what enters the body affects the quality of the soul that inhabits it."
          ]
        },
        {
          heading: { en: "Berit of the Heart", es: "Berit del corazón" },
          paragraphs: [
            "The letters Lamed and Bet that form the word lev, heart, trace two movements in gematria and writing: one inward, one outward. The heart gives and receives, like systole and diastole. These two letters do not appear together by chance: the Bet opens Bereshit and the Lamed closes Israel. The entire Torah fits within the heart.",
            "The berit of the heart is fulfilled through study. The weekly parashah organizes the practitioner's inner time: each portion is read twice in Hebrew and once in translation, deepened on Monday and Thursday, and reviewed on Shabbat. Rashi, Ibn Ezra, and Nachmanides open layers that a continuous reading does not reach.",
            "The Zohar acts differently. The intellect registers only part of what that text does in the soul. For this reason it is fitting to read it in silence, when the world has grown quiet, without demanding total comprehension from it. The soul absorbs what the mind cannot articulate. Over time, the practitioner's character changes in ways those close to him perceive before he does."
          ]
        },
        {
          heading: { en: "Berit of the Inner Eyes", es: "Berit de los ojos interiores" },
          paragraphs: [
            "Shabbat is the covenant of time. Qabalah understands time as a spiral: each Shabbat returns to the same point of that spiral with a charge of light that the ordinary week does not contain. The practitioner who sets that day apart for study, tefilah, and meditation, leaving material concerns outside, accesses a quality of inner experience that the rest of the week cannot give."
          ]
        },
        {
          heading: { en: "Berit of the Soul", es: "Berit del alma" },
          paragraphs: [
            "Fear is the soul that has lost contact with its source. The berit of the soul consists in cleaning that concealment through meditation and sustained practice. Qabalistic meditation does not empty the mind: it directs it. The practitioner works with visualization of sacred letters, with focus on divine Names, with intention oriented toward a specific union in the system of the Sefirot. Inner silence is not the end; it is the condition from which the mind can operate with the tools transmitted by the tradition.",
            "Each divine Name opens a different door. The Shem Havayah, י-ה-ו-ה, corresponds to the structure of the worlds and to hashgachah, the providence that governs existence beyond the natural order. Elohim corresponds to that natural order: the tradition notes that its numerical value, 86, coincides with that of hateva, nature. Qabalistic work seeks to elevate consciousness from the automatic functioning of the plane of Elohim toward the plane that the Torah and conscious intention can open. This does not require ignoring the laws of the world or forcing them; it requires operating from their spiritual roots, with the necessary knowledge and a sufficiently built Kli so as not to confuse the levels.",
            "The warning is serious. Whoever works with divine Names before having built that Kli receives light he cannot contain. The result is not fullness but disorder. Prior knowledge is not optional; it is the condition of safety for everything that follows."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "La palabra berit significa pacto. En la tradición hebrea, un pacto es un compromiso formal con efectos reales: crea una relación, genera una responsabilidad y establece una alianza con consecuencias. El berit qabalístico parte de este principio: es el compromiso del practicante con cada dimensión de su ser. La circuncisión, el pacto físico por excelencia, apunta más allá de sí misma, hacia la circuncisión del corazón que la Torá misma exige. Cada berit que se describe a continuación extiende ese principio a un órgano o dimensión distinta de la persona.",
            "El fundamento teológico es concreto: el ser humano fue creado con una naturaleza dual. Tiene inclinaciones que, cuando no están gobernadas, arrastran al alma hacia la fragmentación. Los beritot construyen el gobierno interior. La Qabalah entiende el nombre Israel, Yashar El, el que va derecho hacia Dios, como la descripción de quien ha consolidado ese gobierno: quien ha pasado del reflejo impulsivo al acto consciente, de la reactividad a la respuesta."
          ]
        },
        {
          heading: { en: "Berit of the Sexual Organ", es: "Berit del órgano sexual" },
          paragraphs: [
            "La energía sexual es la manifestación más densa de la fuerza vital del alma. En la terminología qabalística, se asocia con Yesod, la Sefirah que concentra y canaliza la vitalidad hacia Malkhut, el mundo de la acción. Cuando esa energía se gasta en el gozo puramente egocéntrico, la vasija espiritual pierde potencial. El berit de este órgano consiste en la dedicación de esa fuerza hacia un fin más alto: la unión conyugal realizada con intención de kedushah, de santidad, que la tradición sitúa en Shabbat. El viernes por la noche no es un momento arbitrario: coincide con el tiempo de mayor flujo de luz desde los mundos superiores, y el acto conyugal realizado con intención elevada participa de ese flujo, creando un efecto de paz y bendición en el mundo."
          ]
        },
        {
          heading: { en: "Berit of the Lips", es: "Berit de los labios" },
          paragraphs: [
            "El mundo fue creado mediante diez pronunciaciones divinas. Las palabras son el mecanismo de la creación, y las del ser humano tienen el mismo principio activo, aunque a otra escala. Cada palabra pronunciada con intención es una siembra en el campo de la realidad. Las palabras de ira, de difamación, de lisonja vacía o de mentira forman estructuras negativas en ese campo. Las palabras de enseñanza, de bendición, de verdad y de aliento crean estructuras que sostienen.",
            "La voz corresponde a Yesod y el dibbur, el habla como articulación, a Tiferet. Cuando ambos se unen en una palabra pronunciada con intención pura, la palabra asciende. La práctica del berit de los labios es concreta: pronunciar solo lo que construye. Cuando no hay nada constructivo que decir, el silencio es la palabra más alta. Para quien quiere trabajar con los Nombres divinos y las técnicas del yichud, la disciplina de la boca es un prerrequisito ineludible. El yichud consiste en la unión meditativa de dos Nombres divinos entrelazando sus letras; al unir שדי con י-ה-ו-ה se obtiene la secuencia ישהדויה, que concentra y dirige la intención hacia una operación espiritual específica. Ese trabajo exige labios ya educados."
          ]
        },
        {
          heading: { en: "Berit of the Hands", es: "Berit de las manos" },
          paragraphs: [
            "Las manos son el órgano de la voluntad, ratzon, en su expresión física. Lo que la mano extiende hacia el mundo revela la dirección interna de quien la mueve. El Zohar enseña que las manos deben levantarse solo para bendecir: extendidas en la bendición sacerdotal, muestran la palma, que corresponde al alma, y no el dorso, que corresponde al cuerpo. El saludo de manos, el contacto físico con otro ser humano, es un intercambio de presencia: por eso la conciencia sobre a quién se extiende la mano y con qué disposición interior forma parte del berit."
          ]
        },
        {
          heading: { en: "Berit of the Eyes", es: "Berit de los ojos" },
          paragraphs: [
            "La envidia es una de las fuerzas más destructivas del carácter, y entra por los ojos. El berit de los ojos es el trabajo de mirar sin comparar, de ver lo que tiene el otro sin convertirlo en medida de lo propio. La tradición enseña que lo visible es solo la superficie de la realidad. Quien aprende a mirar así no alimenta el ayin hara, el ojo malo, ni hacia afuera ni hacia adentro."
          ]
        },
        {
          heading: { en: "Berit of the Ear", es: "Berit del oído" },
          paragraphs: [
            "El lashon hara, el habla difamatoria, solo existe si hay quien la reciba. El berit del oído es el compromiso de no ser ese recipiente. La difamación de un ausente, en la halakhah y en el Zohar, equivale a una forma de destrucción del otro. Quien la escucha se hace copartícipe. La práctica es directa: apartarse de conversaciones que difamen, y cuando no es posible apartarse, no responder ni asentir."
          ]
        },
        {
          heading: { en: "Berit of the Stomach", es: "Berit del estómago" },
          paragraphs: [
            "El cuerpo tiene sus demandas. Comer es la más constante de ellas, y su satisfacción irreflexiva mantiene la conciencia anclada en Malkhut de Asiyah, el nivel más denso de la existencia. El ayuno invierte esa tendencia: el cuerpo cede, y en ese espacio el alma recupera presencia. La tradición establece ayunos voluntarios en días específicos, desde el atardecer del domingo hasta el atardecer del lunes, y desde el atardecer del miércoles hasta el atardecer del jueves, que coinciden con los días de estudio profundo de la Torá. El Shabbat está excluido: es un día de oneg, de gozo, y ningún ayuno voluntario lo interrumpe. La alimentación kasher no es solo un conjunto de restricciones: es el reconocimiento de que lo que entra al cuerpo afecta la calidad del alma que lo habita."
          ]
        },
        {
          heading: { en: "Berit of the Heart", es: "Berit del corazón" },
          paragraphs: [
            "Las letras Lamed y Bet que forman la palabra lev, corazón, trazan dos movimientos en la gematria y la escritura: uno hacia dentro, otro hacia afuera. El corazón da y recibe, como la sístole y la diástole. Esas dos letras no aparecen juntas por azar: la Bet abre Bereshit y la Lamed cierra Israel. La Torá entera cabe en el corazón.",
            "El berit del corazón se cumple mediante el estudio. La parashah semanal organiza el tiempo interior del practicante: cada porción se lee dos veces en hebreo y una en traducción, se profundiza los lunes y jueves, y se repasa en Shabbat. Rashi, Ibn Ezra y Nachmanides abren capas que la lectura corrida no alcanza.",
            "El Zohar actúa de otra manera. El intelecto solo registra parte de lo que ese texto hace en el alma. Por eso conviene leerlo en silencio, cuando el mundo se ha aquietado, sin exigirle comprensión total. El alma absorbe lo que la mente no puede articular. Con el tiempo, el carácter del practicante cambia de modos que sus cercanos perciben antes que él."
          ]
        },
        {
          heading: { en: "Berit of the Inner Eyes", es: "Berit de los ojos interiores" },
          paragraphs: [
            "El Shabbat es el pacto del tiempo. La Qabalah entiende el tiempo como espiral: cada Shabbat regresa al mismo punto de esa espiral con una carga de luz que la semana ordinaria no contiene. El practicante que aparta ese día para el estudio, la tefilah y la meditación, dejando fuera las preocupaciones materiales, accede a una calidad de experiencia interior que el resto de la semana no puede dar."
          ]
        },
        {
          heading: { en: "Berit of the Soul", es: "Berit del alma" },
          paragraphs: [
            "El miedo es el alma que ha perdido contacto con su fuente. El berit del alma consiste en limpiar ese ocultamiento mediante meditación y práctica sostenida. La meditación qabalística no vacía la mente: la dirige. El practicante trabaja con la visualización de letras sagradas, con la focalización en Nombres divinos, con la intención orientada hacia una unión específica en el sistema de las Sefirot. El silencio interior no es el fin; es la condición desde la cual la mente puede operar con las herramientas que la tradición transmitió.",
            "Cada Nombre divino abre una puerta distinta. El Shem Havayah, י-ה-ו-ה, corresponde a la estructura de los mundos y a la hashgachah, la providencia que rige la existencia más allá del orden natural. Elohim corresponde a ese orden natural: la tradición señala que su valor numérico, 86, coincide con el de hateva, naturaleza. El trabajo qabalístico busca elevar la conciencia desde el funcionamiento automático del plano de Elohim hacia el plano que la Torá y la intención consciente pueden abrir. Esto no exige ignorar las leyes del mundo ni forzarlas; exige operar desde sus raíces espirituales, con el conocimiento necesario y el Kli suficientemente construido para no confundir los niveles.",
            "La advertencia es seria. Quien trabaja con Nombres divinos antes de haber construido ese Kli recibe luz que no puede contener. El resultado no es plenitud sino desorden. El conocimiento previo no es opcional; es la condición de seguridad de todo lo que sigue."
          ]
        }
      ]
    }
  },
  {
    id: "tikun-practica-nocturna",
    parentId: "tikun-hanefesh",
    level: 2,
    mainNumber: 9.2,
    title: { en: "Night Practice", es: "Práctica nocturna" },
    subtitle: { en: "The Inner Architecture of Consciousness", es: "La arquitectura interior de la conciencia" },
    sections: {
      en: [
        {
          paragraphs: [
            "Before sleep, the practitioner recites Ribono shel olam, the formula that halakhah includes in Kriat Shema al haMitah. In it, the soul forgives those who caused it harm during the day and asks that no one be punished on its account. This is not declarative piety: it is an act of mesirah that frees the soul from the bonds of resentment accumulated during waking. After forgiveness, the practitioner recites the Shema with full intention and entrusts the soul to the Creator. What the soul encounters in sleep is not the product of a technique of invocation but of surrender. The practitioner does not send his soul to seek anything: he entrusts it. What returns from that surrender is what the soul needs, not necessarily what the body wanted.",
            "The triad of Chokhmah, Binah, and Daat constitutes the cognitive structure of the soul and the scaffolding of every meditative practice. Understanding its functioning turns meditation into something more than subjective experience: it gives it direction and support.",
            "Chokhmah is the flash before thought. It is not built: it arrives. Binah receives that flash and develops it, deduces one thing from another, gives intuition a comprehensible body. Chokhmah is known only through Binah, which makes it fruitful. Daat unites the two and carries them into act. The Torah uses the verb yada, from the same root as Daat, to describe the most intimate union between two people, because that knowledge requires total adhesion to what is known.",
            "The first words of the Torah open this map. Bereshit has the same numerical value as hitbonenut, meditation. Elohim is associated with Binah, the matrix that gives form to the creative impulse. Sefer Yetzirah reads Shamayim as shem maim, fire and water, the synthesis that corresponds to Daat, the bridge between worlds. The Torah, read with this key, is a manual of inner architecture.",
            "The seal of the map is in the letter Ayin. The difference between dati, religious, and daati, my knowledge, is that letter, whose value is seventy, the same as sod, secret. Ayin spelled out as עינ sums to one hundred and thirty, equivalent in gematria to Sinai and also to sulam, ladder. Moshe ascended by that ladder of one hundred and thirty, crossed the Ayin of seventy, and received the sod. The structure of the letter Alef shows the same: an upper Yod, a Vav in the center, and an inverted lower Yod. The world above, the world below, the human being in the middle, connector. For this reason the Name of Daat in the system of Atzilut is אהוה: the Yod of Keter lengthens into Vav, extending the connection downward.",
            "Qabalah recognizes in the human body three centers that correspond to three dimensions of the soul and to three functional Sefirot. The Moach, brain, corresponds to Neshamah and Binah. The Lev, heart, corresponds to Ruach and Tiferet. The Caved, liver, corresponds to Nefesh and Malkhut.",
            "This map is the terrain of meditation. The heart first receives emotion and sends that impulse to the brain. The mind takes it and, through visualization and directed intention, turns it into an act of consciousness that operates in reality. The liver houses the most instinctive passions, anger, pride, the desire to be honored, which Qabalah links through gematria with the seventy nations that represent the unrectified negative aspects of consciousness. When Tiferet governs Malkhut, the practitioner advances one concrete step in the Tikun of his inner structure.",
            "Caved also means heavy, and from that root derives kavod, honor. The liver is the place of the desire to receive honor for oneself, one of the most refined forms of the yetzer hara. The membrane that covers it is associated in the Zohar with an energy of concealment that weakens when the practitioner practices fasting, continence, and silence. Fasting on the days of study fulfills a double function: it is the berit of the stomach and cleansing of the Caved. In gematria, kavod sums to twenty-six, equal to י-ה-ו-ה. The rectified liver reveals the divine Name in the lowest dimension of the soul.",
            "The heart, Lev, is formed by Lamed and Bet. Lamed indicates movement outward, Bet movement inward. Those same letters open and close the Torah. To observe the world from the heart is the most direct way to participate in the movement the Torah describes: receiving in order to transmit, giving without calculation, elevating the sparks of light hidden in the densest part of creation.",
            "Daat is activated when meditation is externalized, when what was perceived in inner silence is vocalized, written, takes form. That step completes the circuit. The practitioner who leaves meditation without any concrete conclusion, without any gesture, word, or correction, has traveled only half the path.",
            "Practice: Cheshbon haNefesh. Upon waking, before the day claims attention, the practitioner may dedicate a few minutes to writing down what has remained in consciousness from sleep: impressions, unresolved tensions, states that ask for examination. Mesillat Yesharim and musar literature call this exercise cheshbon haNefesh, accounting of the soul. The writing is not read immediately: it is left to rest. Over time, the accumulated material reveals patterns that waking consciousness does not see. Those patterns are the map of personal Tikun."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Antes de dormir, el practicante recita el Ribono shel olam, fórmula que la halakhah incluye en el Kriat Shema al haMitah. En ella, el alma perdona a quienes le causaron daño durante el día y pide que nadie sea castigado por su causa. No es piedad declarativa: es un acto de mesirah que libera al alma de los vínculos de resentimiento acumulados en la vigilia. Después del perdón, el practicante recita el Shema con intención plena y entrega el alma al Creador. Lo que el alma encuentre en el sueño no es el producto de una técnica de invocación sino de una entrega. El practicante no envía a su alma a buscar nada: la confía. Lo que regresa de esa entrega es lo que el alma necesita, no necesariamente lo que el cuerpo quería.",
            "La triada de Jokhmah, Binah y Daat constituye la estructura cognitiva del alma y el andamiaje de toda práctica meditativa. Comprender su funcionamiento convierte la meditación en algo más que experiencia subjetiva: le da dirección y sostén.",
            "Jokhmah es el destello antes del pensamiento. No se construye: llega. Binah recibe ese destello y lo desarrolla, deduce una cosa de otra, da a la intuición cuerpo comprensible. Jokhmah solo se conoce a través de Binah, que la hace fecunda. Daat une las dos y las lleva al acto. La Torá usa el verbo yada, de la misma raíz que Daat, para describir la unión más íntima entre dos personas, porque ese conocimiento exige adherencia total a lo conocido.",
            "Las primeras palabras de la Torá abren este mapa. Bereshit tiene el mismo valor numérico que hitbonenut, meditación. Elohim se asocia con Binah, la matriz que da forma al impulso creativo. El Sefer Yetzirah lee Shamayim como shem maim, fuego y agua, síntesis que corresponde a Daat, el puente entre mundos. La Torá, leída con esta llave, es un manual de arquitectura interior.",
            "El sello del mapa está en la letra Ayin. La diferencia entre dati, religioso, y daati, mi conocimiento, es esa letra, cuyo valor es setenta, el mismo que sod, secreto. La Ayin deletreada como עינ suma ciento treinta, equivalente en gematria a Sinai y también a sulam, escalera. Moshe ascendió por esa escalera de ciento treinta, cruzó la Ayin de setenta y recibió el sod. La estructura de la letra Alef muestra lo mismo: una Yod superior, una Vav en el centro, una Yod inferior invertida. Mundo de arriba, mundo de abajo, el ser humano en el medio, conector. Por eso el Nombre de Daat en el sistema de Atzilut es אהוה: la Yod de Keter se alarga en Vav, extendiendo la conexión hacia abajo.",
            "La Qabalah reconoce en el cuerpo humano tres centros que corresponden a tres dimensiones del alma y a tres Sefirot funcionales. El Moach, cerebro, corresponde a la Neshamah y a Binah. El Lev, corazón, corresponde al Ruach y a Tiferet. El Caved, hígado, corresponde a la Nefesh y a Malkhut.",
            "Este mapa es el terreno de la meditación. El corazón recibe primero la emoción y envía ese impulso al cerebro. La mente lo toma y, mediante la visualización y la intención dirigida, lo convierte en un acto de conciencia que opera en la realidad. El hígado aloja las pasiones más instintivas, la ira, el orgullo, el deseo de ser honrado, que la Qabalah vincula, por gematria, con las setenta naciones que representan los aspectos negativos no rectificados de la conciencia. Cuando Tiferet gobierna Malkhut, el practicante avanza un paso concreto en el Tikun de su estructura interior.",
            "Caved significa también pesado, y de esa raíz deriva kavod, honor. El hígado es el lugar del deseo de recibir honor para uno mismo, una de las formas más refinadas del yetzer hara. La membrana que lo recubre se asocia en el Zohar con una energía de ocultamiento que se debilita cuando el practicante practica ayuno, continencia y silencio. El ayuno en los días de estudio cumple una función doble: es berit del estómago y limpieza del Caved. En gematria, kavod suma veintiséis, igual que י-ה-ו-ה. El hígado rectificado revela el Nombre divino en la dimensión más baja del alma.",
            "El corazón, Lev, está formado por Lamed y Bet. La Lamed indica movimiento hacia afuera, la Bet movimiento hacia adentro. Esas mismas letras abren y cierran la Torá. Observar el mundo desde el corazón es la forma más directa de participar en el movimiento que la Torá describe: recibir para transmitir, dar sin cálculo, elevar las chispas de luz ocultas en la parte más densa de la creación.",
            "Daat se activa cuando la meditación se externaliza, cuando lo percibido en el silencio interior se vocaliza, se escribe, toma forma. Ese paso completa el circuito. El practicante que sale de la meditación sin ninguna conclusión concreta, sin ningún gesto, ninguna palabra, ninguna corrección, ha recorrido la mitad del camino.",
            "Práctica: Cheshbon haNefesh. Al despertar, antes de que el día reclame la atención, el practicante puede dedicar unos minutos a registrar por escrito lo que ha quedado en la conciencia desde el sueño: impresiones, tensiones no resueltas, estados que piden examen. El Mesillat Yesharim y la literatura musar llaman a este ejercicio cheshbon haNefesh, cuenta del alma. El escrito no se lee de inmediato: se deja reposar. Con el tiempo, el material acumulado revela patrones que la conciencia diurna no ve. Esos patrones son el mapa del Tikun personal."
          ]
        }
      ]
    }
  },
  {
    id: "tikun-perdon-amor",
    parentId: "tikun-hanefesh",
    level: 2,
    mainNumber: 9.3,
    title: { en: "Forgiveness and Love", es: "Perdón y amor" },
    subtitle: { en: "Humility and the Opening of the Channel", es: "Humildad y apertura del canal" },
    sections: {
      en: [
        {
          paragraphs: [
            "The forgiveness described by the tradition is not a gesture of magnanimity by the one who forgives over the one who wounded. Qabalistic forgiveness begins from a precise understanding: every encounter, including painful ones, is governed by hashgachah pratit, particular divine providence. The encounter that wounds, that provokes, forms part of the fabric of personal Tikun. This does not cancel responsibility: bechirah, free will, is a principle of faith in Judaism, and denying it would empty all ethics and all inner work of meaning. Spiritual and circumstantial influences incline; they do not determine. The human being chooses, and because he chooses he can correct. Forgiving frees the one who forgives from resentment, a form of bondage to the past that arrests the movement of the soul.",
            "Forgiving implies assuming one's own part in what occurred. Whoever observes his reactions honestly discovers that what affects him in the other often illuminates something in himself that remains unworked. The traits that irritate, the attitudes that provoke rejection, the behaviors that generate indignation: frequently they are the mirror of something of one's own that the soul recognizes without wanting to recognize it. This does not blame the wounded person for the damage received. Each encounter can become an instrument of self-knowledge, if the practitioner looks at it with that disposition.",
            "The tradition teaches that most of the souls that appear in a person's life share with him a common shoresh neshamah, root of soul. They meet because they have a shared Tikun. Peace with the other is also a form of peace with oneself. When Moshe sees the burning bush, HaShem reveals Himself with the Name Ehyeh Asher Ehyeh, whose numerical value is five hundred and forty-three, the same value as Moshe, three hundred and forty-five, read in reverse. The teacher and the mirror are the same number from opposite directions. What the practitioner sees in the other is what he has not yet seen in himself.",
            "In Hebrew, ahavah, love, sums to thirteen. Echad, one, has the same value. The qabalists read in this coincidence an experiential identity: to love is to perceive the unity that apparent separation conceals. The entire Tree of Life lives in that equation. The Alef points to Keter; the Chet leads from Chokhmah to Yesod; the Dalet closes in Malkhut. The letter Vav, whose extended value, Vav-Alef-Vav, also sums to thirteen, connects the higher worlds with the lower ones, Binah with Malkhut. Love traverses the Tree from above to below. It is the Vav of the soul.",
            "The love Qabalah describes does not wait for response. Whoever loves because the other produces well-being in him has placed his inner state in another's hands. Qabalistic love is born from the center outward, without needing confirmation. This includes those who caused harm. To understand that this harm cleaned something of one's own Tikun, though in the other it left a spiritual debt that he must resolve, allows one to sustain that attitude without denying the harm or settling into resentment. All the work of the beritot described earlier rests here. Without love for oneself and for others, the covenants are hollow forms. With it, they become a channel for the light.",
            "The opposite of love, in qabalistic vocabulary, is not hatred: it is pride. The Hebrew word for evil, ra, is the notarikon of ratzon atzmi, selfish desire. The proud person cannot be a channel because he is occupied with being the destination: everything he receives stops in him. For this reason pride obstructs the flow of shefa more effectively than any other negative trait. The humble person, by contrast, knows that what he receives does not belong to him as a possession but as an entrusted charge: it is there so he may transmit it.",
            "Gratitude, hakarat hatov, keeps that consciousness open. To give thanks is not spiritual courtesy: it is to recognize that everything one has, including difficulties that are opportunities for Tikun, comes from a source that is not one's own effort. When that consciousness stabilizes, humility ceases to be an achievement and the channel remains open.",
            "Before any practice or meditation, the practitioner gives tzedakah. The Hebrew root connects tzedakah with tzedek, justice. The act cleans the channel between Yesod and Malkhut, the path through which blessing descends. An obstructed channel does not receive light, no matter how much intention the practitioner puts forth. Tzedakah is not a formula of exchange; no one gives in order to receive in direct proportion. One gives because giving is the nature of the soul that has begun to be rectified. And the conditions that this opening creates are what allow what is asked to arrive.",
            "The practitioner asks from consciousness of the abundance he already possesses, not from the feeling of lack. A request made from need as the dominant emotional state contracts the channel. The request that arises from trust in the divine flow, disposed to receive what the soul needs, which may differ from what the body wants, finds response."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "El perdón que describe la tradición no es un gesto de magnanimidad del que perdona sobre el que hirió. El perdón qabalístico parte de una comprensión precisa: cada encuentro, incluidos los dolorosos, está gobernado por la hashgachah pratit, la providencia divina particular. El encuentro que daña, que provoca, forma parte del entramado del Tikun personal. Esto no cancela la responsabilidad: la bechirah, el libre albedrío, es un principio de fe en el judaísmo, y negarlo vaciaría de sentido toda la ética y todo el trabajo interior. Las influencias espirituales y circunstanciales inclinan, no determinan. El ser humano elige, y porque elige puede corregir. Perdonar libera al que perdona del resentimiento, una forma de encadenamiento al pasado que detiene el movimiento del alma.",
            "Perdonar implica asumir la propia parte en lo ocurrido. Quien observa sus reacciones con honestidad descubre que lo que le afecta del otro suele iluminar algo que en él mismo está sin trabajar. Los rasgos que irritan, las actitudes que provocan rechazo, los comportamientos que generan indignación: con frecuencia son el espejo de algo propio que el alma reconoce sin querer reconocerlo. Esto no culpa al dañado del daño recibido. Cada encuentro puede convertirse en un instrumento de autoconocimiento, si el practicante lo mira con esa disposición.",
            "La tradición enseña que la mayoría de las almas que aparecen en la vida de una persona comparten con ella una misma shoresh neshamah, una raíz de alma común. Se encuentran porque tienen un Tikun compartido. La paz con el otro es también una forma de paz con uno mismo. Cuando Moshe ve la zarza ardiente, HaShem se revela con el Nombre Ehyeh Asher Ehyeh, cuyo valor numérico es quinientos cuarenta y tres, el mismo valor que Moshe, trescientos cuarenta y cinco, leído al revés. El maestro y el espejo son el mismo número desde direcciones opuestas. Lo que el practicante ve en el otro es lo que todavía no ha visto en sí mismo.",
            "En hebreo, ahavah, amor, suma trece. Lo mismo vale echad, uno. Los qabalistas leen en esta coincidencia una identidad experiencial: amar es percibir la unidad que la separación aparente encubre. El Árbol de la Vida entero vive en esa ecuación. La Alef apunta a Keter; la Chet conduce de Jokhmah a Yesod; la Dalet cierra en Malkhut. La letra Vav, cuyo valor extendido, Vav-Alef-Vav, suma también trece, conecta los mundos superiores con los inferiores, Binah con Malkhut. El amor recorre el Árbol de arriba abajo. Es la Vav del alma.",
            "El amor que describe la Qabalah no aguarda respuesta. Quien ama porque el otro le produce bienestar ha puesto su estado interior en manos ajenas. El amor qabalístico nace del centro hacia afuera, sin necesitar confirmación. Esto incluye a quienes causaron daño. Comprender que ese daño limpió algo del propio Tikun, aunque en el otro haya dejado una deuda espiritual que a él le toca resolver, permite sostener esa actitud sin negar el daño ni instalarse en el resentimiento. Todo el trabajo de los beritot descrito antes se apoya aquí. Sin amor propio ni hacia los demás, los pactos son formas huecas. Con él, se convierten en canal para la luz.",
            "El opuesto del amor, en vocabulario qabalístico, no es el odio: es el orgullo. La palabra hebrea para mal, ra, es el notarikon de ratzon atzmi, el deseo egoísta. El orgulloso no puede ser canal porque se ocupa en ser destino: todo lo que recibe se detiene en él. Por eso el orgullo obstruye el flujo del shefa con más eficacia que cualquier otro rasgo negativo. El humilde, en cambio, sabe que lo que recibe no le pertenece como posesión sino como encargo: está ahí para que lo transmita.",
            "La gratitud, hakarat hatov, mantiene abierta esa conciencia. Agradecer no es cortesía espiritual: es reconocer que cuanto se tiene, incluidas las dificultades que son oportunidades de Tikun, viene de una fuente que no es el propio esfuerzo. Cuando esa conciencia se estabiliza, la humildad deja de ser un logro y el canal permanece abierto.",
            "Antes de cualquier práctica o meditación, el practicante hace tzedakah. La raíz hebrea conecta tzedakah con tzedek, justicia. El acto limpia el canal entre Yesod y Malkhut, el camino por el que la bendición desciende. Un canal obstruido no recibe luz por mucha intención que el practicante ponga. La tzedakah no es fórmula de intercambio; nadie da para recibir en proporción directa. Se da porque dar es la naturaleza del alma que ha comenzado a rectificarse. Y las condiciones que esa apertura crea son las que permiten que lo pedido pueda llegar.",
            "El practicante pide desde la conciencia de la abundancia que ya posee, no desde la sensación de carencia. La petición hecha desde la necesidad como estado emocional dominante contrae el canal. La que surge desde la confianza en el flujo divino, dispuesta a recibir lo que el alma necesita, que puede diferir de lo que el cuerpo quiere, encuentra respuesta."
          ]
        }
      ]
    }
  },
  {
    id: "tikun-zikuj",
    parentId: "tikun-hanefesh",
    level: 2,
    mainNumber: 9.4,
    title: { en: "Zikuj", es: "Zikuj" },
    subtitle: { en: "Spiritual Maturation and Tikun Olam", es: "Maduración espiritual y Tikun Olam" },
    sections: {
      en: [
        {
          paragraphs: [
            "Whoever has traveled through the four preceding sections has performed the most difficult work of the qabalistic path. He has built the Kli. He has established covenants with his bodily and soul dimensions. He has understood the higher faculties of the soul. He has worked forgiveness, love, and gratitude as concrete practices. All this is zikuj, refinement, even though the word appears here for the first time. Zikuj does not begin at this point: this point is where the practitioner can see what has already occurred.",
            "Refinement of the soul is what allows qabalistic work to function. When the practitioner reaches the meditations with the Kli expanded, the beritot active, and love and gratitude as a stable orientation, the seed he plants in Atzilut finds clean ground. The energy descends through the Sefirot and the worlds, from Atzilut to Beriah, from Beriah to Yetzirah, from Yetzirah to Asiyah, until it manifests in matter. The tradition speaks of forty days as the complete cycle of maturation of a spiritual seed planted with correct intention. It can be less when the channel was already prepared and only a Qlifah obstructed the passage, but rarely more than forty days if the work was done correctly.",
            "During that period, the practitioner does not insist. Returning to the request, checking whether it has already occurred, modifying the intention interrupts the process, like digging up the seed to see whether it has already sprouted. Qabalistic work has its own rhythm, which is the rhythm of the worlds through which the light descends.",
            "When the result does not arrive within the expected time, the work has not failed: it may be that the Tikun involved is deeper, that there are layers not yet worked, or that what is necessary differs from what was requested. Qabalah teaches one to receive what comes with the same disposition with which the request is made: from trust that the higher order knows better than limited consciousness what the soul requires.",
            "The practitioner also learns that qabalistic work is not for himself alone. Every act of inner purification, every expansion of the Kli, every sustained berit, every meditation performed with pure intention has effects beyond the one who practices it. The soul that rectifies itself improves the condition of all the souls that share its root and, through them, the condition of the world. Tikun Olam is not an external social project: it is the natural effect of enough souls having done the inner work with honesty.",
            "For this reason the qabalist sustains the practice when he does not see visible results. Those results are the surface of a process that operates on levels ordinary consciousness does not register. The tree grows downward before it grows upward: first the roots, invisible; then the trunk, the branches, the fruit. Inner work is the root system. What appears on the surface of life is the manifestation of what was already occurring in depth.",
            "Refinement of the soul has no endpoint. Each level of Tikun reached reveals the next. Each expansion of the Kli makes visible the narrowness that previously was not perceived. This is not a reason for discouragement: it signals that the soul has become more sensitive, capable of detecting imperfections that were formerly invisible to it. Whoever cultivates that sensitivity discovers that the whole of life, its relationships, circumstances, times, and difficulties, is the material of the work. There is not one place where Qabalah is practiced and another where one lives. The Kli and the world that contains it are a single system, and the refinement of the first transforms the second."
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "Quien ha recorrido las cuatro secciones anteriores ha realizado el trabajo más difícil del camino qabalístico. Ha construido el Kli. Ha establecido pactos con sus dimensiones corporales y anímicas. Ha comprendido las facultades superiores del alma. Ha trabajado el perdón, el amor y la gratitud como prácticas concretas. Todo eso es el zikuj, el refinamiento, aunque la palabra aparezca aquí por primera vez. El zikuj no comienza en este punto: este punto es donde el practicante puede ver lo que ya ocurrió.",
            "El refinamiento del alma es lo que permite que el trabajo qabalístico funcione. Cuando el practicante llega a las meditaciones con el Kli expandido, los beritot activos y el amor y la gratitud como orientación estable, la semilla que planta en Atzilut encuentra terreno limpio. La energía desciende a través de las Sefirot y los mundos, de Atzilut a Beriah, de Beriah a Yetzirah, de Yetzirah a Asiyah, hasta manifestarse en la materia. La tradición habla de cuarenta días como ciclo completo de maduración de una semilla espiritual plantada con intención correcta. Puede ser menos cuando el canal ya estaba preparado y solo una Qlifah obstruía el paso, pero raramente más de cuarenta días si el trabajo fue hecho correctamente.",
            "Durante ese período, el practicante no insiste. Volver a la petición, revisar si ya ocurrió, modificar la intención interrumpe el proceso, como desenterrar la semilla para ver si ya brotó. El trabajo qabalístico tiene su propio ritmo, que es el ritmo de los mundos a través de los cuales la luz desciende.",
            "Cuando el resultado no llega en el plazo esperado, el trabajo no ha fallado: puede ser que el Tikun involucrado sea más profundo, que haya capas sin trabajar, o que lo necesario sea distinto de lo pedido. La Qabalah enseña a recibir lo que viene con la misma disposición con que se hace la petición: desde la confianza en que el orden superior conoce mejor que la conciencia limitada lo que el alma requiere.",
            "El practicante aprende también que el trabajo qabalístico no es para sí mismo. Cada acto de purificación interior, cada expansión del Kli, cada berit sostenido, cada meditación realizada con intención pura tiene efectos más allá de quien los practica. El alma que se rectifica mejora la condición de todas las almas que comparten su raíz, y a través de ellas, la del mundo. El Tikun Olam no es un proyecto social externo: es el efecto natural de que suficientes almas hayan hecho el trabajo interior con honestidad.",
            "Por eso el qabalista sostiene la práctica cuando no ve resultados visibles. Esos resultados son la superficie de un proceso que opera en niveles que la conciencia ordinaria no registra. El árbol crece hacia abajo antes de crecer hacia arriba: primero las raíces, invisibles; luego el tronco, las ramas, el fruto. El trabajo interior es el sistema de raíces. Lo que aparece en la superficie de la vida es la manifestación de lo que ya ocurría en la profundidad.",
            "El refinamiento del alma no tiene término. Cada nivel de Tikun alcanzado revela el siguiente. Cada expansión del Kli hace visible la estrechez que antes no se percibía. Eso no es motivo de desaliento: señala que el alma se ha vuelto más sensible, capaz de detectar imperfecciones que antes le eran invisibles. Quien cultiva esa sensibilidad descubre que la vida entera, sus relaciones, sus circunstancias, sus tiempos y sus dificultades, es el material del trabajo. No hay un lugar donde se practica la Qabalah y otro donde se vive. El Kli y el mundo que lo contiene son un solo sistema, y el refinamiento del primero transforma al segundo."
          ]
        }
      ]
    }
  },
  {
    id: "epilogue",
    parentId: null,
    level: 1,
    mainNumber: 10,
    title: { en: "Epilogue", es: "Epílogo" },
    sections: {
      en: [
        {
          paragraphs: [
            "Qabalah is a tradition of reception. Its name says it: leqabel, to receive. What is received is not information but an orientation that transforms the one who sustains it. Whoever has absorbed this book does not remember more concepts than one who merely read it: he walks in a different direction, pays attention in another way, forms bonds with another texture. Consciousness of Ein Sof either operates as the real background of everyday experience, or remains a well-formulated idea. There is no middle ground.",
            "The Ari taught that each soul descends carrying its specific portion of Tikun. No one can identify it from outside or calculate it in advance. It is revealed through one's own life: in the bonds that form and break, in the resistances that reappear, in the moments when light enters without anyone seeking it. The map serves to recognize the terrain when one is inside it. Without the map, experience is a labyrinth. With it, the labyrinth has a logic, and that logic can become a path.",
            "The Sefirot describe how consciousness operates when it aligns with its source. When someone acts from Chesed without attributing to himself the merit of what he gives, when he exercises Gevurah without confusing it with harshness, when temimut sustains his words from within, that scheme functions. The Tree of Life is inscribed in the structure of the soul. The work of the mequbal is to learn it from within.",
            "The seventy-two Names are keys, not in the sense of one who inserts an object into a lock and waits for the door to open by itself. They quiet the noise enough for the channel to open. The soul that approaches them without preparation finds them mute. The soul that has worked its beritot, refined its middot, and learned to pray with kavanah finds them alive. The Name responds to the vessel. If the vessel has no form, the Name finds nowhere to be deposited.",
            "Generations of souls recited these tefilot before the present reader existed. Each generation added its kavanah to the text, and those kavanot do not disappear: they are deposited in the words as heat is deposited in a stone that has been in the sun. To pray with those texts is to enter a chain that reaches Moshe, the patriarchs, and Adam. The channel that joins those extremes is made of souls that prayed with intention and left something of themselves in the words.",
            "The Tikun of the individual and the Tikun of the cosmos are the same process seen at two scales. The nitzotzot that a soul rescues from the Qlifot through its inner work affect the whole. The tree grows downward before it grows upward: first the roots, invisible, then the fruit. What occurs in the depth of a human life has consequences that no external observer can register, but that the system of the worlds receives and accumulates.",
            "This does not turn the practitioner into the protagonist of a cosmic drama that exceeds him. It places him in his precise place: a necessary piece within a process that did not begin with him and will not end with him, but that requires his specific contribution. The shiflut that corresponds to Malkhut does not crush the soul but situates it. To be situated in the right place is the condition of every real action.",
            "The tradition does not promise a destination. It promises a process. Whoever walks it with honesty changes as he walks.",
            "May the study of these pages have prepared the vessel. May the vessel receive. May what it receives be transmitted.",
            "For the mitzvah is a lamp and the Torah is light.",
            "Proverbs 6:23"
          ]
        }
      ],
      es: [
        {
          paragraphs: [
            "La Qabalah es una tradición de recepción. Su nombre lo dice: leqabel, recibir. Lo que se recibe no es información sino una orientación que transforma al que la sostiene. Quien ha absorbido este libro no recuerda más conceptos que quien lo leyó: camina en una dirección distinta, presta atención de otra manera, forma vínculos con otra textura. La conciencia del Ein Sof opera como fondo real de la experiencia cotidiana, o sigue siendo una idea bien formulada. No hay término medio.",
            "El Ari enseñó que cada alma desciende portando su porción específica de Tikun. Nadie puede identificarla desde afuera ni calcularla de antemano. Se revela a través de la propia vida: en los vínculos que se forman y se rompen, en las resistencias que reaparecen, en los momentos en que la luz entra sin que nadie la buscara. El mapa sirve para reconocer el terreno cuando se está dentro de él. Sin el mapa, la experiencia es laberinto. Con él, el laberinto tiene una lógica, y esa lógica puede convertirse en camino.",
            "Las Sefirot describen cómo opera la conciencia cuando se alinea con su fuente. Cuando alguien actúa desde Chesed sin atribuirse el mérito de lo que da, cuando ejerce Gevurah sin confundirla con dureza, cuando la temimut sostiene sus palabras desde dentro, ese esquema funciona. El Árbol de la Vida está inscrito en la estructura del alma. El trabajo del mequbal es aprenderlo desde adentro.",
            "Los setenta y dos Nombres son llaves, no en el sentido de quien inserta un objeto en una cerradura y espera que la puerta se abra sola. Aquietan el ruido suficiente para que el canal se abra. El alma que los aborda sin preparación los encuentra mudos. El alma que ha trabajado sus beritot, refinado sus middot, aprendido a orar con kavanah, los encuentra vivos. El Nombre responde a la vasija. Si la vasija no tiene forma, el Nombre no encuentra dónde depositarse.",
            "Generaciones de almas recitaron estas tefilot antes de que el lector actual existiera. Cada generación añadió su kavanah al texto, y esas kavanot no desaparecen: se depositan en las palabras como el calor se deposita en la piedra que estuvo al sol. Orar con esos textos es entrar en una cadena que llega hasta Moshe, hasta los patriarcas, hasta Adam. El canal que une esos extremos está hecho de almas que oraron con intención y dejaron algo de sí mismas en las palabras.",
            "El Tikun del individuo y el Tikun del cosmos son el mismo proceso visto desde dos escalas. Las nitzotzot que un alma rescata de las Qlifot a través de su trabajo interior afectan la totalidad. El árbol crece hacia abajo antes de crecer hacia arriba: primero las raíces, invisibles, luego el fruto. Lo que ocurre en la profundidad de una vida humana tiene consecuencias que ningún observador externo puede registrar, pero que el sistema de los mundos recibe y acumula.",
            "Esto no convierte al practicante en protagonista de un drama cósmico que lo excede. Lo ubica en su lugar preciso: una pieza necesaria dentro de un proceso que no comenzó con él y no terminará con él, pero que requiere su contribución específica. La shiflut que corresponde a Malkhut no aplasta al alma sino que la ubica. Ser ubicado en el lugar correcto es la condición de toda acción real.",
            "La tradición no promete un destino. Promete un proceso. Quien lo recorre con honestidad va cambiando mientras camina.",
            "Que el estudio de estas páginas haya preparado la vasija. Que la vasija reciba. Que lo que reciba sea transmitido.",
            "Porque la mitzvah es lámpara y la Torá es luz.",
            "Proverbios 6:23"
          ]
        }
      ]
    }
  }
];
