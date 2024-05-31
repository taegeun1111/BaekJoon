function solution(arr, delete_list) {
    // delete_list에 있는 원소들을 제거하기 위해 filter 함수를 사용합니다.
    return arr.filter(element => !delete_list.includes(element));
}