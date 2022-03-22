/**
 * initBag 初始化队列
 * isEmpty 判断队列为空
 * getSize 获取队列大小
 * add 向背包里加东西
 * size 背包大小
 */

class Bag {
  constructor() {
    this.size = 0
    this.bag = []
  }
  initBag() {
    this.bag = []
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return this.size === 0
  }
  add(item) {
    this.bag[this.size++] = item
    console.log('item', item)
  }
}

const numbers = new Bag()
const run = () => {
  let input = prompt('input a number')
  while (input) {
    numbers.add(+input)
    input = prompt('input a number')
  }
  const size = numbers.size()
  let sum = 0
  for (let i = size - 1; i >= 0; i--) {
    console.log(numbers.bag[i])
    sum += numbers.bag[i]
  }
  const mean = sum / size
  sum = 0
  for (let i = size - 1; i >= 0; i--) {
    sum += (numbers.bag[i] - mean) * (numbers.bag[i] + mean)
  }
  const std = Math.sqrt(sum / (size - 1))
}
run()
