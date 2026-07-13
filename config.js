/*
═══════════════════════════════════════════════════════════════
  PASTANE GOLDEN MASTER v7.2 — CONFIG DOSYASI (config.js) — Yusuf Yozgatlı
  Yeni demo = SADECE BU DOSYA doldurulur. index.html'e dokunma.
  TEK İSTİSNA: index.html <head> içindeki OG etiketleri (elle).
  index.html + config.js AYNI klasörde durmak ZORUNDA.

  CONFIG DÜZENİ (v7 düzenleme): 3 bölüm, kullanım sıklığına göre:
  BÖLÜM 1 = SIK GÜNCELLENEN (fiyat, duyuru, ürün, indirim — bakım işi)
  BÖLÜM 2 = KURULUMDA BİR KEZ (isim, logo, renk, şube, özellik aç/kapa)
  BÖLÜM 3 = SABİT (telefon, WhatsApp, IG — kur ve dokunma)
  Anahtar SIRASI JS'te önemsizdir; bu düzen sadece insan için.

  INTAKE CHECKLIST (koda oturmadan önce doldur):
  ┌─────────────────────────────────────────────┐
  │ [ ] Pastane adı + slogan                     │
  │ [ ] Telefon (tel: için) + WhatsApp (90XXX)   │
  │ [ ] Instagram kullanıcı adı                  │
  │ [ ] Şubeler: ad, adres, Maps linki, telefon  │
  │ [ ] Logodan 3 renk (primary/secondary/accent)│
  │ [ ] 6-8 ürün fotoğrafı (temiz, barsız)       │
  │ [ ] Somut sorun (pitch hook: kırık QR vs.)   │
  └─────────────────────────────────────────────┘

  RESİM NOTU (v3): JPEG, max 1000px genişlik, %70-75 kalite,
  resim başına <150KB hedefle. Görseller index.html ile AYNI
  KLASÖRDE düz durur (img/ klasörü YOK): "logo.jpg", "butik.jpg".
  Boş bırakırsan gri placeholder gösterir, demo yine çalışır.
  base64 KULLANMA. Repo yapısı: demolar/pastane-adi/index.html + jpg'ler
  DEKOR: şeffaf SVG (desen.svg), o da aynı klasörde. Boş "" = kapalı.

  v3 YENİLİKLERİ (hepsi CONFIG'den, hepsi boş bırakılınca kaybolur):
  1) cartEnabled  → ürün kartında "Sepete Ekle", sağ altta sepet
  2) weddingPortions → formda "Pasta Türü" seçimi + düğün porsiyonları
  3) priceUpdated → menü üstünde son fiyat güncelleme tarihi
  4) decor → kenarlarda arka plan filigranı (SVG önerilir)

  v4 YENİLİKLERİ (aynı kural: doldur = var, boş bırak = hiç yok):
  1) menu: []        → Menü bölümü + header "Menü" linki otomatik gizlenir
                       (BUTİK PASTACI MODU: evden çalışan, sabit menüsü yok)
  2) orderForm.rules → formun üstünde "Sipariş Koşulları" kutusu. Kapat: []
  3) orderForm.minDaysAhead → teslim tarihi en az N gün sonrası. Kapat: 0
  4) announcement    → sayfanın en tepesinde duyuru bandı. Kapat: ""
  5) vacationNote    → tatil/izin bandı (+vacationLock: form kilidi). Kapat: ""
  6) intro           → açılışta logo ortada belirir, yerine süzülür. Kapat: false
  7) particles       → dokununca mevsim emojileri düşer ("auto" = ayı
                       telefondan okur, kendi kendine değişir). Kapat: ""
  8) faq             → SSS bölümü (dokun-aç soru/cevap). Kapat: []
  9) OG etiketleri   → <head> içinde, WhatsApp link önizlemesi.
                       TEK İSTİSNA: CONFIG'den değil, elle doldurulur
                       (WhatsApp sayfayı JS çalıştırmadan okur).

  v5 YENİLİKLERİ (aynı kural: doldur = var, boş bırak = hiç yok):
  1) orderForm.portionPrices → özel pasta porsiyon fiyatları.
     Doluysa formun altında CANLI "Tahmini Fiyat" kutusu belirir,
     porsiyon + içerik seçimine göre anında güncellenir. Kapat: {}
  2) orderForm.flavorExtras  → içerik ek ücretleri. Checkbox'ta
     "Krokan (+80 TL)" yazar, tahmine otomatik eklenir. Kapat: {}
  3) orderForm.priceNote     → tahmini fiyatın altındaki not
     ("Son fiyata şef karar verir"). Tahmin WhatsApp mesajına da girer.

  v6 YENİLİKLERİ (aynı kural: doldur = var, boş bırak = hiç yok):
  1) siteDiscount    → siteden verilen TÜM siparişlere % indirim.
     Sepet toplamında ve tahmini fiyatta otomatik düşülür,
     WhatsApp mesajına satır satır döküm girer. Kapat: 0
  2) paymentMethods  → sipariş formlarında "Ödeme Yöntemi" seçimi.
     Her yönteme ayrı % indirim tanımlanabilir (IBAN/nakit teşviki).
     Yöntem indirimi siteDiscount ile TOPLANIR (5+5=%10).
     Kapat: [] → seçim kutusu hiç görünmez, indirim hesabı yapılmaz.
     Örn: [ {name:"IBAN / Havale", discount:5},
            {name:"Kapıda Nakit", discount:5},
            {name:"Kapıda Kart (POS)", discount:0} ]

  v7 YENİLİKLERİ:
  1) LIGHTBOX → vitrin fotoğrafına dokununca tam ekran açılır.
     Ekranın SAĞ yarısına dokun = sonraki, SOL yarısı = önceki.
     Kaydırma (swipe) ve klavye ok tuşları da çalışır. Başa/sona
     gelince döngü yapar. Fotoğrafı olmayan ürün atlanır.
     Otomatik çalışır, CONFIG gerekmez. Kapatmak istersen:
     lightboxEnabled: false ekle.
  2) EKSİK BİLGİ BEKÇİSİ → kritik alanlar (isim, telefon,
     WhatsApp) boşsa veya placeholder (XXX / Örnek) kaldıysa
     sayfanın tepesinde KIRMIZI uyarı bandı çıkar ve eksikleri
     listeler. Doğru doldurulmuş demoda hiç görünmez.

  v7.1 YENİLİKLERİ:
  1) CONFIG AYRI DOSYADA (bu dosya). Demo güncelleme = GitHub'da
     sadece config.js'i aç, düzenle, kaydet. Kod okuma yok.
  2) orderForm.deliveryMethods → Teslimat yöntemi seçimi. Kapat: []
     address:true olan yöntem seçilince adres kutusu açılır (zorunlu).
  3) orderForm.deliveryTimeRange → Teslim saati dropdown, tam saatler.
     Örn: "09:00-24:00". Kapat: ""
  4) orderForm.candles → Mum seçimi. qty:true = adet kutusu,
     price = tahmini fiyata eklenir. Kapat: []
  5) sheetsUrl → Google Apps Script Web App URL. Doluysa her sipariş
     arka planda Sheets'e düşer (WhatsApp akışını asla bekletmez). Kapat: ""
  6) DÜZELTMELER: binlik/kuruşlu fiyatlar ("1.250 TL", "12,50 TL")
     doğru hesaplanır; ürün/menü adındaki özel karakter (" ' < >)
     sayfayı bozamaz; gece 00:00-03:00 tarih kayması giderildi;
     config.js yüklenmezse tepede kırmızı uyarı bandı çıkar.

  v7.2 YENİLİKLERİ (aynı kural: doldur = var, boş bırak = hiç yok):
  1) formFirst → true = Sipariş formu ürün vitrininin ÜSTÜNE taşınır
     (butik pastacıda form ana ürün, vitrin destek). Kapat: false
  2) cupcakes → "Cupcake'lerimiz" bölümü, ürün vitrininin altında.
     Her kartın "Sipariş Ver" butonu FORM YERİNE ürün adıyla önceden
     doldurulmuş WhatsApp mesajı açar (hazır ürün = direkt satış).
     Örn: [ {name:"6'lı Cupcake Kutusu", desc:"...", img:"cupcake1.jpg",
             price:"850 TL"} ]  (desc ve price isteğe bağlı). Kapat: []
  3) orderForm.flavorLimits → porsiyona göre EN FAZLA N iç malzeme.
     Örn: { "2-4": 2, "10-12": 3, "default": 2 } — "default" listede
     olmayan porsiyonlara uygulanır. flavorExtras'taki ÜCRETLİ ekstralar
     limite DAHİL DEĞİLDİR (onlar zaten ek ücretli). Sınır dolunca
     kalan kutular kilitlenir, etikette "(en fazla N)" yazar. Kapat: {}

  ⚠️⚠️ TEMPLATE'İ DOLDURAN İÇİN ALTIN KURAL (Claude dahil) ⚠️⚠️
  Kritik bir bilgi (WhatsApp numarası, telefon, pastane adı,
  şube adresi) araştırmada BULUNAMADIYSA:
  → TAHMİN ETME, UYDURMA, BENZERİNİ YAZMA.
  → Template'i doldurmayı DURDUR ve Yusuf'a eksik bilgilerin
    listesiyle geri dön. Yanlış numaralı demo, demosuz olmaktan
    daha kötüdür (müşterinin siparişi rakibe gider).
═══════════════════════════════════════════════════════════════
*/

/* ═══════════ CONFIG — TEK DEĞİŞECEK YER ═══════════
   Her satırın yanında ne yazacağın açıklanıyor.
   Sadece tırnak içlerini değiştir, yapıyı bozma.   */
const CONFIG = {

/* ┌──────────────────────────────────────────────────────────┐
   │ BÖLÜM 1 — SIK GÜNCELLENEN                                 │
   │ Bakım paketi buradan döner: fiyat, duyuru, ürün, kampanya │
   │ Haftalık/aylık ellenen HER ŞEY bu blokta.                 │
   └──────────────────────────────────────────────────────────┘ */

  priceUpdated: "",        // ← "10.07.2026" gibi. HER PAZARTESİ güncelle. Boş = satır görünmez

  announcement: "",        // ← Tepe duyuru bandı. Örn: "Web sitemize özel %5 indirim!" Boş = kapalı
  vacationNote: "",        // ← Tatil/izin bandı. Boş = kapalı
  vacationLock: false,     // ← true = tatildeyken sipariş formları kilitlenir

  siteDiscount: 0,         // ← Site siparişi % indirimi. 0 = kapalı
  paymentMethods: [],      // ← Ödeme yöntemi seçimi + yöntem bazlı indirim. [] = kutu yok
                           //   Örn: [ {name:"IBAN / Havale", discount:5},
                           //          {name:"Kapıda Nakit", discount:5},
                           //          {name:"Kapıda Kart (POS)", discount:0} ]
                           //   Yöntem indirimi siteDiscount ile TOPLANIR (5+5=%10).

  products: [
    // ← 5-8 ürün (vitrin). img: aynı klasördeki dosya adı ("fto1.jpg").
    //   Boş "" bırakırsan gri placeholder çıkar, demo yine çalışır.
    //   Ürün adlarını IG paylaşımlarından al, desc 4-6 kelime.
    { name: "Örnek Ürün 1", desc: "Kısa açıklama buraya", img: "" },
    { name: "Örnek Ürün 2", desc: "Kısa açıklama buraya", img: "" },
    { name: "Örnek Ürün 3", desc: "Kısa açıklama buraya", img: "" },
    { name: "Örnek Ürün 4", desc: "Kısa açıklama buraya", img: "" },
    { name: "Örnek Ürün 5", desc: "Kısa açıklama buraya", img: "" }
  ],

  cupcakes: [],            // ← "Cupcake'lerimiz" bölümü (v7.2). Butonu form yerine
                           //   ürün adıyla önceden dolu WhatsApp mesajı açar. Kapat: []
                           //   Örn: [ {name:"6'lı Cupcake Kutusu", desc:"kişiye özel tema",
                           //           img:"cupcake1.jpg", price:"850 TL"} ]

  menuNote: "",            // ← Menü üstü not. Örn: "Fiyatlar 2026 güncel"
  menu: [
    // ← Kategorileri Maps/IG/mekan menüsünden derle. Fiyat BULAMADIYSAN
    //   YANLIŞ FİYAT YAZMA → placeholder bırak veya Yusuf'a sor.
    //   Butik pastacı (sabit menüsü yok) ise: menu: [] → bölüm kaybolur.
    {
      category: "Örnek Kategori",
      items: [
        { name: "Örnek Ürün", price: "000 TL" },
        { name: "Örnek Ürün (açıklamalı)", price: "000 TL", desc: "içerik detayı buraya" }
      ]
    }
  ],

  orderForm: {
    // NOT: portionPrices / flavorExtras / priceNote fiyat alanlarıdır,
    //      zam geldiğinde BURASI da güncellenir (Bölüm 1'e dahil say).
    portions: ["4", "6", "8", "10", "12", "15", "20"],
    weddingPortions: ["50", "100", "150", "200"],
    portionPrices: {},     // ← Doluysa formda CANLI "Tahmini Fiyat" kutusu çıkar. Kapat: {}
    flavorExtras: {},      // ← İçerik ek ücretleri: "Krokan (+80 TL)". Kapat: {}
    flavorLimits: {},      // ← Porsiyona göre en fazla N iç malzeme (v7.2). Kapat: {}
                           //   Örn: { "default": 2 } veya { "2-4": 2, "10-12": 3 }
                           //   flavorExtras'taki ücretli ekstralar limite dahil DEĞİL.
    priceNote: "",         // ← Tahmini fiyat altı not ("Son fiyata şef karar verir")
    photoNote: "Aklınızdaki pastanın fotoğrafını sipariş sonrası WhatsApp üzerinden göndermeyi unutmayın!",
    rules: [],             // ← Formun üstünde "Sipariş Koşulları" kutusu. Kapat: []
    minDaysAhead: 0,       // ← Teslim tarihi en az N gün sonrası. Kapat: 0
    deliveryMethods: [],   // ← Teslimat yöntemi seçimi. Kapat: []
                           //   Örn: [ {name:"Şubeden Teslim Alacağım"},
                           //          {name:"Adrese Teslimat", address:true} ]
                           //   address:true → seçilince adres kutusu açılır, zorunlu olur.
    deliveryTimeRange: "", // ← Teslim saati dropdown, tam saatler. Örn: "09:00-24:00". Kapat: ""
    candles: [],           // ← Mum seçimi. Kapat: []
                           //   Örn: [ {name:"Rakam Mum", price:25, qty:true},
                           //          {name:"Standart Mum", price:0} ]
                           //   qty:true = adet kutusu; price × adet tahmini fiyata eklenir.
    flavors: [
      "Karışık Meyve", "Çilek", "Muz", "Frambuaz",
      "Orman Meyvesi", "Yaban Mersini", "Lotus", "Karamel",
      "Beyaz Çikolata", "Bitter Çikolata", "Antep Fıstığı"
    ],
    creams: ["Vanilya", "Çikolata", "Karamel", "Meyveli", "Peynirli (Cheesecake)"],
    notes: []
  },

/* ┌──────────────────────────────────────────────────────────┐
   │ BÖLÜM 2 — KURULUMDA BİR KEZ                               │
   │ Demo kurulurken doldurulur, sonra nadiren ellenir:        │
   │ kimlik, görünüm, özellik açma/kapama.                     │
   └──────────────────────────────────────────────────────────┘ */

  name: "Örnek Pastanesi",                // ← PASTANE ADI (Instagram profilindeki gibi)
  tagline: "Slogan buraya — Şehir / İlçe",// ← Kısa slogan + konum
  about: "Pastane hakkında 2-3 cümle. Kuruluş yılı, uzmanlık alanı, taze/günlük üretim vurgusu. IG biyografisinden ve Maps yorumlarından derle.",

  logo: "logo.jpg",                       // ← Logo dosyası, index.html ile aynı klasörde

  colors: {
    primary:  "#7B3F2A",   // ← Logoya pipet tut: ana renk
    secondary:"#4A2618",   // ← Koyu ton (başlıklar)
    accent:   "#C99B3F",   // ← Vurgu (butonlar, çizgiler)
    bg:       "#FBF6EE",   // ← Zemin (krem güvenli varsayılan)
    text:     "#332218"    // ← Metin
  },

  decor: {
    img: "",               // ← Şeffaf SVG/PNG filigran. Boş "" = kapalı
    opacity: 0.2,
    side: "both"
  },

  formFirst: false,        // ← true = sipariş formu vitrinin ÜSTÜNE çıkar (v7.2). Kapat: false
  intro: true,             // ← Açılışta logo efekti. Kapat: false
  particles: "auto",       // ← Dokununca mevsim emojileri ("auto" = ayı okur). Kapat: ""
  cartEnabled: true,       // ← Menüde sepet. Menü boşsa zaten kendiliğinden kapalı

  faq: [],                 // ← SSS bölümü (dokun-aç). Kapat: []

  branches: [
    // ← Maps kaydından: ad, TAM adres, "Paylaş" linki, telefon, saatler.
    //   Çok şubeliyse her şube ayrı obje. Adres BULAMADIYSAN → Yusuf'a sor.
    {
      name: "Örnek Pastanesi — Merkez",
      address: "Mahalle, Cadde No:0, İlçe / Şehir",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ornek+Pastanesi",
      phone: "+90XXXXXXXXXX",
      hours: "Her gün 08:00 – 20:00"
    }
  ],

/* ┌──────────────────────────────────────────────────────────┐
   │ BÖLÜM 3 — SABİT (kur ve dokunma)                          │
   │ Bir kez doğru gir, bir daha ellenmez.                     │
   │ HATIRLATMA: OG etiketleri de sabittir ama <head> içinde   │
   │ ELLE doldurulur (WhatsApp JS çalıştırmaz) — yukarı bak.   │
   └──────────────────────────────────────────────────────────┘ */

  phone: "+90XXXXXXXXXX",                 // ← SABİT TELEFON (Maps kaydından, +90 ile). BULAMADIYSAN DOLDURMA → Yusuf'a sor!
  whatsapp: "90XXXXXXXXXX",               // ← WHATSAPP (başında + YOK). BULAMADIYSAN DOLDURMA → Yusuf'a sor!
                                          //   Demo build'de: pastanenin numarası.
                                          //   Canlıya alırken test için geçici Yusuf'un numarası, test bitince geri.
  instagram: "ornekpastanesi",            // ← IG kullanıcı adı (@ olmadan)
  sheetsUrl: ""                           // ← Google Apps Script Web App URL. Kapat: ""
                                          //   Apps Script doPost'un okuyacağı alan adları (değiştirme):
                                          //   tur, adSoyad, telefon, tarih, saat, porsiyon, icerik,
                                          //   krema, sube, teslimat, adres, mum, odeme, tahmin,
                                          //   urunler, toplam, not
};
/* ═══════════ CONFIG SONU ═══════════ */
