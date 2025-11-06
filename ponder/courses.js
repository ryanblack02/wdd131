// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" }
  ],
};

// display course name and code
function renderHeader(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

// create HTML for one section
function sectionTemplate(section) {
  return `
    <tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    </tr>
  `;
}

// display all sections
function renderSections(sections) {
  const sectionsEl = document.querySelector("#sections");
  sectionsEl.innerHTML = sections.map(sectionTemplate).join("");
}

// find section by number
function findSection(sectionNum) {
  return aCourse.sections.find(sec => sec.sectionNum === parseInt(sectionNum));
}

// increase enrolled count
function enrollStudent() {
  const sectionNum = document.querySelector("#sectionNumber").value;
  const section = findSection(sectionNum);
  if (section) {
    section.enrolled++;
    renderSections(aCourse.sections);
  } else {
    alert("Section not found.");
  }
}

// decrease enrolled count
function dropStudent() {
  const sectionNum = document.querySelector("#sectionNumber").value;
  const section = findSection(sectionNum);
  if (section && section.enrolled > 0) {
    section.enrolled--;
    renderSections(aCourse.sections);
  } else {
    alert("Section not found or no students to drop.");
  }
}

// event listeners
document.querySelector("#enrollStudent").addEventListener("click", enrollStudent);
document.querySelector("#dropStudent").addEventListener("click", dropStudent);

// initial render
renderHeader(aCourse);
renderSections(aCourse.sections);
