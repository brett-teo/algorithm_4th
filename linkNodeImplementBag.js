class Node {
  item = null
  next = null
}

class Bag {
  first = null
  size = 0
  add(item) {
    const oldFirst = this.first
    this.first = new Node()
    this.first.item = item
    this.first.next = oldFirst
    this.size++
  }

  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }
}
