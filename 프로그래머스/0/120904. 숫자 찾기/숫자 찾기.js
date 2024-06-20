function solution(num, k) {
    // Convert num to a string to iterate through its digits
    const numStr = num.toString();
    // Convert k to a string for comparison
    const kStr = k.toString();
    
    // Iterate through the string representation of num
    for (let i = 0; i < numStr.length; i++) {
        // Check if the current digit matches k
        if (numStr[i] === kStr) {
            // Return the 1-based index of the matched digit
            return i + 1;
        }
    }
    
    // If k is not found in num, return -1
    return -1;
}
