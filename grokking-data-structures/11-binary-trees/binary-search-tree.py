class BinaryTreeNode:
    def __init__(self, value: int, left=None, right=None):
        self._value = value
        self._left: BinaryTreeNode | None = left
        self._right: BinaryTreeNode | None = right

    def set_left(self, value: int):
        self._left = BinaryTreeNode(value)

    def set_right(self, value: int):
        self._right = BinaryTreeNode(value)

    def get_left(self):
        return self._left

    def get_right(self):
        return self._right

    def find_max_in_subtree(self):
        parent_node = None
        current_node = self

        while current_node is not None and current_node.get_right() is not None:
            parent_node = current_node
            current_node = current_node.get_right()
        return current_node, parent_node


class BinarySearchTree:
    def __init__(self):
        self._root: BinaryTreeNode | None = None

    def _search(self, target: int):
        parent_node = None
        current_node = self._root

        while current_node is not None:
            node_value = current_node._value

            if node_value == target:
                return current_node, parent_node
            elif target < node_value:
                parent_node = current_node
                current_node = current_node.get_left()
            else:
                parent_node = current_node
                current_node = current_node.get_right()

        return None, None
