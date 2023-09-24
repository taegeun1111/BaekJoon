const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('./input.txt').toString().split('\n');
const num = input[0]
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let arrNum=0;
let sum = 0;
let result = 0
for (let i = 0; i < num; i++) {
  arrNum = sum+arr[i];
  sum=arrNum
  result+=sum
}
console.log(result)