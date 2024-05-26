function solution(strArr) {
    let answer = [];
    strArr.map((list)=> !list.toString().includes("ad") && answer.push(list))
    return answer;
}