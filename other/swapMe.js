module.exports = function(array, x, y){
  var x = 3;
  var y = 6;
  array[x] = array[y];
  array[y] = array[x];
  }
  return array; 
};
