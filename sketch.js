var movingRect,fixedRect;
var rect1,rect2;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(200, 200, 50, 50);
 fixedRect = createSprite(400, 200, 50, 50);
fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";
rect1 = createSprite(100,100,50,50);
rect2 = createSprite(600,100,50,50);
rect1.velocityX =3;
rect2.velocityX = -3;
}

function draw() {
  background(255,255,255);  
 movingRect.x = World .mouseX;
 movingRect.y = World.mouseY;
 if(isTouching(fixedRect,movingRect)){
    
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
 }else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
 }
 bounceOff(rect1,rect2);
  drawSprites();
}



