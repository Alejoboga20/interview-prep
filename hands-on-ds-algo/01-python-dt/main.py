from collections import namedtuple, deque, OrderedDict, defaultdict, ChainMap, Counter

Book = namedtuple('Book', ['name', 'ISBN', 'price'])
Book1 = Book('Hands on Data Structures', 9781788995573, 10.5)
print(f"Book: {Book1}")
print(f"Book Name: {Book1[0]}")

my_queue = deque([1, 2, 'Name'])
print(f"my_queue {my_queue}")

od = OrderedDict({'my': 2, 'name ': 4, 'is': 2, 'Mohan': 5})
od['hello'] = 4
print(od)

dd = defaultdict(int)
words = str.split('data python data data structure data python')
for word in words:
    dd[word] += 1
print(dd)

dict1 = {"data": 1, "structure": 2}
dict2 = {"python": 3, "language": 4}
chain = ChainMap(dict1, dict2)
print(chain)
print(list(chain.keys()))
print(list(chain.values()))
print(chain["data"])
print(chain["language"])

inventory = Counter('hello')
print(inventory)
print(inventory['l'])
print(inventory['e'])
print(inventory['o'])
