function solution(strArr) {
    const lengthCountMap = new Map();

    strArr.forEach(str => {
        const length = str.length;
        
        if (lengthCountMap.has(length)) {
            lengthCountMap.set(length, lengthCountMap.get(length) + 1);
        } else {
            lengthCountMap.set(length, 1);
        }
    });

    let maxCount = 0;
    
    lengthCountMap.forEach(count => {
        if (count > maxCount) {
            maxCount = count;
        }
    });

    return maxCount;
}