function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) if(n % i === 0) arr.push(n / i);
    return arr.length % 2 ? 1 : 2;
}
출처: https://oliviakim.tistory.com/46 [ONE LIFE 2 LIVE:티스토리]