console.log("Blog JS loaded.");

// Book data
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

// DOM elements
const articlesContainer = document.querySelector(".articles");
const genreSelect = document.getElementById("genreSelect");

// Render book cards
function renderBooks(bookArray) {
  articlesContainer.innerHTML = ""; // Clear previous content

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

// Filter books by genre
function filterBooks() {
  const selectedGenre = genreSelect.value;

  if (selectedGenre === "all") {
    renderBooks(books);
  } else {
    const filteredBooks = books.filter(book => book.genre === selectedGenre);
    renderBooks(filteredBooks);
  }
}

// Initialize books on page load
renderBooks(books);
genreSelect.addEventListener("change", filterBooks);

// ---------------------
// Stretch: Form Validation
// ---------------------
const form = document.getElementById("paymentForm");
const nameInput = document.getElementById("name");
const ccInput = document.getElementById("cc");
const errorDiv = document.getElementById("errorMessages");

function showErrors(errors) {
  errorDiv.innerHTML = errors.map(err => `<p>${err}</p>`).join("");
}

function validateForm(event) {
  let isValid = true;
  let errors = [];

  // Name validation
  if (nameInput.value !== "Bob") {
    isValid = false;
    errors.push("Only people named Bob can submit the form.");
  }

  // Credit card validation
  if (ccInput.value !== "1234123412341234") {
    isValid = false;
    errors.push("Invalid credit card number. Use 1234123412341234 for testing.");
  }

  if (!isValid) {
    event.preventDefault(); // stop form submission
    showErrors(errors);
    return false;
  }

  return true; // form is valid
}

// Attach listener
form.addEventListener("submit", validateForm);
