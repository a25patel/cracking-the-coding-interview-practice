module.exports = function(input){
  var input = input.toLowerCase();
  var count = 1;
  var array = [];
  for (var i = 0; i < input.length; i++) {
    if(input[i] === input[i -1]){
      count ++;
    }else {
      count = 1;
    }
    if(input[i] != input[i+1]){
      array.push(input[i]+count)
    }
  }
  //console.log(array.toString().replace(/,/g, ''));
  return(array.join(''));

};


// //Challenge:
// Don't use an array accumulator, use a string accumulator

// if compressed string is not shorter than original, return original string
