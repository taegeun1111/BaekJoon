function solution(numbers, num1, num2) {
    var answer = numbers;
    let arr = []
    for(let i=num1; i<=num2; i++){
        arr.push(numbers[i]);
    }
    answer = arr
    return answer;
}