const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// let input = fs.readFileSync('./input.txt').toString().split(' ');

const numA = +input[0];
const numB = +input[1];

if (numA > numB){
    console.log(">");
}else if (numA < numB){
    console.log("<")
}else if (numA === numB){
    console.log("==")
}