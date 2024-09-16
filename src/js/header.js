console.log('header');

const burgerButton = document.getElementById('burger-button')
const burgerModal = document.getElementById('burger-modal')
const closeButton = document.getElementById('close-button')

burgerButton.addEventListener('click', () => {
    burgerModal.classList.remove('hidden')
})

closeButton.addEventListener('click', () => {
    burgerModal.classList.add('hidden')
})