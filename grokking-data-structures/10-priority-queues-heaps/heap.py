class Heap:
    def __init__(self, elements=None, element_priority=lambda x: x):
        """Create a heap with custom priority function"""
        self._priority = element_priority

        if elements is not None and len(elements) > 0:
            self._heapify(elements)
        else:
            self._elements = []

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

    def _heapify(self, elements):
        """Creates a heap out of an array"""
        raise NotImplementedError()

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
print(heap._elements)
