document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------
  // Motivational Quotes
  // ------------------------------
  const quotes = [
    "You’ve got this!",
    "Small steps still move you forward.",
    "Believe in the student you’re becoming.",
    "Progress, not perfection.",
    "You are capable of amazing things.",
    "Little progress is still progress.",
    "Trust the process. Growth takes time.",
    "Your future self is proud of you.",
    "Consistency beats intensity.",
    "One day at a time.",
    "You’re doing better than you think.",
    "Success is built on daily habits.",
    "Your potential is endless.",
    "Hard work pays off. Stay with it.",
    "You’re stronger than your doubts.",
    "Every accomplishment starts with the decision to try.",
    "Focus on progress, not speed.",
    "Keep going! You’re almost there.",
    "One small step today makes tomorrow easier.",
    "Don’t give up! Great things take time.",
    "Believe in your ability to improve.",
    "Start where you are. Use what you have. Do what you can.",
    "Your only limit is your mindset.",
    "Push yourself because no one else will do it for you.",
    "You’re growing every day! Keep going.",
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
    "If you get tired, learn to rest. Not quit.",
    "Failing isn’t the opposite of success; it’s part of it.",
    "Effort is never wasted.",
    "You’re making progress even when it feels slow.",
    "Your goals are possible. Keep working.",
    "Keep believing in yourself.",
    "Small habits lead to big results.",
    "Stay positive. Work hard. Make it happen.",
    "Choose progress over excuses.",
    "Every step gets you closer.",
    "Don’t be afraid to start again.",
    "Learn, grow, improve, and repeat.",
    "Give yourself credit for how far you’ve come.",
    "Keep that momentum going. You’re doing great."
  ];

  const quoteBtn = document.getElementById("quote-btn");
  const quoteText = document.getElementById("quote");

  quoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  });

  // ------------------------------
  // Daily Check-In System
  // ------------------------------
  const goalInput = document.getElementById("goal-input");
  const saveGoalBtn = document.getElementById("save-goal");
  const savedGoal = document.getElementById("saved-goal");
  const completeBtn = document.getElementById("complete-goal");
  const goalStatus = document.getElementById("goal-status");

  const moodSlider = document.getElementById("mood-slider");
  const moodMessage = document.getElementById("mood-message");

  const historyList = document.getElementById("history-list");

  // ------------------------------
  // Helper: Date Key
  // ------------------------------
  function getTodayKey() {
    return new Date().toISOString().split("T")[0];
  }

  function loadEntry(dateKey) {
    const entryJSON = localStorage.getItem(`entry-${dateKey}`);
    return entryJSON ? JSON.parse(entryJSON) : null;
  }

  function saveEntry(dateKey, goal, completed, mood) {
    const entry = { date: dateKey, goal, completed, mood };
    localStorage.setItem(`entry-${dateKey}`, JSON.stringify(entry));
  }

  function updateMoodMessage(value) {
    value = Number(value);
    if (value <= 3) {
      moodMessage.textContent = "Rough day? You're stronger than you think.";
    } else if (value <= 7) {
      moodMessage.textContent = "You’re doing alright. Keep going!";
    } else {
      moodMessage.textContent = "Love the energy! Keep it up!";
    }
  }

  // ------------------------------
  // Initialize Today
  // ------------------------------
  const todayKey = getTodayKey();
  const todayEntry = loadEntry(todayKey);

  if (todayEntry) {
    savedGoal.textContent = "Your Goal: " + todayEntry.goal;
    completeBtn.style.display = "inline-block";
    goalStatus.textContent = todayEntry.completed ? "Goal completed! Great job!" : "";
    moodSlider.value = todayEntry.mood;
    updateMoodMessage(todayEntry.mood);
  }

  // ------------------------------
  // Save Goal
  // ------------------------------
  saveGoalBtn.addEventListener("click", () => {
    const goal = goalInput.value.trim();
    if (!goal) {
      alert("Please enter a goal.");
      return;
    }
    savedGoal.textContent = "Your Goal: " + goal;
    completeBtn.style.display = "inline-block";
    goalStatus.textContent = "";
    saveEntry(todayKey, goal, false, moodSlider.value);
    renderHistory();
  });

  // ------------------------------
  // Complete Goal
  // ------------------------------
  completeBtn.addEventListener("click", () => {
    const current = loadEntry(todayKey);
    if (current) {
      current.completed = true;
      saveEntry(todayKey, current.goal, true, current.mood);
      goalStatus.textContent = "Goal completed! Great job!";
      renderHistory();
    }
  });

  // ------------------------------
  // Update Mood
  // ------------------------------
  moodSlider.addEventListener("input", (event) => {
    const value = event.target.value;
    updateMoodMessage(value);

    const current = loadEntry(todayKey);
    if (current) {
      current.mood = value;
      saveEntry(todayKey, current.goal, current.completed, current.mood);
      renderHistory();
    }
  });

  // ------------------------------
  // Render History
  // ------------------------------
  function renderHistory() {
    const entries = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("entry-")) {
        const entry = JSON.parse(localStorage.getItem(key));
        entries.push(entry);
      }
    }

    // Sort by date descending
    entries.sort((a, b) => b.date.localeCompare(a.date));

    // Display in list
    historyList.innerHTML = "";
    entries.forEach(e => {
      const li = document.createElement("li");
      li.textContent = `${e.date} — Goal: "${e.goal}" | Completed: ${e.completed ? "✅" : "❌"} | Mood: ${e.mood}/10`;
      historyList.appendChild(li);
    });
  }

  renderHistory();

});
