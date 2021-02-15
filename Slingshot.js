class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
     attach(body){
     this.sling.bodyA= body;
     }

    display(){
        image(this.sling1,190,20);
        image(this.sling2,160,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            if(pointA.x < 220){
            strokeWeight(4);
            line(pointA.x-20, pointA.y+5, pointB.x-20, pointB.y);
            line(pointA.x-20, pointA.y+5, pointB.x+20, pointB.y);
            image(this.sling3,pointA.x-25,pointA.y-10,15,30);
            }
            else{
                strokeWeight(4);
                line(pointA.x+25, pointA.y+5, pointB.x-20, pointB.y);
                line(pointA.x+25, pointA.y+5, pointB.x+20, pointB.y);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30); 
            }
        }
    }
    
}