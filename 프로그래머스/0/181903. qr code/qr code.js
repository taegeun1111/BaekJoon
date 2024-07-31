function solution(q, r, code) {
    let answer = '';
    code.split('').map((list,index)=> (+index)%(+q) === r && (answer+=list))
    return answer;
}