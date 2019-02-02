// Original Kata: https://www.codewars.com/kata/55b3425df71c1201a800009c
function stat(strg) {

var timesArray = strg.split(",");
var i;

var secondsArray = [];

var largest = 0;
var smallest = 999999;

// figure out the total time in seconds for figuring
for(i = 0; i < timesArray.length; i++) {

  let currentTime = timesArray[i];
  var eachTime = currentTime.split("|");


for(let j = 0; j < eachTime.length; j++){

  var hours = Number.parseInt(eachTime[0]);
  var minutes = Number.parseInt(eachTime[1]);
  var seconds = Number.parseInt(eachTime[2]);

  var secondsFromHours = hours * 3600;
  var secondsFromMinutes = minutes * 60;

  var totalSeconds = secondsFromHours + secondsFromMinutes + seconds;

}

secondsArray.push(totalSeconds);

}


// Figure out the largest and smallest values
for(var l = 0; l < secondsArray.length; l++){

  let current = secondsArray[l];

  if (current < smallest) {
    smallest = current;
  }

  if (current > largest) {
    largest = current;
  }


}

// Range (in Seconds) is largest - smallest
var range = largest - smallest;

var rangeHours = 0;

var hourlessRange = range;

// figure out number of hours in range.
if(range > 3600) {
  rangeHours = Math.floor(range / 3600);

  hourlessRange = hourlessRange - (rangeHours * 3600);
}

// figure out number of minutes in range

var rangeMinutes = Math.floor(hourlessRange / 60);

var rangeSeconds = hourlessRange - (rangeMinutes * 60);

// Figuring out Average.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const SumOfScores = (accumulator, currentValue) => accumulator + currentValue;

var Average = Math.floor(secondsArray.reduce(SumOfScores) / secondsArray.length);

// Processing Average
var averageHours = Average;
var hourlessAverage = Average;
// figure average hours
if(averageHours > 3600) {
  averageHours = Math.floor(Average / 3600);

  hourlessAverage = hourlessAverage -(averageHours * 3600);
} else {
  averageHours = 0;
}

// figure average minutes
var averageMinutes = Math.floor(hourlessAverage / 60);
// figure average seconds
var averageSeconds = hourlessAverage - (averageMinutes * 60);

// Figuring out Median.
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort2
var secondSort = secondsArray.sort(function(a,b) {return a -b});

// https://stackoverflow.com/questions/45309447/calculating-median-javascript
var middle = Math.floor(secondSort.length / 2);
var median = 0;

if (secondSort.length % 2) {
  median = secondSort[middle];
} else {
  median = (secondSort[middle - 1] + secondSort[middle]) / 2;
}

// Process Median.
var medianHours = median;
var hourlessMedian = median;
// Figure median hours
if(medianHours > 3600) {

  medianHours = Math.floor(median / 3600);

  hourlessMedian = hourlessMedian - (medianHours * 3600);
} else {
  medianHours = 0;
}
// figure median minutes
var medianMinutes = Math.floor(hourlessMedian / 60);
// figure median seconds
var medianSeconds = Math.floor(hourlessMedian - (medianMinutes * 60));

var rangeString = rangeHours.toString().padStart(2,'0') + "|" + rangeMinutes.toString().padStart(2,'0') + "|" + rangeSeconds.toString().padStart(2, '0');
var averageString = averageHours.toString().padStart(2,'0') + "|" + averageMinutes.toString().padStart(2,'0') + "|" + averageSeconds.toString().padStart(2, '0');
var medianString = medianHours.toString().padStart(2, '0') + '|' + medianMinutes.toString().padStart(2,'0') + '|' + medianSeconds.toString().padStart(2, '0');



  if(strg == "") {
   return "";
  } else {
  console.log('Range: ' + rangeString + ' Average: ' + averageString + ' Median: ' + medianString);
  return 'Range: ' + rangeString + ' Average: ' + averageString + ' Median: ' + medianString;
  }

}

// Second attempt
function stat(strg) {

if(strg === ''){return ''}

// change array of strings into an ordered array of times in Seconds
var times = strg.split(',');
var timesSeconds = [];

for(var i = 0; i < times.length; i++){

  let current = times[i];
  let currentTime = current.split('|');
  let seconds = (Number(currentTime[0]) * 3600) + (Number(currentTime[1]) * 60) + Number(currentTime[2]) ;

  timesSeconds.push(seconds);
}

timesSeconds.sort(function (a, b) {
  return a - b;
});


// Range:
function Range(high, low) {
  let ran = high - low;
  return Number(ran);
}

// Average:
const reducer = (adder, currentValue) => adder + currentValue ;
let total = timesSeconds.reduce(reducer);
function Average(sum, length) {
  let avr = sum / length;
  return Number(avr);
}

// Median:
var middleValue = Number.parseInt(timesSeconds.length / 2);
function Median(values) {

  if(values.length % 2) {
      return Number(values[middleValue]);
    } else {
      return Number((values[middleValue - 1] + values[middleValue]) / 2);
    }
}

// Convert back to time strings with the format 'hh|mm|ss'
function converter(timeInSeconds) {
  let hours, minutes, seconds, string;
    // hours
    if(timeInSeconds >= 3600) {
      hours = Math.floor(timeInSeconds / 3600);
      timeInSeconds = timeInSeconds - (hours * 3600);
    } else {
      hours = 0;
      timeInSeconds = timeInSeconds;
    }

    // minutes
    if(timeInSeconds >= 60){
      minutes = Math.floor(timeInSeconds / 60);
      timeInSeconds = timeInSeconds - (minutes * 60);
    } else {
      minutes = 0;
      timeInSeconds = timeInSeconds;
    }

    // seconds
    seconds = Math.floor(timeInSeconds);

 string = hours.toString().padStart(2,'0') + '|' + minutes.toString().padStart(2, '0') + '|' + seconds.toString().padStart(2, '0');
 return string;

}

console.log('Range: ' + converter(Range(timesSeconds[timesSeconds.length - 1], timesSeconds[0] )) + ' Average: ' + converter(Average(total, timesSeconds.length)) + ' Median: ' + converter(Median(timesSeconds)) );
return 'Range: ' + converter(Range(timesSeconds[timesSeconds.length - 1], timesSeconds[0] )) + ' Average: ' + converter(Average(total, timesSeconds.length)) + ' Median: ' + converter(Median(timesSeconds));

}
