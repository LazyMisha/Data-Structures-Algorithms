// LIFO
class StackArray {
    constructor(){
        this.array = [];
    }
    peek = () => {
        return this.array[this.array.length - 1];
    }

    push = (value) => {
        this.array.push(value);
    }

    pop = () => {
        return this.array.pop();
    }

    isEmpty = () => {
        return this.array.length === 0;
    }
}

const myStack = new StackArray();

console.log(myStack.peek());

myStack.push('google');
myStack.push('Udemy');
console.log(myStack.peek());
myStack.push('Discord');

console.log(myStack.isEmpty());

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack.isEmpty());

// undefined
// Udemy
// false
// Discord
// Udemy
// google
// true
