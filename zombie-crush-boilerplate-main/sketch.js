const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  link= new link(6,{x:242,y:30})

  Matter.Composite.add(bridge.body, joinPoint);
  joinLink= new Link(bridge, joinPoint);

}

function draw() {
  background(51);
  Engine.update(engine);

}
