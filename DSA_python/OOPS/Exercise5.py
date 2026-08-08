# Exercise 5: Student Examination Result System
# Scenario: A school wants to calculate examination results automatically.
# Requirements: Each student has: Roll Number, Name, Marks of 5 subjects. The application should: Calculate total marks.
#               Calculate percentage. Assign Percentage Grade: 90+ A, 80-89 B, 70-79 C, 60-69 D, Below 60 F. Display student report card.
# Concepts to Use: Variables, Lists, Loops, Functions, OOP, Constructor, Methods, if-elif ladder



class Student:
    def __init__(self, roll_no, name, marks):
        self.roll_no = roll_no
        self.name = name
        self.marks = marks

    def total_marks(self):
        return sum(self.marks)

    def percentage(self):
        return self.total_marks() / 5

    def grade(self):
        per = self.percentage()

        if per >= 90:
            return "A"
        elif per >= 80:
            return "B"
        elif per >= 70:
            return "C"
        elif per >= 60:
            return "D"
        else:
            return "F"

    def report_card(self):
        print("\n------ Student Report Card ------")
        print("Roll Number :", self.roll_no)
        print("Name        :", self.name)
        print("Marks       :", self.marks)
        print("Total Marks :", self.total_marks())
        print("Percentage  : {:.2f}%".format(self.percentage()))
        print("Grade       :", self.grade())


roll_no = input("Enter Roll Number: ")
name = input("Enter Student Name: ")

marks = []
print("Enter marks of 5 subjects:")
for i in range(5):
    mark = int(input(f"Subject {i+1}: "))
    marks.append(mark)

student = Student(roll_no, name, marks)
student.report_card()


 
