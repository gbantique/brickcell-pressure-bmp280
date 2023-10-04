serial.setBaudRate(BaudRate.BaudRate115200)
let _pressure = 0
basic.forever(function () {
    serial.writeNumber(Brickcell.pressure())
    serial.writeString(" hpa, ")
    serial.writeNumber(Brickcell.temperature())
    serial.writeLine("C.")
    basic.pause(1000)
})
