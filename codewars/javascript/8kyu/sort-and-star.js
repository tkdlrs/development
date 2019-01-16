// Original kata: https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

function twoSort(s) {
// first use sort method to order the passed array of strings.
var putInOrder = s.sort();
// pick the first item in the sorted array and assign it a variable
var firstItem = putInOrder[0];
// Use a method to split the first item of the sorted array by each character
var splitFirstItem = firstItem.split("");
// use a method to join the items back together and add three astrick delimiters inbetween each character
var text = splitFirstItem.join("***");

return text;

}
