// Class
class ClassPizza {
    party () {
        console.log("Pizza!")
    }
}

const myPizza = new ClassPizza();
myPizza.party()

// Constructor
function ConstructorPizza () {}

ConstructorPizza.prototype.party = function () {
    console.log("Pizza! Pizza!")
}

const anotherPizza = new ConstructorPizza();
anotherPizza.party()

// Factory
const proto = {
    party () {
        console.log("Pizza! Pizza! Pizza!")
    }
}

const factoryPizza = () => Object.create(proto)

const yetMorePizza = factoryPizza()
yetMorePizza.party()

// Things I Learned: 
// - Still working through figuring out when to use each option. 
// - I like this article but am still working on understanding: https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e

// Inspired by this video: https://clickhole.com/we-get-some-kids-riled-up-for-pizza-and-then-leave-1825126238/