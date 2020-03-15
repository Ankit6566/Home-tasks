/*http://www.codewars.com/kata/using-closures-to-share-class-state*/
let avweight = 0;
let c = 0;
let Cat = function(name, weight) {

    if (name == undefined || weight == undefined) {
        console.log("kuch bhi");
        throw new Error();
    }
    avweight += weight;
    c++;
    Object.defineProperty(this, "name", {
        get: function() { return name; },
        set: function(value) {
            name = value;
        },
    });
    Object.defineProperty(this, 'weight', {
        get: function() { return weight; },
        set: function(value) {
            avweight -= weight;
            avweight += value;
            weight = value;

        },
    });
}

Object.defineProperty(Cat, 'averageWeight', {
    value: function() {
        return avweight / c;


    }
});