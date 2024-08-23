function solution(n) {
    let result = 1;
    let factorial = 1;
    let num = 1;

    while (factorial <= n) {
        result = num;
        num++;
        factorial *= num;
    }

    return result;
}