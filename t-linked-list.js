makeNode = (value) => {
    return {
        value: value, 
        next: null
    }
}

class List {
    constructor() {
        this.head = null
        this.tail = null
    }

    add(value) {
        let node = makeNode(value)

        if (!this.tail) {
            this.head = this.tail = node
            return node
        }

        this.tail.next = node
        this.tail = node 
    }

    iterativePrint() {
        // Set the current one to the head of the line.
        let current = this.head
        while(current) {
            // Then, print the current value...
            console.log(current.value)
            //...and set the new current value to the next one in line. 
            current = current.next
        }
    }

    recursivePrint(node) {
        // If there's a node, print its value.
        if(node) {
            console.log(node.value)
        } else { // And if there's not, return.
            return;
        }
        // Then, do the same function on the next one in line. (Because the tail node will not have a .next, it'll be null, so will cause the return above.)
        this.recursivePrint(node.next)
    }
}

let test = new List()
test.add(1)
test.add(2)
test.add(3)
test.add(4)

console.log("Iterative Printing:")
test.iterativePrint()
console.log("Recursive Printing:")
test.recursivePrint(test.head)



// Things I Learned:
// - Woo boy, so much about recursion and "this"
// - I was familiary with "truthy" and "falsey" but this was my first time really seeing them in action. I struggled with the recursive function in part because I was checking if node.value is "truthy", which, when null, won't run at all, because there's no .value to check for truthiness.
// - It can help to console.log "this" - I was initially trying to recursively print this.value, which doesn't exist, because the values are actually one level down (under "head" and "tail"). I figured it out by checking what "this" actually was. 
// - Initially, I didn't have recursivePrint taking in any params, but ran into "this" trouble. Adding in the starting point as the first node lets the recursive function actually get started. 


// BIG thanks to Dave Ceddia: https://daveceddia.com/linked-lists-javascript/