/** Node: node for a deque. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Deque {
    constructor() {
        this.left = null;
        this.right = null;
        this.size = 0;
    }

    /** appendLeft(val): add new value to left side of the deque. Returns undefined. */
    appendLeft(val) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.left = newNode;
            this.right = newNode;
        } else {
            newNode.next = this.left;
            this.left.prev = newNode;
            this.left = newNode;
        }
        this.size++;
    }

    /** appendRight(val): add new value to right side of the deque. Returns undefined. */
    appendRight(val) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.left = newNode;
            this.right = newNode;
        } else {
            this.right.next = newNode;
            newNode.prev = this.right;
            this.right = newNode;
        }
        this.size++;
    }

    /** popLeft(): remove the node from the start of the deque
    * and return its value. Should throw an error if the deque is empty. */
    popLeft() {
        if (this.size === 0) throw Error(message='This deque is empty!')
        const leftNode = this.left;
        if (this.size === 1) {
            this.left = null;
            this.right = null;
        } else {
            this.left = this.left.next;
        }
        this.size--;
        return leftNode.val;
    }

    /** popRight(): remove the node from the end of the deque
    * and return its value. Should throw an error if the deque is empty. */
    popRight() {
        if (this.size === 0) throw Error(message='This deque is empty!')
        const rightNode = this.right;
        if (this.size === 1) {
            this.left = null;
            this.right = null;
        } else {
            this.right = this.right.prev;
        }
        this.size--;
        return rightNode.val;
    }

    /** peekLeft(): return the value of the first node in the deque. */
    peekLeft() {
        if (this.size === 0) throw Error(message='The queue is empty!');
        return this.left.val;
    }

    /** peekRight(): return the value of the last node in the deque. */
    peekRight() {
        if (this.size === 0) throw Error(message='The queue is empty!');
        return this.right.val;
    }

    /** isEmpty(): return true if the queue is empty, otherwise false */
    isEmpty() {
        return this.size === 0;
    }
}

module.exports = Deque;