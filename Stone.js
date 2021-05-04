class Stone {

    constructor(x, y, r) {

        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density:1.2
        }
        this.image = loadImage("stone.png")
        this.body = Bodies.circle(x, y, r/2, options)
        World.add(world,this.body)
        this.r = r/2
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