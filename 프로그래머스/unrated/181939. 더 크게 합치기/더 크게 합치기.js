function solution(a, b) {
    let result = 0
    let abString = String(a) + String(b)
    let baString = String(b) + String(a)
    let abNum = Number(abString)
    let baNum = Number(baString)   
    if(abNum >= baNum) {result = abNum}
    else result = baNum
    return result    
}