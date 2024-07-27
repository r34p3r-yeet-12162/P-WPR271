// we declare a function using the function keyword
// we will also use a parameter called number
// parameters show how and where a future value will be used in the function body.

function FindDivisors(number) {
  // let number = 20;

  for (let divisor = 2; divisor < number; divisor++) {
    let remainder = number % divisor;
    if (remainder === 0) {
      // to compare we use == (checks value only) OR === (checks value and type)
      console.log("We found a factor: " + divisor);
    }
  }
}

FindDivisors(20); // here we call the function with an argument
