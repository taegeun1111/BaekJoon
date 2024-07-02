function solution(absolutes, signs) {
    let answer = 0;
    absolutes.map((list,index)=> signs[index] ? Number(list) : -Number(list)).map((list)=>answer += list)
    
    return answer;
}