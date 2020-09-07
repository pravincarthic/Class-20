var rect1, rect2;
var edges;

function setup() {
  createCanvas(windowWidth,windowHeight);
  rect1 = createSprite(200, 200, 50, 50);
  rect2 = createSprite(350, 350, 50, 50);
  edges = createEdgeSprites();
  rect2.shapeColor = "Red";
  rect1.shapeColor = "Yellow"

}

function draw() {
  rect1.bounceOff(edges);
  rect2.bounceOff(edges);
  // rect1.velocityX = 3;
  // rect1.velocityY = 15;
  rect1.x = mouseX;
  rect1.y = mouseY;
  if (rect1.x-rect2.x < rect1.width/2+rect2.width/2 && rect2.x-rect1.x < rect1.width/2+rect2.width/2 && rect1.y-rect2.y < rect1.height/2+rect2.height/2 && rect2.y-rect1.y < rect1.height/2+rect2.height/2) {
    rect2.shapeColor = "Magenta";
    rect1.shapeColor = "Blue";
  }
   
  else{
  rect2.shapeColor = "Red";
  rect1.shapeColor = "Yellow";
  }




  background(144,95,218);  
  drawSprites();
}