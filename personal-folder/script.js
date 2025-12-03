// -----------------------------------------------------
// DAILY MOTIVATIONAL QUOTES
// -----------------------------------------------------

// Array of quotes (used with map later)
[
  "You’ve got this!",
  "Small steps still move you forward.",
  "Believe in the student you’re becoming.",
  "Progress, not perfection.",
  "You are capable of amazing things.",
  "Little progress is still progress.",
  "Trust the process — growth takes time.",
  "Your future self is proud of you.",
  "Consistency beats intensity.",
  "One day at a time.",
  "You’re doing better than you think.",
  "Success is built on daily habits.",
  "Your potential is endless.",
  "Hard work pays off — stay with it.",
  "You’re stronger than your doubts.",
  "Every accomplishment starts with the decision to try.",
  "Focus on progress, not speed.",
  "Keep going — you’re almost there.",
  "One small step today makes tomorrow easier.",
  "Don’t give up — great things take time.",
  "Believe in your ability to improve.",
  "Start where you are. Use what you have. Do what you can.",
  "Your only limit is your mindset.",
  "Push yourself because no one else will do it for you.",
  "You’re growing every day — keep going.",
  "Your dreams are worth the effort.",
  "Success is a series of small wins.",
  "You’re capable of more than you know.",
  "Don’t stop until you’re proud.",
  "Focus on what you can control.",
  "You don’t need to be perfect to be amazing.",
  "Show up even when it’s hard.",
  "You can do hard things.",
  "Today is a great day to try.",
  "Your best is enough.",
  "If you get tired, learn to rest — not quit.",
  "Failing isn’t the opposite of success; it’s part of it.",
  "Effort is never wasted.",
  "You’re making progress even when it feels slow.",
  "Your goals are possible — keep working.",
  "Keep believing in yourself.",
  "Small habits lead to big results.",
  "Stay positive. Work hard. Make it happen.",
  "Choose progress over excuses.",
  "Every step gets you closer.",
  "Don’t be afraid to start again.",
  "Learn, grow, improve — repeat.",
  "Give yourself credit for how far you’ve come.",
  "Keep that momentum going — you’re doing great."
]


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
