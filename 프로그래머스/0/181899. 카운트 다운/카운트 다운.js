function solution(start_num, end_num) {
    const result = [];
    
    if (start_num >= end_num) {
        for (let i = start_num; i >= end_num; i--) {
            result.push(i);
        }
    } else {
        console.log("start_num은 end_num보다 작아야 합니다.");
    }
    
    return result;
}