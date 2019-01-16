// Original kata: https://www.codewars.com/kata/511f11d355fe575d2c000001

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
var sortArray = ages.sort(function (a,b) {return a - b}).reverse();
return [sortArray[1], sortArray[0]];
}
