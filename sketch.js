var rect1,rect2 ;
function setup() {
  createCanvas(800,400);
  rect2 = createSprite(200,300,60,90);
  rect2.shapeColor = "pink";
  rect2.debug=true;
  rect1 = createSprite(400, 200, 50, 70);
  rect1.shapeColor = "white";
  rect1.debug=true;
}

function draw() {
  background('black');  
  
  rect2.x=mouseX;
  rect2.y=mouseY;
console.log (rect2.x-rect1.x);
console.log(rect2.width/2+rect1.width/2);

 if (rect2.x-rect1.x < rect2.width/2+rect1.width/2 && 
  rect1.x-rect2.x < rect2.width/2+rect1.width/2 && 
  rect2.y-rect1.y < rect2.height/2+rect1.height/2 && 
  rect1.y-rect2.y < rect2.height/2+rect1.height/2) {
  rect2.shapeColor = "green";
  rect1.shapeColor = "blue" ; 
 } else {
  rect2.shapeColor = "pink";
  rect1.shapeColor = "white"; 
 }
  drawSprites();
}