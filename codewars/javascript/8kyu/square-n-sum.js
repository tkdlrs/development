// Original kata: https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers){
var total = 0;

for (var i = 0; i < numbers.length; i++) {
var currentNumber = numbers[i];

currentNumber = currentNumber * currentNumber;
total = total + currentNumber;
}
return total;
}
