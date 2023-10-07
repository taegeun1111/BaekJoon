function solution(n, k) {
    var answer = 0;
    let meat = 12000*n;
    let service = 0;
    if(Math.floor(n/10) !== 0){
        service = Math.floor(n/10)
    }
    console.log(service)
    let water = Math.floor(n/10) === 0 ? 2000*k : 2000*(k-service);
    answer = meat+water
    return answer;
}