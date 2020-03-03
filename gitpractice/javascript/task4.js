/*http://www.codewars.com/kata/transportation-on-vacation*/
function rentalCarCost(d) {
  var days = d;
  var totalCost = 40 * days;

  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3) {
    totalCost -= 20;
  }

  return totalCost;

}