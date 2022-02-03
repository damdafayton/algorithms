# A Narcissistic Number is a positive number which is the sum of its own digits,
# each raised to the power of the number of digits in a given base.
# In this Kata, we will restrict ourselves to decimal (base 10).

def power(x, y):
    result = x
    while y > 1:
        result = result*x
        y = y-1
    if y == 0:
        return 1
    if y < 0:
        return('please enter positive integer')
    return result


def narcissistic(n):
    sum = 0
    for i in list(str(n)):
        sum = sum+power(int(i), len(str(n)))
    if sum == n:
        return True
    else:
        return False


print(power(2, 3))
print(power(1, 0))
print(power(1, -2))

print(narcissistic(2345))
print(narcissistic(153))
