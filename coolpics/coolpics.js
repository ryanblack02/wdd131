// ======================
// NAVIGATION TOGGLE
// ======================
const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

function handleResize() {
  if (window.innerWidth >= 1000) {
    nav.classList.remove('hidden');
  } else {
    nav.classList.add('hidden');
  }
}
window.addEventListener('resize', handleResize);
handleResize();

// ======================
// FOOTER YEAR
// ======================
document.getElementById('year').textContent = new Date().getFullYear();

// ======================
// IMAGE VIEWER (MODAL)
// ======================
const viewer = document.getElementById('viewer');
const closeBtn = document.querySelector('.close-viewer');
const images = document.querySelectorAll('.gallery img');
const viewerImg = viewer.querySelector('img');

images.forEach(img => {
  img.addEventListener('click', () => {
    viewerImg.src = img.src;
    viewerImg.alt = img.alt;
    viewer.showModal();
  });
});

closeBtn.addEventListener('click', () => viewer.close());

// Allow clicking outside the image to close the viewer
viewer.addEventListener('click', (e) => {
  if (e.target === viewer) viewer.close();
});
