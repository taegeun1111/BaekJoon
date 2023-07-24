const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();
// let input = fs.readFileSync('./input.txt').toString();

const numA = +input;
let result ='*';

for (let i = 0; i < numA; i++) {
    console.log(result);
    result += '*';
}