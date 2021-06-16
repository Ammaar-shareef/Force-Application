const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var ball;

var balls = [];

function setup() {
  createCanvas(400,400);
  balls.push(new Ball(200,200,30))

  engine = Engine.create();
  world = engine.world;
  button1 = createImg("right.png");
  button1.position(220,30);
  button1.size(50,50);
  button1.mouseClicked(Hforce);
  
  button2 = createImg("up.png");
  button2.position(20,30);
  button2.size(50,50);
  button2.mouseClicked(Vforce);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
    restitution:0.50
  }
 
  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  stroke("orange");
  fill("red");
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  for(var x = 0; x < balls.length; x++){
    balls[x].update();
    balls[x].show();
  }
  Engine.update(engine);
}

function Hforce(){
 Matter.Body.applyForce(ball,{x:0, y:0},{x:0.03, y:0})
}

function Vforce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:-0.03})
 }

function mousePressed(){
  var B = new Ball(mouseX,mouseY,40);
  balls.push(B);
}