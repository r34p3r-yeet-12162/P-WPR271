let nums = [2, 5, 7, 8, 1, 2, 8];
let res = nums.filter((num) => {
  return num % 2 === 0; // Used to return a new array based on the elements that meet a certain condition
});

console.log(res);

/* Suppose we hava an array of marks, and that the students did not perform well.
We want to add 10% to each of the marks, then we want see which students have now passed
*/

let marksArr = [10, 20, 50];
function Modifymarks(arr) {
  // do something

  // return [11, 22, 55]
  return arr.map((elem) => {
    return elem + elem * 0.1;
  });
}

console.log(Modifymarks(marksArr));

function CheckWhoPassed(arr) {
  // do something
  return [55];
}
