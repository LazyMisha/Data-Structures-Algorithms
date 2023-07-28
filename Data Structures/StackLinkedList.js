class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// LIFO
class StackLinkedList {
    constructor(){
        this.top = null;
        this.length = 0;
    }
    peek = () => {
        return this.top?.value;
    }

    push = (value) => {
        const node = new Node(value);

        if (this.length === 0) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }

        this.length++;
    }

    pop = () => {
        if (this.length === 0) {
            return null;
        }

        const top = this.top;
        this.top = this.top.next;

        this.length--;

        return top.value;
    }

    isEmpty = () => {
        return this.length === 0;
    }
}

const myStack = new StackLinkedList();

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
