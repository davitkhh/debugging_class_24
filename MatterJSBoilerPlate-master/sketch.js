const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, world;

var engine;
var world;
var gr

function preload() {
	engine = Engine.create();
	world = engine.world;
	
}

function setup() {
	createCanvas(800, 700);



	//Create the Bodies Here.
	// ground = new Ground(400, 620, 800, 200);
	
	var opt = {
		friction: 0.3,
		restitution: 0.6,
		isStatic: true
	}
	
	gr = Bodies.rectangle(0, 300, 300, 200, opt);
	
	World.add(world, gr);
	ball = new Ball(200, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ball.display();
//   ground.display();
}



