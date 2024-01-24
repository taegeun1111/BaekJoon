function solution(n) {
    if (n % 2 === 1) {  // n이 홀수인 경우
        return Array.from({ length: Math.floor((n + 1) / 2) }, (_, i) => 2 * i + 1).reduce((acc, curr) => acc + curr, 0);
        // 홀수인 모든 양의 정수의 합을 반환
    } else {  // n이 짝수인 경우
        return Array.from({ length: Math.floor(n / 2) + 1 }, (_, i) => Math.pow(2 * i, 2)).reduce((acc, curr) => acc + curr, 0);
        // 짝수인 모든 양의 정수의 제곱의 합을 반환
    }
}