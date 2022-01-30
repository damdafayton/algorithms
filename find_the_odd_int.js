/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
    let intObj = {}
    A.forEach(integer => intObj[integer] = intObj[integer] + 1 || 1)
    // console.log(intObj)
    let result = 0;
    for (each in intObj) {
        if (intObj[each] % 2 != 0) (result = each)
    }
    return parseInt(result);
}