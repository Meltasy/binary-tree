import { Node } from './node.mjs'

class Tree {
  constructor(array) {
    this.array = array
    this.root = this.buildTree(array)
  }
  buildTree(array) {
    let uniqueArray = [...new Set(array)]
    let sortedArray = uniqueArray.sort((a, b) => a - b)
    if (sortedArray.length === 0) {
      return null
    }
    let middle = Math.floor(sortedArray.length / 2)
    let node = new Node(sortedArray[middle])
    node.left = this.buildTree(sortedArray.slice(0, middle))
    node.right = this.buildTree(sortedArray.slice(middle + 1))
    return node
  }
  prettyPrint(node, prefix = "", isLeft = true) {
    if (!node) {
      return
    }
    if (node.right) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`)
    if (node.left) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
    }
  }
  insert(data, node = this.root) {
    if (!node) {
      return new Node(data)
    }
    if (node.data === data) {
      return node
    }
    if (data < node.data) {
      node.left = this.insert(data, node.left)
    } else if (data > node.data) {
      node.right = this.insert(data, node.right)
    }
    return node
  }
  delete(data) {
    this.root = this.deleteNode(data, this.root)
  }
  getSuccessor(node) {
    node = node.right
    while (node && node.left) {
      node = node.left
    }
    return node
  }
  deleteNode(data, node) {
    if (!node) {
      return node
    }
    if (data === node.data) {
      if (!node.left && !node.right) {
        return null
      } else if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      } else {
        let successor = this.getSuccessor(node)
        node.data = successor.data
        node.right = this.deleteNode(successor.data, node.right)
      }
    } else if (data < node.data) {
      node.left = this.deleteNode(data, node.left)
    } else {
      node.right = this.deleteNode(data, node.right)
    }
    return node
  }
  find(data) {
    let node = this.root
    while (node !== null) {
      if (data === node.data) {
        return node
      } else if (data < node.data) {
        node = node.left
      } else {
        node = node.right
      }
    }
    return node
  }
  levelOrderIterative(callback) {
    if (!callback) {
      console.log('Please add a callback function')
      // throw new Error('Please add a callback function')
    }
    let queue = [this.root]
    while(queue.length > 0) {
      let node = queue.shift()
      callback(node)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
  levelOrderRecursive(callback, queue = [this.root]) {
    if (!callback) {
      console.log('Please add a callback function')
      // throw new Error('Please add a callback function')
    }
    if (queue.length < 1) {
      return
    }    
    let node = queue.shift()
    callback(node)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
    this.levelOrderRecursive(callback, queue)
  }
  inOrder(callback, node = this.root) {
    if (!callback) {
      console.log('Please add a callback function')
      // throw new Error('Please add a callback function')
    }
    if (!node) {
      return
    }
    if (node.left) {
      this.inOrder(callback, node.left)
    }
    callback(node)
    if (node.right) {
      this.inOrder(callback, node.right)
    }
  }
  preOrder(callback, node = this.root) {
    if (!callback) {
      console.log('Please add a callback function')
      // throw new Error('Please add a callback function')
    }
    if (!node) {
      return
    }
    callback(node)
    if (node.left) {
      this.preOrder(callback, node.left)
    }
    if (node.right) {
      this.preOrder(callback, node.right)
    }
  }
  postOrder(callback, node = this.root) {
    if (!callback) {
      console.log('Please add a callback function')
      // throw new Error('Please add a callback function')
    }
    if (!node) {
      return
    }
    if (node.left) {
      this.postOrder(callback, node.left)
    }
    if (node.right) {
      this.postOrder(callback, node.right)
    }
    callback(node)
  }
  height(node) {
    if (!node) {
      return 0
    }
    let leftHeight = this.height(node.left)
    let rightHeight = this.height(node.right)
    return Math.max(leftHeight, rightHeight) + 1
  }
  depth(node, current = this.root) {
    if (!current) {
      return -1
    }
    if (node === current) {
      return 0
    }
    if (node.data < current.data) {
      return this.depth(node, current.left) + 1
    }
    if (node.data > current.data) {
      return this.depth(node, current.right) + 1
    }
  }
  isBalanced(root = this.root) {
    if (!root) {
      return true
    }
    let leftHeight = this.height(root.left)
    let rightHeight = this.height(root.right)
    if (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(root.left) &&
      this.isBalanced(root.right)
    ) {
        return true
    } else {
      return false
    }
  }
  rebalance() {
    if (this.isBalanced(this.root)) {
      console.log('This tree is balanced')
      return
    }
    let newArray = []
    this.inOrder(node => newArray.push(node.data))
    return this.root = this.buildTree(newArray)
  }
}

export { Tree }
