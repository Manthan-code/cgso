const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var e,world,ground;






function setup() {
   createCanvas(400,400);
  e=Engine.create();
  world=e.world;
  var ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,50,50,ground_option);
  World.add(world,ground);
  console.log(ground);
  console.log(ground.position.x);
  
  var ball_option={
 restitution:1.0
  }
  ball=Bodies.circle(200,50,20,ball_option);
  World.add(world,ball);



}

function draw() {
  background("yellow");
  Engine.update(e); 
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}