/*  */

function OddOrEven(val) {
  // a PARAMETER is a placeholder for a future value
  // return `The function stops here..`;
  // let val = 23; // let us pass val as a parameter
  let result = val % 2;
  if (result === 0) {
    return `${val} is even`;
  } else {
    return `${val} is odd`;
  }
}

let answer = OddOrEven(23); // The actual value that is provided to the function is called an ARGUMENT
console.log(answer);

answer = OddOrEven(2);
console.log(answer);
