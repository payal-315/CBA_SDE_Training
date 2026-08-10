# 12. Hospital Patient Queue
# A hospital stores patient names in a list representing a queue. Create a program that: Adds a new patient. Calls the next patient.
# Displays the current waiting list. Shows the number of patients waiting.



patients = []

n = int(input("Enter number of patients: "))

for i in range(n):
    name = input(f"Enter patient {i + 1} name: ")
    patients.append(name)

new_patient = input("Enter new patient name: ")
patients.append(new_patient)


if len(patients) > 0:
    called = patients.pop(0)
    print("\nCalling Patient:", called)
else:
    print("No patients waiting.")

print("\nWaiting List:", patients)


print("Number of Patients Waiting:", len(patients))


