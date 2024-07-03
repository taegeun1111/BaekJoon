function solution(A,B){
    var answer = 0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a)
    A.map((list,index)=>answer += list*B[index])
    return answer;
}