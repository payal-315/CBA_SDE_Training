# 10. Product Rating System
# An app stores user ratings (1–5) in a list. Create a program that: Finds the average rating. Counts how many 5-star ratings were received.
# Displays ratings in ascending order.



ratings = []

n = int(input("Enter number of ratings: "))

for i in range(n):
    rating = int(input(f"Enter rating {i + 1} (1-5): "))
    ratings.append(rating)

average = sum(ratings) / len(ratings)

count = 0
for rating in ratings:
    if rating == 5:
        count += 1

ratings.sort()

print("\nRatings:", ratings)
print("Average Rating:", average)
print("5-Star Ratings:", count)
print("Ratings in Ascending Order:", ratings)


