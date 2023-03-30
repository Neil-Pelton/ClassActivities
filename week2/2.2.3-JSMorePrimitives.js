// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "noon";
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Hello, it is currently ${timeOfDay}.`;
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let newVar;
// Print the new variable and its type
console.log(typeof newVar);
// What type should we expect?
// undefined
// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
newVar = null;
// Print the variable and its type again
// What type should we expect?
console.log(typeof newVar);
// object is the data type null

// Try to print a variable that does not exist
// What should we expect to print in the CLI?
console.log(brain);
// Print "greeting" again
// Will this line run?
console.log(greeting)
// no this line won't run because the code before it is broken. It displays everything until an error happens
