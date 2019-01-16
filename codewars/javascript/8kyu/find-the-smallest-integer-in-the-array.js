// Original kata: https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
  findSmallestInt(args) {
   var sortArray = args.sort(function (a,b) {return a - b;});
   return sortArray[0];
  }
}
