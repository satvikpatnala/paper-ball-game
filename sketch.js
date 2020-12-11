const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var ball;
var ground;

function preload(){
binImg = loadImage("trash.png")
}
function setup() {
    createCanvas(1600, 700);
    engine = Engine.create();
    world = engine.world;
    ball1 = new BALL(100,200,50);
    ground = new GROUND(700,670,1500,20)
    dustbin1 = new BIN (1200,600,20,120)
    dustbin2 = new BIN(1400,600,20,120)
    dustbin3 = new BIN(1300,650,200,20)
    dustbin4 = new BIN
     Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background("white");
    
    Engine.update(engine);

    ground.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    ball1.display();
image(binImg,1150,475,300,200)
  drawSprites();
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:185,y:-185});
    }
}

