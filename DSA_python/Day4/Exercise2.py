# 2. Student Marks Dashboard
# A teacher enters marks of 10 students into a list. Create a program that: Displays all marks. Finds the topper’s mark.
# Finds the class average. Counts students who scored more than 75.


marks = []

print("Enter marks of 10 students:")

for i in range(10):
    mark = int(input(f"Student {i + 1}: "))
    marks.append(mark)

topper = max(marks)
average = sum(marks) / len(marks)

count = 0
for mark in marks:
    if mark > 75:
        count += 1

print("\nMarks:", marks)
print("Topper's Mark:", topper)
print("Class Average:", average)
print("Students Scored More Than 75:", count)
