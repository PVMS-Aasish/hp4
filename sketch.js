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
var invground;
var char1Img ,char1;
var char2,char2Img;
var dementors,dementorsImg,dementorsGroup;
var DementorsLEFT

var mhp,mhp_flying;
var inv2;
var life,lifeImg;
var life1,life1Img;
var life2,life2Img;
var life3,life3Img;
var life4,life4Img;
var dementors1,dementors2,dementors3,dementors4,dementors5,dementors6,dementors7,dementors8,dementors9,dementors10;
var dementors1Img,dementors2Img,dementors3Img,dementors4Img,dementors5Img,dementors6Img,dementors7Img,dementors8Img,dementors9Img,dementors10Img;
var dementorsLEFT = 0;

function preload(){

    harrypotterImg= loadImage("hpf.png")
    titleImg = loadImage("harryp.png");
    bg1Img=loadImage("background1.jpg")
    level1Img=loadImage("cave.jpg");
    char1Img=loadImage("harry potter.png");
    char2Img=loadImage("hermoine.png");
textImg=loadImage("text.png");
mhp_flying=loadAnimation("mhp1.png","mhp2.png","mhp3.png","mhp4.png","mhp5.png","mhp6.png","mhp7.png")
   dementorsImg=loadImage("harrypotter_dementor.png");
   lifeImg=loadImage("life.png");
   life1Img=loadImage("life.png");
   life2Img=loadImage("life.png");
   life3Img=loadImage("life.png");
   life4Img=loadImage("life.png");
   dementors1Img=loadImage("harrypotter_dementor.png");
  /* dementors2Img=loadImage("harrypotter_dementor.png");
   dementors3Img=loadImage("harrypotter_dementor.png");
   dementors4Img=loadImage("harrypotter_dementor.png");
   dementors5Img=loadImage("harrypotter_dementor.png");
   dementors6Img=loadImage("harrypotter_dementor.png");
   dementors7Img=loadImage("harrypotter_dementor.png");
   dementors8Img=loadImage("harrypotter_dementor.png");
   dementors9Img=loadImage("harrypotter_dementor.png");
   dementors10Img=loadImage("harrypotter_dementor.png");*/
}

function setup(){
createCanvas(900,900);
level1=createSprite(500,500,1000,1000);
level1.scale=1.5;


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

char1=createSprite(700,350,1,1);
char2 = createSprite(200,350,1,1);

text=createSprite(450,100,1,1);

mhp=createSprite(150,500,1,1);
mhp.visible=false;
mhp.scale=0.40;
mhp.velocityY=1;
//dementors =createSprite(700,800,1,1);
life=createSprite(100,40,1,1);
life.scale=0.060;
life.visible=false;

life1=createSprite(150,40,1,1);
life1.scale=0.060;
life1.visible=false;

life2=createSprite(200,40,1,1);
life2.scale=0.060;
life2.visible=false;

life3=createSprite(250,40,1,1);
life3.scale=0.060;
life3.visible=false;

life4=createSprite(300,40,1,1);
life4.scale=0.060;
life4.visible=false;

/*dementors1=createSprite(400,40,10,10);
dementors1.scale=0.10;
dementors1.visible=false;
dementors2=createSprite(430,40,10,10);
dementors2.scale=0.10;
dementors2.visible=false;
dementors3=createSprite(460,40,10,10);
dementors3.scale=0.10;
dementors3.visible=false;
dementors4=createSprite(490,40,10,10);
dementors4.scale=0.10;
dementors4.visible=false;
dementors5=createSprite(520,40,10,10);
dementors5.scale=0.10;
dementors5.visible=false;
dementors6=createSprite(550,40,10,10);
dementors6.scale=0.10;
dementors6.visible=false;
dementors7=createSprite(580,40,10,10);
dementors7.scale=0.10;
dementors7.visible=false;
dementors8=createSprite(610,40,10,10);
dementors8.scale=0.10;
dementors8.visible=false;
dementors9=createSprite(640,40,10,10);
dementors9.scale=0.10;
dementors9.visible=false;
dementors10=createSprite(670,40,10,10);
dementors10.scale=0.10;
dementors10.visible=false;*/
support3=createSprite(900,100,40,500);
support3.visible=false;

support4=createSprite(300,100,40,500);
support4.visible=false;

//dementorsGroup = new Group();

}
function draw(){
//background(bg1Img);

createEdgeSprites();

  if(playerCount === 1){
    game.update(1);
     
  }
  if(gameState === 1){
     //clear();  
   // bg1.visible=false;
   level1.velocityX=-5;
   if(level1.x<200){
     level1.x=level1.width/2
   }
     game.play();   
    
        
    
  }
  if(gameState === 2){
    game.end();
  }

  if(mousePressedOver(char1)){

char1.visible=false;
char2.visible=false;
text.visible=false;
mhp.visible=true;
life.visible=true;
life1.visible=true;
life2.visible=true;
life3.visible=true;
life4.visible=true;
dementors1.visible=true;
dementors2.visible=true;
dementors3.visible=true;
dementors4.visible=true;
dementors5.visible=true;
dementors6.visible=true;
dementors7.visible=true;
dementors8.visible=true;
dementors9.visible=true;
dementors10.visible=true;

  }
  if(mousePressedOver(char2)){

    char1.visible=false;
    char2.visible=false;
    text.visible=false;
    life.visible=true;
life1.visible=true;
life2.visible=true;
life3.visible=true;
life4.visible=true;
    
dementors1.visible=true;
dementors2.visible=true;
dementors3.visible=true;
dementors4.visible=true;
dementors5.visible=true;
dementors6.visible=true;
dementors7.visible=true;
dementors8.visible=true;
dementors9.visible=true;
dementors10.visible=true;



      }




      if(keyDown("UP_ARROW")){

mhp.velocityY=-3;

      }

      if(keyDown("DOWN_ARROW")){

        mhp.velocityY=3;
        
              }     



  harrypotter.bounceOff(support1);
  harrypotter.bounceOff(support2);

  title.bounceOff(support3);
  title.bounceOff(support4);
 
  text("dementorsLEFT:",440,20)

drawSprites();


}


/*function  dementors(){
  if(World.frameCount%400 === 0){
    var  dementors = createSprite(600,133);
     //  dementors.addImage(" dementors", dementorsImg);

 
    dementors.velocityX=-5;
     dementors.setLifetime=50;
     dementors.scale = 0.5;
    dementorsGroup.add(dementors);
  }
}*/