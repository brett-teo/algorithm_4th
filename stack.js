/**
 * initStack 初始化栈
 * isEmpty 判断栈为空
 * getSize 获取栈大小
 * push 压栈
 * pop 出栈
 */
class Stack {
  constructor() {
    this.stack = []
    this.size = 0
  }
  initStack() {
    this.stack = []
  }
  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }
  push(item) {
    this.stack[this.size++] = item
  }
  pop() {
    if (!this.isEmpty()) {
      const popItem = this.stack[this.size - 1]
      this.stack.length = --this.size
      return popItem
    }
  }
}
