



function preload(){
 mine = loadImage('mined.png')
 desx = loadImage('xduro.png')
 ps5 = loadImage('p5duro.png')
pilha = loadImage('tirox.png')
plus = loadImage('tirop5.webp')



}

function setup() {
  createCanvas(windowWidth, windowHeight);
ground = createSprite(390,399,480,180)
ground.addImage(mine)
ground.scale = 1.7
xseria = createSprite(240,148,80,80)
p5duros = createSprite(480,170,80,80) 
xseria.addImage(desx)
p5duros.addImage(ps5)
p5duros.scale = 0.65


}

function draw() {
  background('black');
  text(mouseX+","+mouseY, mouseX,mouseY)

  drawSprites();
 if(keyIsDown(RIGHT_ARROW)){
  xseria.x += 5
 }
 if(keyIsDown(LEFT_ARROW)){
  xseria.x -= 5
 }
 if (keyWentDown('space')){
  tiro = createSprite (240,148,5,10)
  tiro.addImage (pilha)
  tiro.scale = 0.15
  tiro.lifetime = 70
  tiro.velocityX = 10

}
}