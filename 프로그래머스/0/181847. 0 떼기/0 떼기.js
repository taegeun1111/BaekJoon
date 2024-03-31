function solution(n_str) {
  
   while (/^0/.test(n_str)) {
    n_str = n_str.slice(1);
  }
  
    return n_str;
}