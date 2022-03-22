/**
 * @author Dijkstra
 * @title 双栈算术表达式求值算法
 * 1. 将操作数压入操作数栈
 * 2. 将操作符压入操作符栈
 * 3. 忽略左括号
 * 4. 遇到左括号，弹出一个运算符，弹出所需数量的操作数，并将运算符和操作数的运算结果压入操作数栈
 *
 **/
const testStr = '(1+((2+3)*(4*5)))' // 去掉最外层括号，最后会剩下[1, 100] 在栈内并非最终结果
const ops = new Stack()
const vals = new Stack()
for (let i = 0; i < testStr.length; i++) {
  let str = testStr[i]
  if (str === '(');
  else if (str === '+') ops.push(str)
  else if (str === '-') ops.push(str)
  else if (str === '*') ops.push(str)
  else if (str === '/') ops.push(str)
  else if (str === 'sqrt') ops.push(str)
  else if (str === ')') {
    let op = ops.pop()
    let val = vals.pop()
    if (op === '+') val = vals.pop() + val
    else if (op === '-') val = vals.pop() - val
    else if (op === '*') val = vals.pop() * val
    else if (op === 'sqrt') val = Math.sqrt(val)
    vals.push(val)
  } else vals.push(+str)
}
