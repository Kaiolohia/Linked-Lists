/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    this.length++;

    if (this.head === null) {
      this.head = newNode;
    }

    if (this.tail !== null) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    this.length++;
    newNode.next = this.head;
    if (this.tail === null) {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return null;
    let curNode = this.head;
    let secondFromLast = this.head;
    while (curNode.next) {
      secondFromLast = curNode;
      curNode = curNode.next;
    }
    secondFromLast.next = null;
    this.tail = secondFromLast;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let firstNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return firstNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length - 1) return null;
    let curNode = this.head;
    for (let i = 0; i < idx; i++) {
      curNode = curNode.next;
    }
    return curNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length - 1) return null;
    let curNode = this.head;
    for (let i = 0; i < idx; i++) {
      curNode = curNode.next;
    }
    curNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.length === 0 || idx === this.length) return this.push(val);
    let newNode = new Node(val);
    if (idx > this.length - 1) return null;
    if (idx === 0) return this.unshift(val);
    let curNode = this.head;
    let prevNode
    let i = 0
    while (i < idx) {
      prevNode = curNode;
      curNode = curNode.next
      i++
    }
    newNode.next = curNode;
    prevNode.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length - 1) return null;
    if (idx === 0) return this.shift();
    for (let i = 0; i < idx - 1; i++) {
      curNode = curNode.next;
    }
    if (curNode.next === null) return this.pop();
    let deletingNode = curNode.next;
    curNode.next = deletingNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return deletingNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let tot = 0;
    let curNode = this.head;
    while (curNode) {
      tot = tot + curNode.val;
      curNode = curNode.next;
    }
    return tot / this.length;
  }
}

module.exports = LinkedList;
