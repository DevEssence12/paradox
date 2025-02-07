import random
from yoursearch import linear_search, binary_search
from yoursort import bubble_sort, insertion_sort, selection_sort

n = int(input("Enter the number of elements in the list: "))
array = [random.randint(1, 100) for _ in range(n)]
print("Generated Array:", array)

target_linear = int(input("Enter the target value for Linear Search: "))
linear_result = linear_search(array, target_linear)
if linear_result != -1:
    print(f"Linear Search: Found {target_linear} at index {linear_result}")
else:
    print(f"Linear Search: {target_linear} not found in the array")

target_binary = int(input("Enter the target value for Binary Search: "))
sorted_array = sorted(array)
print("Sorted Array for Binary Search:", sorted_array)
binary_result = binary_search(sorted_array, target_binary)
if binary_result != -1:
    print(f"Binary Search: Found {target_binary} at index {binary_result}")
else:
    print(f"Binary Search: {target_binary} not found in the array")

print("Bubble Sort Result:", bubble_sort(array.copy()))
print("Insertion Sort Result:", insertion_sort(array.copy()))
print("Selection Sort Result:", selection_sort(array.copy()))
