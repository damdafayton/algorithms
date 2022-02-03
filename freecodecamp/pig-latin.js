// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, 
// move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
    let vowels = ['i', 'a', 'e', 'u', 'o'];
    let vowelIndex = str.indexOf(vowels[0]);
    vowels.forEach(letter => {
        let tempIndex = str.indexOf(letter);
        if (tempIndex >= 0) {
            if (vowelIndex >= 0) {
                if (tempIndex < vowelIndex) {
                    vowelIndex = tempIndex;
                }
            } else {
                vowelIndex = tempIndex;
            }
        }
    })
    console.log(vowelIndex);
    if (vowelIndex == 0) {
        str = str + 'way';
    }
    else if (vowelIndex > 0) {
        console.log(vowelIndex);
        let sliced = str.slice(0, vowelIndex);
        str = str.slice(vowelIndex) + sliced + 'ay';
    } else {
        str += 'ay';
    }
    console.log(str);
    return str;
}

translatePigLatin("consonant");