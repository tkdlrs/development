// Original kata: https://www.codewars.com/kata/546e2562b03326a88e000020


function squareDigits(num){
  var numArray = num.toString().split("");
  var catchResult = [];

  for(var i = 0; i < numArray.length; i++) {
  var currentItem = numArray[i];
  catchResult.push(currentItem * currentItem);
  }

  return Number.parseInt(catchResult.join(""));

}
