// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "Noon"
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Hello, it is currently ${timeOfDay}`
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let newVar;
// Print the new variable and its type
console.log(typeof newVar);
// What type should we expect?
// undefined
// Assign the variable a value that indicates the variable is purposely blank
newVar = "";
// What value should we assign?
console.log(typeof newVar);
// Print the variable and its type again
// What type should we expect?
// string
// Try to print a variable that does not exist
console.log(brain);
// What should we expect to print in the CLI?
// undefined
// Print "greeting" again
console.log(greeting);
// Will this line run?
// no, this line of code will not run since a line of code before breaks it
