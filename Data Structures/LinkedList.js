class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append = (value) => {
        const node = new Node(value);
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    prepend = (value) => {
        const node = new Node(value);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
    }

    traverseToIndex = (index) => {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    insert = (index, value) => {
        if (index === 0) {
            this.prepend(value);
            this.length++;

            return;
        }

        if (index >= this.length) {
            this.append(value);
            this.length++;

            return;
        }

        const node = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;

        leader.next = node;
        node.prev = leader;
        node.next = follower;
        follower.prev = node;
        this.length++;
    }

    delete = (index) => {
        if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;

            return;
        }

        const leader = this.traverseToIndex(index - 1);
        const nodeToDelete = leader.next;

        leader.next = nodeToDelete.next;
        this.length--;
    }

    reverse = () => {
        // If the list has only one element or is empty, there's nothing to reverse
        if (this.length === 1 || this.length === 0) {
            return;
        }

        // Initialize two pointers, 'first' and 'second', pointing to the first two nodes
        let first = this.head;
        let second = first.next;

        // Traverse through the list, reversing the links between nodes
        while (second) {
            // Save the reference to the next node of 'second' in 'temp'
            const temp = second.next;
            // Reverse the link between 'second' and 'first'
            second.next = first;
            // Move 'first' and 'second' one position ahead
            first = second;
            second = temp;
        }

        // 'first' now points to the last node, so it becomes the new head of the list
        this.head.next = null;
        this.head = first;
    }

    // 5 -> 9 -> 12 -> 17
    // f    s     t
    //           12 -> 5
    toString = () => {
        const arr = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            // arr.push([currentNode.prev?.value, currentNode.value, currentNode.next?.value]);
            arr.push(currentNode.value);

            currentNode = currentNode.next;
        }

        return arr;
    }
}

const li = new LinkedList(10);
li.append(9);
li.append(12);
li.append(17);
li.prepend(3);
li.insert(1, 5);
li.delete(0);
li.delete(1);
console.log(li.toString());
li.reverse();
console.log(li.toString());
