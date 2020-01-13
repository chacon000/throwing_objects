function hero () {
    mario = sprites.create(img`
. . . 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 . . . . . 
. . e e e e d e d . . . . . . . 
. e d e d d d e d d d . . . . . 
. e d e e d d d e d d d . . . . 
. e e d d d d e e e e . . . . . 
. . . d d d d d d d . . . . . . 
. . e e 2 e e e . . . . . . . . 
. e e e 2 e e 2 e e e . . . . . 
e e e e 2 2 2 2 e e e e . . . . 
d d e 2 d 2 2 d 2 e d d . . . . 
d d d 2 2 2 2 2 2 d d d . . . . 
d d 2 2 2 2 2 2 2 2 d d . . . . 
. . 2 2 2 . . 2 2 2 . . . . . . 
. e e e . . . . e e e . . . . . 
e e e e . . . . e e e e . . . . 
`, SpriteKind.Player)
    mario.setPosition(82, 89)
    controller.moveSprite(mario, 80, 0)
}
function cloud () {
    cloud2 = sprites.createProjectileFromSide(img`
. . . f f f f f f f f f f . . . 
. . f 1 1 1 1 1 1 1 1 1 9 f . . 
. f 1 1 1 1 1 1 1 1 1 1 1 9 f . 
. f 1 1 1 1 1 1 1 1 1 1 1 9 f . 
. f 1 1 1 1 1 1 1 1 1 1 1 9 f . 
f 1 1 1 1 1 f 1 1 f 1 1 1 1 9 f 
f 1 1 1 1 1 f 1 1 f 1 1 1 1 9 f 
f 1 1 1 1 1 f 1 1 f 1 1 1 1 9 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 9 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 9 f 
f 1 1 1 1 f 1 1 1 1 f 1 1 9 9 f 
. f 1 1 1 1 f f f f 1 1 1 9 f . 
. f 1 1 1 1 1 1 1 1 1 1 1 9 f . 
. f 9 1 1 1 1 9 9 1 1 1 9 9 f . 
. . f 9 9 9 9 f f 9 9 9 9 f . . 
. . . f f f f . . f f f f . . . 
`, 50, 5)
}
function score () {
    info.changeScoreBy(1)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. 2 4 2 2 2 . . . . . . . . . . 
. . 2 . 2 4 2 . . . . . . . . . 
2 . . . 2 4 2 2 . . . . . . . . 
. . 2 2 5 4 4 2 . . . . . . . . 
. 2 4 5 5 5 4 2 . . . . . . . . 
. 2 4 4 5 4 2 2 . . . . . . . . 
. 2 2 4 2 2 2 . . . . . . . . . 
. . 2 2 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mario, 0, -50)
})
function raindrop () {
    spiny = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 4 4 1 . . . . . . . 
. 1 . . . . 4 4 1 . . . . 1 . . 
. 4 1 . . 4 4 4 4 1 . . 4 1 . . 
. 4 4 1 . 4 4 4 4 1 . 4 4 1 . . 
. 4 4 4 1 2 4 4 4 2 4 4 4 1 . . 
. 4 4 4 1 2 2 2 2 2 4 4 1 1 . . 
. 2 4 2 2 2 4 1 1 2 2 4 4 2 2 . 
. 2 2 2 2 4 4 4 1 1 2 2 2 1 1 1 
2 2 2 2 2 4 4 4 4 4 2 2 1 2 2 . 
1 1 1 2 2 2 4 4 2 2 2 1 2 2 1 2 
. . 1 1 1 2 2 2 2 2 1 4 2 2 2 2 
. 4 4 4 1 1 1 1 1 1 4 4 4 . . . 
4 4 4 4 . . . . . . 4 4 4 4 . . 
`, cloud2, 50, 100)
    spiny.y += 3
    spiny.x += Math.randomRange(0, 10)
}
function ball () {
	
}
let spiny: Sprite = null
let projectile: Sprite = null
let cloud2: Sprite = null
let mario: Sprite = null
hero()
game.onUpdateInterval(1000, function () {
    cloud()
    raindrop()
})
