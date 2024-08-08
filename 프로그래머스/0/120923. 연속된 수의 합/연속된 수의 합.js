function solution(num, total) {
    const start = Math.ceil(total / num - Math.floor(num / 2));
    
    return Array.from({ length: num }, (_, i) => start + i);
}