class CircularQueue:
    def __init__(self, max_size: int) -> None:
        if max_size <= 1:
            raise ValueError(f"Invalid size for a queue (must have at least 2 elements)")

        self._data = [None] * max_size
        self._max_size: int = max_size
        self.front: int = 0
        self.rear: int = 0
        self._size: int = 0

    def __len__(self):
        return self._size

    def __is_empty__(self):
        is_empty = self._size == 0
        return is_empty

    def __is_full__(self):
        is_full = self._max_size == self._size
        return is_full

    def enqueue(self, value):
        if self.__is_full__():
            raise ValueError("The queue is already full")
        self._data[self.rear] = value
        self.rear = (self.rear + 1) % self._max_size
        self._size += 1

    def dequeue(self):
        if self.__is_empty__():
            raise ValueError("Cannot dequeue from an empty queue")
        value = self._data[self.front]
        self.front = (self.front + 1) % self._max_size
        self._size -= 1

        return value
