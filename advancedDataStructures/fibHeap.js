//Node Class
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = this;
        this.next = this;
        this.degree = 0;

        this.parent = undefined;
        this.child = undefined;
        this.isMarked = undefined;
    }
}

class NodeListIterator {
    constructor(start) {
        // ... same logic as before ...
    }

    hasNext() {
        return this.index < this.items.length - 1;
    }

    next() {
        return this.items[++this.index];
    }
}
class FibonacciHeap {
  constructor(customCompare) {
    this.minNode = undefined;
    this.nodeCount = 0;

    if (customCompare) {
      this.compare = customCompare;
    }
  }

  clear() {
    this.minNode = undefined;
    this.nodeCount = 0;
  }

  decreaseKey(node, newKey) {
    // ... same logic as before ...
  }

  delete(node) {
    // ... same logic as before ...
  }

  extractMinimum() {
    // ... same logic as before ...
  }

  findMinimum() {
    return this.minNode;
  }

  insert(key, value) {
    // ... same logic as before ...
  }

  isEmpty() {
    return this.minNode === undefined;
  }

  size() {
    if (this.isEmpty()) {
      return 0;
    }
    return getNodeListSize(this.minNode);
  }

  union(other) {
    // ... same logic as before ...
  }

  compare(a, b) {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    }
    return 0;
  }
}


// Helper functions remain the same, outside of classes
function cut(node, parent, minNode, compare) {
  // ... same logic as before ...
}

function cascadingCut(node, minNode, compare) {
  // ... same logic as before ...
}

function consolidate(minNode, compare) {
  // ... same logic as before ...
}

function removeNodeFromList(node) {
  // ... same logic as before ...
}

function linkHeaps(max, min, compare) {
  // ... same logic as before ...
}

function mergeLists(a, b, compare) {
  // ... same logic as before ...
}

function getNodeListSize(node) {
  // ... same logic as before ...
}
