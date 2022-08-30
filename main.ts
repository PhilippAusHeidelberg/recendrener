let erste_Zahl = 0
let zweite_Zahl = 0
input.onButtonPressed(Button.A, function () {
    erste_Zahl = randint(0, 10)
    basic.showNumber(erste_Zahl)
    basic.showString("+")
    zweite_Zahl = randint(0, 10)
    basic.showNumber(zweite_Zahl)
    basic.showString("=")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(erste_Zahl + zweite_Zahl)
})
