# Exercise 3: Student Grade Management
# Scenario: A college wants to generate grades automatically.
# Requirements: Create a Student class.  Store: Roll Number, Name, Marks in 5 subjects
# Methods: Calculate total. Calculate average.  Assign grade: A (90+), B (75–89), C (60–74), D (40–59), F (<40)
# Display complete report card.
# List, Loops, Class methods, if-elif ladder


class Student:
    def __init__(self, roll_no, name, marks):
        self.roll_no = roll_no
        self.name = name
        self.marks = marks

    def report_card(self):
        total = sum(self.marks)
        average = total / 5

        if average >= 90:
            grade = "A"
        elif average >= 75:
            grade = "B"
        elif average >= 60:
            grade = "C"
        elif average >= 40:
            grade = "D"
        else:
            grade = "F"

        print("\n----- Report Card -----")
        print("Roll Number:", self.roll_no)
        print("Name:", self.name)

        print("Marks:")
        for i in range(5):
            print("Subject", i + 1, ":", self.marks[i])

        print("Total:", total)
        print("Average:", average)
        print("Grade:", grade)


roll_no = int(input("Enter Roll Number: "))
name = input("Enter Name: ")

marks = []
for i in range(5):
    mark = int(input(f"Enter marks of Subject {i+1}: "))
    marks.append(mark)

student = Student(roll_no, name, marks)
student.report_card()


