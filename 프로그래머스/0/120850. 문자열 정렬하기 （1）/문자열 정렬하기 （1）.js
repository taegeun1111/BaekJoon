function solution(my_string) {
    var regex =/^[0-9]$/;
    return my_string.split('').filter((list)=> regex.test(list)).sort((a,b)=> a-b).map((list)=>+list);
}