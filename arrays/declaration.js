/* Arrays store a bunch of related values
JS arrays use 0-based indexing.
There are three ways to declare arrays
*/

// 1. Arral Literal
let literalArr = []; // Brackets are used for array indexing.

//2. Array constructor
let constructorArrEmpty = new Array(); //the new keyword invokes the type constructor
let constructorArrWithInitLength = new Array(3); // the array has a length of 3
let constructorArrWithInitialValues = new Array(3, 3); // the array has a length of 2, with values [3,3]

//3. Array.from
let str = "John";
let arrFrom = Array.from(str); //
console.log(str[0]); // logs 'J'
