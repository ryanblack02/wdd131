// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" }
  ],

  // 🔹 Stretch: combine enroll and drop logic into one function
  changeEnrollment: function (sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else if (this.sections[sectionIndex].enrolled > 0) {
        this.sections[sectionIndex].enrolled--;
      }
      renderSections(this.sections);
    } else {
      alert("Section not found.");
    }
  }
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

// event handlers
function enrollStudent() {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, true);
}

function dropStudent() {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, false);
}

// event listeners
document.querySelector("#enrollStudent").addEventListener("click", enrollStudent);
document.querySelector("#dropStudent").addEventListener("click", dropStudent);

// initial render
renderHeader(aCourse);
renderSections(aCourse.sections);
