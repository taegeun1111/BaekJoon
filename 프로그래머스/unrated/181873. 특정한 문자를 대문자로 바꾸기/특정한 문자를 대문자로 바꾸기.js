function solution(my_string, alp) {
  return my_string.split('')
    .map((result)=>result===alp ? result.toUpperCase() : result)
    .join('')
}