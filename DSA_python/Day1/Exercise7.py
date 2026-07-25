# Student Database (Dictionary)
# Problem Statement

# A college wants to store student information using Student ID as the key.

# Write a program to:

# Add student records.

# Search using Student ID.

# Update student details.

# Delete student records.

# Display all students.

# Dictionary

# Key-Value Pair

# CRUD



students = {}

while True:
    print("\nStudent Database")
    print("1. Add Student")
    print("2. Search Student")
    print("3. Update Student")
    print("4. Delete Student")
    print("5. Display All Students")
    print("6. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        student_id = input("Enter Student ID: ")

        if student_id in students:
            print("Student ID already exists.")
        else:
            name = input("Enter Student Name: ")
            students[student_id] = name
            print("Student added successfully.")

    elif choice == 2:
        student_id = input("Enter Student ID to search: ")

        if student_id in students:
            print("Student Name:", students[student_id])
        else:
            print("Student not found.")

    elif choice == 3:
        student_id = input("Enter Student ID to update: ")

        if student_id in students:
            name = input("Enter New Student Name: ")
            students[student_id] = name
            print("Student details updated.")
        else:
            print("Student not found.")

    elif choice == 4:
        student_id = input("Enter Student ID to delete: ")

        if student_id in students:
            del students[student_id]
            print("Student record deleted.")
        else:
            print("Student not found.")

    elif choice == 5:
        if len(students) == 0:
            print("No student records available.")
        else:
            print("\nStudent Records:")
            for student_id in students:
                print("ID:", student_id, "| Name:", students[student_id])

    elif choice == 6:
        print("Exiting program...")
        break

    else:
        print("Invalid choice. Please try again.")



