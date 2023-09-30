function solution(numbers) {
    var answer = 0;
    answer = numbers.reduce((sum,item)=>sum+item,0)/numbers.length;
    return answer;
}