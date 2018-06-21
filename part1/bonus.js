/*
https://en.wikipedia.org/wiki/Caesar_cipher
http://www.ssec.wisc.edu/~tomw/java/unicode.html#x0000
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint

The Caesar cipher works like this.
- Convert the character "a" to the Unicode value 97.
- Add 13 to that integer, resulting in 110.
- Convert the new Unicode value to a character, resulting in "n".
If adding 13 to a Unicode value results in a number greater than 122 (i.e. "z"), wrap back around to the start of the alphabet.
*/

// Setting Up Caesar Shift Integers
function caesarShiftInt(integer) {
  if (integer < 97) {
    throw new Error("Error: integer too low");
  }else if (integer > 122) {
    throw new Error('Error: integer too high');
  }else if ((integer + 13) > 122) {
    var newInt = (integer + 13) - 122;
    return 96 + newInt;
  }else {
    return integer + 13;
  }
}

// Character to Caesar Shift, Excluding anything non-alphabet
function caesarShiftChar(char) {
  if (char === char.toLowerCase()) {
    var integer = char.codePointAt(0);
    if (integer > 96 && integer < 123) {
      integer = caesarShiftInt(integer);
      return String.fromCodePoint(integer);
    }else {
      return char;
    }
  }else {
    char = char.toLowerCase();
    var integer = char.codePointAt(0);
    integer = caesarShiftInt(integer);
    return String.fromCodePoint(integer);
  }
}

// Encode a message using Caesar Shift
// Return the encoded version of the message. For example, given
// 'Hello, there!', then return 'uryyb, gurer!'.
//
// HINT: You'll need a loop for this.
function encodeMessage(message) {
  var newMessage = '';
  for (var i = 0; i < message.length; i++) {
    newMessage.push(caesarShiftChar(message[i]));
  }
  return encode;
}




// Define a function named decodeMessage that takes a one argument
//    message (string)
//
// Return the decoded version of the message. For example, given
// 'uryyb, gurer!', then return 'Hello, there!'.
//
// HINT: Is there a way to use the encodeMessage() function?
