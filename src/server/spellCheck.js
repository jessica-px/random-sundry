
const spellCheck = (string) => {
    // Type checking, throws error if not string
    if (typeof string !== "string"){
        console.error('ERROR in spellCheck.js: Expected string. Recieved ' + typeof string +'.');
    }
    // Applies correct indefinite (a/an) articles
    const regex = /(^|\s)([aA])(\s[aeiouAEIOU])/;
    if (string.match(regex)){
        string = string.replace(regex, '$1an$3');
    }

    // Capitalizes first letter of string. Might later need upgrading for every sentence?
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

module.exports = spellCheck;