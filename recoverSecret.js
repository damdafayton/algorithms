/*
There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.
*/

var recoverSecret = function (triplets) {
    var secret = [];
    let count = 0;
    triplets.forEach((bundle, i) => {
        if (!secret.length) { secret = bundle }
        const letter = bundle.filter(ltr => !secret.includes(ltr))
        if (letter.length == 1) {
            const idx = bundle.indexOf(letter[0])
            const idxNxtMain = secret.indexOf(bundle[idx + 1])
            const idxPrvMain = secret.indexOf(bundle[idx - 1])
            if (idxNxtMain === -1) {
                secret.splice(idxPrvMain + 1, 0, letter[0])
            } else {
                secret.splice(idxNxtMain, 0, letter[0])
            }
        }
        if (letter.length == 0) {
            const [a, b, c] = bundle.map(ltr => secret.indexOf(ltr))
            if (c > b) {
                if (b > a) {
                    count++
                } else {
                    let temp = secret[a]
                    secret[a] = secret[b]
                    secret[b] = temp
                }
            } else {
                let temp = secret[b]
                secret[b] = secret[c]
                secret[c] = temp
            }
        }
    })
    if (count === triplets.length) {
        return secret.join('')
    } else {
        if (secret.length > 4) { triplets.splice(0, 0, secret) } else {
            let end = triplets.pop()
            triplets.splice(0, 0, end)
        }
        return recoverSecret(triplets)
    }
}

console.log(recoverSecret([
    ['t', 's', 'f'],
    ['a', 's', 'u'],
    ['m', 'a', 'f'],
    ['a', 'i', 'n'],
    ['s', 'u', 'n'],
    ['m', 'f', 'u'],
    ['a', 't', 'h'],
    ['t', 'h', 'i'],
    ['h', 'i', 'f'],
    ['m', 'h', 'f'],
    ['a', 'u', 'n'],
    ['m', 'a', 't'],
    ['f', 'u', 'n'],
    ['h', 's', 'n'],
    ['a', 'i', 's'],
    ['m', 's', 'n'],
    ['m', 's', 'u']
]))