// for(let i = 0; i <= 100; i++){
//     console.log(i)
// }

// let sum = 0;
// let i = 0;

// while(i <= 5){
//     sum = sum + i;
//     i++;
// }
// console.log(sum);

// let sum = 0;
// let i = 0;
// let empArray = [];

// while(i <= 5){
//     sum += i;
//     empArray.push(sum)
//     i++;
// }

// console.log(sum);
// console.log(empArray);

// let countDown = [];
// let i = 5;

// while(i >= 1){
//     countDown.push(i);
//     i--;
// }

// console.log(countDown)
let count = 1;
let favouriteTea = [];

// let carCollection = [];
// let i = 1;
// let cars;

// while(i <= 5){
//     cars = prompt(`Enter your favourite cars "limit = 5"`);
//     carCollection.unshift(cars);
//     i++;
// }

// console.log(carCollection)

// do while loop that adds numbers from 1 to 3 and store the result in a variable called total;

// let total = 0;
// let i = 0;

// do {
//     total += i;
//     i++;
// } while (i <= 3);

// console.log(total);

// for loop that multiplies the numbers and stores the result in an array called multipliedNumbers

// let multipliedNumbers = [];
// let numbers = [2, 4, 6];

// for(let i = 0; i < numbers.length; i++){
//     takeNmbr = numbers[i] * 2;
//     multipliedNumbers.push(takeNmbr);

//     multipliedNumbers.push(numbers[i] * 2);
// }

// console.log(multipliedNumbers)

// let cityList = [];
// let cities = ["Paris", "New York", "Tokyo", "London"];

// for(let i = 0; i < cities.length; i++){
//     Turn = cities[i];
//     cityList.push(Turn)
// }

// console.log(cityList);

// let favFlowers = [];
// let flowers;

// do {
//     flowers = prompt(`Enter your favourite flowers"Enter stop to end the loop"`);
//     if(flowers !== "stop"){
//         favFlowers.push(flowers)
//     }
// } while (flowers !== "stop");

// let selectedTeas = [];
// let gotTeas = [
//   "green tea",
//   "black tea",
//   "oolang tea",
//   "chai",
//   "lemon tea",
//   "green tea",
// ];

// for (let i = 0; i < gotTeas.length; i++) {
//   if (gotTeas[i] !== "chai") {
//     selectedTeas.push(gotTeas[i]);
//   }
// }

// console.log(selectedTeas);

/*let selectedTeas = [];
let gotTeas = [
  "green tea",
  "black tea",
  "oolang tea",
  "chai",
  "lemon tea",
  "green tea",
];

for (let i = 0; gotTeas[i] !== "chai"; i++) {
  selectedTeas.push(gotTeas[i]);
}

console.log(selectedTeas); */

/*let selectedTeas = [];
let gotTeas = [
  "green tea",
  "black tea",
  "oolang tea",
  "chai",
  "lemon tea",
  "green tea",
];

for (let i = 0; i < gotTeas.length; i++) {
  if (gotTeas[i] === "chai") {
    break;
  }
  
//   newTeas = gotTeas[i];
  selectedTeas.push(gotTeas[i]);
}
console.log(selectedTeas); */

// MY METHOD
// let visitedCities = [];
// let cities = ["London", "New York", "Paris", "Berlin", "Jeddah"];

// for (let i = 0; i < cities.length; i++) {
//   if (cities[i] !== "Paris") {
//     visitedCities.push(cities[i]);
//   }
// }
// console.log(visitedCities);

// HITESH METHOD
let visitedCities = [];
let cities = ["London", "New York", "Paris", "Berlin", "Jeddah"];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris" || cities[i] === "Paris") {
    continue;
  }

  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

// let num = [1, 2, 3, 4, 5];
// let newNum = [];

// for (let i = 0; i < num.length; i++) {
//     if(num[i] === 4){
//         break;
//     }

//   newNum.push(num[i]);
// }

// console.log(newNum);

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

// let numberz = [1, 2, 3, 4, 5, 6];
// let smallNumberz = [];

// for(let i = 0; i < numberz.length; i++){
//     smallNumberz.push(numberz[i])
// }
// console.log(smallNumberz);

// let fruits = ["apple", "banana", "orange"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

let teaz = ["chai", "green tea", "herbal tea", "black tea"];
let prefferedTeas = [];

for (let tea of teaz) {
  if (tea === "herbal tea") {
    continue;
  }
  prefferedTeas.push(tea);
}

// console.log(prefferedTeas);

// let cityPopulation = {
//   London: 8900000,
//   "New York": 8500000,
//   Berlin: 9500000,
//   Paris: 8765430,
// };

// let citiesPopulation = {};
// for (const city in cityPopulation) {
//     if(city === "Berlin"){
//         break;
//     }

//     citiesPopulation[city] =cityPopulation[city]

// }
// console.log(citiesPopulation);

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 500000,
  Paris: 500000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}

// console.log(largeCities);

// let cars = ["ferrari", "mercedes", "bugatti", "cheverollet", "indica"];
// let updatedCars = [];
// cars.forEach((each) => {
//   if (each === "cheverollet") {
//     return;
//   }
//   updatedCars.push(each);
// });
// console.log(updatedCars);

// let givenCities = [
//   "Berlin",
//   "tokyo",
//   "mumbai",
//   "bengaluru",
//   "washington DC",
//   "Bali",
// ];
// let travelledCities = [];

// givenCities.forEach((each) => {
//   if (each === "washington DC") {
//     return;
//   }
//   travelledCities.push(each);
// });
// console.log(travelledCities);

let originalNumbers = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < originalNumbers.length; i++) {
  if (originalNumbers[i] === 7) {
    continue;
  }
  mult = originalNumbers[i] * 2;
  doubledNumbers.push(mult);
}

// console.log(doubledNumbers);

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shorTeas = [];

for (const tea of myTeas) {
    if(tea.length > 10){
        continue;
    }
    shorTeas.push(tea)
}
console.log(shorTeas);
