// Original kata: https://www.codewars.com/kata/56efc695740d30f963000557

String.prototype.toAlternatingCase = function () {
  var aString = this.split("");
  var anArray = [];


  for(var i = 0; i < aString.length; i++ ) {
    var currentItem = aString[i];

     if(currentItem === currentItem.toLowerCase()) {
        currentItem = currentItem.toUpperCase();

        anArray.push(currentItem);

      } else if(currentItem === currentItem.toUpperCase()) {
        currentItem = currentItem.toLowerCase();

        anArray.push(currentItem);
      }
      else {

        anArray.push(currentItem);
      };
  };

  return anArray.join("");
}
