/*http://www.codewars.com/kata/word-count*/
function countWords(str) {
    str = str.trim();
    if (!str) {
        return 0;
    } else {
        return str.split(/\s+/).length;
    }
}
var Cat = (function () {
    var Catweight=0;
    var i=0;
   return class {
         constructor(name, weight) {
             if (typeof name == "undefined" || typeof weight == "undefined")
                 throw new TypeError();
             Object.defineProperty(this, 'name', {
                 value: name,
                 writable: false
             })
             Object.defineProperty(this, 'weight', {
                 value: weight,
                 writable: false
                
                 
             })
                
             Catweight=Catweight+this.weight;
             i++;
             }
             
             static  averageWeight(){
           return Catweight/i;
             }
         }
 }());