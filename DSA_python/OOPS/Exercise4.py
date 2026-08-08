# Exercise 4: Bank Account System
# Scenario: A bank wants to automate customer account operations.
# Requirements: Create a program that supports: Create customer account. Deposit money. Withdraw money. Check balance.
#               Prevent withdrawal if balance is insufficient. Display transaction summary.
# Concepts to Use: OOP, Constructors, Methods, Encapsulation, Conditional statements, Arithmetic operators, Functions
# Bonus: Maintain transaction count.




class BankAccount:
    def __init__(self, acc_no, name, balance):
        self.__acc_no = acc_no
        self.__name = name
        self.__balance = balance
        self.__transaction_count = 0

    def deposit(self, amount):
        self.__balance += amount
        self.__transaction_count += 1
        print("Amount Deposited Successfully")

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
            self.__transaction_count += 1
            print("Amount Withdrawn Successfully")
        else:
            print("Insufficient Balance")

    def check_balance(self):
        print("Current Balance:", self.__balance)

    def display_summary(self):
        print("\n------ Transaction Summary ------")
        print("Account Number :", self.__acc_no)
        print("Customer Name  :", self.__name)
        print("Balance        :", self.__balance)
        print("Transactions   :", self.__transaction_count)


acc_no = input("Enter Account Number: ")
name = input("Enter Customer Name: ")
balance = float(input("Enter Initial Balance: "))

account = BankAccount(acc_no, name, balance)

while True:
    print("\n1. Deposit")
    print("2. Withdraw")
    print("3. Check Balance")
    print("4. Transaction Summary")
    print("5. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        amount = float(input("Enter Deposit Amount: "))
        account.deposit(amount)

    elif choice == 2:
        amount = float(input("Enter Withdrawal Amount: "))
        account.withdraw(amount)

    elif choice == 3:
        account.check_balance()

    elif choice == 4:
        account.display_summary()

    elif choice == 5:
        print("Thank You!")
        break

    else:
        print("Invalid Choice")




