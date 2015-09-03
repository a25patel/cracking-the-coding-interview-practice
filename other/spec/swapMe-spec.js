var swapMe = require('../swapMe');

describe('#swapMe', function(){
  it('returns an array that swaps out two numbers in the positions indicated', function(){
    var array = [4,8,0,5,32,80,27];
    var expectedOutput = [4,8,0,27,32,80,5];
    var actual = swapMe(array);

    expect(actual).toEqual(expectedOutput);
  })
})
