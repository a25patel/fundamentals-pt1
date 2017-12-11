// Define a function named sum that takes two arguments
// Return the sum of these two arguments
function sum(a, b) {
  return a + b;
}

// Define a function named product that takes two arguments
// Return the product of these two arguments
function product(a, b) {
  return a * b;
}

// Define a function named sumAndProduct that takes three arguments
// Return the sum of the first two arguments multiplied by the third argument.
// For example, given 1, 2, and 5, then return 15.
function sumAndProduct(x, y, z) {
  return (x + y) * z;
}

// Define a function named averageMovieReview that takes three arguments
// Return the average of the three arguments.
function averageMovieReview(rachel, roger, jake) {
  return (rachel + roger + jake) / arguments.length;
}

// Define a function named weightedAverageMovieReview that takes three arguments
// Return the weighted average of the three arguments with the following weights
//    Rachel's weight is 0.25
//    Roger's weight is 1
//    Jake's weight is 2.2

// For example
// weightedAverageMovieReview(5, 5, 5)
// = ((0.25 * 5) + (1.0 * 5) + (2.2 * 5)) / (0.25 + 1.0 + 2.2)
// = 5.0

function weightedAverageMovieReview(rachel, roger, jake) {
  var weight = (.25 * rachel) + (1 * roger) + (2.2 * jake);
  var total = .25 + 1 + 2.2
  return weight / total
}

// Define a function named roundUp that takes one argument
// Return the argument rounded up to the nearest integer
function roundUp(decimal) {
  return Math.ceil(decimal);
}

// Define a function named toFahrenheit that takes one argument
//    celsius (number)
// Return the argument converted to Fahrenheit rounded to the nearest integer.
function toFahrenheit(celsius) {
  var Fahrenheit = celsius * (9 / 5) + 32
  return Math.ceil(Fahrenheit);
}

// Define a function named areaOfCircle that takes one argument
//    radius (number)
// Return the area of a circle using that argument.
function areaOfCircle(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  return area;
}

// Define a function named areaOfRing that takes two arguments
// Return the area of a circular ring using these arguments.
function areaOfRing(outerRadius, innerRadius) {
  var area = Math.PI * ((Math.pow(outerRadius, 2)) - (Math.pow(innerRadius, 2)))
  return area;
}

// Define a function named greet that takes 2 arguments
// Return a string in the format 'Hello, Kelly Rippa!' using these arguments
function greet(firstName, lastName) {
  return 'Hello, ' + firstName + ' ' + lastName + '!'
}

// Define a function named toSentence that takes four arguments
// If oxfordComma is true,
//    Return a string in the format "word1, word2, and word3."
// If oxfordComma is false,
//    Return a string in the format "word1, word2 and word3."
function toSentence(word1, word2, word3, oxfordComma) {
  if (oxfordComma) {
    return word1 + ', ' + word2 + ', and ' + word3 + '.';
  }else {
    return word1 + ', ' + word2 + ' and ' + word3 + '.';
  }
}

// Define a function named toRoman that takes one argument
// If the argument is less than 1
//    Return null
// If the argument is greater than 10
//    Return null
// Otherwise
//    Return the argument converted to a roman numeral string
function toRoman(arabic) {
  if (arabic < 1) {
    return null;
  }
  if (arabic > 10) {
    return null;
  }
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
    while (arabic%decimal[i] < arabic) {
      result += roman[i];
      arabic -= decimal[i];
    }
  }
  return result;
 }

// Define a function toDolla that takes one argument
// Return the argument converted to a dollar currency string.
function toDolla(amount) {
  return "$" + amount.toFixed(2);
}

// Define a function named percentage that takes two arguments
// Return the percentage of the first argument divided by the second.
function percentage(numerator, denominator) {
  var percent = (numerator / denominator) * 100
  return percent.toFixed(1) + '%';
}

// Define a function named isStrictlyEqual that takes two arguments
// If the two arguments are both equal and have the same type
//    Return true
// Otherwise
//    Return false
function isStrictlyEqual(value1, value2) {
  if (value1 === value2) {
    return true;
  }else {
    return false;
  }
}

// Define a function named isLooselyEqual that takes two arguments
// If the two arguments are both equal regardless of type
//    Return true
// Otherwise
//    Return false
function isLooselyEqual(value1, value2) {
  if (value1 == value2) {
    return true;
  }else {
    return false;
  }
}
// Define a function named remainder that takes two arguments
// Return the remainder of the first argument divided by the second. For
// example, given 4 and 3, then return 1.
function remainder(numerator, denominator) {
  return numerator % denominator;
}

// Define a function named isEven that takes one argument
// If the number is even
//    Return true
// Otherwise
//    Return false
function isEven(integer) {
  if (integer % 2 === 0 ) {
    return true;
  }else {
    return false;
  }
}

// Define a function named isOdd that takes one argument
// If the number is odd
//    Return true
// Otherwise
//    Return false
function isOdd(integer) {
  if (integer % 2 !== 0) {
    return true;
  }else {
    return false;
  }
}

// Define a function named isVowel that takes one argument
//    letter (string)
// If the letter is a vowel
//    Return true
// Otherwise
//    Return false
function isVowel(letter) {
  var array = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === letter) {
      return true;
    }
  }
  return false;
}

// Define a function named largestOfThree which takes three arguments
// Return the largest argument by value
function largestOfThree(value1, value2, value3) {
  return Math.max(value1, value2, value3);
}

// Define a function named longestOfThree which takes three arguments
// Return the longest argument by length
function longestOfThree(value1, value2, value3) {
  var array = [value1, value2, value3]
  var long = '';
  var value = '';
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > long) {
      long = array[i].length;
      value = array[i]
    }
  }
  return value;
}

// Define a function named iceCreamPosition that takes two arguments
// If iceCreamFlavor is 'cardamom'
//    Return 'not at all' immediately
// Otherwise
//    If pieTemperature is 'cold'
//      Return 'on top'
//    If pieTemperature is 'warm'
//      Return 'on the side'
// Otherwise
//    Return 'up to you'
function iceCreamPosition(pieTemperature, iceCreamFlavor) {
  if (iceCreamFlavor === 'cardamom') {
    return 'not at all'
  }else {
    if (pieTemperature === 'cold') {
      return 'on top'
    }
    if (pieTemperature === 'warm') {
      return 'on the side'
    }
    return 'up to you'
  }
}

// Define a function named isLeapYear that takes one argument
// If the argument is a leap year
//    Return true
// Otherwise
//    Return false
function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  }else if (year % 100 !== 0) {
    return true;
  }else if (year % 400 !== 0) {
    return false;
  }else {
    return true;
  }
}

// Define a function named shout that takes one argument
// Return the same argument but all in uppercase letters.
function shout(message) {
  return message.toUpperCase();
}

// Define a function named whisper that takes one argument
// Return the same argument but all in lowercase letters and prefixed by
// 'shhh... '.
function whisper(message) {
  return 'shhh... ' + message.toLowerCase();
}

// Define a function named stopAt that takes two arguments
// Return the source all the way up to the position where stop begins. For
// example, given 'how now brown cow' and 'brown', then return 'how now'.
function stopAt(source, stop) {
  var index = source.indexOf(stop)
  var sub = source.substring(0, index).trim();
  return sub;
}

// Define a function named capitalize that takes one argument
// Return the argument with the first letter capitalized.
function capitalize(message) {
  return message.charAt(0).toUpperCase() + message.slice(1);
}

// Define a function named leftPad5 that takes one argument
// If the argument's length is less than 5
//    Return the argument but prefixed with spaces until it's 5 characters long
// If the argument's length is 5 or more characters
//    Return the argument
function leftPad5(word) {
  if (word.length < 5) {
    do {
      word = ' ' + word
    } while (word.length < 5);
    return word;
  }else {
    return word;
  }
}

// Define a function named superPicky that takes one argument
// If the argument is a string,
//    Return 'Thanks! Got it.'
// Otherwise
//    Return 'I wanted a string, but all I got was a stinking TYPE'
function superPicky(value) {
  if (typeof value === 'string' ) {
    return 'Thanks! Got it.'
  }else {
    return 'I wanted a string, but all I got was a stinking ' + typeof value
  }
}

// Define a function named calculateTaxRate that takes two arguments
//    salary (number from 1 to 74,900)
//    status (string that's either 'single' or 'joint')
//
// If the status is anything other than 'single' or 'joint'
//    Return a string that says 'Better call an accountant'
// If the salary is greater than 74,900
//    Return a string that says 'Better call an accountant'
// Otherwise
//    Return the correct tax rate as a string using the table from http://www.efile.com/tax-service/tax-calculator/tax-brackets/
function calculateTaxRate(salary, status) {
  if (salary > 74,900) {
    return 'Better call an accountant';
  }
  if (status === 'single') {
    return '10%';
  }
  if (status !== 'single' && status !== 'joint') {
    return 'Better call an accountant';
  }
}
