// Original kata: https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
var anArray = [];
   for (var i = 0; i < n; i++) {
    anArray.push(i + 1);
  }
   anArray.reverse();
return anArray;
};
