const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// let input = fs.readFileSync('./input.txt').toString().split(' ');
const numA = +input[0];
const numB = +input[1];
let resultPlus, resultMinus, resultMultiply, resultDivide, resultShare

resultPlus = numA+numB;
resultMinus = numA-numB;
resultMultiply = numA*numB;
resultDivide = Math.floor(numA/numB);
resultShare = numA%numB;

console.log(resultPlus);
console.log(resultMinus);
console.log(resultMultiply);
console.log(resultDivide);
console.log(resultShare);
