function solution(myString, pat) {
    const patLength = pat.length;
    
    for (let i = myString.length; i >= 0; i--) {
        const subString = myString.slice(0, i);
        if (subString.endsWith(pat)) {
            return subString;
        }
    }
}