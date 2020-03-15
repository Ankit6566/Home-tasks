/*http://www.codewars.com/kata/array-helpers*/
Array.prototype.sum = function() { return this.reduce((sum, curr) => sum += curr, 0) }
Array.prototype.square = function() { return this.map(x => x * x) }
Array.prototype.cube = function() { return this.map(x => x * x * x) }
Array.prototype.average = function() { return (this.reduce((sum, curr) => sum += curr, 0) / this.length) }
Array.prototype.even = function() {
    array = [];
    console.log(this[0])
    array = this.filter((value) => (value % 2 == 0));
    return array;
}
Array.prototype.odd = function() {
    array = [];
    console.log(this[0])
    array = this.filter((value) => (value % 2 != 0));
    return array;
}