input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 20; index++) {
        basic.showNumber(randint(1, 6), 20)
    }
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
