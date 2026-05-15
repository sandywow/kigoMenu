/* ╔══════════════════════════════════════════════════════════════╗
   ║  MENU DATA — 菜單品項                                         ║
   ║  每個欄位設為 null 即不顯示，設為字串即顯示                      ║
   ╚══════════════════════════════════════════════════════════════╝ */
const menuData = {
  seasonal: [
    {
      name: "午後檸檬",
      nameJp: null,
      desc: "微酸剛好",
      price: "NT$100",
      tag: "限定",
      image: "src/670876.jpg",
      emoji: null
    },
  ],
  dessert: [
    {
      name: "香橙巴斯克蛋糕",
      nameJp: null,
      desc: "綿密乳酪融入橙香果蜜，清爽不膩，每一口都是乳酪控的天堂。",
      price: "NT$80",
      tag: null,
      image: null,
      emoji: null
    },
    {
      name: "莓果巴斯克蛋糕",
      nameJp: null,
      desc: "酸甜交織，這就是莓果的專屬小悸動吧！",
      price: "NT$100",
      tag: null,
      image: null,
      emoji: null
    },
    {
      name: "布朗尼想怎樣",
      nameJp: null,
      desc: "是雙層布朗尼！兩種口感一次滿足。",
      price: "NT$120",
      tag: null,
      image: null,
      emoji: null
    },
    {
      name: "淡烏龍芝士蛋糕",
      nameJp: null,
      desc: null,
      price: "NT$180",
      tag: null,
      image: null,
      emoji: null
    },
    {
      name: "重烏龍芝士蛋糕",
      nameJp: null,
      desc: "茶韻厚實，濃中戴清，喜歡茶的你一定要試試！",
      price: "NT$160",
      tag: null,
      image: null,
      emoji: null
    }
  ],
  coffee: [
    {
      name: "每日手沖",
      nameJp: null,
      desc: "單一產區，濾紙沖煮。每日更換豆款，歡迎詢問今日產地故事。",
      price: "NT$130",
      temp: "hot",
      image: null,
      emoji: "☕"
    },
    {
      name: "牛奶咖啡",
      nameJp: null,
      desc: "濃萃法壓咖啡與溫熱全脂牛奶等比相融，是清晨的安靜日常。",
      price: "NT$110",
      temp: "both",
      image: null,
      emoji: null
    },
    {
      name: "冷萃黑咖啡",
      nameJp: null,
      desc: "低溫浸泡十八小時，口感圓潤、酸值極低，深邃而清澈，附清透冰塊。",
      price: "NT$135",
      temp: "iced",
      image: null,
      emoji: null
    },
    {
      name: "拿鐵",
      nameJp: null,
      desc: null,
      price: "NT$120",
      temp: "both",
      image: null,
      emoji: null
    },
    {
      name: "可塔朵",
      nameJp: null,
      desc: "濃縮咖啡與溫牛奶等比相合，小杯、濃縮、誠實。",
      price: "NT$115",
      temp: "hot",
      image: null,
      emoji: null
    }
  ],
  tea: [
    {
      name: "散葉伯爵茶",
      nameJp: null,
      desc: "大吉嶺產區，佛手柑香氣鮮明。以小茶壺獨份沖泡，慢慢喝。",
      price: "NT$110",
      temp: "hot",
      image: null,
      emoji: "🫖"
    },
    {
      name: "玉露冷泡",
      nameJp: null,
      desc: "頂級日本玉露低溫冷泡八小時，鮮甜回甘，帶著沁涼的海苔氣息。",
      price: "NT$140",
      temp: "iced",
      image: null,
      emoji: null
    },
    {
      name: "焙茶拿鐵",
      nameJp: null,
      desc: "日式焙番茶與燕麥奶蒸製相融，撒上焙茶粉，大地般的溫暖香氣。",
      price: "NT$130",
      temp: "both",
      image: null,
      emoji: null
    },
    {
      name: "洋甘菊蜂蜜茶",
      nameJp: null,
      desc: null,
      price: "NT$110",
      temp: "hot",
      image: null,
      emoji: null
    },
    {
      name: "季節水果茶",
      nameJp: null,
      desc: "當日時令水果搭配洛神花與玫瑰果，冷泡後盛在透明冰杯中上桌。",
      price: "NT$120",
      temp: "iced",
      image: null,
      emoji: "🍒"
    }
  ],
  noncafe: [
    {
      name: "現打鮮果汁",
      nameJp: null,
      desc: "每日依時令選果，現點現榨，不加水不加糖。",
      price: "NT$120",
      temp: "iced",
      image: null,
      emoji: "🍊"
    },
    {
      name: "薑黃拿鐵",
      nameJp: null,
      desc: "薑黃、肉桂、黑胡椒與燕麥奶的溫暖組合，舒緩又飽足。",
      price: "NT$130",
      temp: "both",
      image: null,
      emoji: null
    },
    {
      name: "氣泡水果飲",
      nameJp: null,
      desc: null,
      price: "NT$110",
      temp: "iced",
      image: null,
      emoji: "🫧"
    }
  ]
};

/* ╔══════════════════════════════════════════════════════════════╗
   ║  LANDING PAGE CONFIG — 首頁設定                               ║
   ║  每個欄位設為 null 即隱藏，設為字串即顯示                        ║
   ╚══════════════════════════════════════════════════════════════╝ */
const landingData = {

  // ── 首頁 header ──
  cafeName:        "EnjoyKigo",
  cafeSub:         "享 · 奇果",
  showDate:        false,
  dateSeasonLabel: "Spring Menu",

  // ── 主視覺 Hero ──
  heroImage:    null,                       // 填圖片網址以取代插圖；null → 顯示預設插圖
  heroBadge:    "當季限定",
  heroTitle:    "草莓千層酥",
  heroSubtitle: "本週限定 · 每日限量",

  // ── 詩句區塊 ──
  tagline:   '"享受生活應該是進行式"',
  taglineJp: "𝐿𝑖𝑓𝑒 𝑖𝑠 𝑎𝑙𝑙 𝑎𝑏𝑜𝑢𝑡 ℎ𝑎𝑣𝑖𝑛𝑔 𝑎 𝑔𝑜𝑜𝑑 𝑡𝑖𝑚𝑒.",

  // ── 推薦卡 ──
  cardLabel:  "今日推薦",
  cardName:   "午後檸檬",
  cardNameJp: null,
  cardDesc:   "微酸剛好(⸝⸝¯ᵕ¯⸝⸝)🍋",
  cardPrice:  "NT$100",
  cardTag:    "限定",

  // ── 當季推薦 Banner ──
  // bannerImage 有值 → 顯示圖片
  // bannerImage null + bannerPlaceholder true  → 顯示灰色佔位框（提醒你還沒放圖）
  // bannerImage null + bannerPlaceholder false → 整區塊隱藏
  bannerLabel:       null,
  bannerImage:       null,                  // 填圖片網址顯示 banner
  bannerAlt:         "當季推薦海報",
  bannerPlaceholder: true,                  // true → 顯示佔位符 | false → 隱藏整區塊

  // ── CTA 按鈕 ──
  ctaButton: "今日菜單",
  ctaHint:   "瀏覽全品項",

  // ── 頁腳 ──
  footerLeft:  "— since 2023 —",
  footerRight: "每日 10:00–20:00",

  // ── 選單頁 header ──
  menuTitle:    "今日菜單",
  menuSubtitle: "Spring 2026",
};

/* ╔══════════════════════════════════════════════════════════════╗
   ║  TABS CONFIG — 分頁設定                                      ║
   ║  調整順序 = 換顯示位置；新增分頁 = 加一個 { } 物件             ║
   ╚══════════════════════════════════════════════════════════════╝ */
const tabs = [
  { key: 'seasonal', label: '當季' },
  { key: 'coffee',   label: '咖啡' },
  { key: 'tea',      label: '茶飲' },
  { key: 'noncafe',  label: '無咖啡因' },
  { key: 'dessert',  label: '甜點' },
  // 新增分頁範例：
  // { key: 'special', label: '特供' },
];

/* ╔══════════════════════════════════════════════════════════════╗
   ║  SECTION TITLES — 各分頁標題                                 ║
   ║  對應 tabs 裡的 key；en/jp 任一可設為 null 隱藏              ║
   ╚══════════════════════════════════════════════════════════════╝ */
const sectionTitles = {
  seasonal: { en: 'Seasonal Selections', jp: '季節推薦 · 本季限定' },
  coffee:   { en: 'Coffee',              jp: '咖啡 · 精品豆單品'   },
  tea:      { en: 'Tea',                 jp: '茶 · 世界茶葉精選'   },
  noncafe:  { en: 'Non-Caffeinated',     jp: '無咖啡因 · 輕鬆選擇' },
  dessert:  { en: 'Pâtisserie',          jp: '手作甜點 · 每日新鮮' },
  // 新增分頁在這裡加標題：
  // special: { en: "Chef's Special", jp: '主廚特選' },
};
