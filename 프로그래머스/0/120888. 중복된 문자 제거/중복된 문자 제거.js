function solution(my_string) {
    return  my_string.split('').filter((list,index,arr)=> arr.indexOf(list)===index).join('');
}