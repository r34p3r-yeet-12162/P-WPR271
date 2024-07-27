let matrix = [];

// push method
matrix.push([12, 34, 6, 23]);
matrix.push([1, 4, 61, 13]);
matrix.push([20, 34, 69, 40]);

//
console.log(matrix);

// iteration
matrix.forEach((arr) => {
  arr.forEach((elem) => {
    // which numbers are odd or even ...
    console.log(elem);
  });
  console.log("\n");
});
