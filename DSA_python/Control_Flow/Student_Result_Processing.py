# Student Result Processing:-
# Accept marks for 5 subject . Calculate: Total marks, Percentage, Grade
# Rules: Percentage, Grade :- 90–100 A+, 80–89 A, 70–79 B, 60–69 C, 50–59 D, Below 50 F
# Additional rule: If marks in , the student is , regardless of percentage. Use a for loop to process the subjects.


total = 0
failed = False

for i in range(1, 6):
    marks = float(input(f"Enter marks for subject {i}: "))

    total += marks

    if marks < 50:
        failed = True

percentage = total / 5

if failed:
    grade = "F"
elif percentage >= 90:
    grade = "A+"
elif percentage >= 80:
    grade = "A"
elif percentage >= 70:
    grade = "B"
elif percentage >= 60:
    grade = "C"
elif percentage >= 50:
    grade = "D"
else:
    grade = "F"

print("\n----- Student Result -----")
print("Total Marks:", total, "/ 500")
print("Percentage:", percentage, "%")
print("Grade:", grade)

if failed:
    print("Result: FAIL")
else:
    print("Result: PASS")
