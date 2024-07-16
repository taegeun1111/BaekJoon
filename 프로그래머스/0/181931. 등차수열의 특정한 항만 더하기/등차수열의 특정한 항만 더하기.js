function solution(a, d, included) {
   let sum = 0;
    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            sum += a + i * d;
        }
    }
    return sum;
}