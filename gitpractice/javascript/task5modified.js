function zero(parameter) {
    return parameter ? parameter(0) : 0;
  }
  function one(parameter) {
    return parameter ? parameter(1) : 1;
  }
  function two(parameter) {
    return parameter ? parameter(2) : 2;
  }
  function three(parameter) {
    return parameter ? parameter(3) : 3;
  }
  function four(param) {
    return param ? param(4) : 4;
  }
  function five(parameter) {
    return parameter ? parameter(5) : 5;
  }
  function six(parameter) {
    return parameter ? parameter(6) : 6;
  }
  function seven(parameter) {
    return parameter ? parameter(7) : 7;
  }
  function eight(parameter) {
    return parameter ? parameter(8) : 8;
  }
  function nine(parameter) {
    return parameter ? parameter(9) : 9;
  }
   
  function plus(value1) {
    return function(value2) {
      return value1 + value2;
    };
  }
  function minus(value1) {
    return function(value2) {
      return value2 - value1;
    };
  }
  function times(value1) {
    return function(value2) {
      return value1 * value2;
    };
  }
  function dividedBy(value1) {
    return function(value2) {
      return Math.floor(value2 / value1);
    };
  }