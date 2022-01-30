<<<<<<< HEAD
# Digital root is the recursive sum of all the digits in a number.
# Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

def digital_root(n):
    # add elements of number until the result is single number
    l = 0
    for i in list(str(n)):
        l = l+int(i)
    while len(str(l)) > 1:
        l = digital_root(l)
    return l


if __name__ == '__main__':
    print(digital_root(97))
    print(digital_root(234297))
    print(digital_root(23429799298294720872340397))
=======
# Digital root is the recursive sum of all the digits in a number.
# Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

def digital_root(n):
    # add elements of number until the result is single number
    l = 0
    for i in list(str(n)):
        l = l+int(i)
    while len(str(l)) > 1:
        l = digital_root(l)
    return l


if __name__ == '__main__':
    print(digital_root(97))
    print(digital_root(234297))
    print(digital_root(23429799298294720872340397))
>>>>>>> master
