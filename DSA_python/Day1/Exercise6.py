# Word Frequency Counter (Dictionary)
# Problem Statement

# A text editor wants to count how many times each word appears in a paragraph.

# Create a program that:

# Reads multiple words.

# Stores words in a dictionary.

# Counts occurrences.

# Displays each word with its frequency.
# Input


# Java Python Java Java C#

# Output

# Java -> 3
# Python -> 1
# C# -> 1

# Dictionary (Map)

# Counting frequency



text = input("Enter words: ")

words = text.split()

frequency = {}

for word in words:
    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1

print("\nWord Frequencies:")
for word in frequency:
    print(word, "->", frequency[word])

