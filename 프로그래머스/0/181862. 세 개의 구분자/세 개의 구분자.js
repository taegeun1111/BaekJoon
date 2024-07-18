function solution(myStr) {
const result = myStr.split(/[abc]/);    

    const filteredResult = result.filter(str => str !== "");

    return filteredResult.length === 0 ? ["EMPTY"] : filteredResult;
}