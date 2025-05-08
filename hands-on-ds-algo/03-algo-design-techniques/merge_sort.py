def merge_sort(unsorted_list: list[int]):
    if len(unsorted_list) == 1:  # Base Case
        return unsorted_list

    mid_point = int(len(unsorted_list) / 2)
    first_half = unsorted_list[:mid_point]
    second_half = unsorted_list[mid_point:]

    half_a = merge_sort(first_half)  # Recursive Case
    half_b = merge_sort(second_half)  # Recursive Case

    return merge(half_a, half_b)


def merge(first_sublist: list[int], second_sublist: list[int]) -> list[int]:
    i: int = 0
    j: int = 0
    merged_list: list[int] = []

    while i < len(first_sublist) and j < len(second_sublist):
        if first_sublist[i] < second_sublist[j]:
            merged_list.append(first_sublist[i])
            i += 1
        else:
            merged_list.append(second_sublist[j])
            j += 1

    while i < len(first_sublist):
        merged_list.append(first_sublist[i])
        i += 1
    while j < len(second_sublist):
        merged_list.append(second_sublist[j])
        j += 1

    return merged_list
