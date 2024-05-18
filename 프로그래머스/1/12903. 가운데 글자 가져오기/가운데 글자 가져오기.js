function solution(s) {
    var answer = '';
    const arr = s.split('');
    const arrNum = Math.ceil(s.length/2)-1;
    if(s.length%2 ===0){
        answer += arr[arrNum];
        answer += arr[arrNum+1];
    }else{
        answer += arr[arrNum];
    }
    return answer;
}