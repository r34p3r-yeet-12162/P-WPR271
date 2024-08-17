/* Number, String ('',"", ``), Boolean,Null, Undefined, BigInt, Array, Object, Map (WeakMap), Set (WeakSet)*/

let mark = 23;
// what if we need a bunch of marks?
let marksArr = [23, 34, 56, 23]; // .....

// Arrays are zero-based,meaning we use offsets to access values
console.log(marksArr[1]); // marks 1 is a variable

// There is a limitation, zero-based indexing does not describe the value
// JS provides a way to build values based on keys (key:value pairs)

// let marksArr = [23, 34, 56, 23]; // This is a literal array
// markArr[0]
let marksObj = { john: 23, joe: 34, jane: 56, jack: 3 }; // This is a literal object
// An object is a collection of properties, and the property names map to property values
// An object is an encapsulation of properties (prop-name + prop-value = property) that describe state (value) and behaviour
// e.g. the property name 'john' maps to the value 23

console.log(marksObj["john"]);
console.log(marksObj.john); // we can also use DOT notation to access props

//
console.log(typeof marksArr);

/* Objects typically contain state and actions */
// Example 2:

let student = {
  id: 1,
  program: "BIT",
  // Property values in an object can be anything
  subjects: ["WPR171", "WPR271", "DBD171"], // the subjects property lists the subjects for the programme
};
