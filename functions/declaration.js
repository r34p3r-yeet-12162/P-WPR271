/* There are three forms of syntax.You will notice that forms 2 and 3 store functions as a value in a variable */

// 1. function declaration
function foo() {
  // do something
  console.log("function declaration");
}

// 2. function expression: we are storing a function inside a variable
let bar = function () {
  // do something
  console.log("function expression");
};
// 3. arrow functions: Modern syntax for function expressions
let baz = () => {
  // do something
  console.log("arrow function ");
};
