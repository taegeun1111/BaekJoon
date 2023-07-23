const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// let input = fs.readFileSync('./input.txt').toString().split(' ');

let result = 0;

input.map(num => result += +num)
console.log(result)
