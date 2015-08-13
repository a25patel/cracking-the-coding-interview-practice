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
  console.log(array.toString().replace(/,/g, ''));
  return(array.toString().replace(/,/g, ''));

};
