function prefill(n, v) {
    var array = [];
    if (n === 0 || n==="0")
        return [];
    else if (typeof n == "string") {
        if (isNaN(parseInt(n)))
            throw new TypeError(n + " is invalid");
        if (isNaN(n))
            throw new TypeError(n + " is invalid");
        //   for(var a=0;a<parseInt(n);a++)
        //   array.push(v);
        array = new Array(n);
        array.fill(v, 0, n);
    }
    else if (typeof n == "number") {
        if (n < 0)
            throw new TypeError(n + " is invalid");
        if (isNaN(n))
            throw new TypeError(n + " is invalid");
        if (n === Number.NEGATIVE_INFINITY || n === Number.POSITIVE_INFINITY)
            throw new TypeError(n + " is invalid");
        if (!Number.isInteger(n))
            throw new TypeError(n + " is invalid");

        array = new Array(n);
        array.fill(v, 0, n);
        //   for(var a=0;a<n;a++)
        //   array.push(v);
    }
    else {
        //    if(isNaN(n))
        //      throw new TypeError(n + " is invalid");
        if (typeof n == "boolean")
            throw new TypeError(n + " is invalid");
        if (isNaN(n))
            throw new TypeError(n + " is invalid");
        if (!Number.isInteger(n))
            throw new TyperError(n + " is invalid");

        //    try{

        //        catch(e){
        //     return e.message;}
        //     }
    }
    return array;
}

