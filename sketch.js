function setup() {
  createCanvas(800,400);
 fixRect = createSprite(200, 200, 50, 80);
 fixRect.debug = true;
 fixRect.shapeColor = "Green";
 movRect = createSprite(400, 200, 80, 30);
 movRect.debug = true;
 movRect.shapeColor = "Green";
}

function draw() {
  background(0,0,0);

  movRect.x = World.mouseX;
  movRect.y = World.mouseY;

  if(movRect.x - fixRect.x < fixRect.width/2 + movRect.width/2 && fixRect.x - movRect.x < fixRect.width/2 + movRect.width/2 && movRect.y - fixRect.y < fixRect.height/2 + movRect.height/2 && fixRect.y - movRect.y < fixRect.height/2 + movRect.height/2 ){
     fixRect.shapeColor = "Red";
     movRect.shapeColor = "Red";
  }
    else{
      fixRect.shapeColor = "Green";
      movRect.shapeColor = "Green";
    }
  drawSprites();
}