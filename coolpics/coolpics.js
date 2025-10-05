// Toggle navigation visibility for mobile
const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// Update footer year automatically
document.getElementById('year').textContent = new Date().getFullYear();
