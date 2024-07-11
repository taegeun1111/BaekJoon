function solution(emergency) {
    const updateArr = [...emergency].sort((a,b)=> b-a)
    const answer = emergency.map(item => updateArr.indexOf(item) + 1);
    return answer;
}