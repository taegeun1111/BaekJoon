function solution(box, n) {
    const countWidth = Math.floor(box[0] / n);
    const countHeight = Math.floor(box[1] / n);
    const countDepth = Math.floor(box[2] / n);

    return countWidth * countHeight * countDepth;
}
