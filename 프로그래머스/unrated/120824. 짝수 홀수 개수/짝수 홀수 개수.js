function solution(num_list) {
    let a = 0;
    let b = 0;
    num_list.map(num=>(num%2===0? a++ : b++))
    var answer = [];
    answer.push(a);
    answer.push(b)
    return answer;
}