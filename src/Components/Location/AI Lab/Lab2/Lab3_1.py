import random

def guess_the_number():
    print("Welcome to 'Guess the Number'!")
    print("I'm thinking of a number between 1 and 100. Can you guess what it is?")
    
    secret_number = random.randint(1, 100)
    
    while True:
        try:
            guess = int(input("Enter your guess: "))
            
            if guess < 1 or guess > 100:
                print("Please enter a number between 1 and 100.")
                continue  
            
            if guess < secret_number:
                print("Too low! Try again.")
            elif guess > secret_number:
                print("Too high! Try again.")
            else:
                print(f"Congratulations! You guessed it right. The number was {secret_number}.")
                break  
        except ValueError:
            print("Invalid input. Please enter a valid number.")
    
    print("Thanks for playing!")

guess_the_number()