function solution(quiz) {
     return quiz.map(q => {
        const [left, right] = q.split(" = ");
        const [X, operator, Y] = left.split(" ");

        const result = operator === '+' ? Number(X) + Number(Y) : Number(X) - Number(Y);

        return result === Number(right) ? "O" : "X";
    });
}