function showParents() {
  document.getElementById("output").innerHTML = "Parent Management Section";
}

function showLessons() {
  document.getElementById("output").innerHTML = "Lesson Manager Section";
}

function showSchedule() {
  document.getElementById("output").innerHTML = "Reminder Scheduling Section";
}
let parents = [];

function addParent() {
  const parentName = document.getElementById("parentName").value;
  const parentPhone = document.getElementById("parentPhone").value;
  const childName = document.getElementById("childName").value;

  const parentData = {
    parentName,
    parentPhone,
    childName
  };

  parents.push(parentData);

  displayParents();
}

function displayParents() {
  const parentList = document.getElementById("parentList");

  parentList.innerHTML = "";

  parents.forEach((parent) => {
    parentList.innerHTML += `
      <li>
        ${parent.parentName} - ${parent.parentPhone} - Child: ${parent.childName}
      </li>
    `;
  });
          }
