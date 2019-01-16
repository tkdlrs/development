// Original kata: https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e

function maxNumber(n){
  var sortArray = n.toString().split("").sort(function (a,b) {return a - b});
  var reverseArray = sortArray.reverse().join("");
  return Number.parseInt(reverseArray);

}
