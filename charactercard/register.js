// Retrieve existing participants from localStorage or start empty
let participants = JSON.parse(localStorage.getItem("participants")) || [];

// Display all participants on the page
function displayParticipants() {
  const container = document.getElementById("participants");
  container.innerHTML = "";

  participants.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("participant-card");
    card.innerHTML = `
      <h3>${p.fname} ${p.lname}</h3>
      <p>Level: ${p.level}</p>
    `;
    container.appendChild(card);
  });
}

// Add a new participant from form input
function addParticipant(event) {
  event.preventDefault();

  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const level = document.getElementById("level").value;

  if (!fname || !lname || !level) {
    alert("Please fill in all fields.");
    return;
  }

  const newParticipant = { fname, lname, level };
  participants.push(newParticipant);
  localStorage.setItem("participants", JSON.stringify(participants));

  // Reset the form and re-render participants
  document.getElementById("registrationForm").reset();
  displayParticipants();
}

// Event listeners
document.getElementById("registrationForm").addEventListener("submit", addParticipant);
window.addEventListener("DOMContentLoaded", displayParticipants);
