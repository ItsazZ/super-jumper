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
input.onButtonPressed(Button.AB, function () {
    jumpnofall = false
    playerJumper.change(LedSpriteProperty.Y, -1)
    basic.pause(200)
    jumpnofall = true
})
input.onButtonPressed(Button.B, function () {
    playerJumper.change(LedSpriteProperty.X, 1)
})
let platdeathtimer = 0
let actionshake = false
let platStartUp = false
let jumpnofall = false
let scoreadd = false
let playerJumper: game.LedSprite = null
playerJumper = game.createSprite(1, 0)
let plat1 = game.createSprite(0, 1)
let plat2 = game.createSprite(1, 1)
let plat3 = game.createSprite(5, 3)
let plat4 = game.createSprite(3, 3)
scoreadd = false
jumpnofall = true
platStartUp = false
actionshake = true
loops.everyInterval(1000, function () {
    if (platStartUp) {
        plat1.change(LedSpriteProperty.Y, 1)
        plat2.change(LedSpriteProperty.Y, 1)
        plat3.change(LedSpriteProperty.Y, 1)
        plat4.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    while (playerJumper.get(LedSpriteProperty.Y) == 4) {
        basic.pause(75)
        platdeathtimer += 1
    }
})
basic.forever(function () {
    if (plat4.get(LedSpriteProperty.Y) == 4) {
        basic.pause(1000)
        plat3.delete()
        plat4.delete()
    }
    if (plat4.isDeleted()) {
        basic.pause(750)
        plat3 = game.createSprite(5, 0)
        plat4 = game.createSprite(3, 0)
    }
})
basic.forever(function () {
    if (plat2.get(LedSpriteProperty.Y) == 4) {
        basic.pause(1000)
        plat2.delete()
        plat1.delete()
    }
    if (plat2.isDeleted()) {
        basic.pause(750)
        plat1 = game.createSprite(0, 0)
        plat2 = game.createSprite(1, 0)
    }
})
basic.forever(function () {
    while (scoreadd) {
        game.setScore(game.score() + 1)
        basic.pause(500)
    }
})
basic.forever(function () {
    if (playerJumper.isTouching(plat3)) {
        platdeathtimer = 0
        playerJumper.set(LedSpriteProperty.Y, plat3.get(LedSpriteProperty.Y) - 1)
    }
})
basic.forever(function () {
    if (playerJumper.isTouching(plat4)) {
        platdeathtimer = 0
        playerJumper.set(LedSpriteProperty.Y, plat4.get(LedSpriteProperty.Y) - 1)
    }
})
basic.forever(function () {
    if (platdeathtimer == 2) {
        playerJumper.delete()
    }
    if (playerJumper.isDeleted()) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (playerJumper.isTouching(plat2)) {
        platdeathtimer = 0
        playerJumper.set(LedSpriteProperty.Y, plat2.get(LedSpriteProperty.Y) - 1)
    }
})
basic.forever(function () {
    if (playerJumper.isTouching(plat1)) {
        platdeathtimer = 0
        playerJumper.set(LedSpriteProperty.Y, plat1.get(LedSpriteProperty.Y) - 1)
    }
})
loops.everyInterval(250, function () {
    if (jumpnofall) {
        playerJumper.change(LedSpriteProperty.Y, 1)
    }
})
