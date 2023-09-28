function solution(n) {
    var answer = n.toString().split('').reverse().map((result)=>parseInt(result))
    return answer;
}