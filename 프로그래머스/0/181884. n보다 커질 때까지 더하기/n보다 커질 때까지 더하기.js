function solution(numbers, n) {
    let partialSum = 0;
    for (let num of numbers) {
        partialSum += num;
        if (partialSum > n) {
            return partialSum;
        }
    }
    return partialSum;
}

// 예제 사용법:
const numbers = [1, 2, 3, 4, 5];
const n = 10;
const result = solution(numbers, n);
console.log(result);