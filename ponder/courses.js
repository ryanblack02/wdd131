// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
{ sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}]
};
aCourse.sections[0].instructor
const key = "code";

aCourse.name
aCourse[key]

function renderHeader(course) {
  const nameEl = document.querySelector("#courseName");
  const codeEl = document.querySelector("#courseCode");
  nameEl.textContent = course.name;
  codeEl.textContent = course.code;
}

function sectionTemplate(section) {
  return <tr>
        <td>1</td>
        <td>STC341</td>
        <td>23</td>
        <td>TTh</td>
        <td>Bro T</td>
    </tr>
}

function renderSections(sections) {
    const sectoinsEl = document.querySelector("#Sections")
  const html = sections.map(sectionTemplate)
  sectionsEl.innerHTML = html.join("")
}

renderHeader(aCourse);
renderSections(aCourse.sections)
