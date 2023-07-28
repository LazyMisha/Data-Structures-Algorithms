class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek = () => {
        return this.first?.value;
    }

    enqueue = (value) => {
        const node = new Node(value);

        if (this.length === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        this.length++;
    }

    dequeue = () => {
        if (this.length === 0) {
            return null
        }

        if (this.length === 1) {
            this.last = null;
        }

        const first = this.first;
        this.first = this.first.next;
        this.length--;

        return first;
    }

    isEmpty = () => {
        return this.length === 0;
    };
}

const myQueue = new Queue();

console.log(myQueue.peek());

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
console.log(myQueue.peek());
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log(myQueue.peek());

myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());

// undefined
// Joy
// Joy
// Matt
// Samir
// undefined

