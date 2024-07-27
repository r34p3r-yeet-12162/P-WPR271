/* */

function OddOrEven(val) {
  // type checking
  if (!val)
    // look into truth and falsy
    return `Provide an input value`;
  if (!(val % 2)) return `${val} is even`;
  return `${val} is odd`;
}

//let answer = OddOrEven(); // supose we call the func wi no arguments
//console.log(answer);

/* Default parameters are away to provide a value to a function,
if no argument is provided */

/* function GreetUser(username = "guest") {
  // the string 'guest' will be used if no value is provided
  //if (username === undefined) username = `guest`;
  return `Hello, ${username}`;
}

console.log(GreetUser()); */

// default parameters must be written RIGHTMOST
function GreetUser(name, surname, middlename = "none", title = "Unknown") {
  return `Hello ${name} ${middlename} ${surname}. Your title is ${title}`;
}
console.log(GreetUser("John", "Doe", "Joey", "Sir"));
