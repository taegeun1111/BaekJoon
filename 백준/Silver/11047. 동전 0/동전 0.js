let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...arr] = input;
let [num, price] = n.split(' ');
price = Number(price);
arr = arr.map(i => Number(i));
solution(n, price, arr);

function solution(n, price, arr){
    let result = 0;
    for(let i=arr.length-1 ; i >= 0 ; i--){
        if(price - arr[i] >= 0){
            result += Math.floor(price/arr[i]);
            price = price%arr[i];
        }
    }
    console.log(result);
}