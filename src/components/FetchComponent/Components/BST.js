class BST {
  constructor() {
    this.head = null;
  }

  getNode (value) {
    return {
      value,
      left: null,
      right: null
    }
  }

  add (value, currentNode = this.head) {
    if (!this.head) {
      this.head = this.getNode(value);
    }
    debugger;
  }
}

export default function BSTMain () {
  let bst = new BST();

  bst.add(4);
}
