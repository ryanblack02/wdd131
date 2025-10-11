// Toggle navigation visibility for mobile
const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// Ensure correct nav visibility when resizing
function handleResize() {
  if (window.innerWidth >= 1000) {
    nav.classList.remove('hidden');
  } else {
    nav.classList.add('hidden');
  }
}

window.addEventListener('resize', handleResize);
handleResize();

// Update footer year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Image viewer modal
const viewer = document.getElementById('viewer');
const viewerImage = viewer.querySelector('img');
const closeBtn = viewer.querySelector('.close-viewer');
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    // Swap -sm for -full to open larger version
    const largeSrc = img.src.replace('-sm', '-full');
    viewerImage.src = largeSrc;
    viewerImage.alt = img.alt;
    viewer.showModal();
  });
});

closeBtn.addEventListener('click', () => viewer.close());

// Allow clicking outside the image to close the dialog
viewer.addEventListener('click', (e) => {
  if (e.target === viewer) viewer.close();
});
