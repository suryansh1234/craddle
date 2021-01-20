class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:1.2,
            density:0.8,
            friction:0.2,
        }
        this.body=Bodies.circle(x,y,radius,options);
    
        this.radius=radius;
        
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        fill("blue")
        ellipseMode(CENTER);
        
        ellipse(pos.x,pos.y,this.radius*2,this.radius*2);
        
        
       
        
        
      }
    
    }