// ----------------------------
// Motivational Quotes
// ----------------------------
const quotes = [
  "You’ve got this!",
  "Small steps still move you forward.",
  "Believe in the student you're becoming.",
  "Progress, not perfection.",
  "You are capable of amazing things."
];

document.getElementById("quote-btn").addEventListener("click", () => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = q;
});

// ----------------------------
// Goal Tracker with LocalStorage
// ----------------------------
const goalInput = document.getElementById("goal-input");
const savedGoal = document.getElementById("saved-goal");
const completeBtn = document.getElementById("complete-goal");
const goalStatus = document.getElementById("goal-status");

// Load saved goal on page load
const storedGoal = localStorage.getItem("dailyGoal");
const storedStatus = localStorage.getItem("goalCompleted");

if (storedGoal) {
  savedGoal.textContent = "Your Goal: " + storedGoal;
  completeBtn.style.display = "inline-block";
}

if (storedStatus === "true") {
  goalStatus.textContent = "Goal completed! Great job!";
}

// Save goal
document.getElementById("save-goal").addEventListener("click", () => {
  const goal = goalInput.value.trim();

  if (goal === "") {
    alert("Please enter a goal.");
    return;
  }

  savedGoal.textContent = "Your Goal: " + goal;
  completeBtn.style.display = "inline-block";

  // Save to localStorage
  localStorage.setItem("dailyGoal", goal);
  localStorage.setItem("goalCompleted", "false");

  goalStatus.textContent = "";
});

// Mark complete
completeBtn.addEventListener("click", () => {
  goalStatus.textContent = "Goal completed! Great job!";
  localStorage.setItem("goalCompleted", "true");
});

// ----------------------------
// Mood Slider
// ----------------------------
document.getElementById("mood-slider").addEventListener("input", (event) => {
  const value = event.target.value;
  const message = document.getElementById("mood-message");

  if (value <= 3) {
    message.textContent = "Rough day? You're stronger than you think.";
  } else if (value <= 7) {
    message.textContent = "You're doing alright. Keep going!";
  } else {
    message.textContent = "Love the energy! Keep it up!";
  }
});
