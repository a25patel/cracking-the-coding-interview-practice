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

// Write a function that detects anagrams.
// IT: 1. takes two arguments: a word and an array of words
//     2. returns an array of words that are anagrams of the given word
//     3. does not return anagram subsets (given “good” should not return “dog” or “goody”)
//     4. is case insensitive
//     5. does not detect itself as an anagram (given “hello” should not return “hello”)


Psuedo Code:
1. make the word and the strings of the array LowerCase or UpperCase (4)
2. go through the array and match each string to the word. rid of any word that matches fully (5)
3. go through the array and rid of any words/strings that are not the same in length (3)
4.

module.exports = function(){

}

var array = ['stream', 'pigeon', 'maters', 'mate', 'seam', 'ram', 'master'];
var word = 'master';

function findLetters(word){
  word.toLowerCase().split('')
}
