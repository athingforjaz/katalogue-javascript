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

        // My understanding is that "anagrams(otherChars)" in the loop below is basically equivalent to the array that it returns (ie, a function is equivalent to its return) but I would like to figure out how to capture that return and use that here instead of "anagrams(otherChars)"...but I am honestly not sure where that needs to be set at. I tried just before the return, but it breaks (as it should, because what happens the first time the loop runs?)

        for (let subsetOfChars of anagrams(otherChars)) {
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