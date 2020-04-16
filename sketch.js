var drop, drop2, drop3, drop4, drop5, drop6;

function setup() {
  var canvas = createCanvas(400,400);
}

function draw() {
  background(0);

  if(frameCount%10===0){
    drop = createSprite(200,0,3,random(10,25));
    drop.shapeColor = "0,255,0";
    drop.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    drop2 = createSprite(100,0,3,random(10,24));
    drop2.shapeColor = "50,205,50";
    drop2.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    drop3 = createSprite(300,0,3,random(10,15));
    drop3.shapeColor = "34,139,34";
    drop3.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    drop4 = createSprite(390,0,3,random(10,25));
    drop4.shapeColor = "0,128,0";
    drop4.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    drop5 = createSprite(150,0,3,random(10,20));
    drop5.shapeColor = "0,100,0";
    drop5.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    drop6 = createSprite(10,0,3,random(10,22));
    drop6.shapeColor = "143,188,143";
    drop6.velocityY = random(3,10);
  }
  drawSprites();
}
