// 1. determine if a string has all unique characters
// 2. Cannot use additional data structures

var isUnique = require('../1.1_isUnique');

describe('#isUnique', function(){
  it('returns "false" if a string does not have unique characters', function(){
    var string = 'Hello!';
    var expectedOutput = false ;
    var actual = isUnique(string);

    expect(actual).toEqual(expectedOutput);
  }),

  xit('returns "true" if a string does have unique characters', function(){
    var string = 'Bye!';
    var expectedOutput = true ;
    var actual = isUnique(string);

    expect(actual).toEqual(expectedOutput);
  });
});
