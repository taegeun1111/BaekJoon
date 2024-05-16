function solution(myString, pat) {
    return myString.split('').map((list)=> list === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}