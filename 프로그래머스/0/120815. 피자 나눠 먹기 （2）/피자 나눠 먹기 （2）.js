function solution(n) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    const slicesPerPerson = lcm(6, n);

    return slicesPerPerson / 6;
}