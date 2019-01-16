// Original kata: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// Using a for loop
function repeatStr (n, s) {
  var newString = "";
  for(var i = 0; i < n; i++) {
  newString += s;
  }
  return newString;
}

// using a while loop
function repeatStr (n, s) {
 var repeatedString = "";
  while(n > 0){
   repeatedString += s;
   n--
  }
 return repeatedString;

}
