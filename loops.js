function sumOfN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sumOfN(5));

// function printMultiplicationTable(n){
//     let table = [];
//     for(let i = 1; i <= 10; i++){
//         table.push(`${n} * ${i} = ${i * n}`)
//     }
//     return table.flat(Infinity);
// }
// console.log(printMultiplicationTable(10));

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let vowelBox = [];
  let count = 0;

  for (const element of str) {
    if (vowels.includes(element)) {
      vowelBox.push(element);
      count++;
    }
  }

  return `Vowels found = ${vowelBox} and they are ${count} in total`;
}

let result = countVowels(
  "I was going to learn web dev with Angel Yu's course but I realized it's outdated!"
);
console.log(result);
