var romanNumerals = require('../roman_numerals.js');

describe('#romanNumerals', function(){
  xit('returns an english value for a roman numberal input', function(){
    var string = 'xIx';
    var expected = 19;
    var actual = roman(string); 

    expect(actual).toEqual(expected)
  });
});


//
// convert('xix'); //19
// convert('lvi'); //56
// convert('cmlxiii'); //963
// convert('cclxxxi'); //281
