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
        print(f"filled_index: {self.filled_index}")
        if (self.filled_index == self.size):
            raise ValueError("Array already full")

    def __validate_index__(self, index_to_validate: int):
        """Check if the index is not out of bounds"""
        if (index_to_validate > self.filled_index - 1):
            raise IndexError("Index out of bounds")

    def __delete_element__(self, index_to_delete: int):
        for i in range(index_to_delete, self.filled_index - 1, 1):
            self.data[i] = self.data[i + 1]

        self.filled_index -= 1

    def __clean_unfilled_slots(self):
        for index in range(self.filled_index, self.size, 1):
            self.data[index] = 0

    def traverse_array(self):
        for index in range(self.filled_index):
            print(f"Element #{index}: {self.data[index]}")

    def linear_search_by_value(self, target: int):
        for index in range(self.filled_index):
            if self.data[index] == target:
                return index
            elif self.data[index] > target:
                return None

    def binary_search_by_value(self, target: int):
        left_pointer = 0
        right_pointer = self.filled_index - 1

        while left_pointer <= right_pointer:
            middle_index = (right_pointer + left_pointer) // 2
            middle_value = self.data[middle_index]

            if middle_value == target:
                return middle_index
            elif middle_value > target:
                right_pointer = middle_index - 1
            else:
                left_pointer = middle_index + 1
        return None

    def insert_element(self, element: int) -> None:
        """Implement Insertion Sort"""
        self.__validate_insert__()

        for index in range(self.filled_index, 0, -1):
            current_element = self.data[index - 1]

            if current_element <= element:
                self.data[index] = element
                self.filled_index += 1
                return
            else:
                self.data[index] = current_element

        self.data[0] = element
        self.filled_index += 1

    def delete_element_by_index(self, index_to_delete: int) -> None:
        self.__validate_index__(index_to_delete)
        self.__delete_element__(index_to_delete)
        self.__clean_unfilled_slots()

    def delete_element_by_value(self, target: int) -> None:
        index_to_delete = self.binary_search_by_value(target)
        # index_to_delete = self.linear_search_by_value(target)

        if index_to_delete is None:
            raise ValueError(f"Unable to delete element {target}: Entry not found")

        self.__delete_element__(index_to_delete)
        self.__clean_unfilled_slots()


sorted_array = SortedArray(10)

print(sorted_array.__str__())
sorted_array.insert_element(1)
print(sorted_array.__str__())
sorted_array.insert_element(1)
print(sorted_array.__str__())
sorted_array.insert_element(8)
print(sorted_array.__str__())
sorted_array.insert_element(10)
print(sorted_array.__str__())
sorted_array.insert_element(11)
print(sorted_array.__str__())
sorted_array.insert_element(20)
print(sorted_array.__str__())
sorted_array.insert_element(2)
print(sorted_array.__str__())
sorted_array.insert_element(0)
print(sorted_array.__str__())
sorted_array.insert_element(0)
print(sorted_array.__str__())
sorted_array.insert_element(15)
print(sorted_array.__str__())
sorted_array.traverse_array()

sorted_array.delete_element_by_value(15)
print(sorted_array.__str__())
sorted_array.delete_element_by_value(1)
print(sorted_array.__str__())
sorted_array.delete_element_by_value(0)
print(sorted_array.__str__())

sorted_array.delete_element_by_index(4)
print(sorted_array.__str__())
sorted_array.delete_element_by_index(4)
print(sorted_array.__str__())
