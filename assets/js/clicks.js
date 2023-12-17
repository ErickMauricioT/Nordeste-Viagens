/*document.addEventListener('DOMContentLoaded', () => {
  let currentItem = 0;
  const items = document.querySelectorAll('.amazing-deals .item');
  const totalItems = items.length;
  const pageNumberLinks = document.querySelectorAll('.page-numbers .pageNumber');

  function moveRight() {
    items[currentItem].style.display = 'none';
    currentItem = (currentItem + 4) % totalItems;
    showItems();
  }

  function moveLeft() {
    items[currentItem].style.display = 'none';
    currentItem = (currentItem - 4 + totalItems) % totalItems;
    showItems();
  }

  function showItems() {
    for (let i = 0; i < totalItems; i++) {
      if (i >= currentItem && i < currentItem + 4) {
        items[i].style.display = 'block';
      } else {
        items[i].style.display = 'none';
      }
    }
  }

  function activatePageNumberLinks() {
    pageNumberLinks.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const pageNumber = index * 4; // Aqui você pode ajustar como deseja calcular o número de itens a serem exibidos
        currentItem = pageNumber;
        showItems();
      });
    });
  }

  showItems(); // Exibir os itens iniciais
  activatePageNumberLinks();

  document.querySelector('.left-btn').addEventListener('click', moveLeft);
  document.querySelector('.right-btn').addEventListener('click', moveRight);
}); */

document.addEventListener('DOMContentLoaded', () => {
  let currentPage = 0;
  const items = document.querySelectorAll('.amazing-deals .item');
  const totalItems = items.length;
  const itemsPerPage = 2;
  const pageButtons = document.querySelectorAll('.pageNumber');

  function showItems(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    items.forEach((item, index) => {
      if (index >= startIndex && index < endIndex) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  function goToPage(page) {
    currentPage = page;
    showItems(currentPage);
  }

  function activatePageNumberButtons() {
    pageButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        goToPage(index);
        // Ao clicar nos botões de página, a página irá rolar para o topo
        window.scrollTo({
          top: 1025,
          behavior: 'smooth'
        });
      });
    });
  }

  function updatePaginationButtons() {
    pageButtons.forEach((button, index) => {
      if (index === currentPage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  function nextPage() {
    const nextPage = currentPage + 1;
    if (nextPage * itemsPerPage < totalItems) {
      currentPage = nextPage;
      showItems(currentPage);
      updatePaginationButtons();
    }
  }

  function prevPage() {
    const prevPage = currentPage - 1;
    if (prevPage >= 0) {
      currentPage = prevPage;
      showItems(currentPage);
      updatePaginationButtons();
    }
  }

  showItems(currentPage);
  activatePageNumberButtons();

  document.querySelector('.left-btn').addEventListener('click', () => {
    prevPage();
    // Ao clicar nos botões de navegação, a página irá rolar para o topo
    window.scrollTo({
      top: 1025,
      behavior: 'smooth'
    });
  });

  document.querySelector('.right-btn').addEventListener('click', () => {
    nextPage();
    // Ao clicar nos botões de navegação, a página irá rolar para o topo
    window.scrollTo({
      top: 1025,
      behavior: 'smooth'
    });
  });
});

window.onload = function() {
  window.scrollTo(0, 0);
};
