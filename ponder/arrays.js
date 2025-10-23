// -------------------------
// Activity 1 - map()
// -------------------------
const steps = ["one", "two", "three"];

// Function that wraps each step in <li> tags
const listTemplate = (step) => `<li>${step}</li>`;

// Map steps to HTML list items
const stepsHtml = steps.map(listTemplate);

// Display the list inside the <ul id="myList">
document.querySelector("#myList").innerHTML = stepsHtml.join("");


// -------------------------
// Activity 2 - map() again
// -------------------------
const grades = ["A", "B", "A", "C"];

// Function to convert letter grade to points
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  } else {
    points = 0; // For F or anything else
  }
  return points;
}

// Convert each grade into grade points
const gpaPoints = grades.map(convertGradeToPoints);

console.log("Grade points:", gpaPoints);


// -------------------------
// Activity 3 - reduce()
// -------------------------
const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
const gpa = pointsTotal / gpaPoints.length;

console.log("Total points:", pointsTotal);
console.log("GPA:", gpa.toFixed(2));


// -------------------------
// Activity 4 - filter()
// -------------------------
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

// Filter fruits shorter than 6 letters
const shortFruits = fruits.filter((fruit) => fruit.length < 6);

console.log("Short fruits:", shortFruits);


// -------------------------
// Activity 5 - indexOf()
// -------------------------
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;

// Find the index of lucky number
const luckyIndex = numbers.indexOf(luckyNumber);

console.log("Lucky number index:", luckyIndex);
