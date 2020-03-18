/*http://www.codewars.com/kata/function-cache*/
function cache(func) {
    let tempobj = {};
    var arr = [];
    return function(obj1, obj2) {
        if (obj1 === undefined && obj2 === undefined) {

            if (!arr.includes("undef")) {
                arr.push("undef");
                tempobj["undef"] = func(obj1, obj2);
                return tempobj["undef"];
            } else {
                return tempobj["undef"];
            }
        }
        let temp = JSON.stringify(obj1).concat(JSON.stringify(obj2));
        if (arr.includes(temp)) {
            return tempobj[temp];
        } else {
            arr.push(temp);
            let result = func(obj1, obj2);
            tempobj[temp] = result;
            return result;
        }
    }
}