import yoursearch

array = []
n = int(input("Enter the number of elements in the array: "))
print("Enter the elements one by one:")
for _ in range(n):
    element = int(input())
    array.append(element)

target_linear = int(input("Enter the target value for Linear Search: "))

target_binary = int(input("Enter the target value for Binary Search: "))

# Linear Search
linear_result = yoursearch.linear_search(array, target_linear)
if linear_result != -1:
    print(f"Linear Search: Found {target_linear} at index {linear_result}")
else:
    print(f"Linear Search: {target_linear} not found in the array")

# Binary Search 
array.sort() 
binary_result = yoursearch.binary_search(array, target_binary)
if binary_result != -1:
    print(f"Binary Search: Found {target_binary} at index {binary_result}")
else:
    print(f"Binary Search: {target_binary} not found in the array")
