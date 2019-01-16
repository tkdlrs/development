// Original kata: https://www.codewars.com/kata/57eae20f5500ad98e50002c5

function noSpace(x){
var anArray = x.split("");
var resultString = [];
  for(var i = 0; i < anArray.length; i++) {
    var currentItem = anArray[i];
    if(currentItem !== " "){
      resultString.push(currentItem);
    }
  }
  return resultString.join("");
}
