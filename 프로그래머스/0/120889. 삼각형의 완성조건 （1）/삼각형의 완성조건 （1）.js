function solution(sides) {
    var answer = sides.sort((a,b)=>b-a);

    if(answer[0] < answer[1]+answer[2]){
        return 1;
    }else{
        return 2;
    }
}