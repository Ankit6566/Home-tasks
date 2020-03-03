/*http://www.codewars.com/kata/basic-mathematical-operations*/
function basicOp(operation, value1, value2) {
   var operand = operation;
   switch (operand) {
      case '+': {
         return (value1 + value2);
      }
      case '-': {
         return (value1 - value2)
      }
      case '/': {
         return (value1 / value2);
      }
      case '*': {
         return (value1 * value2);
      }
   }

}
