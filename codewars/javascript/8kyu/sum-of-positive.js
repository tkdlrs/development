// Original kata: https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  var totalPositive = 0;

  for(var i = 0; i < arr.length; i++) {
  var currentItem = arr[i];

  if(currentItem > 0) {
  totalPositive += currentItem
  }

  }
  return totalPositive;
}
