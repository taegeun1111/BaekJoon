function solution(my_string, n) {
  // 주어진 문자열의 길이를 구합니다.
  const strLength = my_string.length;

  // 문자열 뒤의 n글자를 추출하여 반환합니다.
  const result = my_string.substring(strLength - n, strLength);
  
  return result;
}