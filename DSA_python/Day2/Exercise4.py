# Exercise 4: Employee Payroll Management  Scenario
# Develop payroll software for a company.
# Requirements: Add employees.  Different employee types: Full-time, Part-time, Intern, Calculate salary. Deduct tax. Generate salary slips.
# Classes: Employee, FullTimeEmployee, PartTimeEmployee, Intern, Payroll
# OOP Concepts: Abstract classes, Method overriding, Polymorphism, Inheritance, Bonus for full-time employees. Overtime payment.
#               Different tax slabs.



from abc import ABC, abstractmethod

class Employee(ABC):
    def __init__(self, emp_id, name):
        self.emp_id = emp_id
        self.name = name

    @abstractmethod
    def calculate_salary(self):
        pass

    def generate_salary_slip(self):
        print("\nSalary Slip")
        print("ID:", self.emp_id)
        print("Name:", self.name)
        print("Salary: ₹", self.calculate_salary())


class FullTimeEmployee(Employee):
    def __init__(self, emp_id, name, salary):
        super().__init__(emp_id, name)
        self.salary = salary
        self.bonus = 5000

    def calculate_salary(self):
        gross = self.salary + self.bonus
        tax = gross * 0.10     
        return gross - tax


class PartTimeEmployee(Employee):
    def __init__(self, emp_id, name, hours, rate, overtime):
        super().__init__(emp_id, name)
        self.hours = hours
        self.rate = rate
        self.overtime = overtime

    def calculate_salary(self):
        gross = (self.hours * self.rate) + (self.overtime * self.rate * 2)
        tax = gross * 0.05     
        return gross - tax


class Intern(Employee):
    def __init__(self, emp_id, name, stipend):
        super().__init__(emp_id, name)
        self.stipend = stipend

    def calculate_salary(self):
        tax = self.stipend * 0.02 
        return self.stipend - tax


class Payroll:
    def __init__(self):
        self.employees = []

    def add_employee(self, emp):
        self.employees.append(emp)

    def show_payroll(self):
        for emp in self.employees:
            emp.generate_salary_slip()    


payroll = Payroll()

e1 = FullTimeEmployee(101, "Payal", 50000)
e2 = PartTimeEmployee(102, "Sakshi", 100, 200, 10)
e3 = Intern(103, "Ashwini", 15000)

payroll.add_employee(e1)
payroll.add_employee(e2)
payroll.add_employee(e3)

payroll.show_payroll()


