// ======================
// NAVIGATION TOGGLE
// ======================
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

// ======================
// FOOTER YEAR
// ======================
document.getElementById('year').textContent = new Date().getFullYear();

// ======================
// IMAGE VIEWER (MODAL)
// ======================
const viewer = document.getElementById('viewer');
const viewerImage = viewer.querySelector('img');
const closeBtn = viewer.querySelector('.close-viewer');
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    let largeSrc;

    // Handle different file naming patterns
    if (img.src.includes('norris-sm.jpeg')) {
      // Special case: replace with full .jpeg version
      largeSrc = img.src.replace('-sm.jpeg', '-full.jpeg');
    } else if (img.src.includes('-sm')) {
      // Generic small version → full version conversion
      largeSrc = img.src.replace('-sm', '');
    } else {
      // Default: use the same image if no small version exists
      largeSrc = img.src;
    }

    viewerImage.src = largeSrc;
    viewerImage.alt = img.alt;
    viewer.showModal();
  });
});

// ======================
// MODAL CLOSE HANDLERS
// ======================
closeBtn.addEventListener('click', () => viewer.close());

// Allow clicking outside the image to close the viewer
viewer.addEventListener('click', (e) => {
  if (e.target === viewer) viewer.close();
});
