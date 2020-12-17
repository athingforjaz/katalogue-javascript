const prompt = require('prompt-sync')();

console.log('What\'s the length of your box?')
const length = prompt('> ')
console.log('What\'s the width of your box?')
const width = prompt('> ')

var area = length * width
var perimeter = length * 2 + width * 2

console.log(`Your area is ${area}`)
console.log(`Your perimeter is ${perimeter}`)


console.log(`You can grow ${area * (4/4)} carrots, ${area * (3/4)} corns, or ${area * (9/16)} beets! That's a lot of vegetables!`)

// Things I learned while doing this:

// To interpolate, you need to use backticks and not single quotes