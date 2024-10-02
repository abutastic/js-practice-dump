// let numbers;
// let numContainer = [];

// do {
//     numbers = prompt(`Enter the numbers as you like (type "stop" to exit)`);
//     if(numbers !== "stop"){
//         numContainer.push(numbers);
//     }

// } while (numbers !== "stop");

// console.log(numContainer);

// let teas = ["green tea", "black tea", "chai", "oolong tea"]
// let selectedTeas = [];

// for(let i =0; i < teas.length; i++){
//     if(teas[i] === "chai"){
//         break;
//     }
//     selectedTeas.push(teas[i])
// }
// console.log(selectedTeas);

// let cities = ["London", "New York", "Paris", "Berlin"];
// let visitedCities = [];

// for (let i = 0; i < cities.length; i++) {
//     if(cities[i] === "Paris" || cities[i] === "paris"){
//         continue;
//     }

//     visitedCities.push(cities[i])
// }
// console.log(visitedCities);

// let numbers = [1, 2, 3, 4, 5];
// let smallNumbers = [];

// for (const num of numbers) {
//     if(num === 4){
//         break;
//     }

//     smallNumbers.push(num)

// }

// console.log(smallNumbers);

// let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
// let preferredTeas = [];

// for (const tea of teaTypes) {
//     if(tea === "herbal tea"){
//         continue;
//     }
//     preferredTeas.push(tea)
// }
// console.log(preferredTeas);

// let citiesPopulation = {
//     London: 8900000,
//     "New York": 8400000,
//     Berlin: 3500000,
//     Paris: 2200000,
//   };

//   let cityNewPopulations = {};

//   for (const city in citiesPopulation) {
//     if(city === "Berlin"){
//         continue
//     }
//     cityNewPopulations[city] = citiesPopulation[city]
//   }

//   console.log(cityNewPopulations);

// let worldCities = {
//     Sydney: 5000000,
//     Tokyo: 9000000,
//     Berlin: 3500000,
//     Paris: 2200000,
//   };
//   let largeCities = {};

//   for (const city in worldCities) {
//     if(worldCities[city] < 3000000){
//         continue;
//     }
//     largeCities[city] = worldCities[city]
//   }
//   console.log(largeCities);

// let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
// let availableTeas = [];

// teaCollection.forEach(element => {
//     if(element === "chai"){
//         return;
//     }
//     availableTeas.push(element)
// });
// console.log(availableTeas);

// let myNumbers = [2, 5, 7, 9];
// let doubledNumbers = [];

// for(let i = 0; i < myNumbers.length; i++){
//     if(myNumbers[i] === 7){
//         continue;
//     }

//     doubledNumbers.push(myNumbers[i] * 2)
// }
// console.log(doubledNumbers);

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
