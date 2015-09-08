// * Write a function that accepts a roman Number and returns an
// integer.
//
// example: Input VII   Output 7
//         Input XIX     Output 19
//
// Rule of Roman Numberals:
// 1. A letter repeated, repeats its value many times
// 2. Letters placed after another letter of greater value increases the value by the amounts of the smaller values
// 3. A lower letter placed before a greater valued letter decreases  the greater value by the lesser value
//   a. only subtract powers of ten (I, X, C)
//   b. Can only subtract one number from another
//   c. Dont subtract a number from one that it ten times greater
// 4. A bar over the top of the latter or string of letters multiplies the number by 1,000


function numerals(string){
  string = string.toUpperCase().split('');
  var array = [];
  string.forEach(function(ele){
    if(ele === 'I'){
      array.push(1);
    }else if(ele === 'V'){
      array.push(5)
    }else if(ele === 'X') {
      array.push(10)
    }else if(ele === 'L') {
      array.push(50)
    }else if(ele === 'C'){
      array.push(100)
    }else if (ele === 'D'){
      array.push(500)
    }else if(ele === 'M'){
      array.push(1000)
    }
  })
  console.log(string);
  console.log(array);
  var total = 0;
  array.map(function(prev, curr){
    prev < current ? 
  })
}


numerals('xix'); //19
numerals('lvi'); //56
numerals('cmlxiii'); //963
numerals('cclxxxi'); //281
