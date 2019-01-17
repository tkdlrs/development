// Original kata: https://www.codewars.com/kata/filter-out-the-geese

//  First go at it
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var filteredBirds = [];
  // return an array containing all of the strings in the input array except those that match strings in geese
  for(var i = 0; i < birds.length; i++) {
    var currentBird = birds[i];

    var geeseCount = 0;

      if(currentBird === "African" || currentBird === "Roman Tufted" || currentBird === "Toulouse" || currentBird === "Pilgrim" || currentBird === "Steinbacher") {
        geeseCount++
      } else {
        filteredBirds.push(currentBird);
      }
  }
  console.log(filteredBirds.join());
  return filteredBirds;
};


// Using the filter method
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  // return an array containing all of the strings in the input array except those that match strings in geese

  console.log(birds.filter(bird => bird != geese[0] && bird != geese[1] && bird != geese[2] && bird != geese[3] && bird != geese[4]));
  return birds.filter(bird => bird != geese[0] && bird != geese[1] && bird != geese[2] && bird != geese[3] && bird != geese[4]);

};
