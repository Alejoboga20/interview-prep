class Heap:
    def __init__(self, elements=None, element_priority=lambda x: x):
        """Create a heap with custom priority function"""
        self._priority = element_priority

        if elements is not None and len(elements) > 0:
            self._heapify(elements)
        else:
            self._elements = []

    def _heapify(self, elements):
        """Creates a heap out of an array"""
        self._elements = elements[:]
        last_inner_node_index = self._first_leaf_index() - 1

        for index in range(last_inner_node_index, -1, -1):
            self._push_down(index)

    def print_levels(self) -> None:
        """Print the heap levels separated by commas, each level on a new line."""
        if not self._elements:
            print("Heap is empty.")
            return

        level = 0
        index = 0
        size = len(self._elements)

        while index < size:
            level_count = 2 ** level
            row = self._elements[index:index + level_count]
            print(", ".join(map(str, row)))
            index += level_count
            level += 1

    def insert(self, element) -> None:
        self._elements.append(element)
        inserted_index = len(self._elements) - 1
        self._bubble_up(inserted_index)

    def _bubble_up(self, inserted_index: int) -> None:
        """Move the element up until the heap property is restored."""
        while inserted_index > 0:
            parent_index = self._parent_index(inserted_index)

            if self._has_higher_priority(self._elements[inserted_index], self._elements[parent_index]):
                self._elements[inserted_index], self._elements[parent_index] = (
                    self._elements[parent_index],
                    self._elements[inserted_index]
                )
                inserted_index = parent_index
            else:
                break

    def top(self):
        if self._is_empty():
            raise IndexError("Method top called on an empty heap.")
        if self.get_length() == 1:
            element = self._elements.pop()
        else:
            element = self._elements[0]
            self._elements[0] = self._elements.pop()
            self._push_down(0)
        return element

    def _push_down(self, index: int) -> None:
        element = self._elements[index]
        current_index = index

        while True:
            child_index = self._highest_priority_child_index(current_index)
            if child_index is None:
                break

            if self._has_lower_priority(element, self._elements[child_index]):
                self._elements[current_index] = self._elements[child_index]
                current_index = child_index
            else:
                break

        self._elements[current_index] = element

    def _first_leaf_index(self):
        length = self.get_length()
        first_leaf_index = length // 2

        return first_leaf_index

    def _highest_priority_child_index(self, index):
        first_index = self._left_child_index(index)

        if first_index >= self.get_length():
            return None
        if first_index + 1 >= self.get_length():
            return first_index
        if self._has_higher_priority(self._elements[first_index], self._elements[first_index + 1]):
            return first_index
        else:
            return first_index + 1

    def _has_lower_priority(self, element_1, element_2):
        return self._priority(element_1) < self._priority(element_2)

    def _has_higher_priority(self, element_1, element_2):
        return self._priority(element_1) > self._priority(element_2)

    def _left_child_index(self, index: int):
        return index * 2 + 1

    def _right_child_index(self, index: int):
        return index * 2 + 2

    def _parent_index(self, index: int):
        return (index - 1) // 2

    def _is_empty(self):
        is_empty = self.get_length() == 0
        return is_empty

    def get_length(self) -> int:
        length = len(self._elements)
        return length


heap_elements = [
    ("Broken Login", 9),
    ("Server Crash", 8),
    ("Database Slow", 7),
    ("Cache Issue", 5),
    ("Memory Leak", 4),
    ("UI Bug", 3),
    ("Network Latency", 2)
]

heap = Heap(element_priority=lambda x: x[1])

for element in heap_elements:
    heap.insert(element)

heap.print_levels()
heap.top()


heapified = Heap(elements=heap_elements, element_priority=lambda x: x[1])
heapified.print_levels()
