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
// -- Okay, adding this note a day later: Actually, the above is not a hashmap in JS, but an object. There IS a 'true hashmap' in JS, which has its own benefit, but primarily, it's iterable unlike an object. So this works here when we're just looking up the value for the key, but if we wanted to iterate over the whole shebang, we'd want to use a proper var map = new Map([]) and this concludes my TED Talk.
// - I liked this article for talking about hashmaps: https://sunfishempire.wordpress.com/2014/08/19/5-ways-to-use-a-javascript-hashmap/
