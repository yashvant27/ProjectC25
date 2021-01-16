var box;
var paper,dustbin;
var engine,world
var rect1,rect2,rect3;
var ground,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paper=loadImage("paper.png");
	dustbin=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 600);

//	ground=createSprite(width/2, height-35, width,10);
//	ground.shapeColor=color(255)

//	ball=Bodies.circle(200,100,20)
	//World.add(world.ball)
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1=new Box(600,550,150,20)
	rect2=new Box(530,510,20,100)
	rect3=new Box(670,510,20,100)
	ball=new Paper(100,100,30)
	
	//rect1,rect2,rect3=dustbin;

	//Engine.run(engine);
  //Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} );
	World.add(world, ground);


   Engine.run(engine);
}


function draw() {
	background(255);
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,800,20)
   

 
  rect1.display();
  rect2.display();  
 rect3.display();
  ball.display();
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-40})
	}
}