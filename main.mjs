import { Tree } from './tree.mjs'

function randomArray(length) {
  return Array.from(Array(length), () => Math.floor(Math.random() * 100) + 1)
}
const array = randomArray(20)
const tree = new Tree(array)

console.log(tree.root)
tree.prettyPrint(tree.root)
console.log(tree.isBalanced(tree.root))
tree.inOrder(node => console.log(node.data))
tree.preOrder(node => console.log(node.data))
tree.postOrder(node => console.log(node.data))
tree.insert(52)
tree.insert(77)
tree.insert(1)
tree.insert(92)
tree.insert(99)
tree.insert(95)
tree.insert(94)
tree.prettyPrint(tree.root)
console.log(tree.isBalanced(tree.root))
console.log(tree.rebalance(tree.root))
tree.prettyPrint(tree.root)
console.log(tree.isBalanced(tree.root))
tree.inOrder(node => console.log(node.data))
tree.preOrder(node => console.log(node.data))
tree.postOrder(node => console.log(node.data))
