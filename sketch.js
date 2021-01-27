
var fairy,fairy1,fairy2;
var star;

function preload()
{
  fairy = loadImage("fairy.png");
  fairy1 = loadImage("fairy1.png");
  fairy2 = loadImage("fairy2.png");
  star = loadImage(star.png);
}

function setup() {
  createCanvas(800, 750);
  fairy= createSprites(700,200,100,60);
  fairy1= createSprites(600,300,100,60);
  fairy2= createSprites(600,200,100,60);
  star = createSprites(200,400,50,50);
}


function draw() {
  background("black");
drawSprites();

}



