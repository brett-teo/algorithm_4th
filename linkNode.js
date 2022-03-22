class Node {
  item = null
  next = null
}

let first = new Node()
let second = new Node()
let third = new Node()

first.item = 'to'
second.item = 'be'
third.item = 'or'

first.next = second
second.next = third

// 头部插入节点
const oldFirst = first
first = new Node() // first 指向了新的引用，oldFirst 还是 first 之前的那个引用

first.item = 'not'
first.next = oldFirst

// 删除头部节点
// first = first.next // 将头部节点的链接指向第二个节点了
console.log(first)
console.log(oldFirst)
console.log(second)
console.log(third)