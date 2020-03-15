//http://www.codewars.com/kata/prefill-an-array
function prefill(number, v) {
    var array = [];
    if (number === 0 || number==="0")
        return [];
    else if (typeof number == "string") {
        if (isNaN(parseInt(number)))
            throw new TypeError(number + " is invalid");
        if (isNaN(number))
            throw new TypeError(number + " is invalid");
        //   for(var a=0;a<parseInt(n);a++)
        //   array.push(v);
        array = new Array(number);
        array.fill(v, 0, number);
    }
    else if (typeof number == "number") {
        if (number < 0)
            throw new TypeError(number + " is invalid");
        if (isNaN(number))
            throw new TypeError(number + " is invalid");
        if (number === Number.NEGATIVE_INFINITY || number === Number.POSITIVE_INFINITY)
            throw new TypeError(number + " is invalid");
        if (!Number.isInteger(number))
            throw new TypeError(number + " is invalid");

        array = new Array(number);
        array.fill(v, 0, number);
        //   for(var a=0;a<n;a++)
        //   array.push(v);
    }
    else {
        //    if(isNaN(n))
        //      throw new TypeError(n + " is invalid");
        if (typeof number == "boolean")
            throw new TypeError(number + " is invalid");
        if (isNaN(number))
            throw new TypeError(number + " is invalid");
        if (!Number.isInteger(number))
            throw new TyperError(number + " is invalid");

        //    try{

        //        catch(e){
        //     return e.message;}
        //     }
    }
    return array;
}

