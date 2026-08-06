# Exercise 4: Hospital Appointment System
# Scenario: A hospital records patient appointments.
# Requirements: Create a Patient class.  Store: Patient ID, Name, Age, Appointment Time
# Method should determine: Senior Citizen (Age ≥60), Adult, Child
# Display appointment details. Add another method that checks whether appointment is: Morning, Afternoon, Evening
# (Assume appointment hour is entered in 24-hour format.)
# Multiple methods, Conditional statements, Object creation


class Patient:
    def __init__(self, patient_id, name, age, appointment_time):
        self.patient_id = patient_id
        self.name = name
        self.age = age
        self.appointment_time = appointment_time

    def display(self):
        print("\n--- Appointment Details ---")
        print("Patient ID:", self.patient_id)
        print("Name:", self.name)
        print("Age:", self.age)
        print("Appointment Time:", self.appointment_time, ":00")

    def patient_type(self):
        if self.age >= 60:
            print("Category: Senior Citizen")
        elif self.age >= 18:
            print("Category: Adult")
        else:
            print("Category: Child")

    def appointment_session(self):
        if 6 <= self.appointment_time < 12:
            print("Session: Morning")
        elif 12 <= self.appointment_time < 17:
            print("Session: Afternoon")
        elif 17 <= self.appointment_time < 21:
            print("Session: Evening")
        else:
            print("Session: Invalid Appointment Time")


patient_id = int(input("Enter Patient ID: "))
name = input("Enter Patient Name: ")
age = int(input("Enter Age: "))
appointment_time = int(input("Enter Appointment Hour (0-23): "))

patient = Patient(patient_id, name, age, appointment_time)

patient.display()
patient.patient_type()
patient.appointment_session()




