function solution(a, b) {
    var answer = 0;
    var start = Math.min(a, b); // 두 정수 중 작은 값을 시작값으로 설정
    var end = Math.max(a, b);   // 두 정수 중 큰 값을 끝값으로 설정

    for (var i = start; i <= end; i++) {
        answer += i;
    }

    return answer;
}