const prompt = require('prompt-sync')();

var i = 0;
while (i <=3) {
    console.log("What month were you born in?")
    var month = prompt("> ")

    switch (month) {
        case "december":
        case "january":
        case "february": 
        {
            console.log("Brr! Winter baby!")
            i++
            break;
        }
        case "march":
        case "april":
        case "may": 
        {
            console.log("You were born in spring")
            i++
            break;
        }
        case "june":
        case "july":
        case "august": 
        {
            console.log("You were born in summer")
            i++
            break;
        }
        case "september":
        case "october":
        case "november":
        {
            console.log("you were born in fall!")
            i++
            break;
        }
    }
}
console.log("bye bye!")

// What I learned:

// When cases are put next to each other on the same line, ie, "case 'september', 'october'" it will ONLY run the last case.

// In Javascript, you can't have more than one condition in a case (as you apparently can in Ruby). "Fall through" is what it's called where you have multiple cases, some with no code blocks to execute. 

// If you delete prompt-sync, say while you're "cleaning up" your computer, anything that uses prompt-sync won't run. :-) 
