// Array Activity 1
// Create an Array called students that contains the names of 5 students
const students = ["Neil", "Lyncy", "Cai", "Josef", "Sam"];
// Use bracket notation to access and print the name of the 4th student in the list, then print the name of the student in index 2
console.log("The fouth student is: " + students[3]);
console.log("The second index is: " + students[2]);
// Loop over the Array to print out each name
for(let student of students){
  console.log(student);
}
// Array Activity 2
// Create a variable called roster and assign it the value of the string below
// "These are the students in the list: "
let roster = "These are the students in the list: ";
// Loop over the Array again, but this time each iteration of the loop should add the value to the end of the roster string AND a blank space
// After the loop, print roster
for(let student of students){
  roster += `${student} `;
  console.log(roster);
}
// The expected output should look like this:
// "These are the students in the list: name1 name2 name3 name4 name5"
