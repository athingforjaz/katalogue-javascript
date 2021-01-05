// Inspired by this one: https://gist.github.com/Maxondria/2929040bf251170f276ab5f166cabe78

let log = console.log

let flowers = ["tulips", "roses", "lillies"]
flowers.purple = "violets"
Object.defineProperty(flowers, "yellow", { type: "sunflowers", enumerable: true })

log(flowers)

// For/in will show the props in flowers. They're enumerable because they can be listed.
for (x in flowers) {
    log(`for/in: ${x}`)
}

// For/of will only show the flowers that have been created in an iterable way, with the array.
for (x of flowers) {
    log(`for/of: ${x}`)
}

// Things I Learned:
// "let log = console.log" is *heart-eyes*
// I think I will need to watch a couple more videos before I really get it. This one was helpful: https://www.qandeelacademy.com/lesson/javascript-arrays-tutorial/HZjvoftRvGE