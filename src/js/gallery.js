import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  loop: true,
  centeredSlides: true,
  slidesPerView: 2,
  initialSlide: 1,
  keyboardControl: true,
  mousewheelControl: true,
  lazyLoading: true,
  centeredSlides: true,
  preventClicks: false,
  preventClicksPropagation: false,
  lazyLoadingInPrevNext: true,
  coverflow: {
    rotate: 0,
    stretch: 150,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Enable clicking on pagination bullets
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
