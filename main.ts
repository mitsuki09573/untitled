input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showString("Hello!")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Target)
})
