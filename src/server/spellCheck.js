// Apply correct indefinite (a/an) articles
const spellCheck = (string) => {
    // Type checking, throws error if not string
    if (typeof string !== "string"){
        console.error('ERROR in spellCheck.js: Expected string. Recieved ' + typeof string +'.');
    }

    const regex = /(^|\s)([aA])(\s[aeiouAEIOU])/;
    if (string.match(regex)){
        string = string.replace(regex, '$1an$3');
    }
    return string;
}

module.exports = spellCheck;