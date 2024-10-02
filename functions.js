// function makeTea(typeOfTea) {
//   return (`Making ${typeOfTea}!`);

// }

// let teaVar = makeTea("green tea");
// console.log(teaVar);

// function orderTea(teaType) {
//   function confirmOrders(){
//     return `order confirmed for ${teaType}!`;
//   }

//   return confirmOrders();
// }

// console.log(orderTea("masala chai"))

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

// console.log(calculateTotal(50, 7));

let totalCost = calculateTotal(60, 7);
// console.log(totalCost);



// higher order functions

function makeTea(type){
  return `type: ${type}!`
}


function processTeaOrder(xtea) {
  return xtea("kali chai");
}

let order = processTeaOrder(makeTea);
console.log(order);


function sayHello(name){
  return `Hello how are you ${name}`
}

function greetings(cal){
  return cal("ABBAS !")
}

// console.log(greetings(sayHello));


function createTeaMaker(name){
  return function(teaType){
    return `Making ${teaType}`
  }
}

let tea = createTeaMaker("abbas");
let result = tea("green tea");
console.log(result);

