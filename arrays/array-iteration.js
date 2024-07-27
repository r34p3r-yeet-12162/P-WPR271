let nums = [2, 5, 7, 8, 1, 2, 8];
/* for (let index = 0; index <nums.length; index++) {
    const element = nums[index];
    console.log(element)
    
}
 */
function PrintVal(val) {
  console.log(val);
}
/* The foreach is an iterator that gives you access to to all the elements of an array
It takes a callback function */
//nums.forEach(PrintVal); // A callback function is a function that is passed as an arg to another function

// The callback can also be written directly inside the forEach
/* nums.forEach(function PrintVal(val) {
  console.log(val);
}); */

// Unless if we are using recursion, the function shoild be anonymous
/* nums.forEach(function (val) {
  console.log(val);
});
 */
// Modern syntax can also be used. This is the typical form that you will see.
/* nums.forEach((val) => {
  console.log(val);
}); */

function Doubler(val) {
  val * 2;
}

//nums.forEach(Doubler);
let resArr = [];
let i = 0;
let res = nums.forEach((val) => {
  resArr[i] = val * 2;
  i++;
});

console.log(`The result is ${res}`);
