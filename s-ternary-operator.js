const prompt = require('prompt-sync')();
const log = console.log

log("Please enter a number of seconds: ")
let input = prompt("> ")

let minutes = 0
let answer = input

while (answer >= 60) {
    minutes += 1
    answer -= 60
}

let leftoverSeconds = answer + " second" + (answer == 1 ? "" : "s")
let howManyMins = minutes + " whole minute" + (minutes == 1 ? "" : "s")
let theVerb = minutes == 1 ? "is" : "are"

log(`There ${theVerb} ${howManyMins} in ${input} seconds, with ${leftoverSeconds} left over.`)