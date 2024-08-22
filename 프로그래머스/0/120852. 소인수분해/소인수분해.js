function solution(n) {
    const factors = new Set();
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            factors.add(i);
            n /= i;
        }
    }
    if (n > 1) {
        factors.add(n);
    }
    return Array.from(factors).sort((a, b) => a - b);
}