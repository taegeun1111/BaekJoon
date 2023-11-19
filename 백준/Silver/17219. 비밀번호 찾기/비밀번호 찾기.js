const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ');
const map = new Map();

for(let i=0; i<N; i++) {
    map.set(input[i].split(' ')[0], input[i].split(' ')[1]);
}

let answer = '';
for(let i=N; i<input.length; i++) {
    answer += map.get(input[i]) + '\n';
}

console.log(answer);