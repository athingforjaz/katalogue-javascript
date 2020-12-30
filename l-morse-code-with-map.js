const prompt = require('prompt-sync')();

console.log("Please enter your message to be converted:")
var answer = prompt("> ")

const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    " ": "  "
 }

var morseAnswer = answer.toUpperCase().split("").map(x => {return morseCode[x]}).join(" ")
console.log(morseAnswer)

// Things I learned:
// - I am never going to feel like typing out Morse code
// - Accessing items in a hashmap in JavaScript is like: hashMap[key], and will give you the value for the provided key.
// - I liked this article for talking about hashmaps: https://sunfishempire.wordpress.com/2014/08/19/5-ways-to-use-a-javascript-hashmap/
