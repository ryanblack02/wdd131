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
// Goal Tracker
// ----------------------------
document.getElementById("save-goal").addEventListener("click", () => {
  const goal = document.getElementById("goal-input").value;

  if (goal.trim() === "") {
    alert("Please enter a goal.");
    return;
  }

  document.getElementById("saved-goal").textContent = "Your Goal: " + goal;
  document.getElementById("complete-goal").style.display = "inline-block";
});

document.getElementById("complete-goal").addEventListener("click", () => {
  document.getElementById("goal-status").textContent = "Goal completed! Great job!";
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
