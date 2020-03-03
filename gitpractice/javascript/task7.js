/*http://www.codewars.com/kata/partition-on*/
function partitionOn(pred, items) {
    var evenNumberArray = items.filter(pred);
    var oddNumberArray = items.filter(item => {
        if (pred(item) == false)
            return true;
        else
            return false;
    })
    var length = oddNumberArray.length;
    items.splice(0, items.length);
    var resultArray = items.concat(oddNumberArray, evenNumberArray);
    Array.prototype.push.apply(items, resultArray);
    return length;
}