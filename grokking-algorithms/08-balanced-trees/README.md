# Balanced Trees

To perform a binary search with arrays we need to keep the array sorted and, inserting new values in a sorted array is expensive.

![alt text](image.png)

To solve this problem we can use a `tree`, where we have a faster insertion and an acceptable search speed `(O(log n))`. To get this performance we need to implement a `Balanced Binary Search Tree (BST)`.

In a `BST`, is a binary tree with a special propery: the value of the left child is always smaller than the node, and the value of the right child is always greater. Not only that, all the numbers in the left child subtree are smaller than the node!

![alt text](image-1.png)

Based on this property we can perform a binary search by eliminating half of the tree in each cycle.

**_Height of the Tree: The Hight of the tree is the amount of nodes a tree has between the root and the fartest leaf. Shorter trees are faster for search._**

![alt text](image-2.png)

To get a short tree, we need to balance it.
