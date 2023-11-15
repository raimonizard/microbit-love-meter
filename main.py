def on_pin_pressed_p0():
    # basic.show_number(randint(0, 100))
    evaluate_love(randint(0, 100))
    basic.clear_screen()
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def evaluate_love(love : number):
    if (love < 25):
        basic.show_string("No Love")
    elif (love < 51):
        basic.show_string("Love")
    elif (love < 76):
        basic.show_string("Brokenhearted")
    else:
        basic.show_string("Fiery Hot Love!")

def start():
    basic.show_string("LOVER METER")
    basic.clear_screen()

start()