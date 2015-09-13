// * Write a function that accepts a roman Number and returns an
// integer.

// Rule of Roman Numerals:
// 1. A letter repeated, repeats its value many times
// 2. Letters placed after another letter of greater value increases the value by the amounts of the smaller values
// 3. A lower letter placed before a greater valued letter decreases  the greater value by the lesser value
//   a. only subtract powers of ten (I, X, C)
//   b. Can only subtract one number from another
//   c. Dont subtract a number from one that it ten times greater
// 4. A bar over the top of the latter or string of letters multiplies the number by 1,000

// STRETCH:::: FLIP IT!!! Take an integer and output the roman numeral!!!


// module.exports = function roman(string){

// };

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
}

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


convert('xix'); //19
convert('lvi'); //56
convert('cmlxiii'); //963
convert('cclxxxi'); //281



To reverse this:

1. find out how many places.
2. find the base of that place and multiply by the number
  ex: 42: 10 is base so multiply by 4.
  ex: 863: 500 is base so subtract 5 from 8 then find base (100) and multiply by 3!
move on to the next number/place and do the same.
3. for subtractions :
  if number is one less than a base case (usually a 4 or 9!)
  then write the higher base case and subtract one!

!!!!!!!!!
first check if its a 4 or 9!
if it is
  find the base case that is higher, and subtract one
else
  find the base case that is lower and multiply but number
  


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


// LOOK INTO:
  // switch case statements
