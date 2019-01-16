// Original kata: https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words){

  var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var result = [];

  var wordsArray = words.split(' ');
  var wordsArrayCopy = wordsArray.slice(0, wordsArray.length);

  for(var i = 0; i < numberArray.length; i++) {

    for(var j = 0; j < wordsArray.length; j++) {

      if(wordsArray[j].includes(numberArray[i])) {

        result.push(wordsArray[j]);

      }

    }

  }
  return result.join(" ");
}
