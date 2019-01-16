// Original kata: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){

  var textArray = text.toLowerCase().split('');

  textArray.sort();

 var counter = 0;

 for(var i = 0; i < textArray.length - 1; i++) {

 var currentItem = textArray[i];

   if(currentItem === textArray[i + 1] && currentItem !== textArray[i +2]) {
     counter++;
   }

 }
   return counter;
}
