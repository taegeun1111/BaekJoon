function solution(names) {
    const groups = [];
    let index = 0;
    
    while (index < names.length) {
        groups.push(names.slice(index, index + 5));
        index += 5;
    }
    
    return groups.map(group => group[0]);
}
