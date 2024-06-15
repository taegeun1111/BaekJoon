function solution(my_string, is_prefix) {
    // my_string이 is_prefix로 시작하는지 확인
    if (my_string.startsWith(is_prefix)) {
        return 1;
    } else {
        return 0;
    }
}
