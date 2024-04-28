function solution(intStrs, k, s, l) {
    const result = [];
    
    for (let i = 0; i < intStrs.length; i++) {
        const subStr = intStrs[i].substring(s, s + l);
        const num = parseInt(subStr, 10);
        if (num > k) {
            result.push(num);
        }
    }
    
    return result;
}