def binary_search(ordered_list: list[int], target: int) -> int:
    if len(ordered_list) == 0:
        raise ValueError('Can not perform this operation on an empty list')

    right_index: int = len(ordered_list) - 1
    left_index: int = 0
    counter = 0

    while left_index <= right_index:
        counter += 1
        print(f"Cycles: {counter}")

        middle_index = left_index + (right_index - left_index) // 2
        middle_element = ordered_list[middle_index]
        if middle_element == target:
            return middle_index
        elif middle_element < target:
            left_index = middle_index + 1
        else:
            right_index = middle_index - 1

    return -1


oreder_list = [4, 6, 9, 13, 14, 18, 21, 24, 38]
target = 13

binary_search(ordered_list=oreder_list, target=target)
