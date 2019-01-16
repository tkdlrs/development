// Original kata: https://www.codewars.com/kata/545a4c5a61aa4c6916000755

var gimme = function (inputArray) {

const originalArray = inputArray;

function compareNumbers(a,b) {
   return a - b;
   };

const sortArray = inputArray.slice(0, inputArray.length).sort(compareNumbers);

  var middleNumber = sortArray[1];
  var midIndex;

  for(var i = 0; i < originalArray.length; i++) {

    if(originalArray[i] === middleNumber) {
      midIndex = i;
    }

  }

return midIndex;
};
