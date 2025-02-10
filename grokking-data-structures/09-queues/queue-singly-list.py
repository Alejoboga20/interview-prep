class ListNode:
    def __init__(self, value):
        self.value = value
        self.next: ListNode | None = None


class SinglyLinkedList:
    def __init__(self):
        self.head: ListNode | None = None
        self.tail: ListNode | None = None

    def remove_from_front(self):
        if self.head is None or self.tail is None:
            raise IndexError("List is empty")

        removed_node = self.head
        self.head = self.head.next

        if self.head is None:
            self.tail = None

        return removed_node

    def insert_to_back(self, value):
        new_node = ListNode(value)
        if self.head is None or self.tail is None:
            self.head = self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node


class Queue:
    def __init__(self):
        self.data = SinglyLinkedList()

    def enqueue(self, value):
        self.data.insert_to_back(value)

    def dequeue(self):
        return self.data.remove_from_front()


queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

print(queue.dequeue().value)
print(queue.dequeue().value)
print(queue.dequeue().value)
print(queue.dequeue().value)
