const log = console.log
const str = "peep that stringy string"
log(`Here's the string: ${str}`)
log(`You can also get any letter from the string! ${str[0]}`)
log()

let sliceStr = str.slice(0,4)
log(`Here's just the first word: ${sliceStr}`)
log()

// Replacing parts of strings
let replaceStr = str.replace("peep", "investigate")
log(`We can replace the first instance of a word or char: ${replaceStr}`)
log(`Note that the original string didn't change! Here it is: ${str}`)

let globalReplaceStr = str.replace(/string/g, "text")
log(`We can replace every instance of a word: ${globalReplaceStr}`)

let capitalizeStr = str.replace("p", "P")
log(`Quick and dirty capitalization! ${capitalizeStr}`)
log()

// Capitalization 
let sentenceStr = str.slice(0,1).toUpperCase() + str.slice(1) + "!"
log(`We can make it sentence case: ${sentenceStr}`)

let splitStr = str.split(" ")
splitStr = splitStr.map(capitalize = (word) => {
    word = word.slice(0,1).toUpperCase() + word.slice(1)
    return word
})
let camelStr = splitStr.join(" ")
log(`And we can make it Camel Case: ${camelStr}`)
log()

log(`Well, that was a lot of work to not actually change the string at all. Here it is! ${str}`)

// Things I Learned:
// - I'm glad I looked at capitalization options, because before, I was splitting into an array and looping through, but there are much simpler options!

