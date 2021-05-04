class Mango {

    constructor(x, y, r) {

        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.image = loadImage("mango.png")
        this.body = Bodies.circle(x, y, r, options)
        World.add(world,this.body)
        this.r = r
    }
    display() {

        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image, 0, 0, this.r*2, this.r*2)
        pop()
    }
}