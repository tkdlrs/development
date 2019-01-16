// Original Kata: https://www.codewars.com/kata/57cc975ed542d3148f00015b

function check(a,x){

let arrayLength = a.length;
let arrayCopy = a.slice(0, arrayLength);

for(i = 0; i < arrayLength; i++) {

    let currentIndex = a[i];

        if(currentIndex == x) {
            return true;
        }

    }
return false;
};
