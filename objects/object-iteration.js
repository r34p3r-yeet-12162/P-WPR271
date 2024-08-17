let studentArr = ["John", "Doe", 45];

for (let i = 0; i < studentArr.length; i++) {
  const element = studentArr[i];
  console.log(element);
}

let studentObj = {
  studentName: "John",
  studentSurname: "Doe",
  studentAverage: 45,
};

//For in: Modify the loop so that we get "John Doe 45"
for (const iterator in studentObj) {
  console.log(studentObj[iterator]);
}

// A more explicit forin loop
for (const key in object) {
    // Only use the property if it is indeed a property of the curr obj that is being iterated
    // It prevents the call to an undefined prop from being escalated up the 'inheritence' chain
    if (Object.hasOwnProperty.call(studentObj, key)) {
      const element = studentObj[key];
    }
}