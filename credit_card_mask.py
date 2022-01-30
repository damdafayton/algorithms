<<<<<<< HEAD
# Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
# Your task is to write a function maskify, which changes all but the last four characters into '#'.

# return masked string
def maskify(cc):
    dLen = len(cc)
    strnew = ''
    for l in cc[:dLen-4-1]:
        strnew += '#'
    return strnew+cc[-4:]
    pass


print(maskify('sdflasdfjaslkdgj'))
=======
# Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
# Your task is to write a function maskify, which changes all but the last four characters into '#'.

# return masked string
def maskify(cc):
    dLen = len(cc)
    strnew = ''
    for l in cc[:dLen-4-1]:
        strnew += '#'
    return strnew+cc[-4:]
    pass


print(maskify('sdflasdfjaslkdgj'))
>>>>>>> master
