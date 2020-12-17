const prompt = require('prompt-sync')();

console.log('what is your name?')
const name = prompt('> ');
console.log(name);

console.log('how old are you?')
const age = prompt('> ');
console.log(age);

// Things I learned doing this:

// To run JavaScript through the terminal, `node filename.js` in the directory
// `npm install prompt-sync` to add a readline (there are other ways - this one was the simplest I found)
// You'll need to require the prompt-sync any time you want a readline
// If you put a \n newline in the prompt function, it'll put a newline after every keystroke the user enters - instead, put the prompt on its own line, set to the variable, with an empty string or some kind of prompting character
