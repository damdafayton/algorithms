def decodeMorse(morse_code):


words = morse_code.split(' ')
words_asci = []
for word in words:
letters = ''
for letter in word.split(' '):
letter_asci = MORSE_CODE[letter]
letters = letters + letter_asci
words_asci.append(letters)
return ' '.join(words_asci)
print(decodeMorse('.'))
