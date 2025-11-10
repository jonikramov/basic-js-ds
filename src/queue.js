const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null; // начало очереди
    this.tail = null; // конец очереди
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = { value, next: null };

    if (this.tail) {
      // если очередь не пуста, добавляем в конец
      this.tail.next = newNode;
    } else {
      // если очередь пуста, новый элемент становится первым
      this.head = newNode;
    }

    this.tail = newNode;
  }

  dequeue() {
    if (!this.head) return undefined; // если очередь пуста

    const value = this.head.value; // значение первого элемента
    this.head = this.head.next;    // удаляем первый элемент

    if (!this.head) {
      // если после удаления очередь опустела
      this.tail = null;
    }

    return value;
  }
}

module.exports = {
  Queue
};
