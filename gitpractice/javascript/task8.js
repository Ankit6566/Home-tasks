/*http://www.codewars.com/kata/word-count*/
function countWords(str) {
    var string = str;
    string = string.trim();
    if (!string) {
        return 0;
    } else {
        return string.split(/\s+/).length;
    }
}
