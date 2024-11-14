import { Tree } from './tree.mjs'

const test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

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
}

console.log(test.root)
// console.log(prettyPrint(test.root))
console.log(test.insert(6))
console.log(test.insert(32))
console.log(test.delete(8))
console.log(test.delete(4))
console.log(prettyPrint(test.root))
console.log(test.find(6))
console.log(test.find(67))
