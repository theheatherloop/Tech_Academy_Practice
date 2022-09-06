#
# Python:    3.10
#
# Author:    H.Shultz
#
# Purpose:   TTA - Python Course, Creating a program demonstration how
#            to pass variables from funciton to function while producing
#            a functional game.
#
import time

def print_pause(message):
    print(message)
    time.sleep(2)

def start(nice=0,mean=0,name=""):
    name = describe_game(name)
    nice,mean,name = nice_mean(nice,mean,name)

def describe_game(name):
    if name != "":
        print_pause("\nThank you for playing again, {}!".format(name))
    else:
        stop = True
        while stop:
            if name == "":
                name = input("\nWhat is your name? \n>>> ").capitalize()
                if name != "":
                    print_pause("\nIn this game, you will be greeted \nby several different people.")
                    print_pause("\nYou can choose to be nice or mean")
                    print_pause("\nbut at the end of the game your fate \nwill be sealed by your actions")
                    stop = False
    return name

def nice_mean(nice,mean,name):
    stop = True
    while stop:
        show_score(nice,mean,name)
        print_pause("\nA stranger approaches your for a \nconverstation.")
        pick = input("\n Will you be nice nor mean? (N/M) \n>>>: ".lower())
        
        if pick == "n":
                     print_pause("\nThe stranger walks away smiling...")
                     nice = (nice + 1)
                     stop = False
        if pick == "m":
                     print_pause("\nThe stranger glares at you \nmenacingly and storms off...")
                     mean = (mean + 1)
                     stop = False
    score(nice,mean,name)


def show_score(nice,mean,name):
    print_pause("\n{}, your current total: \n({} - Nice) and ({} - Mean)".format(name,nice,mean))

def score(nice,mean,name):
    if nice > 2:
        win(nice,mean,name)
    if mean > 2:
        lose(nice,mean,name)
    else:
        nice_mean(nice,mean,name)

def win(nice,mean,name):
    print_pause("\nNice job {}, you win!".format(name))
    print_pause("\nEveryone loves you and you've \nmade lots of friends along the way!")
    again(nice,mean,name)

def lose(nice,mean,name):
    print_pause("\nAhhhh too bad, game over!")
    print_pause("\n{}, you live in a dirty beat-up \nvan by the river, wretched and alone!".format(name))
    again(nice,mean,name)

def again(nice,mean,name):
        stop = True
        while stop: 
            choice = input("\nDo you want to play again?(y/n): \n>>> ".lower())
            if choice == "y":
                stop = False
                reset(nice,mean,name)
            if choice == "n":
                print_pause("\nOh, so sad, sorry to see you go!")
                stop = False
                quit()
            else:
                print_pause("\nEnter ( Y ) for 'YES', ( N ) for 'NO':\n>>>")

def reset(nice,mean,name):
    nice = 0
    mean = 0
    start(nice,mean,name)

if __name__== "__main__":
    start()