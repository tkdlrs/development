// Original kata: https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble(str1, str2) {
  let occ = str1.split("").reduce((arr, idx) => { arr[idx] ? arr[idx]++ : arr[idx] = 1; return arr; }, {});
  return str2.split("").every((a) => --occ[a] >= 0);
}
