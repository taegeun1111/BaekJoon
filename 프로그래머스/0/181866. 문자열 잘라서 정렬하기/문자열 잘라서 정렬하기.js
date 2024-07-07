function solution(myString) {
    return myString.split("x").filter((list)=>list.length>0).sort();
}