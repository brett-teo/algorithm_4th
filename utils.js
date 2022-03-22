import { readFileSync } from 'fs'
import { resolve } from 'path'

export const readStr = async () => {
  const filePath = resolve('./TEST.txt')
  return await readFileSync(filePath, 'utf-8')
}
export default {}
