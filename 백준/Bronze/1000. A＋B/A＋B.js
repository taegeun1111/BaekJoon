const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();
// let input = fs.readFileSync('./input.txt').toString().split(' ');

let result = 0;
for (let i = 0; i < input.length; i++) {
    result += +input[i];
}
console.log(result)