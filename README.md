# Egedeniz Tektil Platformu

## Proje Hakkında


## Özellikler

- **Responsive Tasarım**: Tüm cihazlarda (masaüstü, tablet, mobil) sorunsuz çalışan kullanıcı arayüzü
- **Kullanıcı Hesapları**: Kayıt olma, giriş yapma ve şifre sıfırlama işlemleri
- **Ürün Katalog Sayfası**: Tatil destinasyonlarını filtreleme ve kategorilere göre listeleme
- **Sepet Sistemi**: Seçilen tatil paketlerini sepete ekleme ve yönetme
- **Zaman Çizelgesi**: Popüler tatil bölgelerinin sezonluk bilgilerini gösteren timeline
- **İletişim Formu**: Kullanıcıların sorularını ve geri bildirimlerini iletebilecekleri form

## Teknoloji Stack'i

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Responsive Design**: Flexbox ve CSS Grid
- **Animasyonlar**: CSS Transitions ve JavaScript
- **Kod Organizasyonu**: Modüler JavaScript yapısı

## Proje Yapısı

```
staj_dosyasi/
├── assets/
│   ├── css/
│   │   └── style.css        # Ana stil dosyası
│   ├── img/                 # Görsel dosyaları
│   └── js/
│       └── script.js        # Ana JavaScript dosyası
├── pages/
│   ├── giris.html          # Giriş ve kayıt sayfası
│   ├── hakkimizda.html     # Hakkımızda sayfası
│   ├── iletisim.html       # İletişim sayfası
│   ├── sepet.html          # Alışveriş sepeti
│   ├── timeline.html       # Zaman çizelgesi
│   └── urunler.html        # Ürün katalog sayfası
├── index.html              # Ana sayfa
└── README.md               # Bu dosya
```

## Kurulum ve Çalıştırma

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/kullanici-adi/egedeniz-tatil-platformu.git
   ```

2. Proje dizinine gidin:
   ```bash
   cd egedeniz-tatil-platformu
   ```

3. Projeyi tarayıcıda açın:
   - Yerel bir web sunucusu kullanabilirsiniz (örn. Live Server VS Code eklentisi)
   - Veya `index.html` dosyasını doğrudan tarayıcınızda açabilirsiniz

## Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](assets/img/screenshots/anasayfa.png)

### Ürünler Sayfası
![Ürünler](assets/img/screenshots/urunler.png)

### Giriş/Kayıt Sayfası
![Giriş/Kayıt](assets/img/screenshots/giris.png)

## Özellik Detayları

### Hamburger Menü
Mobil cihazlarda ve küçük ekranlarda kullanıcı dostu navigasyon için hamburger menü kullanılmıştır. JavaScript ile toggle işlevi eklenmiştir.

### Slider
Ana sayfada otomatik geçişli ve manuel kontrollü bir slider bulunmaktadır. Kullanıcılar nokta navigasyonu ile istediği görsele geçiş yapabilir.

### Ürün Kategorileri
Ürünler sayfasında kategorilere göre filtreleme yapılabilmektedir. Seçilen kategoriye göre ürünler dinamik olarak listelenir.

### Giriş/Kayıt Formları
Kullanıcı dostu tab yapısıyla giriş ve kayıt formları tek sayfada sunulmuştur. Form validasyonu ve şifre görünürlüğü kontrolü JavaScript ile sağlanmaktadır.

### Sepet İşlemleri
Ürünleri sepete ekleme, miktarını değiştirme ve sepetten çıkarma işlemleri JavaScript ile yönetilmektedir. Sepet toplamı dinamik olarak güncellenir.

## Responsive Tasarım

Proje, farklı ekran boyutlarına uyum sağlayacak şekilde tasarlanmıştır:
- **Masaüstü**: 1024px ve üzeri
- **Tablet**: 768px - 1023px
- **Mobil**: 767px ve altı
- **Küçük Mobil**: 380px ve altı

## Gelecek Özellikler

- Kullanıcı profil sayfası
- Favorilere ekleme özelliği
- Gelişmiş arama fonksiyonu
- Ödeme sistemi entegrasyonu
- Yorum ve değerlendirme sistemi

## Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch'inizi oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inize push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

