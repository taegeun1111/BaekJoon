function solution(id_pw, db) {
    const id = id_pw[0];
    const pw = id_pw[1];
    const user = db.find((entry) => entry[0] === id);

    if (!user) {
        return 'fail';
    } else {
        if (user[1] === pw) {
            return 'login';
        } else {
            return 'wrong pw';
        }
    }
}