module.exports = function(){
  var inputA = 'barnyard';
  var inputB = 'nyardbar';
  for (var i = 0; i < inputA.length; i++) {
    if(inputA[0] === inputB[i]){
      var index = i;
    }
  }
  if (((inputB.substring(index, inputB.length)) + (inputB.substring(0, index))) === inputA){
   input = true;
  }else {
   input = false;
  }
  return input

};
