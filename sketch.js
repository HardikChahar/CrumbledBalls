var packageBody,ground;
var log1,log2,log3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(100, 200, 10,10);
	packageSprite.scale=2



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	log1Sprite=createSprite(400,400,200,10)
	log1Sprite.shapeColor=color("red")

	log2Sprite=createSprite(400,555,10,100)
	log2Sprite.shapeColor=color("red")

	log3Sprite=createSprite(500,555,10,100)
	log3Sprite.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;
	var option1 = {
		isStatic:false,
		'restitution':0.3,
		'density':1.2,
		'friction':0.5
	}
	var option2 = {
		isStatic: true,
		'restitution':0.8,
		'density':1.0,
		'friction':1.0
		
	}

	packageBody = Bodies.circle(100 , 600 , 5 , option1);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 50 , option2);
	 World.add(world, ground);
	 

	 log1 = Bodies.rectangle(600,600,200,40,option2)
	 World.add(world,log1)

	 log2 = Bodies.rectangle(500,555,40,100,option2)
	 World.add(world,log2)

	 log3 = Bodies.rectangle(700,555,40,100,option2)
	 World.add(world,log3)

	 
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  groundSprite.x= ground.position.x 
  groundSprite.y= ground.position.y 

  log1Sprite.x= log1.position.x 
  log1Sprite.y= log1.position.y 
  
  log2Sprite.x= log2.position.x 
  log2Sprite.y= log2.position.y 

  log3Sprite.x= log3.position.x 
  log3Sprite.y= log3.position.y 
   keyPressed();
  drawSprites();

}

function keyPressed() {
 if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(packageBody.body,packageBody.body,{x:85,y:85})
  }
}
