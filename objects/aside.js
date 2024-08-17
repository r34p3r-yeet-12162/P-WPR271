// functions can be (are) used to create objects
// recall that functions are values
function Person(nameParam, surnameParam) {
  // the following fields will be set when we call the contructor
  this.name = nameParam;
  this.surname = surnameParam;

  this.getName = function () {
    return this.name;
  };
  this.getSurname = function () {
    return this.surname;
  };
}
let x = new Person("John", "Doe");
console.log(x.getName());
console.log(x.getSurname());

// We can build objects based on the Person template
let john = new Person("John");
let peter = new Person("Peter");
console.log(john.getName());

// syntactic sugar. Under the hood, JS is build a function that contaisn other functions
//
class PersonB {
  constructor(nameParam, ageParam) {
    this.name = nameParam;
    this.age = ageParam;
  }
}

let anotherPerson = new PersonB("Bob");

class PersonC extends PersonB {}

// How do you use inbuilt getters and setters in JS?
