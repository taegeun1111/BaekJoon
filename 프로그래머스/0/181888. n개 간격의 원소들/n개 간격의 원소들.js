function solution(num_list, n) {
    // 결과를 담을 배열을 선언합니다.
    let result = [];
    
    // 첫 번째 원소부터 시작하여 n개 간격으로 원소를 선택합니다.
    for (let i = 0; i < num_list.length; i += n) {
        result.push(num_list[i]);
    }
    
    return result;
}