/* 
The return statement is a way to:
    1. pass values to the calling program
    2. stop the execution of a function

JS functions return void/ undefined by default 

*/

function OddOrEven() {
  // return `The function stops here..`;
  let val = 23;
  let result = val % 2;
  if (result === 0) {
    return `${val} is even`;
  } else {
    return `${val} is odd`;
  }
}

let answer = OddOrEven();
console.log("The answer is: ", answer);
