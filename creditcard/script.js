const cardContainer = document.querySelector(".card-container");
const cvvInput = document.getElementById("cvv");
const cardNumber = document.getElementById("card-number");

// Flip card when CVV is focused
cvvInput.addEventListener("focus", () => cardContainer.classList.add("flipped"));
cvvInput.addEventListener("blur", () => cardContainer.classList.remove("flipped"));

// Format card number input
cardNumber.addEventListener("input", e => {
  let value = e.target.value.replace(/\D/g,'');
  value = value.match(/.{1,4}/g)?.join(" ") || "";
  e.target.value = value;
});

// Restrict numbers for expiry and CVV
["card-month","card-year","cvv"].forEach(id => {
  document.getElementById(id).addEventListener("input", e => {
    e.target.value = e.target.value.replace(/\D/g,'');
  });
});
