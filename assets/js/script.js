/**
 * Genel site işlevleri
 * Kod tekrarını azaltmak ve bakımı kolaylaştırmak amacıyla
 * her özellik için ayrı başlatıcı fonksiyonlar tanımlandı.
 */
document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initProductCategories();
  initAuthForms();
  initCart();
});

/* -------------------------------- Slider -------------------------------- */
function initSlider() {
  const dots = document.querySelectorAll('.dot');
  if (!dots.length) return;

  let currentSlide = 0;

  const updateSlider = () => {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  };

  // Otomatik slayt geçişi (5 sn)
  setInterval(() => {
    currentSlide = (currentSlide + 1) % dots.length;
    updateSlider();
  }, 5000);

  // Noktalara tıklama ile slayt değişimi
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
    });
  });

  updateSlider();
}

/* ------------------------- Ürün Kategorileri ---------------------------- */
function initProductCategories() {
  const categoryButtons = document.querySelectorAll('.product-category');
  if (!categoryButtons.length) return;

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Burada kategoriye göre filtreleme yapılabilir
      const category = button.textContent.trim().toLowerCase();
      console.log('Seçilen kategori:', category);
    });
  });
}

/* ---------------------------- Giriş / Kayıt ----------------------------- */
function initAuthForms() {
  const loginTab = document.getElementById('tab-login');
  const registerTab = document.getElementById('tab-register');
  const loginForm = document.querySelector('.auth-form-login');
  const registerForm = document.querySelector('.auth-form-register');
  const eyeIcons = document.querySelectorAll('.auth-eye');

  if (!(loginTab && registerTab && loginForm && registerForm)) return;

  const toggleTabs = isLoginActive => {
    loginTab.classList.toggle('active', isLoginActive);
    registerTab.classList.toggle('active', !isLoginActive);
    loginForm.style.display = isLoginActive ? 'flex' : 'none';
    registerForm.style.display = isLoginActive ? 'none' : 'flex';
  };

  loginTab.addEventListener('click', () => toggleTabs(true));
  registerTab.addEventListener('click', () => toggleTabs(false));

  // Şifre görünürlüğü
  eyeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const input = icon.previousElementSibling;
      if (!input) return;
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      icon.textContent = isHidden ? '👁️‍🗨️' : '👁️';
    });
  });
}

/* --------------------------------- Sepet -------------------------------- */
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
  priceEls.forEach((priceEl, idx) => {
    // "299.90 TL" -> 299.90
    const numericPrice = parseFloat(priceEl.textContent.replace(/[^0-9,\.]/g, '').replace(',', '.')) || 0;
    const qty = parseInt(qtyInputs[idx].value, 10) || 0;
    total += numericPrice * qty;
  });

  totalEl.textContent = `${total.toFixed(2)} TL`;
} 