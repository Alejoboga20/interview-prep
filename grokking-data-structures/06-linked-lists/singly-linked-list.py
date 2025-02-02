class ListNode:
    def __init__(self, data, next_node=None):
        self._data = data
        self._next = next_node

    def data(self):
        return self._data

    def next(self):
        return self._next

    def hast_next(self):
        is_tail = True if self._next is not None else False
        return is_tail

    def append(self, next_node):
        self._next = next_node


class SinglyLinkedList:
    def __init__(self):
        self._head = None
