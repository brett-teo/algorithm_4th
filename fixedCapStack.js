/**
 * 定容栈：表示容量固定的字符串栈的抽象数据类型
 * 特点：只能处理 String 值 不支持迭代
 */
// 1. 实现 API 的第一步就是选择数据的表示方式，这里用 字符串表示这个数据结构
class FixedCapStackOfStrings {
  constructor(cap) {
    this.initFixedCapStackOfStrings(cap)
  }

  initFixedCapStackOfStrings(cap) {
    this.maxSize = cap // 用来标记最大容量
    this.capStingStack = []
    this.num = 0 // 栈大小
  }

  push(item) {
    if (this.num === this.maxSize) this.resize(2 * this.maxSize)
    this.capStingStack[this.num++] = item
  }
  pop() {
    const popItem = this.capStingStack[--this.num]
    delete this.capStingStack[this.num]
    this.capStingStack.length--
    if (this.maxSize > 0 && this.num === this.maxSize / 4)
      this.resize(this.maxSize / 2)
    return popItem
  }
  isFull() {
    return this.num === this.maxSize
  }
  isEmpty() {
    return this.num === 0
  }
  size() {
    return this.num
  }

  // Important 动态的调整 maxSize 的大小
  resize(max) {
    this.maxSize = max
  }
}

// TEST

const testArr = [
  'to'
  // 'be',
  // 'or',
  // 'not',
  // 'to',
  // '-',
  // 'be',
  // '-',
  // '-',
  // 'that',
  // '-',
  // '-',
  // '-',
  // 'is'
]
const run = () => {
  const s = new FixedCapStackOfStrings(1)
  let str = ''
  for (let i = 0; i < testArr.length; i++) {
    console.log('testArr[i]', testArr[i])
    if (testArr[i] !== '-') {
      s.push(testArr[i])
    } else if (!s.isEmpty()) {
      console.log('pop', s.pop())
    }
  }
  console.log('s', s)
  console.log('isFull', s.isFull())
  console.log(`(${s.size()} left on stack)`)
}

run()
