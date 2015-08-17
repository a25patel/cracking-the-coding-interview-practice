var j = 0;
module.exports = function(string){
  j< (string.length +1);
  var split = string.toLowerCase().split('');
  var value = split[j];
  for (var i = 0; i < split.length; i++) {
    if(value === split[j] && i != j){
      return false;
    }
  }
  console.log(j);
  j++;
  isUnique(string);
};


// 1. parse string, make all characters upper||lowercase *
// 2. go through the array and compare each character with all other characters *
// 3. if at any point the characters match return a false



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
