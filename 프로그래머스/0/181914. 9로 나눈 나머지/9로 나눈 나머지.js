function solution(number) {
    // 각 자리 숫자를 더한 결과를 저장할 변수
    let sum = 0;

    // 문자열을 배열로 변환하고 각 자리 숫자를 더함
    for (let digit of number) {
        sum += parseInt(digit, 10);
    }

    // 각 자리 숫자의 합을 9로 나눈 나머지를 반환
    return sum % 9;
}