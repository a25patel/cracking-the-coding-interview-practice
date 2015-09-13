var anagrams = require('../anagrams.js');

describe('#anagrams', function(){
  xit('returns an array of words that are anagrams of a given word', function(){
    expect(actual).toEqual(expectedOutput);
  });
});


// Write a function that detects anagrams.
// IT: 1. takes two arguments: a word and an array of words
//     2. returns an array of words that are anagrams of the given word
//     3. does not return anagram subsets (given “good” should not return “dog” or “goody”)
//     4. is case insensitive
//     5. does not detect itself as an anagram (given “hello” should not return “hello”)



// Test Cases:
// #1
// word: "ant"
// words: ['tan', 'stand', 'at']
// result: [‘tan']
// —————————————————————
// #2
// word: “master"
// words: ['stream', 'pigeon', ‘maters']
// result: ['stream', ‘maters']
// ————————————————————-
// #3
// word: “galea"
// words: [“eagle"]
// result: []
// ————————————————————
// #4
// word: “good"
// words: ['dog', ‘goody']
// result: []
// ————————————————————-
// #5
// word: “Orchestra"
// words: ['cashregister', 'Carthorse', ‘radishes']
// result: ['Carthorse’]
