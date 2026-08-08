# Exercise 3: Library Book Management System
# Scenario: A college library wants to manage books issued to students.
# Requirements: Develop an application that: Creates a Book class. Stores: Book ID, Title, Author, Number of available copies
#               Allow issuing a book. If copies are available: Reduce available count. Otherwise display: "Book Not Available"
#               Bonus: Create a method to return a book.
# Concepts to Use: Classes, Objects, Methods, Constructors, Encapsulation, Decision Making, Functions.



class Book:
    def __init__(self, book_id, title, author, copies):
        self.__book_id = book_id
        self.__title = title
        self.__author = author
        self.__copies = copies

    def issue_book(self):
        if self.__copies > 0:
            self.__copies -= 1
            print("Book Issued Successfully")
        else:
            print("Book Not Available")

    def return_book(self):
        self.__copies += 1
        print("Book Returned Successfully")

    def display(self):
        print("\n------ Book Details ------")
        print("Book ID :", self.__book_id)
        print("Title   :", self.__title)
        print("Author  :", self.__author)
        print("Available Copies :", self.__copies)


book_id = input("Enter Book ID: ")
title = input("Enter Book Title: ")
author = input("Enter Author Name: ")
copies = int(input("Enter Available Copies: "))

book = Book(book_id, title, author, copies)

while True:
    print("\n1. Issue Book")
    print("2. Return Book")
    print("3. Display Book Details")
    print("4. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        book.issue_book()
    elif choice == 2:
        book.return_book()
    elif choice == 3:
        book.display()
    elif choice == 4:
        print("Thank You!")
        break
    else:
        print("Invalid Choice")






              
