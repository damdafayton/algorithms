// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    //...
    let decStart = 'a'.charCodeAt()
    let decEnd = 'z'.charCodeAt()
    let charList = [];
    let count = 0;
    while (count <= decEnd - decStart) {
        charList.push(String.fromCharCode(decStart + count))
        count++
    }
    string.toLowerCase().forEach(letter => charList = charList.filter(char => char != letter))
    console.log(charList)
    if (charList.length < 1) { return true } else { return false }
}