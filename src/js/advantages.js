console.log('advantages');

const left = document.getElementById('left-btn')
const right = document.getElementById('right-btn')
const list = document.getElementById('list')
const page = document.getElementById('page')

let currentPage = 0;

right.addEventListener('click', () => {
    if (currentPage < 1) {
        currentPage++;
        list.style.transform = `translateX(-${currentPage * 300}px)`;
        page.textContent = '02'
      }
})

left.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        list.style.transform = `translateX(-${currentPage * 300}px)`;
        page.textContent = '01'
      }
})


