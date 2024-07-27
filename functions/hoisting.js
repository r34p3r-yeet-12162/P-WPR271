/* HOISTING is a term that means to 'lift' */

foo();
function foo() {
  // do something
  console.log("function declaration");
}

// 1. function declaration: This is hoisted

// 2. function expression: This is NOT hoisted
let bar = function () {
  // do something
  console.log("function expression");
};
// 3. arrow functions: This is NOT hoisted
let baz = () => {
  // do something
  console.log("arrow function ");
};

bar(); // function calls for FUNCTION EXPRESSION form, must be done after declaration statement
baz(); // function calls for ARROW FUNCTION  form, must be done after declaration statement
