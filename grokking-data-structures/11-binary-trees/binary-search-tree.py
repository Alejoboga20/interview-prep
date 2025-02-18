class BinaryTreeNode:
    def __init__(self, value: int, left=None, right=None):
        self._value = value
        self._left: BinaryTreeNode | None = left
        self._right: BinaryTreeNode | None = right

    def set_left(self, value: int | None = None):
        if value is None:
            self._left = None
        else:
            self._left = BinaryTreeNode(value)

    def set_right(self, value: int | None = None):
        if value is None:
            self._right = None
        else:
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

    def insert(self, value):
        current_node = self._root

        if current_node is None:
            self._root = BinaryTreeNode(value)
        else:
            while current_node is not None:
                if value <= current_node._value:
                    if current_node.get_left() is None:
                        current_node.set_left(value)
                        break
                    else:
                        current_node = current_node.get_left()
                elif current_node.get_right() is None:
                    current_node.set_right(value)
                    break
                else:
                    current_node = current_node.get_right()

    def delete(self, value: int):
        if self._root is None:
            raise ValueError('Can not delete on an empty tree')

        node, parent = self._search(value)

        if node is None:
            raise ValueError('Value not found')

        left_child = node.get_left()
        right_child = node.get_right()

        if left_child is None or right_child is None:
            # node has no children or only one (is a leaf or with only one child)
            maybe_child = right_child if left_child is None else left_child
            if parent is None:
                self._root = maybe_child
            elif value <= parent._value:
                if maybe_child is not None:
                    parent.set_left(maybe_child._value)
                parent._left = None
            else:
                if maybe_child is not None:
                    parent.set_right(maybe_child._value)
                parent._right = None
        else:
            # node to delete has both children
            max_node, max_node_parent = left_child.find_max_in_subtree()
            if max_node_parent is None:
                if max_node is not None:
                    new_node = BinaryTreeNode(max_node._value)
            else:
                if max_node is not None:
                    new_node = BinaryTreeNode(
                        value=max_node._value,
                        left=left_child,
                        right=right_child,
                    )
                    max_node_right = max_node.get_left()
                    if max_node_right is not None:
                        max_node_parent.set_right(max_node_right._value)
                    else:
                        max_node_parent._right = None

                    if parent is None:
                        self._root = new_node
                    elif value <= parent._value:
                        parent.set_left(new_node._value)
                    else:
                        parent.set_right(new_node._value)
