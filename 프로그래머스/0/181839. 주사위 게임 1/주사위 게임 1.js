function solution(a, b) {
    // 홀수 여부를 확인하는 함수
    const isOdd = (num) => num % 2 !== 0;

    if (isOdd(a) && isOdd(b)) {
        // a와 b가 모두 홀수일 때
        return a * a + b * b;
    } else if (isOdd(a) || isOdd(b)) {
        // a와 b 중 하나만 홀수일 때
        return 2 * (a + b);
    } else {
        // a와 b가 모두 홀수가 아닐 때 (즉, 둘 다 짝수일 때)
        return Math.abs(a - b);
    }
}