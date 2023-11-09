function solution(s1, s2) {
    // filter를 사용하여 s1과 s2의 값과 같은 것을 찾고 그 것의 총 개수를 answer에 반환해준다.
    var answer =  s1.filter(s => s2.includes(s)).length;
    
    return answer;
}