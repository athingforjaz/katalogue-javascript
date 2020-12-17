const prompt = require('prompt-sync')();

console.log('what is your name?')
const name = prompt('> ');
console.log('hey there, ' + name);

console.log('how old are you?')
const age = prompt('> ');
console.log('in five years, you will be ' + (Number(age)) + 5 + ' years old');

// Things I learned doing this:

// Input is taken in as a string - you can use the Number() function to convert - there are other methods as well!
