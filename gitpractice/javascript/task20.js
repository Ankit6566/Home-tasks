/*http://www.codewars.com/kata/function-composition*/
function compose(func1, func2) {

    return (...args) => func1(func2.apply(null, args));

}