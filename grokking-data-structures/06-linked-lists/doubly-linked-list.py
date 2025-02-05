class ListNode:
    def __init__(self, value) -> None:
        self.value = value
        self.next: ListNode | None = None
        self.prev: ListNode | None = None


class DoublyLinkedList:
    def __init__(self) -> None:
        self.head: ListNode | None = None
        self.tail: ListNode | None = None
        self.size = 0
