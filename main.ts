input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(0, 10))
    basic.showString("+")
    basic.showNumber(randint(0, 10))
    basic.showString("=")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
