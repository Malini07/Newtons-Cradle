var bob1,bob2,bob3,bob4,bob5;
var roof;
const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.BodiSes;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob (200,200,50,50)
	bob2 = new Bob (300,200,50,50)
	bob3 = new Bob (400,200,50,50)
	bob4 = new Bob (500,200,50,50)
	bob5 = new Bob (600,200,50,50)

	//var options = {
		//bodyA:
	//}

	roof = new Roof (400,200,200,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  
  drawSprites();
 
}



