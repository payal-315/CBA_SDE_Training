# Banking Account Directory (Dictionary)
# Problem Statement

# A bank stores customer accounts using the Account Number as the key.

# Develop a program to:

# Add new accounts.

# Search account details.

# Deposit money.

# Withdraw money.

# Display all accounts.

# Dictionary

# Searching

# Updating values




accounts = {}

while True:
    print("\nBanking Account Directory")
    print("1. Add New Account")
    print("2. Search Account")
    print("3. Deposit Money")
    print("4. Withdraw Money")
    print("5. Display All Accounts")
    print("6. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        account_no = input("Enter Account Number: ")

        if account_no in accounts:
            print("Account already exists.")
        else:
            name = input("Enter Customer Name: ")
            balance = float(input("Enter Initial Balance: Rs."))
            accounts[account_no] = {"Name": name, "Balance": balance}
            print("Account created successfully.")

    elif choice == 2:
        account_no = input("Enter Account Number to search: ")

        if account_no in accounts:
            print("Customer Name:", accounts[account_no]["Name"])
            print("Balance: Rs.", accounts[account_no]["Balance"])
        else:
            print("Account not found.")

    elif choice == 3:
        account_no = input("Enter Account Number: ")

        if account_no in accounts:
            amount = float(input("Enter amount to deposit: Rs."))
            accounts[account_no]["Balance"] += amount
            print("Deposit successful.")
            print("Updated Balance: Rs.", accounts[account_no]["Balance"])
        else:
            print("Account not found.")

    elif choice == 4:
        account_no = input("Enter Account Number: ")

        if account_no in accounts:
            amount = float(input("Enter amount to withdraw: Rs."))

            if amount <= accounts[account_no]["Balance"]:
                accounts[account_no]["Balance"] -= amount
                print("Withdrawal successful.")
                print("Remaining Balance: Rs.", accounts[account_no]["Balance"])
            else:
                print("Insufficient balance.")
        else:
            print("Account not found.")

    elif choice == 5:
        if len(accounts) == 0:
            print("No accounts available.")
        else:
            print("\nAccount Details:")
            for account_no in accounts:
                print("Account No:", account_no)
                print("Customer Name:", accounts[account_no]["Name"])
                print("Balance: Rs.", accounts[account_no]["Balance"])
                print()

    elif choice == 6:
        print("Exiting program...")
        break

    else:
        print("Invalid choice. Please try again.")












