function solution(s){
    const sLength = s.length
    const pCount = sLength - s.replace(/p/gi,'').length
    const yCount = sLength - s.replace(/y/gi,'').length

    return pCount - yCount === 0 
}
