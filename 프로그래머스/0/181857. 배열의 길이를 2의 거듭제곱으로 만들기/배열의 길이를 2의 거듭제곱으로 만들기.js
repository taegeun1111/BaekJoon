function solution(arr) {
    let n = arr.length;
    let powerOfTwo = 1;
    
    while (powerOfTwo < n) {
        powerOfTwo *= 2;
    }
    
    while (arr.length < powerOfTwo) {
        arr.push(0);
    }
    
    return arr;
}