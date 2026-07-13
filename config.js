/*
═══════════════════════════════════════════════════════════════
  BEST BAKERY — DEMO CONFIG (Golden Master v7.2 tabanlı)
  İşletme: Best Bakery — Beste Özdemir (@bakerybest)
  İstanbul / Maltepe — Zümrütevler. Butik ev üretimi (menu: []).
  Düzen: formFirst:true → form üstte, pasta modelleri altta,
  en altta Cupcake'lerimiz (butonlar direkt WhatsApp'a gider).
  ⚠️ Deploy sonrası index.html'deki og:image REPO-ADI değiştirilecek!
═══════════════════════════════════════════════════════════════
*/
const CONFIG = {

/* ── BÖLÜM 1 — SIK GÜNCELLENEN ── */

  priceUpdated: "13.07.2026",

  announcement: "",
  vacationNote: "",
  vacationLock: false,

  siteDiscount: 0,
  paymentMethods: [],

  products: [
    { name: "Yıldız Doğum Günü Pastası", desc: "Gold inci detaylı vintage yıldız tasarım", img: "pasta1_1.jpg" },
    { name: "Vintage Kalp Pasta", desc: "Renkli yazılı, retro kalp tasarım", img: "pasta2_1.jpg" },
    { name: "Şampanya Temalı Pasta", desc: "Gold baloncuklu kutlama pastası", img: "pasta3_1.jpg" },
    { name: "Fiyonklu Butik Pasta", desc: "Siyah kurdele detaylı zarif tasarım", img: "pasta4_1.jpg" },
    { name: "Kelebekli Pasta", desc: "Lila kelebek ve inci detaylı", img: "pasta5_1.jpg" },
    { name: "Kurdeleli Kalp Detaylı Pasta", desc: "Simli, kırmızı kurdeleli özel tasarım", img: "pasta6.jpg" }
  ],

  cupcakes: [
    { name: "Kelebekli Cupcake Kutusu", desc: "Bento pasta + cupcake'lerden oluşan hediye kutusu", img: "cupcake1.jpg" },
    { name: "Temalı Cupcake Kutusu", desc: "Kişiye özel yazı ve temalı kutu", img: "cupcake2.jpg" }
  ],

  menuNote: "",
  menu: [],   // BUTİK MOD — sabit menü yok, menü bölümü ve sepet kapalı

  orderForm: {
    portions: ["2-4", "6-8", "10-12", "15-20"],
    weddingPortions: [],
    portionPrices: { "2-4": 1350, "6-8": 2200, "10-12": 2800, "15-20": 3800 },
    flavorExtras: { "Karamel": 450, "Antep Fıstığı Draje": 450 },
    flavorLimits: { "default": 2 },
    priceNote: "Modele göre fiyat değişebilir; GOLD/GÜMÜŞ yazılar +120 TL. Son fiyat WhatsApp'tan netleştirilir.",
    photoNote: "Aklınızdaki pastanın fotoğrafını sipariş sonrası WhatsApp üzerinden göndermeyi unutmayın!",
    rules: [
      "Siparişler en az 3 gün önceden oluşturulmalıdır.",
      "Ödemeler havale / EFT ile alınır; ödemenin tamamı ya da kapora sonrası siparişiniz kesinleşir.",
      "Kurye ile gönderimlerde kurye ücreti alıcıya aittir; teslimat sırasında oluşabilecek hasarlardan sorumluluk kabul edilmez.",
      "15-20 kişilik pastalarda ekstra malzeme ücretleri artabilir."
    ],
    minDaysAhead: 3,
    deliveryMethods: [
      { name: "Elden Teslim (Maltepe / Zümrütevler)" },
      { name: "Banabi Kurye ile Gönderim", address: true }
    ],
    deliveryTimeRange: "",
    candles: [],
    flavors: [
      "Çilek", "Muz", "Frambuaz",
      "Sütlü Çikolata Parçası", "Sütlü Çikolata Sos", "Beyaz Çikolata Sos",
      "Karamel", "Antep Fıstığı Draje"
    ],
    creams: [
      "Vanilyalı Kek + Beyaz Çikolata Krema",
      "Vanilyalı Kek + Sütlü Çikolata Krema",
      "Çikolatalı Kek + Beyaz Çikolata Krema",
      "Çikolatalı Kek + Sütlü Çikolata Krema"
    ],
    notes: []
  },

/* ── BÖLÜM 2 — KURULUMDA BİR KEZ ── */

  name: "Best Bakery",
  tagline: "Size Özel Butik Tasarım Pastalar — İstanbul / Maltepe",
  about: "Best Bakery, Beste Özdemir'in ellerinde İstanbul Maltepe'de doğdu. Doğum günü, nişan ve söz pastalarınız size özel tasarlanır; her pasta günlük ve butik olarak hazırlanır. Elden teslim alabilir ya da kurye ile adresinize gönderim talep edebilirsiniz.",

  logo: "logo_3.jpg",

  colors: {
    primary:  "#B05A75",
    secondary:"#4A2B36",
    accent:   "#D4A24C",
    bg:       "#FDF5F7",
    text:     "#3A272E"
  },

  decor: { img: "logo_3.jpg", opacity: 0.3, side: "left" },

  formFirst: true,   // Butik: form ana ürün, pasta modelleri destek vitrini
  intro: true,
  particles: "auto",
  cartEnabled: false,

  faq: [
    { q: "Siparişimi kaç gün önceden vermeliyim?",
      a: "Siparişler en az 3 gün önceden oluşturulmalıdır. Yoğun dönemlerde daha erken yazmanızı öneririz." },
    { q: "Teslimat nasıl yapılıyor?",
      a: "Pastanızı Maltepe / Zümrütevler'den elden teslim alabilirsiniz ya da Banabi Kurye ile adresinize gönderilebilir. Kurye ücreti alıcıya aittir; pasta yola çıkmadan önce özenle kutulanır ve son hali fotoğrafla tarafınıza iletilir." },
    { q: "Ödeme nasıl yapılıyor?",
      a: "Ödemeler havale / EFT ile alınır. Ödemenin tamamı ya da kapora yapıldıktan sonra siparişiniz oluşturulur." }
  ],

  branches: [
    {
      name: "Best Bakery — Maltepe",
      address: "Zümrütevler Mah., Maltepe / İstanbul (butik ev üretimi — elden teslim noktası)",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Z%C3%BCmr%C3%BCtevler+Maltepe+%C4%B0stanbul",
      phone: "+905421600660",
      hours: "Sipariş: her gün, WhatsApp üzerinden"
    }
  ],

/* ── BÖLÜM 3 — SABİT ── */

  phone: "+905421600660",
  whatsapp: "905421600660",   // Demo build: işletmenin numarası (pitch'te örnek sipariş ona düşer)
  instagram: "bakerybest",
  sheetsUrl: ""
};
/* ═══════════ CONFIG SONU ═══════════ */
