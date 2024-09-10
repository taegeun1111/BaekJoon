function solution(numbers, k) {
  const index = (2 * (k - 1)) % numbers.length;
  return numbers[index];
}