import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

// Спочатку відображаємо перший слайд
document.getElementById('current-slide-number').textContent = 1;

const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 1.38, // Кількість видимих слайдів
  spaceBetween: -100, // Відстань між слайдами
  initialSlide: 0, // Індекс починається з 0, але виводимо як 1
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    enabled: true,
  },
  lazy: {
    loadPrevNext: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.my-swiper-button-next',
    prevEl: '.my-swiper-button-prev',
  },
  breakpoints: {
    // Настроювання для ширини екрану до 1440px
    1440: {
      slidesPerView: 'auto', // Автоматичне масштабування слайдів
      spaceBetween: -300, // Відстань між слайдами без пропусків
      centeredSlides: true, // Вимкнути центрування
    },
    // Настроювання для ширини екрану менше 1440px
    1400: {
      slidesPerView: 1.38,
      spaceBetween: -100,
      centeredSlides: true,
    },
  },
  on: {
    init: function () {
      // При ініціалізації отримуємо номер слайда через this
      document.getElementById('current-slide-number').textContent = `0${
        this.realIndex + 1
      }`;
    },
    slideChange: function () {
      // Оновлюємо номер слайда через this при зміні
      document.getElementById('current-slide-number').textContent = `0${
        this.realIndex + 1
      }`;
    },
  },
});
