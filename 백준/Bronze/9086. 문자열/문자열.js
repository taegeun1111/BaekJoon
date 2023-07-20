let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  console.log(input[i].substring(0, 1) + input[i].substring(input[i].length - 1, input[i].length));
}