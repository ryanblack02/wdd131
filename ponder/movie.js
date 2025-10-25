const movies = [
  {
    title: "Spider-Man: Into the Spider-Verse",
    date: "Dec 14, 2018",
    description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
    imgAlt: "Miles Morales swinging through the city",
    ages: "10+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "The Other Side of Heaven",
    date: "December 14, 2001",
    description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
    imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
    ages: "10+",
    genre: "Drama/Religious",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Luca",
    date: "June 18, 2021",
    description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
    imgAlt: "Luca and Alberto standing on the beach",
    ages: "6+",
    genre: "Family/Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "17 Miracles",
    date: "June 3, 2011",
    description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
    imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
    ages: "12+",
    genre: "Historical/Religious",
    stars: "⭐⭐⭐⭐"
  }
];

// Select the section where movies will be displayed
const movieSection = document.querySelector("#now-showing");

// Loop through the array and build each movie card
movies.forEach(movie => {
  // Create the article element (the movie card)
  const article = document.createElement("article");

  // Create and fill the image
  const img = document.createElement("img");
  img.src = movie.imgSrc;
  img.alt = movie.imgAlt;

  // Title
  const title = document.createElement("h3");
  title.textContent = movie.title;

  // Release Date
  const date = document.createElement("p");
  date.innerHTML = `<strong>Release Date:</strong> ${movie.date}`;

  // Description
  const description = document.createElement("p");
  description.textContent = movie.description;

  // Genre and rating info
  const details = document.createElement("p");
  details.innerHTML = `<strong>Rated:</strong> ${movie.ages} | <strong>Genre:</strong> ${movie.genre}`;

  // Stars
  const stars = document.createElement("p");
  stars.textContent = movie.stars;

  // Add a button
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Read More";
  button.setAttribute("aria-label", `Read more about ${movie.title}`);

  // Append all elements to the article
  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(description);
  article.appendChild(details);
  article.appendChild(stars);
  article.appendChild(button);

  // Append the article to the section
  movieSection.appendChild(article);
});
