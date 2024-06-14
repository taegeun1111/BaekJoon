function solution(a, b) {
    const arrNum = a.length;
    let answer = 0;
    for(let i = 0; i <arrNum; i++){
        answer += a[i]*b[i]
    }
    
    return answer;
}