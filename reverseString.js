function reverseString(str) {
    let reverseList = [];
    for (let i = 0; i < str.length; i++) {
        reverseList[i] = str[str.length - i - 1];
    }
    str = reverseList.join('')
    return str;
}
console.log('hi')
console.log(reverseString("hello"));