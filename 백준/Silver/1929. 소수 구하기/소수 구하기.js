const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const numA = +input[0];
const numB = +input[1];
let result = 0;

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = numA; i <= numB; i++) {
  if (isPrime(i)) {
    result++;
    console.log(i);
  }
}
