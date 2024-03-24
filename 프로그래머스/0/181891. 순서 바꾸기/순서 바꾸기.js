function solution(num_list,n) {
    let front_list= num_list.slice(0,n)
    let back_list= num_list.slice(n,num_list.length)
    
    return [...back_list,...front_list]
}