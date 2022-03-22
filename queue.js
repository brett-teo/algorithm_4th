/**
 * initQueue 初始化队列
 * isEmpty 判断队列为空
 * getSize 获取队列大小
 * enqueue 入队
 * dequeue 出队
 */
class Queue {
  constructor() {
    this.queue = []
    this.size = 0
  }
  initQueue() {
    this.queue = []
  }
  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }
  enqueue(item) {
    this.queue[this.size++] = item
  }
  dequeue() {
    if (!this.isEmpty()) {
      for (let i = 0; i < this.size + 1; i++) {
        this.queue[i] = this.queue[i + 1]
      }
      this.size--
      return this.queue[0]
    }
  }
}
