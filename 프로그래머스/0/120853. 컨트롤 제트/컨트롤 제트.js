function solution(s) {
      return  s.split(' ').reduce((accumulator, currentValue,index,arr)=>{
        if(currentValue === "Z"){
            return accumulator - Number(arr[index-1])
        }else{
            return accumulator + Number(currentValue)
        }
    },0);
}