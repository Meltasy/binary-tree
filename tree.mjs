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
  insert(data, root = this.root) {
    if (!root.data) {
      return new Node(data)
    }
    if (data < root.data) {
      if (!root.left) {
        root.left = new Node(data)
      } else {
        this.insert(data, root.left)
      }
    } else {
      if (!root.right) {
        root.right = new Node(data)
      } else {
        this.insert(data, root.right)
      }
    }
    return root
  }
  delete(data) {
    this.root = this.deleteNode(data, this.root)
  }
  getSuccessor(current) {
    current = current.right
    while (current && current.left) {
      current = current.left
    }
    return current
  }
  deleteNode(data, root) {
    if (!root) {
      return root
    }
    if (data === root.data) {
      if (!root.left && !root.right) {
        return null
      } else if (!root.left) {
        return root.right
      } else if (!root.right) {
        return root.left
      } else {
        let successor = this.getSuccessor(root)
        root.data = successor.data
        root.right = this.deleteNode(successor.data, root.right)
      }
    } else if (data < root.data) {
      root.left = this.deleteNode(data, root.left)
    } else {
      root.right = this.deleteNode(data, root.right)
    }
    return root
  }
  find(data) {
    let current = this.root
    while (current !== null) {
      if (data === current.data) {
        return current
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return current
  }
}

export { Tree }
