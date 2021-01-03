var shoppingList = ["Apples", "Tea", "Curry Paste"]
console.log(`Here is your shopping list: ${shoppingList}`)

shoppingList.push("Coconut Milk")
console.log(`Here is your updated list: ${shoppingList}`)

// .shift gives you the item you .shift-ed out
var firstItem = shoppingList.shift();
console.log(`You removed an item: ${firstItem}`)
console.log(`Your updated list: ${shoppingList}`)

// Whereas .unshift returns the new LENGTH of the array!
var listLength = shoppingList.unshift("Starfruit")
console.log(`Here's how many items are on your list now: ${listLength}`)
console.log(`And here's your new list: ${shoppingList}`)

shoppingList.pop()
console.log(`You removed an item from the end of your list! Here is your new list: ${shoppingList}`)

shoppingList = shoppingList.map(reverse = (item) => {
    item = item.split("").reverse().join("")
    return item
})
console.log(`Well, this is useless: ${shoppingList}`)

shoppingList = shoppingList.map(el => {
    el = el.split("").reverse().join("")
    return el
})
console.log(`Ah, that's better: ${shoppingList}`)