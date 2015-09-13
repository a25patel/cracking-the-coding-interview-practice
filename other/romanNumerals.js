// * Write a function that accepts a roman Number and returns an
// integer.
//
// example: Input VII   Output 7
//          Input XIX   Output 19
//
// Rule of Roman Numerals:
// 1. A letter repeated, repeats its value many times
// 2. Letters placed after another letter of greater value increases the value by the amounts of the smaller values
// 3. A lower letter placed before a greater valued letter decreases  the greater value by the lesser value
//   a. only subtract powers of ten (I, X, C)
//   b. Can only subtract one number from another
//   c. Dont subtract a number from one that it ten times greater
// 4. A bar over the top of the latter or string of letters multiplies the number by 1,000

// STRETCH:::: FLIP IT!!! Take an integer and output the roman numeral!!!
// QUIZ:::: Do it recursively, email code and rationale!


module.exports = function roman(string){
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
    var i = 0;
    var total = 0;
    addThem(numbers, i, total);
  },

  function addThem(array, i, total){
    if( i === array.length){
      console.log(total);
      return total;
    }else {
      operator = (array[i] < array[i + 1]) ? -1 : 1;
      total += operator * array[i];
      addThem(array, ++i, total);
    }
  }

};

// convert('xix'); //19
// convert('lvi'); //56
// convert('cmlxiii'); //963
// convert('cclxxxi'); //281



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

// // RECURSIVE FUNCTION
// function addThem(array, i, grand_total){
//   if( i === array.length){
//     console.log(grand_total);
//     return grand_total;
//   }else if(array[i] < array[i + 1]){
//     grand_total += -array[i];
//     addThem(array, ++i, grand_total);
//   }else{
//     grand_total += array[i];
//     addThem(array, ++i, grand_total);
//   }
// }


// LOOK INTO:
  // switch case statements
