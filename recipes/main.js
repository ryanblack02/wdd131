import { recipes } from './recipes.mjs';

const recipesListEl = document.getElementById('recipes-list');
const featuredEl = document.getElementById('featured-recipe');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort');

let currentRecipes = [...recipes];

// ---------------------------
// Template: Rating Stars
// ---------------------------
function renderRating(rating = 0) {
  const div = document.createElement('div');
  div.className = 'rating';

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.textContent = i <= rating ? '★' : '☆';
    star.className = i <= rating ? 'star filled' : 'star';
    div.appendChild(star);
  }
  return div;
}

// ---------------------------
// Template: Tags
// ---------------------------
function renderTags(tags = []) {
  const ul = document.createElement('ul');
  ul.className = 'tags';

  tags.forEach(tag => {
    const li = document.createElement('li');
    li.textContent = tag;
    li.className = 'tag';
    ul.appendChild(li);
  });

  return ul;
}

// ---------------------------
// Template: Recipe Card
// ---------------------------
function createCard(recipe) {
  const article = document.createElement('article');
  article.className = 'recipe-card';

  const img = document.createElement('img');
  img.src = recipe.image;
  img.alt = recipe.name;

  const title = document.createElement('h2');
  title.textContent = recipe.name;

  const desc = document.createElement('p');
  desc.textContent = recipe.description;

  const time = document.createElement('p');
  time.className = 'time';
  time.textContent = `⏱ ${recipe.time}`;

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(desc);
  article.appendChild(renderRating(recipe.rating));
  article.appendChild(time);

  // Ingredients
  const ul = document.createElement('ul');
  recipe.ingredients.forEach(i => {
    const li = document.createElement('li');
    li.textContent = i;
    ul.appendChild(li);
  });
  article.appendChild(ul);

  // Tags (Part 2)
  article.appendChild(renderTags(recipe.tags || []));

  return article;
}

// ---------------------------
// Render recipe list
// ---------------------------
function render(list) {
  recipesListEl.innerHTML = '';
  if (!list.length) {
    let p = document.createElement('p');
    p.className = 'no-results';
    p.textContent = 'No recipes found.';
    recipesListEl.appendChild(p);
    return;
  }

  const frag = document.createDocumentFragment();
  list.forEach(r => frag.appendChild(createCard(r)));
  recipesListEl.appendChild(frag);
}

// ---------------------------
// Featured Random Recipe (Part 2)
// ---------------------------
function renderRandomRecipe() {
  const index = Math.floor(Math.random() * recipes.length);
  const recipe = recipes[index];

  featuredEl.innerHTML = '';
  const card = createCard(recipe);
  card.classList.add('featured-card');

  featuredEl.appendChild(card);
}

// ---------------------------
// Search + Sort
// ---------------------------
function applyFilters(query, sort) {
  let list = recipes.filter(r => {
    const q = query.toLowerCase();
    return (
      r.name.toLowerCase().includes(q) ||
      r.ingredients.some(i => i.toLowerCase().includes(q)) ||
      (r.tags || []).some(t => t.toLowerCase().includes(q))
    );
  });

  if (sort === 'rating-desc') list.sort((a, b) => b.rating - a.rating);
  if (sort === 'rating-asc') list.sort((a, b) => a.rating - b.rating);

  currentRecipes = list;
  render(list);
}

searchInput.addEventListener('input', e => {
  applyFilters(e.target.value.trim(), sortSelect.value);
});

sortSelect.addEventListener('change', e => {
  applyFilters(searchInput.value.trim(), e.target.value);
});

// ---------------------------
// Initialize (Part 2 requirement)
// ---------------------------
function init() {
  renderRandomRecipe();
  render(recipes);
}

init();
