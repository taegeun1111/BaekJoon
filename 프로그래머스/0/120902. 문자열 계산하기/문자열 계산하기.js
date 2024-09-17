function solution(my_string) {
    const parts = my_string.split(' ');

    let result = parseInt(parts[0], 10);

    for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const number = parseInt(parts[i + 1], 10);

        if (operator === '+') {
            result += number;
        } else if (operator === '-') {
            result -= number;
        }
    }

    return result;
}