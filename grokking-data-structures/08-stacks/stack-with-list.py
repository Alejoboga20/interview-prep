from typing import List


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
        is_empty_list = self.head is None
        return is_empty_list

    def __search_by_value__(self, target):
        """Find a value in the list"""
        current_node = self.head

        while current_node is not None:
            if current_node.value == target:
                return current_node
            current_node = current_node.next

        return None

    def traverse_list(self):
        """Traverse List"""
        current_node = self.head
        result: List[ListNode] = []

        while current_node is not None:
            result.append(current_node.value)
            current_node = current_node.next

        return result

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

    def delete_element_start(self):
        if self.head is not None:
            new_head = self.head.next
            self.head = new_head
            self.size -= 1

    def delete_element(self, target):
        current_node = self.head
        previous_node = None

        while current_node is not None:
            if current_node.value == target:
                if previous_node is None:
                    self.head = current_node.next
                else:
                    previous_node.next = current_node.next

                self.size -= 1
                return

            previous_node = current_node
            current_node = current_node.next

        raise ValueError(f"No element with value {target} was found")


class Stack:
    def __init__(self):
        self.data = SinglyLinkedList()

    def push(self, value):
        # before calling the underlying method we could perform some validations at this point
        return self.data.insert_element_start(value)

    def pop(self):
        if self.data.__is_empty__():
            raise ValueError("Canont pop from an empty stack")
        return self.data.delete_element_start()


stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
print(stack.data.__str__())
stack.pop()
print(stack.data.__str__())
stack.pop()
print(stack.data.__str__())
stack.pop()
print(stack.data.__str__())
