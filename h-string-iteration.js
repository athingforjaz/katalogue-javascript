var str = "Hello"
var splitStr = str.split('')
console.log(splitStr)

str = "Howdy"
var spreadStr = [...str]
console.log(spreadStr)

str = "Bonjour"
var arrayStr = Array.from(str)
console.log(arrayStr)


str = "Jasmine"
var x

for (x of str) {
    console.log(x)
}


str = "Pete"
const arr = [...str]
arr.forEach(element => console.log(element));



// Things I learned:
// .forEach() can ONLY be used on arrays, so you have to first convert your string to an array
// Spread "[...]" and Array.from are new to me!
// for/of and for/in are easy to get confused! ("of" gives you the actual value, "in" gives you the key/index)