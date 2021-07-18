input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
})
input.onButtonPressed(Button.B, function () {
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
})
