let student = {
  id: 1,
  program: "BIT",
  // Property values in an object can be anything
  subjects: ["WPR171", "WPR271", "DBD171"], // the subjects property lists the subjects for the programme
};

// We can access the prop values by referencing the prop name
// using the format objectName['propName'] e.g.

console.log(student["program"]); // prints 'BIT'

/* Dynamic properties in JS */
// suppose we have a group of students, and we need to perform lookups.
// we want to GRAB the mark of a student based on their name

let classOfStudents = {
  peter: 23,
  paul: 33,
  pertunia: 43,
  "some prop": true, // multi-word prop names must be quoted
};

// Bracket notation also allows us to work with multi-word prop names
//classOfStudents."some prop" // error
classOfStudents["some prop"]; // this works
function getStudentMark(studentName) {
  return classOfStudents[studentName];
}
console.log(getStudentMark("peter"));
console.log(getStudentMark("paul"));
console.log(getStudentMark("pertunia"));
console.log(getStudentMark("joe"));

// Example 2:
let studentObj = {
  studentName: "John",
  studentSurname: "John",
  studentAverage: 45,

  //
  getFullName: () => {
    // We will use the keyword 'this' to reference props of this object
    return `${this.studentName} ${this.studentSurname}`;
  },
  getAverage: () => {
    this.studentAverage;
  },
};
console.log(studentObj.getAverage());
