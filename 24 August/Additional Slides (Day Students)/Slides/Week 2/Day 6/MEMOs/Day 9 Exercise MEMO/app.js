function Lecturer(name, surname, empNumber, course, modules) {
    this.name = name;
    this.surname = surname;
    this.empNumber = empNumber;
    this.course = course;
    this.modules = modules;
    this.jobDescription = function() {
      return `Lecturer ${this.name} lectures ${this.modules.join(", ")}`;
    };
  }
  
  function getLecturerData() {
    const name = prompt("Enter your name:");
    const surname = prompt("Enter your surname:");
    const empNumber = prompt("Enter your employee number:");
    const course = prompt("Enter your course:");
    const modules = [];
  
    for (let i = 0; i < 3; i++) {
      modules.push(prompt(`Enter module ${i + 1}:`));
    }
  
    return new Lecturer(name, surname, empNumber, course, modules);
  }
  
  function displayLecturerInfo(lecturer) {
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
      <p>Name: ${lecturer.name}</p>
      <p>Surname: ${lecturer.surname}</p>
      <p>Employee Number: ${lecturer.empNumber}</p>
      <p>Course: ${lecturer.course}</p>
      <p>Modules taught by Sir ${lecturer.name}: ${lecturer.modules.join(", ")}</p>
      <p>Job Description: ${lecturer.jobDescription()}</p>
    `;
  
    document.body.appendChild(outputDiv);
  }
  
  const lecturer = getLecturerData();
  displayLecturerInfo(lecturer);
  