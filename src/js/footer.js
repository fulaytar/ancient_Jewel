function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
document.querySelector('.arrow-top').addEventListener('click', scrollToTop);
