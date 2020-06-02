const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var fish1,fish2;
var backgroundImg,platform;
var shark, slingshot;
var score=0;

var gameState = "onSling";

function preload() {
  backgroundImg=loadImage("assets/Underwater2.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    barrel1 = new Barrel(700,320,120,100);
    barrel2 = new Barrel(920,320,120,100);
    fish1 = new Fish(810, 350);
    log1 = new Log(810,260,300, PI/2);

    barrel3 = new Barrel(700,240,120,100);
    barrel4 = new Barrel(920,240,120,100);
    fish2 = new Fish(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    barrel5 = new Barrel(810,160,120,100);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    shark = new Shark(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(shark.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    
    noStroke();
    textSize(35);
    fill("white");
    text("SCORE :"+score,width-300,50);

    Engine.update(engine);
    //strokeWeight(4);
    barrel1.display();
    barrel2.display();
    ground.display();
    fish1.display();
    fish1.score();
    log1.display();

    barrel3.display();
    barrel4.display();
    fish2.display();
    fish2.score();
    log3.display();

    barrel5.display();
    log4.display();
    log5.display();

    shark.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(shark.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(shark.body);
    }
}

