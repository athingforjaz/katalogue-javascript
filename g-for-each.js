// For loop
for (var i = 0; i < 10; i++) {
    console.log(`The value of i is ${i}`)
}

// For/of loop
var cakes = ["Black Forest", "German Chocolate", "Birthday Cake"]
var x;

for (x of cakes) {
    console.log(`This is the current cake: ${x}`)
}

// For/in loop
var balloons = {firstBalloon:"red ", secondBalloon:"yellow ", thirdBalloon:"green "};

var stringBalloons = ""
var balloon; // Note that this can be named anything, it's just the incrementer, same as var x in the cake example.
for (balloon in balloons) {
    stringBalloons += balloons[balloon]
    console.log(`The colors of my balloons are ${stringBalloons}`)
}



// Things I learned:

// This was not a straightforward conversion from Ruby! I opted to go look at other types of JavaScript loops. 

// In particular, I like the for/in loop. It reminds me of looking at dictionaries in C#, and you can write it so it intuitively makes sense.

// For/of vs. for/in - "of" is for ITERABLE data structures (arrays, strings). "in" is for looking at object properties. 

// Because JavaScript has many different ways of iterating over strings, I'm going to look at that separately. 