class Node {
  item = null
  next = null
}

class Queue {
  first = null // 指向队头
  last = null // 指向队尾
  size = 0 // 队列大小

  enqueue(item) {
    // 向表尾添加元素
    let oldLast = this.last
    this.last = new Node()
    this.last.item = item
    this.last.next = null
    if (this.isEmpty()) this.first = this.last
    else oldLast.next = this.last
    this.size++
  }

  dequeue() {
    // 向表头删除元素
    const item = this.first.item
    this.first = this.first.next
    if (this.isEmpty()) this.last = null
    this.size--
    return item
  }

  isEmpty() {
    return this.size === 0
  }
}

const testArr = [
  'to',
  'be',
  'or',
  'not',
  'to',
  '-',
  'be',
  '-',
  '-',
  'that',
  '-',
  '-',
  '-',
  'is'
]

const queue = new Queue()

for (let i = 0; i < testArr.length; i++) {
  let str = testArr[i]
  if (str !== '-') {
    queue.enqueue(str)
  } else if (!queue.isEmpty()) {
    console.log('pop', queue.dequeue())
  }
}

console.log('size', queue)
