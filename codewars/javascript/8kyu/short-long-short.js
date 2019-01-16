// Original kata: https://www.codewars.com/kata/50654ddff44f800200000007

function solution(a, b){
 var short, long;

 if(a.length > b.length) {
   short = b;
   long = a;
 } else {
   short = a;
   long = b;
 }

 return short + long + short;

}
