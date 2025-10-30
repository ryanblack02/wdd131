// Helper function to display errors
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map(error => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

// Toggle payment details
function togglePaymentDetails(event) {
  const form = document.querySelector("#checkoutForm");
  const creditCardContainer = document.getElementById("creditCardContainer");
  const paypalContainer = document.getElementById("paypalContainer");
  const creditCardInput = document.getElementById("creditCard");
  const paypalInput = document.getElementById("paypalUsername");

  // Hide both initially
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");
  creditCardInput.required = false;
  paypalInput.required = false;

  // Show selected payment method
  const method = event.target.value;
  if (method === "creditCard") {
    creditCardContainer.classList.remove("hide");
    creditCardInput.required = true;
  } else if (method === "paypal") {
    paypalContainer.classList.remove("hide");
    paypalInput.required = true;
  }
}

// Form validation
function validateForm(event) {
  const form = event.target;
  const nameInput = form.querySelector("#name");
  const paymentMethod = form.querySelector("#paymentMethod").value;
  const creditCardInput = form.querySelector("#creditCard");
  const paypalInput = form.querySelector("#paypalUsername");
  const errors = [];
  let isValid = true;

  // Name validation
  if (nameInput.value.trim() !== "Bob") {
    isValid = false;
    errors.push("Only people named Bob can submit the form.");
  }

  // Payment method validation
  if (paymentMethod === "") {
    isValid = false;
    errors.push("Please select a payment method.");
  }

  // Credit card validation (only if visible)
  if (paymentMethod === "creditCard" && creditCardInput.value.trim() !== "1234123412341234") {
    isValid = false;
    errors.push("Invalid credit card number. Use 1234123412341234 for testing.");
  }

  // PayPal validation (only if visible)
  if (paymentMethod === "paypal" && paypalInput.value.trim() === "") {
    isValid = false;
    errors.push("PayPal username is required.");
  }

  // Show errors and prevent submission if invalid
  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }

  return true; // form is valid
}

// Attach event listeners
document.querySelector("#checkoutForm").addEventListener("submit", validateForm);
document.querySelector("#paymentMethod").addEventListener("change", togglePaymentDetails);
