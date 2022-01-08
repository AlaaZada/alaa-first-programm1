let xdist = 0
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    xdist = Rover.Ultrasonic()
    if (xdist >= 25) {
        Rover.Move(100)
    } else {
        Rover.MotorRunDual(-107, 152)
    }
})
