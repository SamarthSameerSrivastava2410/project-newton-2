class Ball{
    constructor(x, y, r, color){
        var options = {
            
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8

        }
        
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color
        this.body = Bodies.circle(x, y, r/2, options);

        World.add(world, this.body);
    }

      
        display(){
		    var paperpos=this.body.position;		

            push()
            fill(this.color)
            translate(paperpos.x, paperpos.y);
		    rectMode(CENTER)
            ellipse(0,0,this.r, this.r);
		    pop()
			
	}
    
}