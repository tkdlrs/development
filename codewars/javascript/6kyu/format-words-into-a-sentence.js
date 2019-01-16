// Original kata: https://www.codewars.com/kata/51689e27fe9a00b126000004

function formatWords(words){

  var wordArray = [];
  var result = 0;

  if(Array.isArray(words)) {
    for(var i = 0; i < words.length; i++) {
      var currentItem = words[i];
      if(currentItem != '') {
       wordArray.push(currentItem);
      }
    }
}  else {
  return "";
}

 if(wordArray <= 0) {
   var result = "";
   return result;
 }

 else if (wordArray.length == 1){
      var result = wordArray.join('');
//       console.log(result);
      return result;
  }

  else if (wordArray.length == 2) {
      var result = wordArray.join(' and ');
//       console.log(result);
      return result;
  }

  else if(wordArray.length > 2) {
      var lastWord = wordArray[wordArray.length - 1];
      var sentenceBeginning = wordArray.slice(0, -1)
      var result = sentenceBeginning.join(', ') + ' and ' + lastWord;
//       console.log(result);
      return result;
  }

}
