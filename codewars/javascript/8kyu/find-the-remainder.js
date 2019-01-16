// Original kata: https://www.codewars.com/kata/524f5125ad9c12894e00003f

function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  var large, small;
  if(a > b) {
    large = a;
    small = b;
  } else {
  large = b;
  small = a;
  }

  return large % small;


}
