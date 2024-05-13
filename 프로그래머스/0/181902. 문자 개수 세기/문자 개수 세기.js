function solution(my_string) {
    let count = Array(52).fill(0); // 알파벳 개수를 저장할 배열 초기화

    for (let i = 0; i < my_string.length; i++) {
        let charCode = my_string.charCodeAt(i); // 문자의 ASCII 코드값 가져오기

        if (charCode >= 65 && charCode <= 90) { // 대문자인 경우
            count[charCode - 65]++; // 'A'의 개수부터 순서대로 카운트
        } else if (charCode >= 97 && charCode <= 122) { // 소문자인 경우
            count[charCode - 71]++; // 'a'의 개수부터 순서대로 카운트
        }
    }

    return count;
}