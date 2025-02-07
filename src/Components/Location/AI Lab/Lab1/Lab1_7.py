thislist = ["apple", "banana", "cherry"]
print(thislist)
print(len(thislist))

list1 = ["abc", 34, True, 40, "male"]
print(list1)

thislist1 = list(("apple", "banana", "cherry"))
print(thislist1)

print(thislist[1])
print(thislist[-1])

thislist2 = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist2[-4:-1])

thislist3 = ["apple","orange","red","banana","green",]
thislist3[0] = "pineapple"
print(thislist3)

thislist4 = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist4[1:3] = ["blackcurrant", "watermelon"]
print(thislist4)

thislist5 = ["apple", "banana", "cherry"]
thislist5.insert(2, "watermelon")
print(thislist5)

thislist6 = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
thislist6.extend(tropical)
print(thislist6)

thislist.remove("banana")
print(thislist)

thislist.pop(1)
print(thislist)

thislist = ["apple", "banana", "cherry"]
thislist.pop()
print(thislist)