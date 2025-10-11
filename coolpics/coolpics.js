// Toggle nav visibility
const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// Fix nav visibility when resizing
function handleResize() {
  if (window.innerWidth >= 1000) {
    nav.classList.remove('hidden');
  } else {
    nav.classList.add('hidden');
  }
}
window.addEventListener('resize', handleResize);
handleResize();

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Image viewer
const viewer = document.getElementById('viewer');
const viewerImage = viewer.querySelector('img');
const closeBtn = viewer.querySelector('.close-viewer');
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    let largeSrc;

    // If it’s the norris small image, open the full version
    if (img.src.includes('norris-sm.jpeg')) {
      largeSrc = img.src.replace('-sm.jpeg', '-full.jpeg');
    } else {
      // Otherwise, open the same .jpg version
      largeSrc = img.src;
    }

    viewerImage.src = largeSrc;
    viewerImage.alt = img.alt;
    viewer.showModal();
  });
});

closeBtn.addEventListener('click', () => viewer.close());

// Click outside to close
viewer.addEventListener('click', (e) => {
  if (e.target === viewer) viewer.close();
});
