Array.prototype.sum = function() { return this.reduce((sum, curr) => sum += curr, 0) }
Array.prototype.square = function() { return this.map(x => x * x) }
Array.prototype.cube = function() { return this.map(x => x * x * x) }
Array.prototype.average = function() { return (this.reduce((sum, curr) => sum += curr, 0) / this.length) }
Array.prototype.even = function() {
    array = [];
    console.log(this[0])
    this.forEach((x) => { if (x % 2 == 0) array.push(x) });
    //  (let i = 0; i < this.length; i++) {
    //     if (this[i] % 2 == 0)
    //         array.push(this[i])
    // }
    return array;
}
Array.prototype.odd = function() {
    array = [];
    console.log(this[0])
    this.forEach(x => { if (x % 2 != 0) array.push(x) });
    // for (let i = 0; i < this.length; i++) {
    //     if (this[i] % 2 != 0)
    //         array.push(this[i])
    // }
    return array;
}