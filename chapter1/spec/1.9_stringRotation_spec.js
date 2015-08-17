var stringRotation = require('../1.9_stringRotation');

describe('#stringRotation', function(){
  xit('returns a true if inputA is a substring of inputB', function(){
    var input;
    var inputA = 'barnyard';
    var inputB = 'nyardbar';
    var actual = stringRotation(input);
    var expectedOutput = true;

    expect(actual).toEqual(expectedOutput);
  }),

  xit('returns a false if inputA is not a substring of inputB', function(){
    var input;
    var inputA = 'barnyard';
    var inputB = 'nyardsbar';
    var actual = stringRotation(input);
    var expectedOutput = false;
  })
});
