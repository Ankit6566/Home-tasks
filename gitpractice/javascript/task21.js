/*http://www.codewars.com/kata/function-composition-1*/
function compose(...functions) {
    return function(value) {
        for (let i = functions.length - 1; i >= 0; i--) {
            value = functions[i](value)
        }
        return value;

    }

}