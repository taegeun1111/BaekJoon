function solution(array) {
    var answer = 0;
    array.join('').split('').map((list)=>+list === 7 && answer++)
    return answer;
}