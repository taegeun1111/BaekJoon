function solution(n, numlist) {
    var answer = [];
    return numlist.filter((list)=>list % n === 0);
}