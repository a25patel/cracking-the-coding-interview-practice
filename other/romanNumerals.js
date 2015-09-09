// * Write a function that accepts a roman Number and returns an
// integer.
//
// example: Input VII   Output 7
//          Input XIX   Output 19
//
// Rule of Roman Numberals:
// 1. A letter repeated, repeats its value many times
// 2. Letters placed after another letter of greater value increases the value by the amounts of the smaller values
// 3. A lower letter placed before a greater valued letter decreases  the greater value by the lesser value
//   a. only subtract powers of ten (I, X, C)
//   b. Can only subtract one number from another
//   c. Dont subtract a number from one that it ten times greater
// 4. A bar over the top of the latter or string of letters multiplies the number by 1,000

// STRETCH:::: FLIP IT!!! Take an integer and output the roman numeral!!!
// QUIZ:::: Do it recursively, email code and rationale!

var numerals = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

function convert(string){
  string = string.toUpperCase().split('');
  var numbers = [];
  for (var i = 0; i < string.length; i++) {
    numbers.push(numerals[string[i]]);
  }
  total(numbers);
}

// ORIGINAL FUNCTION
// function total(array){
//   var total = 0;
//   for (var i = 0; i < array.length; i++) {
//     if(array[i] < array[i + 1]){
//       total += -array[i];
//     }else{
//       total += array[i];
//     }
//   }
//   console.log(total);
// }


// RECURSIVE FUNCTION
var i = 0;
var total = 0;
function total(array){
  if( i === array.length){
    console.log(total);
  }else if(array[i] < array[i + 1]){
    total += -array[i];
    i++;
    total(array);
  }else{
    total += array[i];
    i++;
    total(array);
  }
}

convert('xix'); //19
convert('lvi'); //56
convert('cmlxiii'); //963
convert('cclxxxi'); //281

// LOOK INTO:
  // switch case statements
