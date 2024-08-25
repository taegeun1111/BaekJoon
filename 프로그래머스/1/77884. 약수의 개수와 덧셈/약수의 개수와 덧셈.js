function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++){
        let index = 1
        let num = [];
        while(index <= i){
            if(i % index === 0){
                num.push(index);
            }
            index++;
        }
        if(num.length % 2 === 0){
            answer += i
        }else{
            answer -= i
        }
    }
    return answer;
}