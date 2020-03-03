/*http://www.codewars.com/kata/get-the-middle-character*/
function getMiddle(str) {
        var array = Array.from(str);
        var result = "";
        var arrayLength = array.length;
        if (arrayLength % 2 === 0) {
                result = result + array[arrayLength / 2 - 1] + array[arrayLength / 2];
        }
        else if (arrayLength === 1)
                result = result + array[arrayLength - 1];
        else
                result = result + array[Math.floor(arrayLength / 2)];

        return result;

}