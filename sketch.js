const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(400, 200, 200, 40)

    block1 = new Box(330, 235, 30, 40)
    block2 = new Box(360, 235, 30, 40)
    block3 = new Box(390, 235, 30, 40)
    block4 = new Box(420, 235, 30, 40)
    block5 = new Box(450, 235, 30, 40)

    block6 = new Box(360, 235, 30, 40)
    block7 = new Box(390, 235, 30, 40)
    block8 = new Box(420, 235, 30, 40)

    block9 = new Box(390, 235, 30, 40)
}

function draw(){
    Engine.update(engine)

    stand.display()

    stand.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
}