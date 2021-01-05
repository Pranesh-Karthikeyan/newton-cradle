const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var world;
var rope1,rope2,rope3,rope4,rope5;
var roofObject;

function setup() {
  createCanvas(1600, 700);

	rectMode(CENTER);


	engine = Engine.create();
  world = engine.world;
   roofObject=new Roof(width/2,height/4,width/7,20)

  //Create a Ground
  bobDiameter=40;
startPositionX=width/2;
startPositionY=height/4+400;
	
bobObj1=new Bob(startPositionX-bobDiameter*2,startPositionY,bobDiameter);
bobObj2=new Bob(startPositionX-bobDiameter,startPositionY,bobDiameter);
bobObj3=new Bob(startPositionX,startPositionY,bobDiameter);
bobObj4=new Bob(startPositionX+bobDiameter,startPositionY,bobDiameter);
bobObj5=new Bob(startPositionX+bobDiameter*2,startPositionY,bobDiameter);

rope1=new Rope(bobObj1.body,roofObject.body,-bobDiameter*2,0);

rope2=new Rope(bobObj2.body,roofObject.body,-bobDiameter*1,0);
rope3=new Rope(bobObj3.body,roofObject.body,0,0);
rope4=new Rope(bobObj4.body,roofObject.body,bobDiameter*1,0);
rope5=new Rope(bobObj5.body,roofObject.body,bobDiameter*2,0);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

}

function mouseDragged() {
	Matter.Body.setPosition(bobObj1.body, { x: mouseX, y: mouseY });
  }