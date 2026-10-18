const guides = [
  {
    id: "first-portfolio", section: "career", categoryName: "Kasb va ko‘nikmalar", icon: "✦", time: "4 g‘oya",
    title: "Birinchi portfolio loyihangiz", description: "O‘rganganlaringizni ko‘rsatadigan kichik, amaliy loyiha bilan boshlang.",
    steps: ["Qiziqqan yo‘nalishingizni tanlang: dizayn, dasturlash, marketing yoki boshqa soha.", "Bir haftada tugatish mumkin bo‘lgan kichik loyiha o‘ylab toping.", "Ish jarayonini va nima o‘rganganingizni qisqacha yozib boring.", "Natijani GitHub, Behance yoki oddiy taqdimot orqali tartibli ko‘rsating."],
    source: "https://www.coursera.org/"
  },
  {
    id: "digital-skills", section: "career", categoryName: "Kasb va ko‘nikmalar", icon: "⌘", time: "5 g‘oya",
    title: "Raqamli ko‘nikmalar xaritasi", description: "Yangi kasb uchun kerakli raqamli ko‘nikmalarni bosqichma-bosqich rejalashtiring.",
    steps: ["Sizga qiziq bo‘lgan 2–3 ta kasb tavsifini o‘qing.", "Ularda takrorlanadigan ko‘nikmalarni alohida yozib chiqing.", "Bitta boshlang‘ich ko‘nikmani tanlab, bepul dars yoki qo‘llanma toping.", "Haftasiga bir necha qisqa mashg‘ulot uchun vaqt belgilang.", "O‘rganganingizni kichik amaliy topshiriqda qo‘llang."],
    source: "https://it-park.uz/"
  },
  {
    id: "learn-language", section: "career", categoryName: "Kasb va ko‘nikmalar", icon: "文", time: "4 g‘oya",
    title: "Til o‘rganishni odatga aylantirish", description: "Band kunlarda ham davom ettirish mumkin bo‘lgan sodda o‘quv rejasini tuzing.",
    steps: ["Tilni nima uchun o‘rganayotganingizni aniqlab, yaqin maqsad belgilang.", "Har kuni bir xil vaqtda 15 daqiqalik mashg‘ulot rejalashtiring.", "Tinglash, o‘qish va gapirishni hafta davomida navbatlab mashq qiling.", "Hafta oxirida o‘rgangan yangi so‘zlaringizni qayta ko‘rib chiqing."],
    source: "https://www.britishcouncil.org/english"
  },
  {
    id: "career-change", section: "career", categoryName: "Kasb va ko‘nikmalar", icon: "↗", time: "4 g‘oya",
    title: "Kasb yo‘nalishini tanlash", description: "Qiziqish, kuchli tomon va mehnat bozori haqidagi ma’lumotlarni birga baholang.",
    steps: ["Sizga yoqadigan mashg‘ulot va yaxshi uddalaydigan ishlarni yozing.", "Qiziqqan kasblar bo‘yicha kundalik vazifalar va talablarni o‘rganing.", "Shu sohada ishlaydigan inson bilan suhbatlashib, savollaringizni bering.", "Kichik kurs, ko‘ngilli loyiha yoki amaliy topshiriq bilan yo‘nalishni sinab ko‘ring."],
    source: "https://hh.uz/"
  },
  {
    id: "samarkand-weekend", section: "travel", categoryName: "Samarqand viloyati", searchTerms: "registon shohi zinda gur amir afrosiyob samarkand", icon: "⌂", time: "4 g‘oya",
    title: "Samarqand", description: "Registon, Shohi Zinda va qadimiy shahar manzaralarini tomosha qiling.",
    steps: ["Ko‘rmoqchi bo‘lgan maskanlarni xaritada belgilab, bir-biriga yaqinlarini guruhlang.", "Ish vaqti, chipta hamda tashrif qoidalarini safardan oldin tekshiring.", "Shahar ichidagi yo‘l va ovqatlanish uchun tanaffuslarni rejalashtiring.", "Qulay poyabzal, suv va ob-havoga mos kiyim tayyorlang."],
    source: "https://uzbekistan.travel/"
  },
  {
    id: "mountain-walk", section: "travel", categoryName: "Toshkent viloyati", searchTerms: "chimyon chimgan charvak tog tog‘lar toglar tabiat", icon: "△", time: "5 g‘oya",
    title: "Chimyon va Chorvoq", description: "Tog‘ manzaralari va Chorvoq bo‘yida hordiq uchun sayohat rejasini tuzing.",
    steps: ["O‘z tajribangiz va jismoniy tayyorgarligingizga mos, belgilangan yo‘nalishni tanlang.", "Ob-havo ma’lumotini ko‘rib, borish-qaytish vaqtini yaqinlaringizga ayting.", "Suv, yengil yegulik, qatlamli kiyim va zaryadlangan telefon oling.", "Yolg‘iz, belgisiz so‘qmoqqa chiqmang; mahalliy yo‘riqchi tavsiyalariga amal qiling.", "Sharoit yomonlashsa, rejani o‘zgartirib xavfsiz joyga qayting."],
    source: "https://uzbekistan.travel/"
  },
  {
    id: "bukhara-stroll", section: "travel", categoryName: "Buxoro viloyati", searchTerms: "buxoro ark labihovuz poi kalon eski shahar", icon: "⌖", time: "4 g‘oya",
    title: "Buxoro", description: "Eski shahar, Ark qal’asi va tarixiy majmualarni piyoda kashf eting.",
    steps: ["Safar sanasiga mos ochiq maskanlar ro‘yxati va ish vaqtini aniqlang.", "Yo‘nalishni xaritada tuzib, soyada dam olish uchun tanaffus kiriting.", "Mahalliy muzey yoki hunarmandchilik ustaxonasiga tashrifni rejalashtiring.", "Mahalliy urf-odat va ibodat joylaridagi kiyinish qoidalarini hurmat qiling."],
    source: "https://uzbekistan.travel/"
  },
  {
    id: "khiva", section: "travel", categoryName: "Xorazm viloyati", searchTerms: "xiva ichan qal’a ichanqala xorazm khiva", icon: "⇄", time: "4 g‘oya",
    title: "Xiva va Ichan qal’a", description: "Xorazm me’morchiligi va Ichan qal’aning qadimiy ko‘chalarini ko‘ring.",
    steps: ["Ichan qal’a va boshqa ko‘rmoqchi bo‘lgan joylaringizni safar rejasiga kiriting.", "Maskanlarning ish vaqti va tashrif qoidalarini oldindan tekshiring.", "Xivaga borish uchun poyezd yoki boshqa transport jadvalini rasmiy manbadan ko‘ring.", "Qulay poyabzal, suv va ob-havoga mos kiyim tayyorlang."],
    source: "https://uzbekistan.travel/"
  },
  {
    id: "tashkent-city", section: "travel", categoryName: "Toshkent shahri", searchTerms: "toshkent tashkent shahar metro muzey bog‘ park", icon: "⌖", time: "4 g‘oya",
    title: "Toshkent shahri", description: "Shahar bog‘lari, muzeylar va turli mahallalarni bir kunlik rejaga jamlang.",
    steps: ["Qiziqishingizga mos muzey, istirohat bog‘i yoki tarixiy maskanlarni tanlang.", "Manzillar orasida metro yoki piyoda borish yo‘lini xaritadan tekshiring.", "Tashrif soatlari va chipta shartlarini oldindan aniqlang.", "Kun davomida dam olish va ovqatlanish uchun tanaffus qoldiring."],
    source: "https://uzbekistan.travel/"
  },
  {
    id: "fergana-valley", section: "travel", categoryName: "Farg‘ona vodiysi", searchTerms: "farg‘ona fergana vodiysi marg‘ilon margilon qo‘qon kokand rishton", icon: "✿", time: "4 g‘oya",
    title: "Farg‘ona vodiysi", description: "Marg‘ilon, Qo‘qon va Rishtonning hunarmandchilik an’analarini kashf eting.",
    steps: ["Vodiyning qaysi shaharlari va hunarmandchilik maskanlariga borishni tanlang.", "Shaharlararo transport qatnovini safardan avval tekshiring.", "Ustaxona yoki muzeyga tashrif imkoniyati va ish vaqtini aniqlang.", "Mahalliy bozor va taomlarni tatib ko‘rishga vaqt ajrating."],
    source: "https://uzbekistan.travel/"
  },
  {
    id: "nukus-moynaq", section: "travel", categoryName: "Qoraqalpog‘iston", searchTerms: "nukus qoraqalpog‘iston qoraqalpogiston mo‘ynoq moynaq orol aral", icon: "◇", time: "4 g‘oya",
    title: "Nukus va Mo‘ynoq", description: "Qoraqalpog‘iston madaniyati va Orolbo‘yi tarixiga sayohat qiling.",
    steps: ["Nukusdagi muzey va ko‘rmoqchi bo‘lgan manzillaringizni belgilang.", "Mo‘ynoq tomon yo‘l, qatnov va qaytish imkoniyatlarini oldindan rejalang.", "Uzoq yo‘l uchun suv, yegulik va zarur buyumlarni tayyorlang.", "Mahalliy yo‘riq va tabiatni muhofaza qilish qoidalariga amal qiling."],
    source: "https://uzbekistan.travel/"
  },
  {
    id: "zaamin", section: "travel", categoryName: "Jizzax viloyati", searchTerms: "zaamin zomin jizzax jizzakh milliy bog‘ bog tabiat", icon: "△", time: "4 g‘oya",
    title: "Zomin milliy bog‘i", description: "Tog‘ havosi va tabiat qo‘ynida dam olish uchun Zomin yo‘nalishini o‘rganing.",
    steps: ["Borish sanasidagi ob-havo va yo‘l sharoitini tekshiring.", "Milliy bog‘ga kirish va tashrif qoidalarini rasmiy manbadan aniqlang.", "Qatlamli kiyim, suv va sayr uchun qulay oyoq kiyim oling.", "Belgilangan yo‘laklardan yuring va tabiatni toza saqlang."],
    source: "https://uzbekistan.travel/"
  },
  {
    id: "sleep-routine", section: "wellbeing", categoryName: "Sog‘lom turmush", icon: "☾", time: "4 g‘oya",
    title: "Uyqu tartibini yaxshilash", description: "Kechki odatlarni o‘zgartirib, muntazam uyqu jadvaliga yaqinlashing.",
    steps: ["Har kuni taxminan bir xil vaqtda yotish va uyg‘onishni sinab ko‘ring.", "Uxlashdan oldin sokin mashg‘ulot uchun vaqt ajrating.", "Yotoqxonani qulay, tinch va imkon qadar qorong‘i qiling.", "Uyqudagi qiyinchilik uzoq davom etsa, tibbiyot mutaxassisi bilan maslahat qiling."],
    source: "https://www.who.int/news-room/fact-sheets/detail/physical-activity"
  },
  {
    id: "daily-movement", section: "wellbeing", categoryName: "Sog‘lom turmush", icon: "↗", time: "4 g‘oya",
    title: "Kundalik harakatni ko‘paytirish", description: "Kun davomida tanani harakatga keltirish uchun o‘zingizga mos yo‘l toping.",
    steps: ["Hozirgi kundalik faolligingizni bir necha kun kuzating.", "Qulay bo‘lsa, qisqa piyoda yurish yoki yengil cho‘zilishdan boshlang.", "Uzoq o‘tiradigan paytda tanaffus qilib, biroz harakatlaning.", "O‘zingizga yoqadigan mashg‘ulotni tanlang va asta-sekin davomiyligini oshiring."],
    source: "https://www.who.int/news-room/fact-sheets/detail/physical-activity"
  },
  {
    id: "balanced-meals", section: "wellbeing", categoryName: "Sog‘lom turmush", icon: "✳", time: "4 g‘oya",
    title: "Muvozanatli ovqatlanishni rejalash", description: "Haftalik ovqatlanishda rang-barang mahsulotlar va qulay rejalashtirishni sinang.",
    steps: ["Hafta uchun oddiy taomlar ro‘yxatini tuzing.", "Imkon qadar turli sabzavot, meva, don va oqsil manbalarini tanlang.", "Ovqatlanish va suv ichish uchun kun davomida qulay vaqt belgilang.", "Maxsus parhez yoki salomatlik holati bo‘lsa, mutaxassis tavsiyasiga amal qiling."],
    source: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
  },
  {
    id: "calm-breaks", section: "wellbeing", categoryName: "Sog‘lom turmush", icon: "◌", time: "3 g‘oya",
    title: "Kun orasida xotirjam tanaffus", description: "Band kun ichida qisqa tanaffus va e’tiborni jamlash uchun joy yarating.",
    steps: ["Kuningizda qisqa tanaffus qilish mumkin bo‘lgan vaqtni tanlang.", "Ekrandan chetga qarab, sekin nafas olib, yelkalarni bo‘shashtiring.", "Tanaffusni suv ichish yoki qisqa sayr bilan birlashtiring.", "Uzoq davom etuvchi ruhiy qiyinchiliklarda ishonchli inson yoki mutaxassisdan yordam so‘rang."],
    source: "https://www.who.int/health-topics/mental-health"
  }
];

const searchInput = document.querySelector("#guide-search");
const emptyState = document.querySelector("#empty-state");
const travelSearchInput = document.querySelector("#travel-search-input");
const travelEmptyState = document.querySelector("#travel-empty");
const travelCount = document.querySelector("#travel-count");
const dialog = document.querySelector("#guide-dialog");
let searchTerm = "";
let travelSearchTerm = "";

function matchesSearch(guide, search = searchTerm) {
  const term = search.trim().toLocaleLowerCase("uz");
  const content = `${guide.title} ${guide.categoryName} ${guide.description} ${guide.searchTerms || ""} ${guide.steps.join(" ")}`.toLocaleLowerCase("uz");
  return !term || content.includes(term);
}

function renderGuides() {
  let visibleCount = 0;
  for (const section of ["career", "travel", "wellbeing"]) {
    const sectionSearch = section === "travel" && travelSearchTerm ? travelSearchTerm : searchTerm;
    const sectionGuides = guides.filter((guide) => guide.section === section && matchesSearch(guide, sectionSearch));
    const sectionGrid = document.querySelector(`#${section}-grid`);
    visibleCount += sectionGuides.length;
    sectionGrid.innerHTML = sectionGuides.map((guide) => `
      <article class="guide-card">
        <div class="guide-card-top"><span class="guide-icon" aria-hidden="true">${guide.icon}</span><span class="guide-category">${guide.categoryName}</span></div>
        <h3>${guide.title}</h3><p>${guide.description}</p>
        <div class="guide-card-bottom"><span class="guide-time">◷ &nbsp;${guide.time}</span><button class="guide-open" type="button" data-guide="${guide.id}" aria-label="${guide.title} haqida ko‘proq o‘qish">Batafsil →</button></div>
      </article>`).join("");
    if (section === "travel") {
      travelCount.textContent = String(sectionGuides.length).padStart(2, "0");
      travelEmptyState.hidden = sectionGuides.length > 0;
    }
  }
  emptyState.hidden = visibleCount > 0;
}

function openGuide(guideId) {
  const guide = guides.find((item) => item.id === guideId);
  if (!guide) return;
  document.querySelector("#dialog-category").textContent = guide.categoryName;
  document.querySelector("#dialog-title").textContent = guide.title;
  document.querySelector("#dialog-intro").textContent = guide.description;
  document.querySelector("#dialog-steps").replaceChildren(...guide.steps.map((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    return item;
  }));
  const sourceLink = document.querySelector("#dialog-source-link");
  sourceLink.href = guide.source;
  sourceLink.textContent = `${new URL(guide.source).hostname} saytiga o‘tish ↗`;
  dialog.showModal();
}

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value;
  renderGuides();
});
travelSearchInput.addEventListener("input", () => {
  travelSearchTerm = travelSearchInput.value;
  renderGuides();
});
document.querySelector("#travel-search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  travelSearchTerm = travelSearchInput.value;
  renderGuides();
  document.querySelector("#travel").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = searchInput.value;
  renderGuides();
  document.querySelector("#career").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelectorAll("[data-travel-search]").forEach((button) => {
  button.addEventListener("click", () => {
    travelSearchInput.value = button.dataset.travelSearch;
    travelSearchTerm = button.dataset.travelSearch;
    renderGuides();
    document.querySelector("#travel").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.search;
    searchTerm = button.dataset.search;
    renderGuides();
    document.querySelector("#career").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
document.querySelectorAll(".guide-grid").forEach((sectionGrid) => {
  sectionGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-guide]");
    if (button) openGuide(button.dataset.guide);
  });
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.querySelector(".dialog-print").addEventListener("click", () => window.print());

const chatMessages = document.querySelector("#chat-messages");
function addChatMessage(text, type) {
  const message = document.createElement("div");
  message.className = `chat-message ${type === "user" ? "user-message" : "assistant-message"}`;
  if (type === "assistant") {
    const avatar = document.createElement("span");
    avatar.className = "message-avatar";
    avatar.textContent = "y.";
    message.append(avatar);
  }
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  message.append(paragraph);
  chatMessages.append(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return message;
}

document.querySelector("#chat-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#chat-input");
  const question = input.value.trim();
  if (!question) return;
  addChatMessage(question, "user");
  input.value = "";
  const terms = question.toLocaleLowerCase("uz").split(/[^\p{L}\p{N}]+/u).filter((term) => term.length > 2);
  const matches = guides.map((guide) => {
    const searchable = `${guide.title} ${guide.categoryName} ${guide.description} ${guide.searchTerms || ""} ${guide.steps.join(" ")}`.toLocaleLowerCase("uz");
    const score = terms.reduce((sum, term) => sum + (searchable.includes(term) ? 1 : 0), 0);
    return { guide, score };
  }).filter((match) => match.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);
  if (!matches.length) {
    addChatMessage("Bu so‘zlar bilan mos mavzu topilmadi. “Kasb”, “Samarqand”, “sayohat”, “uyqu” yoki “ovqatlanish” kabi so‘zlar bilan qidirib ko‘ring.", "assistant");
    return;
  }
  const response = addChatMessage("Sizga qiziq bo‘lishi mumkin bo‘lgan mavzular:", "assistant");
  const links = document.createElement("div");
  links.className = "chat-links";
  matches.forEach(({ guide }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = guide.title;
    button.addEventListener("click", () => openGuide(guide.id));
    links.append(button);
  });
  response.append(links);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  mainNav.classList.toggle("is-open", isOpen);
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
document.querySelector("#current-year").textContent = String(new Date().getFullYear());
renderGuides();
