let arr = [3, 4, 6, 7];
function FindAverage(arr) {
  let len = arr.length;

  return (
    arr.reduce((accumulator, curr) => {
      return (accumulator = accumulator + curr);
    }, 0) / len
  );
  res;
}
console.log(FindAverage(arr));
