# 7. Online Exam Attendance
# An online platform stores attendance status using a list of "P" and "A". Write a program to: Count present students.
# Count absent students. Calculate attendance percentage.



attendance = []

n = int(input("Enter number of students: "))

for i in range(n):
    status = input(f"Enter attendance for student {i + 1} (P/A): ")
    attendance.append(status.upper())

present = 0
absent = 0

for status in attendance:
    if status == "P":
        present += 1
    elif status == "A":
        absent += 1

percentage = (present / n) * 100

print("\nAttendance List:", attendance)
print("Present Students:", present)
print("Absent Students:", absent)
print("Attendance Percentage:", percentage, "%")
