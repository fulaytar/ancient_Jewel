const burgerButton = document.getElementById('burger-button');
const burgerModal = document.getElementById('burger-modal');
const closeButton = document.getElementById('close-button');

burgerButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

function closeModal() {
  burgerModal.classList.add('hidden');
  burgerButton.classList.remove('hidden');

  window.removeEventListener('scroll', handleScroll);
}

function openModal() {
  burgerModal.classList.remove('hidden');
  burgerButton.classList.add('hidden');

  window.addEventListener('scroll', handleScroll);
}

function handleScroll() {
  if (window.scrollY > 20) {
    closeModal();
  }
}

document.addEventListener('scroll', function () {
  const headerDiv = document.querySelector('.header-div');

  if (window.scrollY > 100) {
    // Збільшуємо всі відступи до 20px, якщо прокручено більше ніж 100 пікселів
    headerDiv.style.padding = '20px';
  } else {
    // Повертаємо початкові відступи, якщо прокручено менше ніж 100 пікселів
    headerDiv.style.padding = '';
  }
});
