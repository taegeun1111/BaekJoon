const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();
// let input = fs.readFileSync('./input.txt').toString();

const numA = +input;
let arr = [];

for (let i = 0; i < numA; i++) {
    arr.push(' ');
}

let result = '*';

for (let i = 1; i < numA+1; i++) {
    arr[numA-i] = result;
    console.log(arr.join(''))
}