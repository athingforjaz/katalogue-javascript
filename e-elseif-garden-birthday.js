const prompt = require('prompt-sync')();

console.log("What is the length of your garden box?")
var length = prompt("> ")

console.log("What is the width of your garden box?")
var width = prompt("> ")

var area = length * width
console.log(`The area of your box is ${area}.`)

console.log("Would you like to grow carrots, corn, or beets?")
var crop = prompt("> ")

if (crop == "carrots") {
    console.log(`You can grow ${area * (4/4)} carrots.`)
}
else if (crop == "corn") {
    console.log(`You can grow ${area * (3/4)} corns.`)
}
else if (crop == "beets") {
    console.log(`You can grow ${area * (9/16)} beets.`)
}
else {
    console.log("You did not enter one of the three vegetables I know about.")
}

// and

console.log("What month were you born in?")
var month = prompt("> ").toLowerCase()

if (month == "december" || month == "january" || month == "february") {
    console.log("You were born in winter. Brr!")
}
else if (month == "march" || month == "april" || month == "may") {
    console.log("You were born in the spring.")
}
else if (month == "june" || month == "july" || month == "august") {
    console.log("you were born in the summer")
} 
else if (month == "september" || month == "october" || month == "november") {
    console.log("you were born in the fall")
}
else {
    console.log("please enter a valid month next time")
}

// TIL:
// Whether or not you need semicolons seems fairly arbitrary to me, so my tactic today was to leave them out entirely and find out through good ole trial and error.
// Everything here runs without them. 
// This is a great guide to semicolons in Javascript: https://news.codecademy.com/your-guide-to-semicolons-in-javascript/
// In short, you only absolutely MUST have them when multiple statements are on the same line, there are some conventionally nice places to put them, and misplaced semicolons can cause conditionals not to run (which I think is true in the other languages I know as well)