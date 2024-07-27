let nums = [2, 5, 7, 8, 1, 2, 8];

/* let res = nums.map((val) => {
  return val * 2;
}); */

// Arrow functions can have an explicit return, or an implicit one
// If it is a one-liner, you can do the following with implicit return
let res = nums.map((val) => val * 2); // and for a single arg, the brackets are not neccesary

console.log(`The result is ${res}`);
