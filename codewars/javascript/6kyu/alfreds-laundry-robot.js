// Original kata: https://www.codewars.com/kata/583d704a70407fcb43000443

function pathFinding(path) {
  // set up variables
  var north = 0;
  var east = 0;
  var south = 0;
  var west = 0;
  var i = 0;
  // make a count of each direction the robot went
  for(i; i < path.length; i++) {
    var current = path[i];

      if(current === 'n') {
        ++north;
        --south;
      } else if (current === 'e') {
        ++east;
        --west;
      } else if (current === 's') {
        ++south;
        --north;
      } else {
        ++west;
        --east;
      }
  }
// Check that the robot either went north 2 times and east 3 times OR north 3 times and west 4 times. If it did one of these return true otherwise it's lost.
  if(north == 2 && east == 3) {
//   console.log("North: " + north + " East: " + east +" South: " + south + " West: " + west);
    return true;
  } else if(north == 3 && west == 4) {
//   console.log("North: " + north + " East: " + east +" South: " + south + " West: " + west);
    return true;
  } else {
//   console.log("North: " + north + " East: " + east +" South: " + south + " West: " + west);
    return false;
  }

}
