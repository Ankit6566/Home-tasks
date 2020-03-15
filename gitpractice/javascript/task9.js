//http://www.codewars.com/kata/prefill-an-array
function prefill(number, v) {
    var array = [];
    if (number === 0 || number === "0")
        return [];
    else if (typeof number == "string") {
        if (isNaN(parseInt(number)) || isNaN(number))
            throw new TypeError(number + " is invalid");

        array = new Array(number);
        array.fill(v, 0, number);
    } else if (typeof number == "number") {
        if (number < 0 || isNaN(number) || number === Number.NEGATIVE_INFINITY || number === Number.POSITIVE_INFINITY || !Number.isInteger(number))
            throw new TypeError(number + " is invalid");


        array = new Array(number);
        array.fill(v, 0, number);

    } else {

        if (typeof number == "boolean" || isNaN(number) || !Number.isInteger(number))
            throw new TypeError(number + " is invalid");

    }
    return array;
}