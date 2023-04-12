basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 15) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 33)
        basic.showIcon(IconNames.Ghost)
        basic.pause(500)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 101)
        basic.showIcon(IconNames.House)
        basic.pause(500)
    }
})
