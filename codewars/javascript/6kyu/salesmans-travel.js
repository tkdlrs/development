// Original kata: https://www.codewars.com/kata/salesmans-travel/javascript

function travel(r, zipcode) {

  // take the string of addresses 'r' and then convert the list of addresses into a new array 'addressArray' to compare.
  var addressArray = r.split(',');
  // set up some empty arrays to catch addresses and house numbers
  var addressesToKeepArray = [];
  var houseNumbersArray = [];

  // compare the zipcode with the last 2 words of the address for everything.
  for (var i = 0; i < addressArray.length; i++) {
    // take each item in the array as the currentAddress
    var currentAddress = addressArray[i];
    // also make an array out of the string
    var currentAddressArray = currentAddress.split(' ');
    // Figure out the currentAddressZip and the currentAddressNoZipNoHouse
    var currentAddressZip = currentAddressArray.slice(currentAddressArray.length - 2, currentAddressArray.length).join(' ');
    var currentAddressNoZipNoHouse = currentAddressArray.slice(1, currentAddressArray.length - 2).join(' ');
    // Figure out and save the houseNumber.
    var houseNumber = currentAddressArray.slice(0, 1);
    // if currentAddressZip matches zipcode then added the currentAddressNoZipNoHouse to the addressesToKeepArray
    // and add the houseNumber to the houseNumbersArray
    if (currentAddressZip == zipcode) {
      addressesToKeepArray.push(currentAddressNoZipNoHouse);
      houseNumbersArray.push(houseNumber);
    }
  }

  // Return address catagoized in this way: "ZIP code:street name/house #, house #"
  // console.log(zipcode + ':' + addressesToKeepArray + '/' + houseNumbersArray.join(',') );
  return zipcode + ':' + addressesToKeepArray + '/' + houseNumbersArray.join(',');

}
