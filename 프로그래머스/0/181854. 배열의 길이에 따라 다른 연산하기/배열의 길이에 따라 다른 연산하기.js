function solution(arr, n) {
    // 배열의 길이가 홀수인 경우
    if (arr.length % 2 !== 0) {
        for (let i = 0; i < arr.length; i += 2) {
            arr[i] += n;
        }
    } else { // 배열의 길이가 짝수인 경우
        for (let i = 1; i < arr.length; i += 2) {
            arr[i] += n;
        }
    }
    return arr;
}
