function solution(my_string) {
    
    const str = 'aeiou'
    let newString = my_string.split('').filter((el)=>(!str.includes(el))).join('')
    
    return newString
    
}