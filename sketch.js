const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    paper1 = new Paper(200,320,20,20);
    
    ground = new Ground(600,380,1200,10)
	
	object1=createSprite(800,370,280,10,);
	object2=createSprite(660,340,10,80);
	object3=createSprite(940,340,10,80);

}

function draw(){
    background(0);
    Engine.update(engine);
	drawSprites();
    paper1.display();
	ground.display();
	
}
