// Original kata;; https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks){
  var totalScore = 0;
  var averageScore = 0;

  for(var i = 0; i < marks.length; i++) {
  var currentScore = marks[i];
  totalScore += currentScore;
  }

  averageScore = totalScore/ marks.length;

  return Math.floor(averageScore);
}
