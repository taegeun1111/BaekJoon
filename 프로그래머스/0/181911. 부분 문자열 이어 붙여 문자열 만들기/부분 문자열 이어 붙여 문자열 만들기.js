function solution(my_strings, parts) {
    let result = "";
    for (let i = 0; i < my_strings.length; i++) {
        let [start, end] = parts[i];
        result += my_strings[i].substring(start, end + 1);
    }
    return result;
}