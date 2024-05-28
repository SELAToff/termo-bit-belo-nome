let temperatura = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    temperatura = input.temperature()
    basic.showString("" + temperatura + "c")
    if (input.temperature() > 25) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
