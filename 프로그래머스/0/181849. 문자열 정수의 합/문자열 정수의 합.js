function solution(num_str) {
    const result = num_str.split('');
    
    var answer = 0;
    for(let i=0; i<result.length; i++){
        answer +=+result[i]
    }
    return answer;
}