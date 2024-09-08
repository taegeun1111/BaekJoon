function solution(arr, k) {
  let result = [];
  let seen = new Set();

  for (let num of arr) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
    if (result.length === k) {
      break;
    }
  }

  while (result.length < k) {
    result.push(-1);
  }

  return result;
}