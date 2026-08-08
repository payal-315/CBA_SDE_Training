# Exercise 1: Employee Attendance Management System
# Scenario: A company wants to automate employee attendance tracking. Each employee has an ID, name, department, 
#           and number of working days in a month.
# Requirements: Develop a Python application that: Accepts employee details. Calculates attendance percentage.
#               Determines attendance status: ≥ 90% → Excellent, 75–89% → Good, Below 75% → Needs Improvement
#               Display employee details in a formatted report.
# Concepts to Use: Variables, Data types, Input/Output, Conditional statements, Arithmetic operators, Functions, Class and Object
#                   Constructor, Encapsulation



class Employee:
    def __init__(self, emp_id, name, department, working_days, days_present):
        self.__emp_id = emp_id
        self.__name = name
        self.__department = department
        self.__working_days = working_days
        self.__days_present = days_present

    def calculate_attendance(self):
        return (self.__days_present / self.__working_days) * 100

    def attendance_status(self):
        percentage = self.calculate_attendance()

        if percentage >= 90:
            return "Excellent"
        elif percentage >= 75:
            return "Good"
        else:
            return "Needs Improvement"

    def display_report(self):
        print("\n------ Employee Attendance Report ------")
        print("Employee ID :", self.__emp_id)
        print("Name        :", self.__name)
        print("Department  :", self.__department)
        print("Working Days:", self.__working_days)
        print("Days Present:", self.__days_present)
        print("Attendance  : {:.2f}%".format(self.calculate_attendance()))
        print("Status      :", self.attendance_status())


emp_id = input("Enter Employee ID: ")
name = input("Enter Employee Name: ")
department = input("Enter Department: ")
working_days = int(input("Enter Total Working Days: "))
days_present = int(input("Enter Days Present: "))

if days_present > working_days or days_present < 0:
    print("Invalid attendance data!")
else:
    emp = Employee(emp_id, name, department, working_days, days_present)
    emp.display_report()
