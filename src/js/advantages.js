document.addEventListener('DOMContentLoaded', () => {
  const itemsPerPage = 4;
  let currentPage = 1;

  const items = document.querySelectorAll('.advantages-item');
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function updatePage() {
    items.forEach((item, index) => {
      item.style.display =
        index >= (currentPage - 1) * itemsPerPage &&
        index < currentPage * itemsPerPage
          ? 'flex'
          : 'none';
    });
    document.getElementById('page').textContent = String(currentPage).padStart(
      2,
      '0'
    );
  }

  document.getElementById('left-btn').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updatePage();
    }
  });

  document.getElementById('right-btn').addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePage();
    }
  });

  updatePage();

  function handleResize() {
    if (window.innerWidth >= 1280) {
      items.forEach(item => (item.style.display = 'flex'));
      document.querySelector('.buttons-div').style.display = 'none';
    } else {
      document.querySelector('.buttons-div').style.display = 'flex';
      updatePage();
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});
