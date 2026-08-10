# 14. Movie Ticket Booking Analytics
# A cinema stores ticket bookings per show in a list. Create a program that: Finds the most booked show. Finds the least booked show.
# Calculates total tickets sold. Calculates average bookings per show.



bookings = []

n = int(input("Enter number of shows: "))

for i in range(n):
    tickets = int(input(f"Enter tickets booked for Show {i + 1}: "))
    bookings.append(tickets)

most_booked = max(bookings)
least_booked = min(bookings)
total = sum(bookings)
average = total / len(bookings)

print("\nBookings:", bookings)
print("Most Booked Show: Show", bookings.index(most_booked) + 1)
print("Tickets Booked:", most_booked)
print("Least Booked Show: Show", bookings.index(least_booked) + 1)
print("Tickets Booked:", least_booked)
print("Total Tickets Sold:", total)
print("Average Bookings Per Show:", average)


