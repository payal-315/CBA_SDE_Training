# Exercise 8: Movie Ticket Booking
# Scenario: A multiplex books movie tickets.
# Requirements: Create a MovieTicket class.   Store: Customer Name, Movie Name, Number of Tickets, Ticket Price
# Methods: Calculate total bill.  Apply offers: Buy 5 or more tickets → 15% discount, Buy 3–4 tickets → 10% discount, Otherwise no discount
# Display booking summary. Objects,  if-elif,  Calculations



class MovieTicket:
    def __init__(self, customer_name, movie_name, tickets, ticket_price):
        self.customer_name = customer_name
        self.movie_name = movie_name
        self.tickets = tickets
        self.ticket_price = ticket_price

    def booking_summary(self):
        total = self.tickets * self.ticket_price

        if self.tickets >= 5:
            discount = total * 0.15
        elif self.tickets >= 3:
            discount = total * 0.10
        else:
            discount = 0

        final_bill = total - discount

        print("\n----- Booking Summary -----")
        print("Customer Name:", self.customer_name)
        print("Movie Name:", self.movie_name)
        print("Number of Tickets:", self.tickets)
        print("Ticket Price: ₹", self.ticket_price)
        print("Total Bill: ₹", total)
        print("Discount: ₹", discount)
        print("Final Bill: ₹", final_bill)

customer_name = input("Enter Customer Name: ")
movie_name = input("Enter Movie Name: ")
tickets = int(input("Enter Number of Tickets: "))
ticket_price = float(input("Enter Ticket Price: "))

ticket = MovieTicket(customer_name, movie_name, tickets, ticket_price)
ticket.booking_summary()



