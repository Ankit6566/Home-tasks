/*http://www.codewars.com/kata/a-chain-adding-function*/
function add(sum) {
    let addfunction = function(value) {
        return add(sum + value);
    }
    addfunction.valueOf = function() {
        return sum;
    }
    return addfunction;
}