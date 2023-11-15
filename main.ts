input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    //  basic.show_number(randint(0, 100))
    evaluate_love(randint(0, 100))
    basic.clearScreen()
})
function evaluate_love(love: number) {
    if (love < 25) {
        basic.showString("No Love")
    } else if (love < 51) {
        basic.showString("Love")
    } else if (love < 76) {
        basic.showString("Brokenhearted")
    } else {
        basic.showString("Fiery Hot Love!")
    }
    
}

function start() {
    basic.showString("LOVER METER")
    basic.clearScreen()
}

start()
