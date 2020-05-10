const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  

  var holder_options={
    isStatic: true
  }


holder = Bodies.rectangle(200,100,200,20,holder_options);
World.add(world,holder);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 80 
}
var string = Constraint.create(options);
World.add(world,string);

fill("brown");
}


function draw() {
  background(40,50,80); 
  Engine.update(engine);

fill("white");
stroke("blue")
  textSize(25)
  text("Press Enter to stop the Pendulum from oscillating",20,50);

  fill ("brown");
  stroke("brown")
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);


fill("pink");
stroke("pink");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(5);
stroke("sliver");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)

ball.position.y=mouseY;
ball.position.x=mouseX;



if (keyCode === ENTER){
ball.position.x = 200;

}

}