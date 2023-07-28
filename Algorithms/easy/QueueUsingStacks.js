// 232. Implement Queue using Stacks

var MyQueue = function() {
    this.first = [];
    this.second = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.first.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.second.length === 0) {
        while(this.first.length) {
            this.second.push(this.first.pop());
        }
    }

    return this.second.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.second.length > 0) {
        return this.second[this.second.length - 1];
    }

    return this.first[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.first.length === 0 && this.second.length === 0;
};

const myQueue = new MyQueue();
console.log(myQueue.empty());

myQueue.push(1);
myQueue.push(2);
console.log(myQueue.peek());

myQueue.push(3);
console.log(myQueue.pop());
console.log(myQueue.peek());
console.log(myQueue.empty());

// true
// 1
// 1
// 2
// false
