# Exercise 2: Library Management System  Scenario
# Develop software for a public library.
# Requirements: Add books, Register members, Issue books, Return books, Calculate late fines, Search books by author/title.
# Classes: Book, Library, Member, Librarian, Transaction
# OOP Concepts: Abstraction, Encapsulation, Aggregation, Exception handling, Maximum 3 books per member. Fine = ₹5/day after due date.
#               Reserved books cannot be issued to others.



from abc import ABC, abstractmethod

class Person(ABC):
    @abstractmethod
    def display(self):
        pass


class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.issued = False
        self.reserved = False


class Member(Person):
    def __init__(self, name):
        self.name = name
        self.books = []      

    def display(self):
        print("Member:", self.name)


class Librarian(Person):
    def __init__(self, name):
        self.name = name

    def display(self):
        print("Librarian:", self.name)


class Transaction:
    def __init__(self, member, book):
        self.__member = member     
        self.__book = book

    def issue(self):
        try:
            if len(self.__member.books) >= 3:
                raise Exception("Maximum 3 books allowed.")

            if self.__book.reserved:
                raise Exception("Book is reserved.")

            if self.__book.issued:
                raise Exception("Book already issued.")

            self.__book.issued = True
            self.__member.books.append(self.__book)
            print("Book Issued Successfully")

        except Exception as e:
            print(e)

    def return_book(self, late_days):
        self.__book.issued = False
        self.__member.books.remove(self.__book)

        fine = 0
        if late_days > 0:
            fine = late_days * 5

        print("Book Returned")
        print("Fine: ₹", fine)


class Library:
    def __init__(self):
        self.books = []
        self.members = []

    def add_book(self, book):
        self.books.append(book)

    def register_member(self, member):
        self.members.append(member)

    def search_book(self, key):
        print("\nSearch Result")
        for book in self.books:
            if key.lower() in book.title.lower() or key.lower() in book.author.lower():
                print(book.title, "-", book.author)


library = Library()

library.add_book(Book("Python", "Guido"))
library.add_book(Book("Java", "James"))
library.add_book(Book("C Programming", "Dennis"))

member = Member("Payal")
library.register_member(member)

library.search_book("Python")

transaction = Transaction(member, library.books[0])
transaction.issue()

transaction.return_book(4)    

library.books[1].reserved = True

transaction2 = Transaction(member, library.books[1])
transaction2.issue()
