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

    def remove_item(self, index: int):
        self.__validate_index__(index)

        lower_array = self.data[:index]
        upper_array = self.data[index + 1:]
        self.data = lower_array + upper_array

    def find_max(self):
        if self.element_type is int:
            max_value = None
            max_value_index = -1

            for index in range(1, self.size):
                if self.data[index] is not None and self.data[index] > max_value:
                    max_value = self.data[index]  # ✅ Fix reference error
                    max_value_index = index
        else:
            raise TypeError(
                "Operation cannot be performed on this type of array")

        return {"max_value": max_value, "max_value_index": max_value_index}

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
        self.filled_index = 0
        self.max_size = max_size
        self.array = Array[Optional[T]](max_size, default_value)

    def insert(self, element: T):
        if self.filled_index >= self.max_size:
            raise ValueError("Array is full")

        self.array.set_item(self.filled_index, element)
        self.filled_index += 1

    def remove_last_element(self):
        if self.filled_index == 0:
            raise ValueError("Array is empty")

        self.array.set_item(self.filled_index - 1, None)

    def remove_element(self, index: int):
        if index < 0 or index >= self.filled_index:
            raise IndexError("Index out of bounds")

        self.array.remove_item(index)
        self.filled_index -= 1

    def find_first_ocurrence(self, element: T):
        index_element = None
        for index in range(0, self.filled_index):
            if self.array.get_item(index) == element:
                index_element = index
                return {"index_element": index_element, "element": element}
        return None

    def traverse(self):
        for index in range(0, self.filled_index):
            print(self.array.get_item(index))


unsorted_array = UnsortedArray[str](2, None)
unsorted_array.insert("hello")
unsorted_array.insert("world")
print(unsorted_array.array.__str__())

unsorted_array.remove_last_element()
print(unsorted_array.array.__str__())

unsorted_with_numbers = UnsortedArray[int](5, 0)
unsorted_with_numbers.insert(1)
unsorted_with_numbers.insert(2)
unsorted_with_numbers.insert(3)
unsorted_with_numbers.insert(4)
unsorted_with_numbers.insert(5)

unsorted_with_numbers.remove_element(2)
print(unsorted_with_numbers.array.__str__())
unsorted_with_numbers.remove_element(3)
print(unsorted_with_numbers.array.__str__())
