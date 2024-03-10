let Duty = 0
basic.forever(function () {
    while (Duty < 1023) {
        pins.analogWritePin(AnalogPin.P0, Duty)
        Duty = Duty + 1
        basic.pause(10)
    }
    while (Duty > 0) {
        pins.analogWritePin(AnalogPin.P0, Duty)
        Duty = Duty - 1
        basic.pause(10)
    }
})
