class SortedArray():
    def __init__(self, size: int) -> None:
        self.filled_index: int = 0
        self.size: int = size
        self.data: list[int] = [0] * size

    def __str__(self):
        str_array = str(self.data)

        return str_array

    def __validate_insert__(self):
        """Check if the array is already full"""
        if (self.filled_index == self.size):
            raise IndexError("Array already full")

    def insert_element(self, element: int):
        print("insert element")


sorted_array = SortedArray(10)
