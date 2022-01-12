var balao;
var arco, flecha, fundo;
var arcoImg, flechaImg, fundoImg;
var red, green, blue, pink;
var sla, sla2;
var score = 0

function preload(){
 arcoImg = loadImage("bow0.png");
 flechaImg = loadImage("arrow0.png");
 fundoImg = loadImage("background0.png");
 red = loadImage("red_balloon0.png");
 green = loadImage("green_balloon0.png");
 blue = loadImage("blue_balloon0.png")
 pink = loadImage("pink_balloon0.png")
}

function setup(){
 createCanvas(400,400);
 fundo = createSprite(200,200);
 fundo.addImage(fundoImg);
 arco = createSprite(380,0);
 arco.addImage(arcoImg);
 sla2 = 0;
}
function draw(){
  if(frameCount % 100 == 0){
    balaoSpawn()
    console.log("apareceu")
  }
  if(keyDown("space")){
    Flechas();
  }
  
  drawSprites()
  arco.y = World.mouseY
}
function balaoSpawn(){
  balao = createSprite(-50, random(50,370))
  balao.velocityX = 2; 
  sla = Math.round(random(1,4))
 //vermelho
 if(sla == 1){
   balao.addImage(red);
   balao.scale = 0.1
 }
 //verde
 if(sla == 2){
   balao.addImage(green);
   balao.scale = 0.1
 }
 //azul
 if(sla == 3){
   balao.addImage(blue);
   balao.scale = 0.1
 }
 //rosa
 if(sla == 4){
   balao.addImage(pink);
   balao.scale = 1
  } 
}
function Flechas(){
 flecha = createSprite(390, arco.y);
 flecha.addImage(flechaImg);
 flecha.scale = 0.3;
 flecha.velocityX = -10
 flecha.lifetime = 100;
}