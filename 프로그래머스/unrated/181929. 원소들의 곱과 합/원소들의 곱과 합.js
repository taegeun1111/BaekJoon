function solution(num_list) {
    return Math.pow(num_list.reduce((a,b) => a+b), 2) > num_list.reduce((a,b) => a*b) ? 1 : 0;
}
출처: https://rei050r.tistory.com/118 [rei050r:티스토리]