# binary-tree

An odin project on binary trees

The following classes and methods have been included:

* **Tree** class to represent the binary tree
* **Node** class to represent the nodes containing values
* **buildTree(array)** to take an array of data and build a balanced binary tree
* **prettyPrint** to visualize binary tree as a simple image / diagram
* **insert(value)** to insert given value
* **deleteItem(value)** to delete given value, updating tree as necessary
* **find(value)** to return node with given value
* **levelOrder(callback)** to traverse tree in breadth-first level order, applying callback to each node (using iteration and recursion)
* **inOrder(callback)** to traverse tree in depth-first **in**-order, applying callback to each node
* **preOrder(callback)** to traverse tree in depth-first **pre**-order, applying callback to each node
* **postOrder(callback)** to traverse tree in depth-first **post**-order, applying callback to each node
* **height(node)** to return given node’s height
* **depth(node)** to return given node’s depth
* **isBalanced** to check if tree is balanced
* **rebalance** to rebalance an unbalanced tree