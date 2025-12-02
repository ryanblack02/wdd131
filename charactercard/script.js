// Character object
const character = {
  name: "Swamp Beast Diplomat",
  class: "Druid",
  level: 5,
  health: 100,
  image: "swampbeast.png",

  attacked() {
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      alert("The character has died!");
    }
    updateDisplay();
  },

  levelUp() {
    this.level += 1;
    updateDisplay();
  }
};

// Update UI
function updateDisplay() {
  document.getElementById("charName").textContent = character.name;
  document.getElementById("class").textContent = "Class: " + character.class;
  document.getElementById("level").textContent = "Level: " + character.level;
  document.getElementById("health").textContent = "Health: " + character.health;
}

document.getElementById("attackBtn").addEventListener("click", () => {
  character.attacked();
});

document.getElementById("levelBtn").addEventListener("click", () => {
  character.levelUp();
});

// Initial load
updateDisplay();

