function solution(picture, k) {
  let expandedPicture = [];

  for (let row of picture) {
    let expandedRow = [...row].map(char => char.repeat(k)).join('');
    for (let i = 0; i < k; i++) {
      expandedPicture.push(expandedRow);
    }
  }

  return expandedPicture;
}