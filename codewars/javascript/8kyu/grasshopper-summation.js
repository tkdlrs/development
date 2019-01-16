// Original kata: https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
  var total = 0;
  for(var i = 0; i < num; i++) {
  total += (i+1);
  }
  return total;
}
