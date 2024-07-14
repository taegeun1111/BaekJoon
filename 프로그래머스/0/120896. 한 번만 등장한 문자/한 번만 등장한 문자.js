function solution(s) {
    const updatedArr = s.split('').sort();
    let result = [];
    
    for(let i = 0; i < updatedArr.length; i++) {
        if ((updatedArr[i] !== updatedArr[i - 1]) && (updatedArr[i] !== updatedArr[i + 1])) {
            result.push(updatedArr[i]);
        }
    }
    
    return result.join('');
}