# 11. Bus Seat Reservation System
# A bus has 20 seats represented by a list of 0 (available) and 1 (booked). Write a program to: Count available seats.
# Book a seat by seat number. Cancel a booking. Display seat status.



seats = [0] * 20

n = int(input("Enter number of seats to book initially: "))

for i in range(n):
    seat = int(input("Enter seat number (1-20): "))
    if seats[seat - 1] == 0:
        seats[seat - 1] = 1
    else:
        print("Seat already booked.")


available = seats.count(0)
print("\nAvailable Seats:", available)


book = int(input("Enter seat number to book: "))
if seats[book - 1] == 0:
    seats[book - 1] = 1
    print("Seat booked successfully.")
else:
    print("Seat already booked.")


cancel = int(input("Enter seat number to cancel: "))
if seats[cancel - 1] == 1:
    seats[cancel - 1] = 0
    print("Booking cancelled.")
else:
    print("Seat is already available.")


print("\nSeat Status:")
for i in range(20):
    print("Seat", i + 1, ":", seats[i])


