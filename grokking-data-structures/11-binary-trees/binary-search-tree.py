class BinaryTreeNode:
    def __init__(self, value, left=None, right=None):
        self._value = value
        self._left: BinaryTreeNode | None = left
        self._right: BinaryTreeNode | None = right

    def set_left(self, value):
        self._left = BinaryTreeNode(value)

    def set_right(self, value):
        self._right = BinaryTreeNode(value)

    def get_left(self):
        if self._left is None:
            return None
        else:
            return self._left._value

    def get_right(self):
        if self._right is None:
            return None
        else:
            return self._right._value


class BinarySearchTree:
    def __init__(self):
        self._root: BinaryTreeNode | None = None
