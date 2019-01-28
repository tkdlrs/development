// Original kata: https://www.codewars.com/kata/read-the-time/train/javascript

function solve(time) {
// set up inital variables we'll need
  var timeArray = time.split(':');
  var hour = Number.parseInt(timeArray[0]);
  var minutes = Number.parseInt(timeArray[1]);

// function to figure out what the hour string whould be. Returns hourString.
  function solveHourString(hourNumber) {
    var hourString;
    // Figure out the word of the hour
    switch (hourNumber) {
      case 1:
      case 13:
        hourString = 'one';
        break;
      case 2:
      case 14:
        hourString = 'two';
        break;
      case 3:
      case 15:
        hourString = 'three';
        break;
      case 4:
      case 16:
        hourString = 'four';
        break;
      case 5:
      case 17:
        hourString = 'five';
        break;
      case 6:
      case 18:
        hourString = 'six';
        break;
      case 7:
      case 19:
        hourString = 'seven';
        break;
      case 8:
      case 20:
        hourString = 'eight';
        break;
      case 9:
      case 21:
        hourString = 'nine';
        break;
      case 10:
      case 22:
        hourString = 'ten';
        break;
      case 11:
      case 23:
        hourString = 'eleven';
        break;
      case 12:
        hourString = 'twelve';
        break;
      case 0:
      case 24:
        hourString = 'midnight';
        break;
    }
    return hourString;
  }

// function to figure out what the minutes string should be. Returns minuteString.
  function solveMinutesString(minuteNumber) {
    var minuteString;
    // Figure out the word for the minutes for special cases (half and quarter)
    if (minuteNumber === 30 || minuteNumber === 45 || minuteNumber === 15) {
      switch (minuteNumber) {
        case 30:
          minuteString = 'half';
          break;
        case 45:
        case 15:
          minuteString = 'quarter';
          break;
      }
    } else if (minuteNumber >= 20) {
      // Figure out if the minutes has a tens place or not.
      var minutesArray = minuteNumber.toString().split('');

      var tensMinuteDigit, tensMinuteDigitString;
      var onesMinuteDigit, onesMinuteDigitString;

      tensMinuteDigit = Number.parseInt(minutesArray[0]);
      onesMinuteDigit = Number.parseInt(minutesArray[1]);

      // For the tens place
      switch (tensMinuteDigit) {
        case 2:
          tensMinuteDigitString = "twenty ";
          break;
        case 3:
          tensMinuteDigitString = "thirty ";
          break;
        case 4:
          tensMinuteDigitString = "forty ";
          break;
        case 5:
          tensMinuteDigitString = "fifty ";
          break;
      }

      // For the ones place
      switch (onesMinuteDigit) {
        case 0:
          onesMinuteDigitString = 'minutes';
          break;
        case 1:
          onesMinuteDigitString = 'one minutes';
          break;
        case 2:
          onesMinuteDigitString = 'two minutes';
          break;
        case 3:
          onesMinuteDigitString = 'three minutes';
          break;
        case 4:
          onesMinuteDigitString = 'four minutes';
          break;
        case 5:
          onesMinuteDigitString = 'five minutes';
          break;
        case 6:
          onesMinuteDigitString = 'six minutes';
          break;
        case 7:
          onesMinuteDigitString = 'seven minutes';
          break;
        case 8:
          onesMinuteDigitString = 'eight minutes';
          break;
        case 9:
          onesMinuteDigitString = 'nine minutes';
          break;
      }

      minuteString = tensMinuteDigitString + onesMinuteDigitString;
    } else if (minuteNumber >= 10) {
      switch (minuteNumber) {
        case 10:
          minuteString = "ten minutes";
          break;
       case 11:
          minuteString = "eleven minutes";
          break;
        case 12:
          minuteString = "twelve minutes";
          break;
        case 13:
          minuteString = "thirteen minutes";
          break;
        case 14:
          minuteString = "fourteen minutes";
          break;
        case 16:
          minuteString = "sixteen minutes";
          break;
        case 17:
          minuteString = "seventeen minutes";
          break;
        case 18:
          minuteString = "eighteen minutes";
          break;
        case 19:
          minuteString = "nineteen minutes";
          break;
      }
    } else if (minuteNumber < 10) {
      switch (minuteNumber) {
        case 1:
          minuteString = "one minute";
          break;
        case 2:
          minuteString = "two minutes";
          break;
        case 3:
          minuteString = "three minutes";
          break;
        case 4:
          minuteString = "four minutes";
          break;
           case 5:
          minuteString = "five minutes";
          break;
        case 6:
          minuteString = "six minutes";
          break;
        case 7:
          minuteString = "seven minutes";
          break;
        case 8:
          minuteString = "eight minutes";
          break;
        case 9:
          minuteString = "nine minutes";
          break;
      }
    }
    return minuteString;
  }

// figures out the string for the time and returns it
  if (hour === 0 && minutes === 0) {
    console.log('midnight');
    return 'midnight';
  } else if (minutes == 0) {
      console.log(solveHourString(hour) + ' o\'clock');
      return solveHourString(hour) + ' o\'clock';
  } else if (minutes <= 30) {
      console.log(solveMinutesString(minutes) + ' past ' + solveHourString(hour));
      return solveMinutesString(minutes) + ' past ' + solveHourString(hour);
  } else if (minutes > 30) {
      var remainingMinutes = 60 - minutes;
      var nextHour = hour + 1;
      console.log(solveMinutesString(remainingMinutes) + ' to ' + solveHourString(nextHour));
      return solveMinutesString(remainingMinutes) + ' to ' + solveHourString(nextHour);
  }
}
