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
        raise NotImplementedError()

    def insert(self, element) -> None:
        self._elements.append(element)
        inserted_index = len(self._elements) - 1
        self._bubble_up(inserted_index)

    def _bubble_up(self, inserted_index: int) -> None:
        element = self._elements[inserted_index]

        while inserted_index > 0:
            parent_index = self._parent_index(inserted_index)
            parent = self._elements[parent_index]

            if self._has_higher_priority(element_1=element, element_2=parent):
                self._elements[inserted_index] = parent
                inserted_index = parent_index
            else:
                break

        self._elements[inserted_index] = element

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
