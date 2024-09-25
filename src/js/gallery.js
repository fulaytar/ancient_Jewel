import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.getElementById('current-slide-number').textContent = 1;

const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 1.38,
  spaceBetween: -100,
  initialSlide: 0,
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
    1280: {
      slidesPerView: 3.09,
      spaceBetween: -300,
      centeredSlides: true,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: -300,
      centeredSlides: true,
    },
  },

  on: {
    init: function () {
      document.getElementById('current-slide-number').textContent = `0${
        this.realIndex + 1
      }`;
    },
    slideChange: function () {
      document.getElementById('current-slide-number').textContent = `0${
        this.realIndex + 1
      }`;
    },
  },
});
