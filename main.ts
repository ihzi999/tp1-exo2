input.onButtonPressed(Button.A, function () {
    led.unplot(dirc, led2)
    dirc += -1
    if (dirc == -1) {
        dirc = 4
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(dirc, led2)
    dirc += 1
    if (dirc == 4) {
        dirc = 0
    }
})
let dirc = 0
let led2 = 0
led2 = 0
led.plot(dirc, led2)
dirc = 0
basic.forever(function () {
    if (led2 == 0) {
        for (let index = 0; index < 4; index++) {
            led.unplot(dirc, led2)
            led2 += 1
            led.plot(dirc, led2)
            basic.pause(500)
        }
    } else if (led2 == 4) {
        for (let index = 0; index < 4; index++) {
            led.unplot(dirc, led2)
            led2 += -1
            led.plot(dirc, led2)
            basic.pause(500)
        }
    }
})
