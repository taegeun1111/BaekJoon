function solution(my_string, num1, num2) {
    // 문자열을 배열로 변환
    let charArray = my_string.split('');
    
    // num1과 num2에 해당하는 문자를 교환
    let temp = charArray[num1];
    charArray[num1] = charArray[num2];
    charArray[num2] = temp;
    
    // 배열을 다시 문자열로 변환하여 반환
    return charArray.join('');
}