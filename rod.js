class Bar{
    constructor(x, y, width, height, color){
        var options = {
            
            isStatic:true,
            restitution:1,
            friction:0,
            density:0.8

        }
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);

        World.add(world, this.body);
    }

      
        display(){		
            push()
            fill(this.color)
		    rectMode(CENTER)
            rect(this.x, this.y, this.width, this.height);
		    pop()
			
	}
    
}