# Exercise 1: Employee Attendance Tracker
# Scenario: A company wants to monitor employee attendance for a week.
# Requirements: Create an Employee class with: Employee ID, Employee Name, Days Present
# Implement methods to: Display employee details. Check attendance percentage (out of 5 working days).
# Print: "Excellent Attendance" if attendance ≥ 90%, "Good Attendance" if attendance ≥ 75%, "Needs Improvement" otherwise.
# Class, Constructor, Methods, if-else, Arithmetic operations


class Employee:
    def __init__(self, emp_id, name, days_present):
        self.emp_id = emp_id
        self.name = name
        self.days_present = days_present

    def display(self):
        print("Employee ID:", self.emp_id)
        print("Employee Name:", self.name)
        print("Days Present:", self.days_present)

    def attendance(self):
        percentage = (self.days_present / 5) * 100
        print("Attendance Percentage:", percentage, "%")

        if percentage >= 90:
            print("Excellent Attendance")
        elif percentage >= 75:
            print("Good Attendance")
        else:
            print("Needs Improvement")


emp_id = int(input("Enter Employee ID: "))
name = input("Enter Employee Name: ")
days_present = int(input("Enter Days Present (0-5): "))

emp = Employee(emp_id, name, days_present)

print("\nEmployee Details")
emp.display()
emp.attendance()


