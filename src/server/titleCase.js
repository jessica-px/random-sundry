
// Capitalizes first letter of each word in string
function titleCase(string) {
    return string.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

module.exports = titleCase;