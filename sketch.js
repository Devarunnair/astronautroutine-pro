var bg,bgImg;
var sleep,sleepImg;
var brush,brushImg;
var gym,gymImg;
var eat,eatImg;
var drink,drinkImg;
var move,moveImg;

function preload() {
  bgImg = loadImage("iss.png");
  sleepImg = loadAnimation("sleep.png");
  brushImg = loadAnimation("brush.png");
  gymImg = loadAnimation("gym1.png","gym2.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  moveImg = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  bg = createSprite(100,150);
  bg.addImage(bgImg);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}