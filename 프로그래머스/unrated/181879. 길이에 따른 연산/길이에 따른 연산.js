function solution(num_list) {
  const list = num_list;
  if(list.length >=11){
      return list.reduce((a,b) => a +b ,0)
  } else {
      return list.reduce((a,b)=> a*b , 1)
  }
}