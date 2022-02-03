// Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
// in a string to their corresponding HTML entities.

function convertHTML(str) {
    let htmlObject = {
        '&': '&amp;',
        '<': '&lt;', '>': '&gt;',
        '"': '&quot;', '\'': '&apos;'
    }
    let strList = str.split('');
    strList.forEach((letter, index) => {
        Object.keys(htmlObject).forEach(entity => {
            if (entity == letter) {
                strList[index] = htmlObject[entity];
            }
        })
    })
    console.log(strList.join(''));
    return strList.join('');
}

convertHTML("Dolce & Gabbana");