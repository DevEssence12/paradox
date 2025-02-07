thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort()
print(thislist)

thislist.sort(reverse = True)
print(thislist)

def myfunc(n):
  return abs(n - 50)

thislist1 = [100, 50, 65, 82, 23]
thislist1.sort(key = myfunc)
print(thislist1)