from typing import Generic, TypeVar, List, Optional

T = TypeVar('T')


class Array(Generic[T]):
    def __init__(self, size: int = 1, default_value: Optional[T] = None) -> None:
        """Init an array of fixed size"""

        if size <= 0:
            raise ValueError("Size should be positive")

        self.size = size
        self.element_type: Optional[type] = type(
            default_value) if default_value is not None else None
        self.data: List[Optional[T]] = [default_value] * size
