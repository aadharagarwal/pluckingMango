
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var m1, m2, m3, m4, m5, m6, m7, m8
var stone,band
function preload() {
  boy = loadImage("boy.png")

  tree = loadImage("tree.png")
}

function setup() {
  createCanvas(1300, 600);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  m1 = new Mango(1100, 100, 30)
  m2 = new Mango(900, 130, 30)
  m3 = new Mango(1010, 140, 30)
  m4 = new Mango(1000, 70, 30)
  m5 = new Mango(1100, 700, 30)
  m6 = new Mango(1000, 230, 30)
  m7 = new Mango(900, 230, 30)
  m8 = new Mango(1140, 150, 30)

  stone = new Stone(235, 420, 30)

  gr = new Ground(300, 600, width, 10)

  band = new Sling(stone.body,{x:235,y:420})
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(230);
  text(mouseX + ',' + mouseY, mouseX, mouseY)
  image(boy, 200, 340, 200, 300)
  image(tree, 750, 10, 450, 600)
  drawSprites();

  


  gr.display()

  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  m6.display()
  m7.display()
  m8.display()

  stone.display()

  band.display()
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  band.fly();
}

function keyPressed(){

  if(keyCode === 32)
  {
band.attach(stone.body)

  }
}