function solution(arr) {
    
    return arr.map((list)=> {
        if(list >= 50 && list % 2 === 0){ 
            return list / 2;
        }else if(list < 50 && list %2 ===1){
            return list * 2;
        }else{
            return list
    }});
}