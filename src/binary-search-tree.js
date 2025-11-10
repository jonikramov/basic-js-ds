const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = { data, left: null, right: null };

    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let current = this.rootNode;

    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) return current;
      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  has(data) {
    return !!this.find(data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // найден узел для удаления

        // 1️⃣ — без детей
        if (!node.left && !node.right) return null;

        // 2️⃣ — один ребёнок
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        // 3️⃣ — два ребёнка: ищем минимальный справа
        let minRight = node.right;
        while (minRight.left) minRight = minRight.left;

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    };

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) return null;

    let current = this.rootNode;
    while (current.left) current = current.left;
    return current.data;
  }

  max() {
    if (!this.rootNode) return null;

    let current = this.rootNode;
    while (current.right) current = current.right;
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};