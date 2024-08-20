function solution(s) {
    var answer = '';
    let splitedWord = s.split(' ');
    
    for(let i=0; i<splitedWord.length; i++){
        splitedWord[i].split('').map((smallWord,index)=>{
            if(index===0){
                answer += smallWord.toString().toUpperCase();
            }else{
                answer +=  smallWord.toString().toLowerCase();
            }
        })
        if(i !== splitedWord.length-1){
        answer+= ' '
        }
    }
    
    
    return answer;
}