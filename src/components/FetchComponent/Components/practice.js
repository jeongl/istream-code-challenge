class LinkedList {
  constructor(){
    this.head = null;
  }

  getNode (data, next) {
    return {
      data,
      next: next || null
    }  
  }

  add (data, node = this.head) {
    if (!this.head) {
      this.head = this.getNode(data);
      return;
    }

    if (node.next === null) {
      node.next = this.getNode(data);
    } else {
      this.add(data, node.next);
    }
  }

  remove (data, prev, curr = this.head) {
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    if (curr.data !== data) {
      this.remove(data, curr, curr.next);
    } else if (curr.data === data) {
      prev.next = curr.next
    }
  }
}

export const main = () => {
  const linkedList = new LinkedList();

  for (let i=0; i<5; i++) {
    linkedList.add(i);
  }

  linkedList.remove(3);
  // console.log('linkedList.head: ', linkedList.head);
}
