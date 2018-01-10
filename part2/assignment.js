// Define a function named sum that takes in one argument.
function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Define a function named product that takes in one argument.
// Return the product of all of the numbers in the array.
function product(arr) {
  var prod = 1;
  for (var i = 0; i < arr.length; i++) {
    prod = arr[i] * prod;
  }
  return prod;
}

// Define a function named concatenate that takes in one argument.
// Return the concatenation of all the strings in the array. For example, given
// ['hello', 'my', 'name', 'is', 'ken'], then return 'hellomynameisken'. If the
// array is empty, return ''.
function concatenate(arr) {
  var string = '';
  for (var i = 0; i < arr.length; i++) {
    string += arr[i]
  }
  return string;
}

// Define a function named repeat that takes in two arguments.
// Return a new string containing times copies of the input str.
function repeat(str, times) {
  var string = '';
  for (var i = 0; i < times; i++) {
    string = str + string;
  }
  return string;
}

// Define a function named filterPassingGrades that takes in one argument.
// Return a new array with any grade less than 70 filtered out.
function highest(value) {
  return value >= 70;
}

function filterPassingGrades(grades) {
  return grades.filter(highest);
}

// Define a function named replace that takes in three arguments.
// Return a new array of numbers where all from elements are replaced with to.
function replace(arr, from, to) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === from) {
      arr[i] = to;
    }
  }
  return arr;
}

// Define a function named flatten that takes in one argument.
//     arr (array of arrays)
//
// Return a new array that combines all of elements of each inner array. For
// example, given [[1], [2, 3], [4]], then return [1, 2, 3, 4].
//
// Tip: You only need to flatten one level deep.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// function flatten(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var newarr = arr[i].concat(arr[i+1]);
//   }
//   return newarr;
// }



// Define a function named max that takes in one argument.
// Return the maximum number in the array.
// If the array is empty, return -Infinity.
function max(arr) {
  if(arr){
    return Math.max.apply( Math, arr );
  }else{
    return '-Infinity';
  }
}

// Define a function named min that takes in one argument.
// Return the minimum number in the array.
// If the array is empty, return Infinity.
function min(arr) {
  if(arr){
    return Math.min.apply( Math, arr );
  }else{
    return 'Infinity';
  }
}

// Define a function named mean that takes in one argument.
// Return the mean of all of the numbers in the array.
// If the array is empty, return null.
function mean(arr) {
  if (arr[0]) {
    var sum = 0;
    for (var i = 0; i < arr.length; i += 1) {
      sum += arr[i];
    }
    return sum / arr.length;
  }else{
    return null;
  }
}

// Define a function named median that takes in one argument.
// Return the median of all of the numbers. If the array is empty,
// return null.
function median(arr) {
  if (arr[0]) {
    if (arr.length % 2 === 0) {
      var middle = arr.length / 2;
      var sum = arr[middle] + arr[middle - 1];
      return sum / 2;
    }else{
      var middle = arr.length / 2;
      return arr[Math.floor(middle)];
    }
  }else{
    return null;
  }
}

// Define a function named contains that takes in two arguments.
// Return true if that string exists in the array, otherwise false.
function contains(arr, str) {
  for (var i = 0; i < arr.length; i++) {
    if (str === arr[i]){
      return true;
    }
  }
  return false;
}

// Define a function named distance that takes in two arguments.
// { x: NUMBER, y: NUMBER }
// Return the distance between the two points on a Cartesian coordinate system.
function distance(point1, point2) {
  var x = point2.x - point1.x;
  var y = point2.y - point1.y;
  var xsq = Math.pow(x , 2);
  var ysq = Math.pow(y , 2);
  var sum = xsq + ysq;
  return Math.sqrt(sum);
}

// Define a function named combine that takes in two arguments.
// Return a new object that has the key-value pairs of both objects.
// If there's a key in more than one object,
// the latest object to have the key will determine the value.
function combine(obj1, obj2) {
  var obj = Object.assign({}, obj1, obj2)
  return obj;
}

// Define a function called invert that takes in one argument.
// Return a new object where the keys and values of the argument are inverted.
function invert(obj) {
  var newObj = {};
  for (var key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}

// Define a function named values that takes in one argument.
// Return an array of the values of the object.
function values(obj) {
  var array = [];
  for (var key in obj) {
    array.push(obj[key])
  }
  return array;
}

// Define a function called toPairs that takes in one argument.
// Return a new array where each element is key-value pair array of the
// argument.
    var array = [];
    for (var key in obj) {
      var arr = [];
      arr.push(key);
      arr.push(obj[key]);
      array.push(arr);
    }
    return array;
}

// Define a function called fromPairs that takes in one argument.
//    arr (array)
//
// Return a new object where each key-value pair is from an element in the
// argument. For example, given [['a', 1], ['b', 2]], then return
// { a: 1, b: 2 }.
