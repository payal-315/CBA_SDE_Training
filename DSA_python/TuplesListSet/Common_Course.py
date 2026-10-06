# 2. Common Students Between Courses
# Given:   python_students = {"Amit", "Rahul", "Priya", "Neha", "Kiran"}
#          sql_students = {"Rahul", "Priya", "Kiran", "Arun", "Vijay"}
# Find: Students learning both Python and SQL, Students learning only Python, Students learning only SQL, Students learning at least one of the two courses


python_students = {"Amit", "Rahul", "Priya", "Neha", "Kiran"}
sql_students = {"Rahul", "Priya", "Kiran", "Arun", "Vijay"}

both = python_students & sql_students

only_python = python_students - sql_students

only_sql = sql_students - python_students

at_least_one = python_students | sql_students

print("Students learning both:", both)
print("Students learning only Python:", only_python)
print("Students learning only SQL:", only_sql)
print("Students learning at least one:", at_least_one)
