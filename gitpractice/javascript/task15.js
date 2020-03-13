Object.prototype.hash = function(string) {
    var array = string.split(".");
    let myobject = obj;
    for (let i = 0; i < array.length; i++) {
        myobject = myobject[array[i]]
        if (myobject == undefined)
            return undefined;
    }
    return myobject;
}