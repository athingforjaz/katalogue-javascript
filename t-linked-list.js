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
        let current = this.head
        while(current) {
            console.log(current.value)
            current = current.next
        }
    }

    recursivePrint(node) {
        if(node) {
            console.log(node.value)
        } else {
            return;
        }
        const upNext = node.next
        this.recursivePrint(upNext)
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



// let recursivePrint = (list) => {
//     if(list) {
//         console.log(list.value)
//     } else {
//         return;
//     }
//     recursivePrint(list.next)
// }

// console.log(recursivePrint(four))

