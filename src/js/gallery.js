import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

// Спочатку відображаємо перший слайд
document.getElementById('current-slide-number').textContent = 1;

const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 1.38,
  spaceBetween: -100,
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
  on: {
    init: function () {
      // При ініціалізації отримуємо номер слайда через this
      document.getElementById('current-slide-number').textContent =
        this.realIndex + 1;
    },
    slideChange: function () {
      // Оновлюємо номер слайда через this при зміні
      document.getElementById('current-slide-number').textContent =
        this.realIndex + 1;
    },
  },
});
