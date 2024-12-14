function solution(s) {
    var answer = true;
    const REGEXP_PATTERN_NUMBER = /^[\d]*$/;
    if((s.length ===4 || s.length === 6) && s.split('').every((list)=>REGEXP_PATTERN_NUMBER.test(list))){
        answer =true
    }else{
        answer = false
    }
    return answer;
}