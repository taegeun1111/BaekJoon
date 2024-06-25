function solution(order) {
    var answer = 0;
    order.toString().split('').map((list)=> +list%3 ===0 && +list!==0 ? answer++ : answer)
    return answer;
}