// Original kata: https://www.codewars.com/kata/577bd026df78c19bca0002c0

function correct(string) {
	var seperateString = string.split("");
  var correctedString = [];

  for(var i = 0; i < seperateString.length; i++) {
    var currentItem = seperateString[i];

    // if current item is EXACTALY 0 that was a mistake change it to o
    if(currentItem === "0"){
    currentItem = "O";
    // add the corrected value to the correctedString array.
    correctedString.push(currentItem);

    } else if(currentItem === "5") {
    currentItem = "S";
    correctedString.push(currentItem);

    } else if(currentItem === "1") {
    currentItem = "I";
    correctedString.push(currentItem);

    } else if (currentItem === " ") {
    // don't lose spaces
      correctedString.push(" ");

    } else {
    correctedString.push(currentItem);
    }

  }

  return correctedString.join("");
}
