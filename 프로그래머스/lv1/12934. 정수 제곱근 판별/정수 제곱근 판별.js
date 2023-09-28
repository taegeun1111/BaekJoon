function solution(n) {
  let answer = 0;
  const squr = Math.sqrt(n);
  if (Number.isInteger(squr)) {
    answer = (squr+1) * (squr+1);
  } else {
    answer = -1;
  }
    return answer;
}