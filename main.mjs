import { Tree } from './tree.mjs'

const test = new Tree
const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const sortedArray = test.filterArray(testArray)

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`)
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
    }
  };

console.log(test.filterArray(testArray))
console.log(test.buildTree(sortedArray))
console.log(prettyPrint(test.buildTree(sortedArray)))