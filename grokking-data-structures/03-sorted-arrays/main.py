from typing import Generic, List, TypeVar, Optional

T = TypeVar('T')


class SortedArray(Generic[T]):
    def __init__(self, size: int, default_value: Optional[T] = None) -> None:
        self.size = size
        self.data: List[Optional[T]] = [default_value] * size
        self.element_type: Optional[type] = type(default_value) if default_value is not None else None
