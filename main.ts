input.onButtonPressed(Button.A, function () {
    playerJumper.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.Shake, function () {
    if (actionshake) {
        platStartUp = true
        actionshake = false
        scoreadd = true
    }
})
input.onButtonPressed(Button.B, function () {
    playerJumper.change(LedSpriteProperty.X, 1)
})
let JUMPnum = 0
let platdeathtimer = 0
let actionshake = false
let platStartUp = false
let scoreadd = false
let playerJumper: game.LedSprite = null
playerJumper = game.createSprite(1, 0)
let plat1 = game.createSprite(0, 1)
let plat2 = game.createSprite(1, 1)
let plat3 = game.createSprite(5, 3)
let plat4 = game.createSprite(3, 3)
scoreadd = false
let switcher = true
let switcher2 = true
let jumpnofall = true
platStartUp = false
actionshake = true
let _1_check = false
let _2_check = false
let _3_check = false
let _4_check = false
let _5_check = false
let _6_check = false
let _7_check = false
let _8_chance = false
loops.everyInterval(1000, function () {
    if (platStartUp) {
        plat1.change(LedSpriteProperty.Y, 1)
        plat2.change(LedSpriteProperty.Y, 1)
        plat3.change(LedSpriteProperty.Y, 1)
        plat4.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (plat4.isDeleted()) {
        basic.pause(750)
        plat3 = game.createSprite(5, 0)
        plat4 = game.createSprite(3, 0)
        switcher2 = false
        basic.pause(750)
        switcher2 = true
    }
    if (switcher2) {
        if (plat4.isTouchingEdge()) {
            basic.pause(1000)
            plat3.delete()
            plat4.delete()
        }
    }
})
basic.forever(function () {
    if (plat2.isDeleted()) {
        basic.pause(750)
        plat1 = game.createSprite(0, 0)
        plat2 = game.createSprite(1, 0)
        switcher = false
        basic.pause(750)
        switcher = true
    }
    if (switcher) {
        if (plat2.isTouchingEdge()) {
            basic.pause(1000)
            plat2.delete()
            plat1.delete()
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        jumpnofall = false
        playerJumper.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
        jumpnofall = true
    }
})
basic.forever(function () {
    while (playerJumper.get(LedSpriteProperty.Y) == 4) {
        basic.pause(75)
        platdeathtimer += 1
    }
})
basic.forever(function () {
    if (platdeathtimer == 2) {
        playerJumper.delete()
    }
})
basic.forever(function () {
    if (playerJumper.isTouching(plat4)) {
        platdeathtimer = 0
        playerJumper.set(LedSpriteProperty.Y, plat4.get(LedSpriteProperty.Y) - 1)
    }
})
basic.forever(function () {
    if (playerJumper.isTouching(plat3)) {
        platdeathtimer = 0
        playerJumper.set(LedSpriteProperty.Y, plat3.get(LedSpriteProperty.Y) - 1)
    }
})
basic.forever(function () {
    if (playerJumper.isTouching(plat2)) {
        platdeathtimer = 0
        playerJumper.set(LedSpriteProperty.Y, plat2.get(LedSpriteProperty.Y) - 1)
    }
})
basic.forever(function () {
    while (scoreadd) {
        game.setScore(game.score() + 1)
        basic.pause(500)
    }
})
basic.forever(function () {
    if (playerJumper.isTouching(plat1)) {
        platdeathtimer = 0
        playerJumper.set(LedSpriteProperty.Y, plat1.get(LedSpriteProperty.Y) - 1)
    }
})
basic.forever(function () {
    if (playerJumper.isDeleted()) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (playerJumper.get(LedSpriteProperty.Y) - 1 == plat1.get(LedSpriteProperty.Y)) {
        _3_check = true
        basic.pause(100)
        _3_check = false
    }
})
basic.forever(function () {
    if (playerJumper.get(LedSpriteProperty.X) == plat1.get(LedSpriteProperty.X)) {
        _4_check = true
        basic.pause(100)
        _4_check = false
    }
})
basic.forever(function () {
    if (_3_check && _4_check) {
        JUMPnum = 3
    }
})
basic.forever(function () {
    if (playerJumper.get(LedSpriteProperty.Y) - 1 == plat3.get(LedSpriteProperty.Y)) {
        _5_check = true
        basic.pause(100)
        _5_check = false
    }
})
basic.forever(function () {
    if (playerJumper.get(LedSpriteProperty.X) == plat3.get(LedSpriteProperty.X)) {
        _6_check = true
        basic.pause(100)
        _6_check = false
    }
})
basic.forever(function () {
    if (_5_check && _6_check) {
        JUMPnum = 3
    }
})
basic.forever(function () {
    if (playerJumper.get(LedSpriteProperty.Y) - 1 == plat4.get(LedSpriteProperty.Y)) {
        _7_check = true
        basic.pause(100)
        _7_check = false
    }
})
basic.forever(function () {
    if (playerJumper.get(LedSpriteProperty.X) == plat4.get(LedSpriteProperty.X)) {
        _8_chance = true
        basic.pause(100)
        _8_chance = false
    }
})
basic.forever(function () {
    if (_7_check && _8_chance) {
        JUMPnum = 3
    }
})
basic.forever(function () {
    if (playerJumper.get(LedSpriteProperty.Y) - 1 == plat2.get(LedSpriteProperty.Y)) {
        _1_check = true
        basic.pause(100)
        _1_check = false
    }
})
basic.forever(function () {
    if (playerJumper.get(LedSpriteProperty.X) == plat2.get(LedSpriteProperty.X)) {
        _2_check = true
        basic.pause(100)
        _2_check = false
    }
})
basic.forever(function () {
    if (_1_check && _2_check) {
        JUMPnum = 3
    }
})
loops.everyInterval(250, function () {
    if (jumpnofall) {
        playerJumper.change(LedSpriteProperty.Y, 1)
    }
})
