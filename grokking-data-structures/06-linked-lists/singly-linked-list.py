class ListNode:
    def __init__(self, value):
        self.value = value
        self.next: ListNode | None = None


class SinglyLinkedList:
    def __init__(self):
        self.head: ListNode | None = None
        self.size = 0

    def __str__(self):
        """Return a string representation of the list"""
        current_node = self.head
        list_values = []

        while current_node is not None:
            list_values.append(str(current_node.value))
            current_node = current_node.next

        formatted_list_values = " -> ".join(list_values)

        return formatted_list_values

    def __is_empty__(self):
        """Check if the list is empty"""
        is_empty_list = self.size == 0
        return is_empty_list

    def traverse_list(self):
        """Traverse List"""
        current_node = self.head

        while current_node is not None:
            print(f"(val: {current_node.value}, next: {current_node.next})")
            current_node = current_node.next

    def insert_element_start(self, value):
        old_head = self.head
        new_head = ListNode(value)
        self.head = new_head
        new_head.next = old_head
        self.size += 1

    def insert_element_end(self, value):
        """Intert a new node into the list"""
        new_node = ListNode(value)

        if self.head is None:
            self.head = new_node
        else:
            current_node = self.head
            while current_node.next is not None:
                current_node = current_node.next
            current_node.next = new_node

        self.size += 1


linked_list = SinglyLinkedList()
linked_list.insert_element_end(1)
linked_list.insert_element_end(2)
linked_list.insert_element_end(3)
print(f"list: {linked_list.__str__()}, size: {linked_list.size}")

linked_list.insert_element_start(4)
print(f"list: {linked_list.__str__()}, size: {linked_list.size}")

linked_list.traverse_list()
