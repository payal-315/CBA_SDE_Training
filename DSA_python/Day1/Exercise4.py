#  Shopping Cart System (List)
# Problem Statement

# An online shopping application allows customers to manage their shopping cart.

# Write a program to:

# Add products to the cart.

# Remove a product.

# Update product quantity.

# Display all products.

# Clear the cart after checkout.

# List

# CRUD operations





cart = []

while True:
    print("\nShopping Cart System")
    print("1. Add Product")
    print("2. Remove Product")
    print("3. Update Product Quantity")
    print("4. Display Cart")
    print("5. Checkout (Clear Cart)")
    print("6. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        product = input("Enter product name: ")
        quantity = int(input("Enter quantity: "))
        cart.append([product, quantity])
        print(product, "added to cart.")

    elif choice == 2:
        product = input("Enter product name to remove: ")

        found = False
        for item in cart:
            if item[0] == product:
                cart.remove(item)
                print(product, "removed from cart.")
                found = True
                break

        if not found:
            print("Product not found.")

    elif choice == 3:
        product = input("Enter product name to update: ")

        found = False
        for item in cart:
            if item[0] == product:
                quantity = int(input("Enter new quantity: "))
                item[1] = quantity
                print("Quantity updated.")
                found = True
                break

        if not found:
            print("Product not found.")

    elif choice == 4:
        if len(cart) == 0:
            print("Cart is empty.")
        else:
            print("\nProducts in Cart:")
            for item in cart:
                print("Product:", item[0], "| Quantity:", item[1])

    elif choice == 5:
        cart.clear()
        print("Checkout successful. Cart is now empty.")

    elif choice == 6:
        print("Exiting program...")
        break

    else:
        print("Invalid choice.")



