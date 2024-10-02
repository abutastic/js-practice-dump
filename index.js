// let numbers = [1, 2, 3, 4, 5, 6];
// let newNumbers = [];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 == 0){
//         sum += numbers[i]
//         newNumbers.push(numbers[i] * 2)
//     }
// }
// console.log(newNumbers);
// console.log(sum);

// let fruits = ["apple", "banana", "orange"];

// for (const fruit of fruits) {
//   console.log(fruit.toUpperCase());
// }

// const person = {
//   name: "Alice",
//   age: 30,
//   city: "New York",
// };

// for (const key in person) {
//     console.log(key, person[key])
// }

let favTeas = ["black tea", "oolang tea", "coffee", "weired tee"];
let otherTeas = [];

for (const tea of favTeas) {
  otherTeas.push(tea);
}

// console.log(otherTeas);

let bioData = {
  name: "Huzefa",
  age: 21,
  place: "Bailhongal",
};

let newBio = {};

for (const key in bioData) {
  if (key === "age") {
    continue;
  }
  newBio[key] = bioData[key];
}

console.log(newBio);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNumbers = [];

numbers.forEach(eachNum => {
    if(eachNum === 7){
        return;
    }
    if(eachNum % 2 === 1){
        newNumbers.push(eachNum * 2)
    } 
});

console.log(newNumbers);

