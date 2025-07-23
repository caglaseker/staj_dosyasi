/**
 * Genel site işlevleri
 * Kod tekrarını azaltmak ve bakımı kolaylaştırmak amacıyla
 * her özellik için ayrı başlatıcı fonksiyonlar tanımlandı.
 */
document.addEventListener('DOMContentLoaded', () => {
  initHamburgerMenu(); // YENİ EKLENDİ
  initSlider();
  initProductCategories();
  initAuthForms();
  initCart();
});

/* ------------------------- Hamburger Menü (YENİ) ---------------------- */
function initHamburgerMenu() {
  const hamburgerBtn = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.main-nav');

  // Eğer sayfada bu elemanlar yoksa fonksiyonu çalıştırma
  if (!hamburgerBtn || !navMenu) {
    return;
  }

  hamburgerBtn.addEventListener('click', () => {
    // Menüye 'active' class'ını ekleyip çıkararak görünürlüğünü kontrol et
    navMenu.classList.toggle('active');
  });
}


/* -------------------------------- Slider -------------------------------- */
function initSlider() {
  const heroImages = document.querySelectorAll('.hero-img'); // Tüm hero görsellerini al
  const dots = document.querySelectorAll('.dot'); // Tüm navigasyon noktalarını al

  // Eğer görseller veya noktalar yoksa fonksiyonu çalıştırma
  if (!heroImages.length || !dots.length) {
    return;
  }

  let currentSlide = 0; // Mevcut slaytın indeksi
  let slideInterval; // Otomatik slayt geçişi için interval ID'si

  const updateSlider = () => {
    // Tüm görsellerden ve noktalardan 'active' sınıfını kaldır
    heroImages.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Mevcut slayt ve noktaya 'active' sınıfını ekle
    heroImages[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  };

  // Otomatik slayt geçişini başlatan fonksiyon
  const startAutoSlide = () => {
    // Mevcut interval'i temizle (tekrar tekrar başlamamak için)
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % heroImages.length; // Sonraki slayta geç, sona gelince başa dön
      updateSlider(); // Slider'ı güncelle
    }, 5000); // Her 5 saniyede bir geçiş yap
  };

  // Noktalara tıklama ile slayt değişimi
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index; // Tıklanan noktanın indeksini mevcut slayt yap
      updateSlider(); // Slider'ı güncelle
      startAutoSlide(); // Otomatik geçişi sıfırla ve yeniden başlat
    });
  });

  // Slider'ı başlangıçta ve otomatik olarak başlat
  updateSlider(); // İlk slaytı göster
  startAutoSlide(); // Otomatik geçişi başlat
}

/* ------------------------- Ürün Kategorileri ---------------------------- */
function initProductCategories() {
  const categoryButtons = document.querySelectorAll('.product-category');
  if (!categoryButtons.length) return;

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Önce tüm butonlardan 'active' class'ını kaldır
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      // Sadece tıklanan butona 'active' class'ını ekle
      button.classList.add('active');
    });
  });
}

/* ---------------------------- Auth Formları ----------------------------- */
function initAuthForms() {
  const passwordInput = document.querySelector('.auth-password-row input');
  const eyeIcon = document.querySelector('.auth-eye');
  if (!passwordInput || !eyeIcon) return;

  eyeIcon.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    eyeIcon.textContent = isPassword ? '🙈' : '👁️';
  });
}

/* --------------------------- Sepet İşlemleri ---------------------------- */
function initCart() {
  const quantityBtns = document.querySelectorAll('.quantity-btn');
  const removeButtons = document.querySelectorAll('.cart-item-remove');
  if (!quantityBtns.length) return;

  // Adet artır/azalt
  quantityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('.quantity-input');
      if (!input) return;

      const current = parseInt(input.value, 10) || 1;
      const isMinus = btn.textContent.trim() === '-';
      const updated = isMinus ? Math.max(1, current - 1) : Math.min(10, current + 1);
      input.value = updated;

      updateCartTotal();
    });
  });

  // Ürün kaldırma
  removeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.cart-item');
      if (!item) return;
      item.style.opacity = '0';
      setTimeout(() => {
        item.remove();
        updateCartTotal();
      }, 300);
    });
  });

  updateCartTotal();
}

function updateCartTotal() {
  const priceEls = document.querySelectorAll('.cart-item-price');
  const qtyInputs = document.querySelectorAll('.quantity-input');
  const totalEl = document.querySelector('.cart-total span:last-child');
  if (!(priceEls.length && qtyInputs.length && totalEl)) return;

  let total = 0;
  priceEls.forEach((priceEl, index) => {
    const price = parseFloat(priceEl.textContent.replace('₺', '').replace(',', '.')) || 0;
    const quantity = parseInt(qtyInputs[index].value, 10) || 1;
    total += price * quantity;
  });

  totalEl.textContent = `₺${total.toFixed(2).replace('.', ',')}`;
}