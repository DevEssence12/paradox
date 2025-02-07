thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)

for i in range(len(thislist)):
  print(thislist[i])

[print(x) for x in thislist]

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []

for x in fruits:
  if "a" in x:
    newlist.append(x)

print(newlist)

newlist1 = [x for x in fruits if x != "apple"]