#  Library Book Management (Arrays + List + Dictionary)
# Problem Statement

# A library maintains information about its books.

# Implement a system where:

# An array stores book IDs.

# A list stores book titles.

# A dictionary maps Book ID to the number of available copies.

# Search books using Book ID.

# Display all available books.

# Arrays

# Lists

# Dictionaries

# Data organization




book_ids = []          
book_titles = []       
book_copies = {}       

n = int(input("Enter the number of books: "))

for i in range(n):
    book_id = int(input("Enter Book ID: "))
    title = input("Enter Book Title: ")
    copies = int(input("Enter Available Copies: "))

    book_ids.append(book_id)
    book_titles.append(title)
    book_copies[book_id] = copies

search_id = int(input("\nEnter Book ID to search: "))

if search_id in book_copies:
    index = book_ids.index(search_id)
    print("\nBook Found")
    print("Book ID:", book_ids[index])
    print("Book Title:", book_titles[index])
    print("Available Copies:", book_copies[search_id])
else:
    print("Book not found.")

print("\nLibrary Books:")
for i in range(len(book_ids)):
    print("Book ID:", book_ids[i])
    print("Book Title:", book_titles[i])
    print("Available Copies:", book_copies[book_ids[i]])
    print()






