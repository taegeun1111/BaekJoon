function solution(array) {
  // 초기 값을 배열의 첫 번째 원소로 설정
  let maxNum = array[0];
  let maxIndex = 0;

  // 배열을 순회하면서 가장 큰 수와 인덱스를 찾음
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
      maxIndex = i;
    }
  }

  // 가장 큰 수와 그 인덱스를 배열에 담아 반환
  return [maxNum, maxIndex];
}
