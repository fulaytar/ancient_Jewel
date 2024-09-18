const burgerButton = document.getElementById('burger-button');
const burgerModal = document.getElementById('burger-modal');
const closeButton = document.getElementById('close-button');

burgerButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

function closeModal() {
  burgerModal.classList.add('hidden');
  burgerButton.classList.remove('hidden');

  // Видаляємо обробник події скролу при закритті
  window.removeEventListener('scroll', handleScroll);
}

function openModal() {
  burgerModal.classList.remove('hidden');
  burgerButton.classList.add('hidden');

  // Додаємо обробник події скролу
  window.addEventListener('scroll', handleScroll);
}

function handleScroll() {
  if (window.scrollY > 20) {
    closeModal();
  }
}
