const prompt = require('prompt-sync')();
const log = console.log

log("Please enter a word: ")
var answer = prompt("> ")

anagrams = (aStringOfChars) => {
   
    let allWords = []
    let duplicatesRemoved = []

    for (let i = 0; i < aStringOfChars.length; i++) {
        let char = aStringOfChars[i]
        let otherChars = aStringOfChars.slice(0, i) + aStringOfChars.slice(i+1, aStringOfChars.length)

        let anagrammed = anagrams(otherChars)
        for (let subsetOfChars of anagrammed) {
            allWords.push(char + subsetOfChars)
        }
    }
        
    allWords.forEach((word) => {
        if(!duplicatesRemoved.includes(word)) {
            duplicatesRemoved.push(word)
        }
    })

    if (aStringOfChars.length < 2) {
        return aStringOfChars;
    }

    return duplicatesRemoved;
}

var myAnagrams = anagrams(answer)
log(`Here are all the unique anagrams of ${answer}: ${myAnagrams}`)