class Node {
  item = null
  next = null
}

class Stack {
  constructor(cap) {
    this.cap = cap // 栈的容量
    this.size = 0 // 栈的大小
    this.first = null // 第一个节点
  }

  push(item) {
    // 头部添加节点
    if (this.size === this.cap) this.resize(2 * this.cap)
    const oldFirst = this.first
    this.first = new Node()
    this.first.item = item
    this.first.next = oldFirst
    this.size++
  }

  resize(length) {
    this.cap = length
  }

  pop() {
    // 头部删除节点
    if (this.size > 0 && this.cap / 4 === this.size) this.resize(this.cap / 2)
    const item = this.first.item
    this.first = this.first.next
    this.size--
    return item
  }
  getSize() {
    return this.size
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

const stack = new Stack(1)

for (let i = 0; i < testArr.length; i++) {
  let str = testArr[i]
  if (str !== '-') {
    stack.push(str)
  } else {
    console.log('pop', stack.pop())
  }
}

console.log('size', stack)
