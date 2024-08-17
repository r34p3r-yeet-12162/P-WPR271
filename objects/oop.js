// functions can be (are) used to create objects
// recall that functions are values
function Person(nameParam) {
  let name;
  function setName() {
    this.name = nameParam;
  }
}

let john = new Person("John");

