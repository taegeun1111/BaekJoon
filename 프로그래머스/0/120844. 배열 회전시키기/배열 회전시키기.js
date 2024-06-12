function solution(numbers, direction) {
  if (direction === 'left') {
    // 왼쪽으로 한 칸 회전: 첫 번째 요소를 제거하고 배열의 끝에 추가
    const firstElement = numbers.shift();
    numbers.push(firstElement);
  } else if (direction === 'right') {
    // 오른쪽으로 한 칸 회전: 마지막 요소를 제거하고 배열의 앞에 추가
    const lastElement = numbers.pop();
    numbers.unshift(lastElement);
  }
  return numbers;
}
