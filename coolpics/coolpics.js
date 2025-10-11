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

/* ===== Image Viewer (Modal) ===== */
#viewer {
  border: none;
  padding: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#viewer::backdrop {
  background: rgba(0, 0, 0, 0.8);
}

#viewer img {
  max-width: 90vw;   /* 90% of viewport width */
  max-height: 90vh;  /* 90% of viewport height */
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.close-viewer {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 1.8rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-weight: bold;
  backdrop-filter: blur(4px);
  transition: background 0.2s ease;
}

.close-viewer:hover {
  background: rgba(255, 255, 255, 0.4);
}


// ======================
// MODAL CLOSE HANDLERS
// ======================
closeBtn.addEventListener('click', () => viewer.close());

// Allow clicking outside the image to close the viewer
viewer.addEventListener('click', (e) => {
  if (e.target === viewer) viewer.close();
});
