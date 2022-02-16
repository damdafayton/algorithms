/*
### Balanced Brackets

There are 3 kinds of Brackets: [] {} (). 
Given a String  of characters, check if all the brackets in the String are Balanced. 
A  string is balanced if all the start and end brackets are in a correct  order so they match each other.
*/

function balancedBrackets(string) {
    let stringList = string.split('')
    let brackets = []
    stringList.forEach(letter => {
        if (letter.search(/[()]/) != -1 || letter.search(/[\[\]]/) != -1 || letter.search(/[{}]/) != -1) {
            brackets.push(letter)
        }
    })

    // if brackets are even check wether they match
    if (brackets.length % 2 == 0) {
        console.log(brackets)
        return bracketMatcher(brackets)
    }
    return false
}

function bracketMatcher(brackets) {
    brackets.forEach((letter, index) => {
        // if closer doesnt pair to opener return false
        // else pop pair and continue recursion
        // if result is empty list it means all pairs are popped successfully
        let prevIndex = index - 1
        if (letter == ']') {
            if (brackets[prevIndex] != '[') { return false }
            else {
                brackets.splice(prevIndex, 2)
                return bracketMatcher(brackets)
            }
        }
        else if (letter == '}') {
            if (brackets[prevIndex] != '{') { return false }
            else {
                brackets.splice(prevIndex, 2)
                return bracketMatcher(brackets)
            }
        }
        else if (letter == ')') {
            if (brackets[prevIndex] != '(') { return false }
            else {
                brackets.splice(prevIndex, 2)
                return bracketMatcher(brackets)
            }
        }
    })
    console.log(brackets)
    return brackets.length == 0
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
