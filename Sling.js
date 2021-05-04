class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }
  
    attach(mybody){
        this.sling.bodyA = mybody
    }
    display(){
        
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}