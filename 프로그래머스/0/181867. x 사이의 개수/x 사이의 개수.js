function solution(myString) {
    let lengths = [];
    let currentLength = 0;
    for (let char of myString) {
        if (char === "x") {
            lengths.push(currentLength);
            currentLength = 0;
        } else {
            currentLength++;
        }
    }
    lengths.push(currentLength); // 마지막 문자열의 길이 추가
    return lengths;
}

