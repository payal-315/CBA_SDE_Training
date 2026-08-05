# Exercise 5: Movie Ticket Booking System  Scenario
# Build an application like BookMyShow.
# Requirements: Add movies. Display show timings. Book seats. Cancel tickets. Generate ticket. Online payment.
# Classes: Movie, Theater, Screen, Seat, Booking, Customer, Payment
# OOP Concepts: Composition, Encapsulation, Polymorphism, Inheritance
# Prevent double booking. Dynamic ticket pricing. Student and senior citizen discounts. Display available seats in real time.


class Movie:
    def __init__(self, name, timing):
        self.name = name
        self.timing = timing


class Seat:
    def __init__(self, seat_no):
        self.seat_no = seat_no
        self.booked = False


class Screen:
    def __init__(self):
        self.seats = [Seat(i) for i in range(1, 11)]

    def show_available_seats(self):
        print("\nAvailable Seats:")
        for seat in self.seats:
            if not seat.booked:
                print(seat.seat_no, end=" ")
        print()


class Theater:
    def __init__(self, name):
        self.name = name
        self.movies = []

    def add_movie(self, movie):
        self.movies.append(movie)

    def show_movies(self):
        print("\nMovies")
        for movie in self.movies:
            print(movie.name, "-", movie.timing)


class Customer:
    def __init__(self, name):
        self.name = name

    def get_discount(self):
        return 0


class Student(Customer):
    def get_discount(self):
        return 20  


class SeniorCitizen(Customer):
    def get_discount(self):
        return 30  


class Booking:
    def __init__(self, customer, movie, seat):
        self.__customer = customer   
        self.__movie = movie
        self.__seat = seat

    def book_ticket(self):
        if self.__seat.booked:
            print("Seat Already Booked")
        else:
            self.__seat.booked = True
            print("Ticket Booked Successfully")

    def cancel_ticket(self):
        self.__seat.booked = False
        print("Ticket Cancelled")

    def generate_ticket(self):
        price = 200

        if self.__movie.timing == "9 PM":
            price = 250

        discount = self.__customer.get_discount()

        final = price - (price * discount / 100)

        print("\n----- TICKET -----")
        print("Customer :", self.__customer.name)
        print("Movie    :", self.__movie.name)
        print("Timing   :", self.__movie.timing)
        print("Seat No  :", self.__seat.seat_no)
        print("Amount   : ₹", final)


class Payment:
    def pay(self, amount):
        print("Paid ₹", amount)


class UPI(Payment):
    def pay(self, amount):
        print("Paid ₹", amount, "using UPI")


class Card(Payment):
    def pay(self, amount):
        print("Paid ₹", amount, "using Card")



theater = Theater("PVR")

movie = Movie("Conjuring", "9 PM")
theater.add_movie(movie)

theater.show_movies()

screen = Screen()
screen.show_available_seats()

customer = Student("Payal")

seat = screen.seats[0]

booking = Booking(customer, movie, seat)

booking.book_ticket()

screen.show_available_seats()  

booking.generate_ticket()

payment = UPI()
payment.pay(200)

booking.cancel_ticket()

screen.show_available_seats()
