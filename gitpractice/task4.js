/*http://www.codewars.com/kata/transportation-on-vacation*/
function rentalCarCost(d) {
    var total=40*d;
      if(d>=7)
      total-=50;
      else if(d>=3)
      total-=20;
      return total;
      
      
      
      
    }