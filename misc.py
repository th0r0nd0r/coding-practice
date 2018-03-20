def fizz_buzz(rng):
  for i in range(1, rng + 1):
    if i % 3 == 0 and i % 5 == 0:
      print "fizzbuzz"
    elif i % 3 == 0:
      print "fizz"
    elif i % 5 == 0:
      print "buzz"
    else:
      print i

# fizz_buzz(100)

def dryer_fizz_buzz(rng):
  for i in range(1, rng + 1):
    output = ""
    if (i % 3 == 0):
      output += "Fizz"
    if (i % 5 == 0):
      output += "Buzz"
    
    if output == "":
      output = i
    
    print output

dryer_fizz_buzz(100)