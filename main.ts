let xdist = 0
basic.forever(function () {
    music.playMelody("C5 B B - - - - - ", 120)
    basic.showIcon(IconNames.Yes)
    xdist = Rover.Ultrasonic()
    if (xdist >= 25) {
        Rover.Move(100)
    } else {
        Rover.MotorRunDual(-100, 100)
    }
})
