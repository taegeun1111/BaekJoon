let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

for (let i = 0; i < input.length; i++) {
	let count = 0;
	let torf = true;
	for (let j = 0; j < input[i].length; j++) {
		if (input[i][j] === "(") count++;
		else if (input[i][j] === ")") {
			count--;
			if (count < 0) {
				torf = false;
				break;
			}
		}
	}
	if (torf && count === 0) {
		console.log("YES");
		continue;
	} else {
		console.log("NO");
		continue;
	}
}