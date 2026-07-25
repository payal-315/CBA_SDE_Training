#Student Marks Management (Arrays)
# Problem Statement

# A school wants to store the marks of in an array.

# Write a program to:

# Store marks in an array.

# Display all marks.

# Find the highest mark.

# Find the lowest mark.

# Calculate the average marks.

# Arrays

# Looping

# Basic calculations


marks = []

n = int(input("Enter the number of students: "))

for i in range(n):
    mark = int(input(f"Enter marks of student {i + 1}: "))
    marks.append(mark)

print("\nStudent Marks:")
for mark in marks:
    print(mark)

highest = marks[0]
for mark in marks:
    if mark > highest:
        highest = mark

lowest = marks[0]
for mark in marks:
    if mark < lowest:
        lowest = mark

total = 0
for mark in marks:
    total += mark

average = total / n

print("\nHighest Mark:", highest)
print("Lowest Mark:", lowest)
print("Average Marks:", average)




