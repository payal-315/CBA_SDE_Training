#  Employee Directory (List)
# Problem Statement

# A company wants to maintain a dynamic list of employee names.

# Implement a program to:

# Add employees.

# Remove an employee.

# Search an employee by name.

# Display all employees.

# Count total employees.

# List

# Dynamic insertion

# Dynamic deletion




employees = []

while True:
    print("\nEmployee Directory")
    print("1. Add Employee")
    print("2. Remove Employee")
    print("3. Search Employee")
    print("4. Display All Employees")
    print("5. Count Total Employees")
    print("6. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        name = input("Enter employee name: ")
        employees.append(name)
        print(name, "added successfully.")

    elif choice == 2:
        name = input("Enter employee name to remove: ")
        if name in employees:
            employees.remove(name)
            print(name, "removed successfully.")
        else:
            print("Employee not found.")

    elif choice == 3:
        name = input("Enter employee name to search: ")
        if name in employees:
            print(name, "is present in the employee directory.")
        else:
            print("Employee not found.")

    elif choice == 4:
        print("\nEmployee List:")
        if len(employees) == 0:
            print("No employees in the directory.")
        else:
            for employee in employees:
                print(employee)

    elif choice == 5:
        print("Total Employees:", len(employees))

    elif choice == 6:
        print("Exiting program...")
        break

    else:
        print("Invalid choice. Please try again.")



