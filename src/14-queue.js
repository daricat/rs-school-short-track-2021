const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = [];
    this.firstElement = null;
    this.lastElement = null;
    this.sizeQueue = 0;
  }

  get size() {
    return this.queue.length;
  }

  enqueue(element) {
    const currentLastElement = this.lastElement;
    this.lastElement = new ListNode(element);
    if (this.size === 0) {
      this.firstElement = this.lastElement;
    } else {
      currentLastElement.next = this.lastElement;
    }

    this.queue.push(element);
    this.sizeQueue += 1;
  }

  dequeue() {
    if (this.sizeQueue === 0) {
      this.lastElement = null;
    }
    const currentFirstElement = this.firstElement;
    this.firstElement = currentFirstElement.next;

    this.sizeQueue -= 1;

    return this.queue.shift();
  }
}

module.exports = Queue;
