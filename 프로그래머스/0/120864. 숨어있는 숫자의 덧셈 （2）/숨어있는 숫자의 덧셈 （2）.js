function solution(my_string) {
      let numbers = my_string.match(/\d+/g);
    
    if (numbers === null) {
        return 0;
    }
    
    let sum = numbers.map(Number).reduce((acc, curr) => acc + curr, 0);
    
    return sum;
}