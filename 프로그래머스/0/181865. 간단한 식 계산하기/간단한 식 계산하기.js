function solution(binomial) {
  const newArr = binomial.split(" ");
  const num1 = +newArr[0];
  const operator = newArr[1];
  const num2 = +newArr[2];

  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else {
    throw new Error("Unsupported operator");
  }
}
