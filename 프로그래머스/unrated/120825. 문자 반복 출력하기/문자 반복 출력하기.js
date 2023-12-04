function solution(my_string, n) {
    // my_string을 배열로 변환 후 map메서드를 사용하여 모든 배열을 repeat를 통해 n 만큼 반복하여 반환한 뒤,
    // join('') 으로 배열을 다시 문자열로 변경해준다.
    return [...my_string].map(string => string.repeat(n)).join('');
}