function solution(babbling) {
    const validWords = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let word of babbling) {
        let isPronounceable = true;
        let usedWords = new Set();

        // 반복해서 단어를 줄여가며 검사
        while (word.length > 0 && isPronounceable) {
            let found = false;

            for (let validWord of validWords) {
                if (word.startsWith(validWord) && !usedWords.has(validWord)) {
                    word = word.slice(validWord.length);
                    usedWords.add(validWord);
                    found = true;
                    break;
                }
            }

            if (!found) {
                isPronounceable = false;
            }
        }

        if (isPronounceable && word.length === 0) {
            count++;
        }
    }

    return count;
}
