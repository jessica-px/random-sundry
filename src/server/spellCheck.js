// Apply correct indefinite (a/an) articles
const spellCheck = (string) => {
    const regex = /(^|\s)([aA])(\s[aeiouAEIOU])/;
    if (string.match(regex)){
        string = string.replace(regex, '$1an$3');
    }
    return string;
}

module.exports = spellCheck;