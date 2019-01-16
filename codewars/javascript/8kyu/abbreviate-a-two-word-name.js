// Original kata: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name){
  var eachName = name.split(" ");
  var result = [];

  for(var i = 0; i < eachName.length; i++ ) {
  var currentName = eachName[i];
  var nameArray = currentName.split("");

 if(nameArray[0]) {
 result.push(nameArray[0]);
 }

  }
return result.join(".").toUpperCase();
}
