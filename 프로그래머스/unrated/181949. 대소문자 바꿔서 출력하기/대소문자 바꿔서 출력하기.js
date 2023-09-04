const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
     const text = input[0];
    const str = [...text].map(char => {
        if (char >= 'A' && char <= 'Z') {
            return char.toLowerCase(); // 대문자를 소문자로 변환
        } else if (char >= 'a' && char <= 'z') {
            return char.toUpperCase(); // 소문자를 대문자로 변환
        } else {
            return char; // 알파벳이 아닌 문자는 그대로 반환
        }
    });
    console.log(str.join('')); // 변환된 문자 배열을 문자열로 변환하고 출력
});