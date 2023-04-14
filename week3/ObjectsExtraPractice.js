// Object Activity 1
// Below is an object called currentWeather
const currentWeather = {
  weather: "Rain",
  temp: 50,
  sky: "Overcast",
  details: ["Moderate Rain", 45, "Not Severe"]
};
// print a string that shows weather, temp, and sky
console.log(`Today the forecast calls for ${currentWeather.weather}, the temperature is ${currentWeather.temp} degrees, and the sky looks ${currentWeather.sky}.`)

// Activity 2
// Accessing the details key, Print another string that references each of the properties contained within details. All in one line
let weatherDetails = "These are the weather details: ";
for(let detail of currentWeather.details){
  weatherDetails += `${detail} `;
}
console.log(weatherDetails);
// console.log(`${currentWeather.details}`) also works, but the other way will be on the homework
