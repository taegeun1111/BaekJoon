function solution(n) {
    // n x n 크기의 2차원 배열 생성
    let arr = Array.from({ length: n }, () => Array(n).fill(0));
    
    // 대각선 원소를 1로 설정
    for (let i = 0; i < n; i++) {
        arr[i][i] = 1;
    }
    
    return arr;
}