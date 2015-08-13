var stringCompression = require('../1.6_stringCompression');

describe('#stringCompression', function(){
  it('returns compressed string', function(){
    var input = 'aBBBBbbbbbCcCDddddHUJjjjjjjKoKKKkk';
    var expectedOutput = 'a1b9c3d5h1u1j7k1o1k5';
    var actual = stringCompression(input);

    expect(actual).toEqual(expectedOutput);
  });
});
