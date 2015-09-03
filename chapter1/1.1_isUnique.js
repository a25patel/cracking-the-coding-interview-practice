module.exports = function(string){
  var arrayB = [];
  var split = string.toLowerCase().split('');
  for (var i = 0; i < split.length; i++) {
    if(i === 0 ){
      arrayB.push(split[i]);
    }else{
      for (var j = 0; j < arrayB.length; j++) {
        if(split[i] === arrayB[j]){
          return false;
        }else{
          arrayB.push(split[i]);
        }
        }
      }
    }
  // console.log(arrayB);
  // console.log(arrayC);
};


// TRY USING OBJECT DATA STRUCTURE INSTEAD OF ARRAYS 
// 2. go through the array and compare each character with all other characters *
// 3. if at any point the characters match return a false




// ARRAY DATA STRUCTURE

// {
//   for (var j = 0; j < arrayB.length; j++) {
//     if(split[i] === arrayB[j]){
//       arrayC.push(split[i])
//     }else{
//       arrayB.push(split[i])
//     }
//   }
// }


// DOES NOT WORK!!!!!!

// var split = string.toLowerCase().split('');
// for (var i = 0; i < split.length; i++) {
//   for (var j = 0; j < split.length; j++) {
//     if(split[i] === split[j] && i != j){
//       return false;
//     }else{
//       return true;
//     }
//   }
// }



// DOES NOT WORK!!!!

// var j = 0;
// module.exports = function(string){
//   j < (string.length + 1);
//   var split = string.toLowerCase().split('');
//   var value = split[j];
//   for (var i = 0; i < split.length; i++) {
//     if(value === split[j] && i != j){
//       return false;
//     }
//   }
//   console.log(j);
//   j++;
//   isUnique(string);
// };



//
// module.exports = function(string){
//   var arrayB = [];
//   var arrayC = [];
//   var split = string.toLowerCase().split('');
//   for (var i = 0; i < split.length; i++) {
//     if(i === 0 ){
//       arrayB.push(split[i]);
//     }else{
//       for (var j = 0; j < arrayB.length; j++) {
//         if(split[i] === arrayB[j]){
//
//         }
//       }
//     }
//   }
//   console.log(arrayB);
//   console.log(arrayC);
//
// };
