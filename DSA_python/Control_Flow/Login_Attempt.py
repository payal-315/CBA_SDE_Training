# 7. Login Attempt System
# Create a login system with: Username: admin, Password: Python@123
# Rules: Correct username and password → "Login successful", Incorrect credentials → "Invalid username or password"
# After 3 failed attempts → "Account locked"
# Additional requirement: If username is correct but password is wrong, display "Incorrect password".
# If username is wrong, display "User not found". Use a loop and break.


correct_username = "admin"
correct_password = "Python@123"

attempts = 0

while attempts < 3:

    username = input("Enter username: ")
    password = input("Enter password: ")

    if username == correct_username:

        if password == correct_password:
            print("Login successful")
            break
        else:
            print("Incorrect password")

    else:
        print("User not found")

    attempts += 1

    if attempts == 3:
        print("Account locked")
        break
