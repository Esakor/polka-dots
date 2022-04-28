input.onButtonPressed(Button.A, function () {
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(Y, Y - 4)
        basic.pause(100)
        led.plot(Y, Y - 2)
        basic.pause(100)
        led.plot(Y, Y - 0)
        basic.pause(100)
        led.plot(Y, Y - -4)
        basic.pause(100)
        led.plot(Y, Y - -2)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
