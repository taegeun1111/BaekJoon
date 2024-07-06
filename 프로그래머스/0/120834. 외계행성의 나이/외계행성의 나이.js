function solution(age) {
    let ageStr = age.toString();
    let result = '';
    
    for (let char of ageStr) {
        result += String.fromCharCode(char.charCodeAt(0) + 49);
    }
    
    return result;
}
