var var1, var2


function setup() {
  createCanvas(800,400);
  var1 = createSprite(400, 200, 50, 50);
  var2 = createSprite(500,200,25,25);
  var1.shapeColor = "orange";
  var2.shapeColor = "yellow";
}

function draw() {
  background("black"); 
  var2.x = mouseX;
var2.y = mouseY;
if (var2.x-var1.x< var1.width/2 + var2.width/2 && var1.x-var2.x< var1.width/2 + var2.width/2
  && var2.y-var1.y< var1.height/2 + var2.height/2 && var1.y-var2.y< var2.height/2 + var1.height/2 ) {
  var1.shapeColor = "blue"
  var2.shapeColor = "blue"
} else {
var1.shapeColor = "orange"
  var2.shapeColor = "yellow"
}
  drawSprites();
}