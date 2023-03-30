// create five variables and assign them values
let name = "Neil";
let age = 21;
let male = true;
let certificates;
let skills = null;
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof name + ", " + typeof age + ", " + typeof male + ", " + typeof certificates + ", " + typeof skills)
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let intro = `"My name is " ${name} ", and I'm " ${age} " years old."`
// reassign the value of the variable that references "null"
skills = "persistence";
// print the value and its type
console.log(skills + ", " + typeof skills)
// print a variable that causes a ReferenceError
weaknesses = "none";
console.log("Weaknesses = " + weaknesses)
// alter the previous line to no longer cause a ReferenceError
