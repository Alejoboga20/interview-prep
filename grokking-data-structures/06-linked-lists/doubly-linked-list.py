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

    def traverse(self):
        """List traversal"""
        current_node = self.head

        while current_node is not None:
            print(f"""
                  (value: {current_node.value},
                  prev: {current_node.prev.value if current_node.prev is not None else None},
                  next: {current_node.next.value if current_node.next is not None else None})""")
            current_node = current_node.next

    def search_by_value(self, target):
        current_node = self.head

        while current_node is not None:
            if current_node.value == target:
                return current_node

            current_node = current_node.next

        raise ValueError(f"Value {target} not found in list")

    def delete(self, target):
        node_to_delete = self.search_by_value(target)
        prev_node = node_to_delete.prev
        next_node = node_to_delete.next

        if prev_node is None:
            self.head = node_to_delete.next
            if self.head is None:
                self.tail = None
            else:
                self.head.prev = None
        elif next_node is None:
            self.tail = prev_node
            self.tail.next = None
        else:
            prev_node.next = next_node
            next_node.prev = prev_node

        self.size -= 1

    def insert_element_in_front(self, value):
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

    def insert_element_to_back(self, value):
        new_node = ListNode(value)

        if self.tail is None:
            self.head = new_node
            self.tail = new_node
        else:
            old_tail = self.tail
            self.tail = new_node
            self.tail.prev = old_tail
            old_tail.next = self.tail

        self.size += 1


doubly_linked_list = DoublyLinkedList()
doubly_linked_list.insert_element_in_front(1)
doubly_linked_list.insert_element_in_front(2)
doubly_linked_list.insert_element_in_front(3)
print(f"list: {doubly_linked_list.__str__()}, size: {doubly_linked_list.size}")

doubly_linked_list.insert_element_to_back(6)
doubly_linked_list.insert_element_to_back(5)
doubly_linked_list.insert_element_to_back(4)
print(f"list: {doubly_linked_list.__str__()}, size: {doubly_linked_list.size}")
doubly_linked_list.traverse()

doubly_linked_list.delete(5)
print(f"list: {doubly_linked_list.__str__()}, size: {doubly_linked_list.size}")
doubly_linked_list.delete(1)
print(f"list: {doubly_linked_list.__str__()}, size: {doubly_linked_list.size}")
doubly_linked_list.traverse()
