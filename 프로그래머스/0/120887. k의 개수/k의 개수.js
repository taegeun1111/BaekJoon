function solution(i, j, k) {
   let count = 0;
    k = k.toString();
    
    for (let num = i; num <= j; num++) {
        let str = num.toString();
        for (let char of str) {
            if (char === k) {
                count++;
            }
        }
    }
    
    return count;
}