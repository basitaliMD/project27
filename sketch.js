
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof1, roof2, roof3, roof4, roof5;

function setup() {
createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

roof1 = new Roof(260, 150, width, 30);
roof2 = new Roof(320, 150, width, 30);
roof3 = new Roof(380, 150, width, 30);
roof4 = new Roof(440, 150, width, 30);
roof5 = new Roof(500, 150, width, 30);

bob1 = new Bob(260, 300, 30);
bob2 = new Bob(320, 300, 30);
bob3 = new Bob(380, 300, 30);
bob4 = new Bob(440, 300, 30);
bob5 = new Bob(500, 300, 30);

rope1 = new Rope(bob1.body, roof1.body, 0 , 0);
rope2 = new Rope(bob2.body, roof2.body, 0 , 0);
rope3 = new Rope(bob3.body, roof3.body, 0 , 0);
rope4 = new Rope(bob4.body, roof4.body, 0 , 0);
rope5 = new Rope(bob5.body, roof5.body, 0 , 0);

Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background("yellow");

roof1.display();
roof2.display();
roof3.display();
roof4.display();
roof5.display();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

drawSprites();
}

function keyPressed() {
if (keyCode === UP_ARROW || keyCode === touches[[]]) {
Matter.Body.applyForce(bob1.body,bob1.body.position, {x:-100, y: 100});
 }
}