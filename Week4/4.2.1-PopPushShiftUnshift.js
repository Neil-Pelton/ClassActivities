const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popped1 = nums.pop();
  console.log(popped1);

let popped2 = nums.pop();
  console.log(popped2);
// remove each of the first two items with shift(), saving each item to a variable
let shift1 = nums.shift();
  console.log(shift1);

let shift2 = nums.shift();
  console.log(shift2);

console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(popped2);
nums.unshift(popped1);

nums.push(shift2);
nums.push(shift1);

console.log(nums);
