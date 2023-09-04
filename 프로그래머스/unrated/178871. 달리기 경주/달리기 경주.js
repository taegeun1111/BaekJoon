function solution(players, callings) {
  const answer = [...players]; // 플레이어 배열을 복사합니다.

  const playerIndices = {}; // 각 플레이어의 인덱스를 저장할 객체를 만듭니다.
  for (let i = 0; i < answer.length; i++) {
    playerIndices[answer[i]] = i;
  }

  for (const calling of callings) {
    const index = playerIndices[calling];

    if (index !== undefined && index > 0) {
      // calling이 배열에 있고 첫 번째 요소가 아닌 경우에만 스왑합니다.
      [answer[index - 1], answer[index]] = [answer[index], answer[index - 1]];
      // 인덱스를 업데이트합니다.
      playerIndices[calling] = index - 1;
      playerIndices[answer[index]] = index;
    }
  }

  return answer;
}