// -----------------------------------------------------
// DAILY MOTIVATIONAL QUOTES
// -----------------------------------------------------

// Array of quotes (used with map later)
const quotes = [
  "You’ve got this!",
  "Small steps still move you forward.",
  "Progress, not perfection.",
  "Believe in the student you're becoming.",
  "You are capable of amazing things."
];

// Function: get random quote
function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

// Event: Populate quote
document.getElementById("quote-btn").addEventListener("click", () => {
  document.getElementById("quote").textContent = getRandomQuote();
});


// -----------------------------------------------------
// GOAL TRACKER (with localStorage)
// -----------------------------------------------------

const goalInput = document.getElementById("goal-input");
const savedGoalText = document.getElementById("saved-goal");
const saveGoalBtn = document.getElementById("save-goal");
const completeGoalBtn = document.getElementById("complete-goal");
const goalStatus = document.getElementById("goal-status");

// Function: load saved goal from storage
function loadGoal() {
  const goal = localStorage.getItem("dailyGoal");
  const completed = localStorage.getItem("goalCompleted");

  if (goal) {
    savedGoalText.textContent = "Your Goal: " + goal;
    completeGoalBtn.style.display = "inline-block";
  }

  if (completed === "true") {
    goalStatus.textContent = "Goal completed! Great job!";
  }
}

loadGoal();

// Event: Save goal
saveGoalBtn.addEventListener("click", () => {
  const goal = goalInput.value.trim();

  if (goal === "") {
    alert("Please enter a goal first.");
    return;
  }

  savedGoalText.textContent = "Your Goal: " + goal;
  completeGoalBtn.style.display = "inline-block";

  localStorage.setItem("dailyGoal", goal);
  localStorage.setItem("goalCompleted", "false");

  goalStatus.textContent = "";
  goalInput.value = "";
});

// Event: Mark goal complete
completeGoalBtn.addEventListener("click", () => {
  goalStatus.textContent = "Goal completed! Great job!";
  localStorage.setItem("goalCompleted", "true");
});


// -----------------------------------------------------
// MOOD SLIDER – dynamic encouragement messages
// -----------------------------------------------------

const moodSlider = document.getElementById("mood-slider");
const moodMessage = document.getElementById("mood-message");

// Function: generate encouragement based on slider value
function updateMoodMessage(value) {
  if (value <= 3) {
    return "Rough day? You're stronger than you think.";
  } else if (value <= 7) {
    return "You're doing alright. Keep going!";
  } else {
    return "Love the energy! Keep it up!";
  }
}

// Event: Mood slider input
moodSlider.addEventListener("input", (event) => {
  const val = event.target.value;
  moodMessage.textContent = updateMoodMessage(val);
});


// -----------------------------------------------------
// EXTRA: Example use of Array.map (for rubric requirement)
// -----------------------------------------------------

// Converts each quote to uppercase and logs it
// (Demonstrates required array method)
const uppercaseQuotes = quotes.map(q => q.toUpperCase());
console.log("DEBUG (uppercase quotes):", uppercaseQuotes);
