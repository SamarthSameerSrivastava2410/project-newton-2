
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	rod = new Bar(400, 200, 500, 80, "yellow");


	ball1 = new Ball(200, 450, 100, "red");

	ball2 = new Ball(300, 450, 100, "green");
	ball3 = new Ball(400, 450, 100, "blue");
	ball4 = new Ball(500, 450, 100, "green");
	ball5 = new Ball(600, 450, 100, "red");

	rope1 = new Rope(ball1.body, {x:200, y:200})
	rope2 = new Rope(ball2.body, {x:300, y:200})
	rope3 = new Rope(ball3.body, {x:400, y:200})
	rope4 = new Rope(ball4.body, {x:500, y:200})
	rope5 = new Rope(ball5.body, {x:600, y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  rod.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-500, y:500});

	}

	
}



