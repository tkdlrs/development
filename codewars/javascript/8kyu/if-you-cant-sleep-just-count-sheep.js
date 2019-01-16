// Original kata: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = function (num){
 var resultArray = [];

 for(var i = 0; i < num; i++) {
 resultArray.push((i +1) + " sheep...");

 }
 return resultArray.join("");
}
