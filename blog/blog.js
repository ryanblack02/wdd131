// blog.js
console.log("Blog JS loaded.");

const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    img: "https://placehold.co/150x220",
    description: "A timeless adventure of courage, friendship, and dragons.",
    genre: "Fantasy"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    img: "https://placehold.co/150x220",
    description: "A moving exploration of justice, empathy, and childhood in the Deep South.",
    genre: "Classic"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    img: "https://placehold.co/150x220",
    description: "A sweeping science fiction epic exploring politics, religion, and ecology.",
    genre: "Science Fiction"
  },
  {
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    img: "https://placehold.co/150x220",
    description: "Detective Hercule Poirot investigates a murder aboard a luxury train.",
    genre: "Mystery"
  }
];

// Select elements
const articlesContainer = document.querySelector(".articles");
const genreSelect = document.getElementById("genreSelect");

// Function to render book cards
function renderBooks(bookArray) {
  articlesContainer.innerHTML = ""; // clear
  if (bookArray.length === 0) {
    articlesContainer.innerHTML = "<p>No books found for this genre.</p>";
    return;
  }

  bookArray.forEach(book => {
    const article = document.createElement("article");
    article.innerHTML = `
      <img src="${book.img}" alt="Book cover for ${book.title}">
      <div>
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p>${book.description}</p>
      </div>
    `;
    articlesContainer.appendChild(article);
  });
}

// Filter function
function filterBooks() {
  const selected = genreSelect.value;
  if (selected === "all") {
    renderBooks(books);
  } else {
    const filtered = books.filter(book => book.genre === selected);
    renderBooks(filtered);
  }
}

// Initialize page
renderBooks(books);
genreSelect.addEventListener("change", filterBooks);
