// Original kata: https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  var rna = dna.replace(/T/ig, "U");
  return rna;
}
