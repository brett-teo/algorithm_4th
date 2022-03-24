const s = '[()]{}{[()()]()}'
const f = '{[]}'

class Stack {
  constructor(cap) {
    this.maxCap = cap
    this.size = 0
    this.stack = []
  }

  push(item) {
    this.stack[this.size++] = item
  }

  pop() {
    if (!this.isEmpty()) {
      return this.stack[--this.size]
    }
    throw Error('栈为空')
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }
}

const stack = new Stack(100)
const map = {
  '(': ')',
  '[': ']',
  '{': '}'
}
const lefts = ['(', '[', '{']
const rights = [')', ']', '}']
const isIntegrity = str => {
  const len = str.length
  if (!len) return false
  if (len % 2) return false
  if (!lefts.includes(str[0])) return false
  if (!rights.includes(str[len - 1])) return false
  for (let i = 0; i < len; i++) {
    let current = str[i]
    if (lefts.includes(current)) {
      stack.push(current)
    } else if (rights.includes(current)) {
      const item = stack.pop()
      if (map[item] !== current) return false
    }
  }

  return !stack.getSize()
}
// console.log(isIntegrity(s))
console.log(isIntegrity(f))
