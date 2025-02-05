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

    def __str__(self):
        """Returns a string representation of the list"""
        current_node = self.head
        list_values = []

        while current_node is not None:
            list_values.append(str(current_node.value))
            current_node = current_node.next

        formatted_list_values = " -> ".join(list_values)

        return formatted_list_values

    def insert_element_front(self, value):
        new_node = ListNode(value)

        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            old_head = self.head
            self.head = new_node
            self.head.next = old_head
            old_head.prev = self.head

        self.size += 1


doubly_linked_list = DoublyLinkedList()
doubly_linked_list.insert_element_front(1)
doubly_linked_list.insert_element_front(2)
doubly_linked_list.insert_element_front(3)
print(f"list: {doubly_linked_list.__str__()}, size: {doubly_linked_list.size}")
