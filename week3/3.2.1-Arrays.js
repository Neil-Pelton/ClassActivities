// create an Array using an Array literal
const pets = [0, 1, 2, 3, 4];
// access the 1st item in the Array
console.log(pets[0]);
// access the last item in the Array
console.log(pets[4]);  //console.log(pets[pets.length - 1]); does the same thing but better. allows for expansion to array without changing answer
// print the length of the Array
console.log(pets.length);
// use the length property to access the last item in the Array
console.log(pets[pets.length - 1]);
// with for...of, loop over the Array, modify the value and add to a different Array
for (let number of pets){
  console.log(number);
}
