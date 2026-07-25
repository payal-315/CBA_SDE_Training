# Movie Collection Manager (List)
# Problem Statement

# A movie streaming platform wants users to manage their favorite movies.

# Develop a program to:

# Add movie names.

# Remove movies.

# Search for a movie.

# Sort movies alphabetically.

# Display all movies.

# List

# Sorting

# Searching




movies = []

while True:
    print("\nMovie Collection Manager")
    print("1. Add Movie")
    print("2. Remove Movie")
    print("3. Search Movie")
    print("4. Sort Movies")
    print("5. Display Movies")
    print("6. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        movie = input("Enter movie name: ")
        movies.append(movie)
        print(movie, "added successfully.")

    elif choice == 2:
        movie = input("Enter movie name to remove: ")
        if movie in movies:
            movies.remove(movie)
            print(movie, "removed successfully.")
        else:
            print("Movie not found.")

    elif choice == 3:
        movie = input("Enter movie name to search: ")
        if movie in movies:
            print(movie, "is available in your collection.")
        else:
            print("Movie not found.")

    elif choice == 4:
        movies.sort()
        print("Movies sorted alphabetically.")

    elif choice == 5:
        if len(movies) == 0:
            print("No movies in the collection.")
        else:
            print("\nMovie Collection:")
            for movie in movies:
                print(movie)

    elif choice == 6:
        print("Exiting program...")
        break

    else:
        print("Invalid choice. Please try again.")





