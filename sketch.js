const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var groundObject,treeObject,stoneObject;
var mango1,mango2,mango3,mango4,mango5;
var boy,slingShot1
var detectollision


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   groundObject=new Ground(100,200,300,10);
   treeObject=new Tree(250,200,20,20);
   stoneObject=new Stone(202,200,20,20);
  mango1=new Mango(251,200,20,20);
    mango2=new Mango(253,199,20,20);
   mango3=new Mango(254,198,20,20);
   mango4=new Mango(255,197,20,20);
   mango5=new Mango(252,196,20,20);
    boy=new Boy(200,200,20,20);
   slingShot1 = new SlingShot(stoneObject.body,{x:200, y:50});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  groundObject.display();
  treeObject.display();
  stoneObject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingShot1.display();
  
  detectCollision(stoneObject,mango1);
  detectCollision(stoneObject,mango2);
  detectCollision(stoneObject,mango3);
  detectCollision(stoneObject,mango4);
  detectCollision(stoneObject,mango5);
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    slingShot1.fly();
}

function keyPressed(){
 
	if(keyCode===32){
		slingShot1.attach(bird.body)
	}
  
  
  }

  function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r){
	  Matter.Body.setStatic(lmango.body, false);
	}
  
  }



