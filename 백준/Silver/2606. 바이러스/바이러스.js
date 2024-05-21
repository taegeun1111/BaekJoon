let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const qty = Number(input.shift());
const pair = Number(input.shift());
const computers = input.map((v) => v.split(' ').map(Number));

let answer = 0;
let visited = Array(qty + 1).fill(false);
let graph = Array.from(Array(qty + 1)).map(() => []);

computers.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const bfs = (start) => {
  let queue = [start];
  while (queue.length) {
    const node = queue.shift();
    if (!visited[node]) {
      visited[node] = true;
      answer++;
      queue.push(...graph[node]);
    }
  }
};

bfs(1);
console.log(answer - 1);
