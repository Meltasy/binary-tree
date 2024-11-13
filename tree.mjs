import { Node } from './node.mjs'

class Tree {
  constructor(array) {
    this.array = array
    this.root = null
  }
  filterArray(array) {
    return [...new Set(array.sort((a, b) => a - b))]
  }
  buildTree(array) {
    if (array.length === 0) {
      return null
    }
    let middle = Math.floor(array.length / 2)
    let root = new Node(array[middle])
    root.left = this.buildTree(array.slice(0, middle))
    root.right = this.buildTree(array.slice(middle + 1))
    return root
  }
}

export { Tree }