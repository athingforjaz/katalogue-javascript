const prompt = require('prompt-sync')();

var inbox = []
keepLoop = true

while (keepLoop == true) {
    console.log("Welcome to Message Leaver 5000! \n Would you like to (S)ave a message, (R)etrieve a message, or (E)xit?")
    answer = prompt("> ").toLowerCase();
    console.log(answer)

    if (answer =="e") {
        console.log("Thanks for using Message Leaver 5000!")
        keepLoop = false
    }
    
    if (answer == "s") {
        console.log("Please enter your message")
        answer = prompt("> ")
        inbox.push(answer)
        console.log(`Your message ID is ${inbox.length-1}`)
    }

    if (answer == "r") {
        console.log("What is the ID of the message you would like to retrieve?")
        answer = Number(prompt("> "))
        console.log(`Your message was: ${inbox[answer]}`)
    }
}
