var harrypotter,harrypotterImg;
var form,game,player;
var database;
var gameState=0;
var playerCount;
var title,titleImg,title_moving;
var title2,title2Img;
var bg1,bg1Img;
var support1,support2,support3,support4;
var level1,level1Img;
var harrySound;


function preload(){

    harrypotterImg= loadImage("hpf.png")
    titleImg = loadImage("harryp.png");
    bg1Img=loadImage("background1.jpg")
level1Img=loadImage("cave.jpg");
harrySound = loadSound("harry_potter_theme.mp3");
}

function setup(){
createCanvas(900,900);

harrySound.loop();

bg1 = createSprite(500,500,1000,1000);
bg1.addImage("bg1",bg1Img);
bg1.scale=1.5;

database = firebase.database();
game = new Game();
game.getState();
game.start();
 



harrypotter=createSprite(120,400,50,50);
harrypotter.addImage("harrypotter",harrypotterImg)
harrypotter.velocityY=-2;

support1=createSprite(120,510,20,20);
support2=createSprite(120,250,20,20);
support1.visible=false;
support2.visible=false;

title=createSprite(600,150,50,50);
title.addImage("title",titleImg)
title.scale=0.75;
title.velocityX=-2;



support3=createSprite(900,100,40,500);
support3.visible=false;

support4=createSprite(300,100,40,500);
support4.visible=false;

}
function draw(){
background("black");

createEdgeSprites();

  if(playerCount === 1){
    game.update(1);
    
  }
  if(gameState === 1){
    //clear();              
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  

  

  harrypotter.bounceOff(support1);
  harrypotter.bounceOff(support2);

  title.bounceOff(support3);
  title.bounceOff(support4);
 
  

drawSprites();
}