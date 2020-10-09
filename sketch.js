const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground_options = {isStatic: true};
  ground = Bodies.rectangle(200,390,200,20, ground_options);
  World.add(world, ground);
  ball_options = {restitution:1.0};
  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world, ball);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 50,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);


  drawSprites();
}