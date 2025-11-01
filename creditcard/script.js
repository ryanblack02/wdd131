const cardContainer = document.querySelector(".card-container");
const cvvInput = document.getElementById("cvv-input");
const otherInputs = document.querySelectorAll("input:not(#cvv-input)");
const cardNumber = document.getElementById("card-number");

// Flip card when entering CVV
cvvInput.addEventListener("focus", () => {
  cardContainer.classList.add("flipped");
});
cvvInput.addEventListener("blur", () => {
  cardContainer.classList.remove("flipped");
});

// Format card number input (1234 5678 9012 3456)
cardNumber.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  value = value.match(/.{1,4}/g)?.join(" ") || "";
  e.target.value = value;
});
