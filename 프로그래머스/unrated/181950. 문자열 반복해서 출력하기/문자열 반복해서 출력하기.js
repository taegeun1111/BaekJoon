const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let result = '';
    str = +input[1];
    for(let i=0; i<str; i++){
        result += input[0];
    }
    console.log(result);
});