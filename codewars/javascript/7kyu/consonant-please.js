// Original kata: https://www.codewars.com/kata/59727e04f6a02d0cde00001a

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
