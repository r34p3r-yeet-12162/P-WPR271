/* 1. Literal */
//  This literally uses the object notation (curly brackets)
let obj1 = {
    prop1: 'foo', // Property names and property values are seperated using a semi-colon
    prop2: 'bar', // Entire properties are delimited by a comma
    prop3: 'baz',
    // property values can be of any type
   /*  prop4: function(){
        console.log(`This is property 4`);
    } */
    prop4: ()=>{
        console.log(`This is property 4`);
    }
}

/* 2. Constructor */
let obj2 = new Object() // No args are provided
// Props are created after instantiation
obj2.name = 'John';
obj2.surname = 'Doe';
obj2.someFunc = ()=>{
    console.log('Some function inside obj2');
}
/* 3. Object.Create */
let obj3 = Object.create(obj1)

