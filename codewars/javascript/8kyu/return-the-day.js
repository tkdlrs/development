// Original kata: https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

// function takes a number between 1-7 and then returns what day of the week it must be. 1 for Sun onward.
function whatday(num) {
if (num <= 7 && num > 0) {
  if(num == 1) {
    return "Sunday";
  } else if (num == 2) {
    return "Monday";
  } else if (num == 3) {
    return "Tuesday";
  } else if (num == 4) {
    return "Wednesday";
  } else if (num == 5) {
    return "Thursday";
  } else if (num == 6) {
    return "Friday";
  } else if (num == 7) {
    return "Saturday";
}
} else {
  return "Wrong, please enter a number between 1 and 7";
}


}
