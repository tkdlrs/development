// Original kata: https://www.codewars.com/kata/523f5d21c841566fde000009

function array_diff(a, b) {

var array1 = a.filter(function(item) {
  return !b.includes(item);
})

return array1;


}
