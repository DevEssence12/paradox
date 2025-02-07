from yoursort import bubble_sort, insertion_sort, selection_sort

data = [64, 34, 25, 12, 22, 11, 90]

data = []
n = int(input("Enter the number of elements in the array: "))
print("Enter the elements of array:")
for _ in range(n):
    element = int(input())
    data.append(element)


print("Bubble Sort Result:", bubble_sort(data.copy()))

print("Insertion Sort Result:", insertion_sort(data.copy()))

print("Selection Sort Result:", selection_sort(data.copy()))
