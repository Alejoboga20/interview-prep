from typing import Generic, TypeVar, List, Optional

T = TypeVar('T')


class Array(Generic[T]):
    def __init__(self, size: int = 0, default_value: Optional[T] = None):
        """Initialize an array of fixed size"""

        if size <= 0:
            raise ValueError("Size should be a positive integer")

        self.size = size
        self.data: List[Optional[T]] = [default_value] * size
        self.element_type: Optional[type] = type(
            default_value) if default_value is not None else None

    def __validate_index__(self, index: int):
        """Check if the index is valid"""

        if index < 0 or index >= self.size:
            raise IndexError("Index out of bounds")

    def __validate_type__(self, value: T):
        """Check if the value is of the correct type"""

        if self.element_type is not None and not isinstance(value, self.element_type):
            raise TypeError("Invalid type")

    def get_item(self, index: int) -> T | None:
        """Get an element by index"""
        self.__validate_index__(index)
        element = self.data[index]

        return element

    def set_item(self, index: int, element: T):
        """Set an element by index"""
        self.__validate_index__(index)
        self.__validate_type__(element)
        self.data[index] = element

    def __str__(self) -> str:
        return str(self.data)

    def __len__(self) -> int:
        return self.size


str_array = Array[str](3, None)
int_array = Array[int](3, 0)

print(str_array.__str__())
first = str_array.get_item(0)
str_array.set_item(1, "world")


class UnsortedArray(Generic[T]):
    def __init__(self, max_size: int = 0, default_value: Optional[T] = None):
        self.size = 0
        self.max_size = max_size
        self.array = Array[Optional[T]](max_size, default_value)


unsorted_array = UnsortedArray[str](2, None)
unsorted_array.array.set_item(0, 'hello')
unsorted_array.array.set_item(1, 'world')
print(unsorted_array.array.__str__())
