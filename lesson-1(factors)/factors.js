/* The aim of this demo/ exercise, is to introduce to 
variables, data types, looping constructs, and decision making  */

// write a program that finds and prints the factors for a given number

let number = 20; // declare and initilaising a number variable

// can we find a divisor that completely divides number (i.e. divides with remainder of 0)
for (let divisor = 2; divisor < number; divisor++) {
  let remainder = number % divisor;
  if (remainder === 0) {
    // to compare we use == (checks value only) OR === (checks value and type)
    console.log("We found a factor: " + divisor);
  }
}
// Exercise 1: How do you make this program better?
// Send an improved versio via Teams message [15 minutes]
// T. Mkwaira
