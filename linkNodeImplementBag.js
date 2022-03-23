class Node {
  item = null
  next = null
}

class Bag {
  first = null
  size = 0
  current = null
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
  [Symbol.iterator]() {
    return this
  }

  hasNext() {
    return !!this.current.next
  }

  next() {
    if (!this.current) {
      this.current = this.first
    }
    const item = this.current.item
    const hasNext = this.hasNext()
    this.current = this.current.next
    return {
      done: !hasNext,
      value: item
    }
  }
}

const bag = new Bag()
bag.add('to')
bag.add('be')
// bag.add('or')
// bag.add('not')
// bag.add('to')
// bag.add('be')
console.log('bag', bag)

for (const item of bag) {
  console.log('item', item)
}
