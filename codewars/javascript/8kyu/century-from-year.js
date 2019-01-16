// Original kata: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function century(year) {
  var currentCentury = 0;
  if(year <= 0) {
  currentCentury = "Time can't be negative";
  } else if (year > 0 && year < 100) {
    currentCentury = 1;
  } else if (year % 100 == 0) {
    currentCentury = year / 100;
  } else {
    currentCentury = Math.floor((year /100 ) + 1);
  }

 return currentCentury;
}
