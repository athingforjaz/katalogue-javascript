const prompt = require('prompt-sync')();

console.log("Please enter your message to be converted:")
var answer = prompt("> ")

answer.split(" ")

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'w', 'x',
    'y', 'z']

const morse = [".-", "-...", "-.-.", "-..", ".", "..-.",
    "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.",
    "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

var morseAnswer = ""

for (x in answer) {
    for (y in alpha) {
        if (answer[x] == alpha[y]) {
            morseAnswer += morse[y] + " "
        }
    }
}

console.log(morseAnswer)

// Things I learned:
// - You can still call position[i] in a for/in loop
// - Reading about const vs. var, and block scoped variables here: https://ui.dev/var-let-const/