// Original kata: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function find_average(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {

  var currentItem = array[i];

  total = total + currentItem;

  }

 var average = total / array.length;
 return average;
}
