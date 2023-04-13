// create five variables and assign them values
let name = "Neil";
let age = 21;
let tall = true;
let certificates = null;
let skills;
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof name + ", " + typeof age + ", " + typeof tall + ", " + typeof skills + ", " + typeof certificates);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
console.log(`Hi, my name is ${name}, and I'm ${age} years old.`)
// reassign the value of the variable that references "null"
certificates = "in-progress";
// print the value and its type
console.log(`certificates ${typeof certificates}`)
// print a variable that causes a ReferenceError
brain = false;
console.log(brain);
// alter the previous line to no longer cause a ReferenceError

