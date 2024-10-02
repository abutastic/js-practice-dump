// function stringToNumber(input) {
//   return console.log(parseInt(input));
// }

// // stringToNumber("Yes");

// function flipBoolean(input) {
//   return console.log(!Boolean(input));
// }

// // flipBoolean(1)

// function whatAmI(input) {
//   return console.log("I am a" + " " + typeof input);
// }

// // whatAmI("ulambatar")

// function isItTruthy(input) {
//   if (input) {
//     return "its truthy";
//   } else {
//     return "its falsey";
//   }
// }

// // console.log(isItTruthy(1));

// // Task 2;

// const a = (18);
// const b = (24);

// function add() {
//   return console.log(a + b);
// }

// add()

// function subtract(ten, twe) {
//   return console.log(ten - twe);
// }

// subtract(a, b)

// function multiply(a, b) {
//   return console.log(a * b);
// }

// function icrement(a, b) {
//   return console.log(`${a++} ${b++}`);
// }

// function decrement(a, b) {
//   return console.log(`${a--} ${b--}`);
// }

// decrement(a, b)

// function remainder(a, b) {
//   return console.log(a % b);
// }

// subtract(a, b);
// multiply(a, b);
// remainder(a, b)

// let mixedArray = [1, 45, "chalBe", true, null, undefined, 89];

function filterNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result.push(arr[i]);
    }
  }
  return console.log(result);
}

// filterNumbers([1, 2, 3, "heyhey", true])

function reverseArray(arr) {
  return arr.reverse();
}

let resulti = reverseArray([1, 2, 3]);
// console.log(resulti);

// function findMaxArray(arr) {
//   arr = [45, 67, 98, 100, "oneninety"]
//   let largest = arr[0];
//   let largeArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   largeArray.push(largest);
//   return console.log(largeArray);
// }

// findMaxArray()

// let arr =  [45, 67, 98, 100, "oneninety"];

// let largest = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > largest ){
//         largest = arr[i]
//     }
// }

// console.log(largest);

// function findMax(arr) {
//   let largest = arr[0];
//   for (const element of arr) {
//     if (element > largest) {
//       largest = element;
//     }
//   }

//   return console.log(largest);
// }

// findMax([45, 67, 98, 100, 8900, "oneninety"]);

// function removeDuplicate(arr) {
//   return console.log([...new Set(arr)] + " " + "new");
// }

// removeDuplicate([45,45,67,100, 67, 98, 100, 8900, "oneninety"])

// function removeDuplicate(arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i])
//         }
//     }
//     return console.log(result);

// }
// removeDuplicate([45,45,67,100, 67, 98, 100, 8900, "oneninety", 90])

let arr = [45, 45, 67, 100, 67, 98, 100, 8900, "oneninety", 90, 786, 313];

let freshArray = [];

for (const element of arr) {
  if (!freshArray.includes(element)) {
    freshArray.push(element);
  }
}

// console.log(freshArray);

let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// function flattenArray(arr) {
//   return arr[0].concat(arr[1]);
// }

// let start = flattenArray([[1, 2, 3], [4, 5, 6]]);
// console.log(start);


function flattenArray(arr){
    return console.log(arr.flat(Infinity));
    
}

flattenArray([[1, 2, 3], [4, 5, 6], [2, 3, 6]])
