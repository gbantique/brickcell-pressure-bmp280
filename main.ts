serial.setBaudRate(BaudRate.BaudRate115200)
let pressure = 0
let temperature = 0
basic.forever(function () {
    pressure = Brickcell.pressure()
    temperature = Brickcell.temperature()
    serial.writeNumber(pressure)
    serial.writeString(" hpa, ")
    serial.writeNumber(temperature)
    serial.writeLine("C.")
    basic.pause(1000)
})
