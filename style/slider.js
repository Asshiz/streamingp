let currentIndex = 0;
const items = document.querySelectorAll('.item');

document.getElementById('prev').addEventListener('click', () => {
  items[currentIndex].style.display = 'none';
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  items[currentIndex].style.display = 'block';
});

document.getElementById('next').addEventListener('click', () => {
  items[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].style.display = 'block';
});

// Exibir o primeiro item ao carregar a página
items.forEach((item, index) => {
  item.style.display = index === 0 ? 'block' : 'none';
});
