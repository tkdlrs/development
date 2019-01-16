// Original kata: https://www.codewars.com/kata/55c28f7304e3eaebef0000da

function createArray(number){
  var newArray = [];

  for(var counter = 1; counter <= number; counter = counter + 1){
    newArray.push(counter);
  }

  return newArray;
}
