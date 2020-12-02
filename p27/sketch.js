const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3, rope4,rope5;



function setup() 
{
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(683,100, 800, 50);

	bob1 = new Bob(483, 500, 50);
	rope1 = new Rope(bob1.body, {x: 483, y: 100});

	bob2 = new Bob(583, 500, 50);
	rope2 = new Rope(bob2.body, {x: 583, y: 100});

	bob3 = new Bob(683, 500, 50);
	rope3 = new Rope(bob3.body, {x: 683, y: 100});

	bob4 = new Bob(783, 500, 50);
	rope4 = new Rope(bob4.body, {x: 783, y: 100});

	bob5 = new Bob(883, 500, 50);
	rope5 = new Rope(bob5.body, {x: 883, y: 100});
}


function draw()
{
  background("black");

  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

function keyPressed() 
{
	  if (keyCode === LEFT_ARROW) 
	  {
    	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-45}); 
	  }
		
	  if (keyCode === RIGHT_ARROW) 
	  {
    	Matter.Body.applyForce(bob5.body, bob5.body.position, {x:50, y:-45}); 
  	  }
}







