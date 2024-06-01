function solution(myString) {
    // split the string into an array of characters
    let result = myString.split('').map(char => {
        // check if the character is less than 'l'
        if (char < 'l') {
            return 'l';  // replace it with 'l'
        }
        return char;  // otherwise, return the original character
    });

    // join the array back into a string
    return result.join('');
}