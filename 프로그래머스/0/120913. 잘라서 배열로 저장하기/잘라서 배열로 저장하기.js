function solution(my_str, n) {
    var answer = [];
        let str = my_str;
    for(let i =0; i<my_str.length/n; i++){
        answer.push(str.substr(0,n));
        str = str.substr(n)
    }
    return answer;
}