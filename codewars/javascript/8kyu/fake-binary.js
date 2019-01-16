// Original kata:https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x){

var splitString = x.split("");
var result = [];

for(var i = 0; i < splitString.length; i++) {

var currentItem = splitString[i];

if(currentItem <= 4){
  currentItem = 0;
  result.push(currentItem);

} else {
  currentItem = 1;
  result.push(currentItem);
}

}
return result.join("");
}
