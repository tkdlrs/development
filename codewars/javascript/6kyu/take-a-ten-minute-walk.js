// Original kata: https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript

function isValidWalk(walk) {
  let vertical = 0;
  let horizontal = 0;

  for(var i = 0; i < walk.length; i++){
    if(walk[i] === 'n') {
        ++vertical;
    } else if(walk[i] === 's') {
        --vertical;
    } else if(walk[i] === 'e') {
        ++horizontal;
    } else {
        --horizontal;
    }
  }

  if(vertical === 0 && horizontal === 0 && walk.length === 10 ){
    return true;
  } else {
    return false;
  }

}
