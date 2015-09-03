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

Write a function that detects anagrams.
IT: -takes two arguments: a word and an array of words
    -returns an array of words that are anagrams of the given word
    -does not return anagram subsets (given “good” should not return “dog” or “goody”)
    -is case insensitive
    -does not detect itself as an anagram (given “hello” should not return “hello”)
