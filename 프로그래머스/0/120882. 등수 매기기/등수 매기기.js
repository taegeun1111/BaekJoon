function solution(score) {
    const averages = score.map(s => (s[0] + s[1]) / 2);
    const avgWithIndex = averages.map((avg, index) => [avg, index]);
    avgWithIndex.sort((a, b) => b[0] - a[0]);
    const ranks = new Array(score.length);
    let currentRank = 1;
    let prevAvg = avgWithIndex[0][0];
    for (let i = 0; i < avgWithIndex.length; i++) {
        const [avg, index] = avgWithIndex[i];
        if (avg < prevAvg) {
            currentRank = i + 1;
            prevAvg = avg;
        }
        ranks[index] = currentRank;
    }
    return ranks;
}