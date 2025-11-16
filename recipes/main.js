import { recipes } from './recipes.mjs';
right.appendChild(ingList);


article.appendChild(imgWrap);
article.appendChild(right);


return article;
}


function render(list) {
recipesListEl.innerHTML = '';
if (!list.length) {
const msg = document.createElement('p');
msg.className = 'no-results';
msg.textContent = 'No recipes found.';
recipesListEl.appendChild(msg);
return;
}
const frag = document.createDocumentFragment();
list.forEach(r => frag.appendChild(createCard(r)));
recipesListEl.appendChild(frag);
}


function escapeHTML(str = '') {
return String(str).replace(/[&"'<>]/g, (s) => ({
'&': '&amp;', '"': '&quot;', "'": '&#39;', '<': '&lt;', '>': '&gt;'
})[s]);
}


// search + filter
searchInput.addEventListener('input', (e) => {
const q = e.target.value.trim().toLowerCase();
applyFilters(q, sortSelect.value);
});


sortSelect.addEventListener('change', (e) => {
applyFilters(searchInput.value.trim().toLowerCase(), e.target.value);
});


function applyFilters(query, sort) {
let filtered = recipes.filter(r => {
const inName = r.name.toLowerCase().includes(query);
const inIngredients = (r.ingredients || []).some(i => i.toLowerCase().includes(query));
return !query || inName || inIngredients;
});


if (sort === 'rating-desc') filtered.sort((a,b) => (b.rating||0) - (a.rating||0));
if (sort === 'rating-asc') filtered.sort((a,b) => (a.rating||0) - (b.rating||0));


current = filtered;
render(filtered);
}


// initial render
render(recipes);


// small accessibility helper: focus outline visible only when using keyboard
(function keyboardOutline() {
function handleFirstTab(e) {
if (e.key === 'Tab') {
document.documentElement.classList.add('user-is-tabbing');
window.removeEventListener('keydown', handleFirstTab);
}
}
window.addEventListener('keydown', handleFirstTab);
})();
