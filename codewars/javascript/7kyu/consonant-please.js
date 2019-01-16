// Original kata: https://www.codewars.com/kata/59727e04f6a02d0cde00001a


// most recent time I reworked the kata
function sortLetters(input) {

var consonant = [], vowels = [], numbers = [];
var cleanedInput = input.join('').toUpperCase().split(',').join('').split('');

  for(var i = 0; i < cleanedInput.length; i++){
    var current = cleanedInput[i];

    if(current == 1 || current == 2 || current == 3 || current == 4 || current == 5 || current == 6 || current == 7 || current == 8 || current == 9 || current == 0){
        numbers.push(current);
    } else if (current == 'A' || current == 'E' || current == 'I' || current == 'O' || current == 'U'){
        vowels.push(current);
    } else {
        consonant.push(current);
    }
  }

return [vowels, consonant];

}

// first time completing the kata
function sortLetters(input) {
var numbersArray = [];
var lettersArray = []
// remove all numbers in both arrays by cycling through both and if it's an integer store it in numbersArray.
for(var i = 0; i < input.length; i ++) {
var currentArray = input[i]
  for(var j = 0; j < currentArray.length; j++) {
    var currentItem = currentArray[j];
        if(Number.parseInt(currentItem) === currentItem) {
          numbersArray.push(currentItem);
        } else {
          lettersArray.push(currentItem);
        }
  }
}

// Capitalize everything
var capLetters = lettersArray.join("").toUpperCase() ;
// find the vowels
var vowels = capLetters.match(/([AEIOU])/gi);
// find the consonants
var consonants = capLetters.match(/([BCDFGHJKLMNPQRSTVWXYZ])/gi);
// if no vowels return empty array.
if(vowels == null ){
vowels = [];
}
// if no consonants return empty array.
if(consonants == null) {
consonants = [];
}
// return solution.
return [vowels, consonants];
}
