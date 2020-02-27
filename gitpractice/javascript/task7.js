/*http://www.codewars.com/kata/partition-on*/
function partitionOn(pred, items) {
    var array=items.filter(pred);
    var array2=items.filter(item => {
    if(pred(item)==false)
    return true;
    else 
    return false;})
    length=array2.length;
     items.splice(0,items.length);
      var array1=items.concat(array2,array);
     Array.prototype.push.apply(items, array1);
     return length;
     }