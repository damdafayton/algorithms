/*
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