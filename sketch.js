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
var enemy,life,lifeImage, enemyImage;
var selectImage,selectOption;
var mhp,mhp_flying;
var inv2;
var lifeCount=5, enemyCount=10;
var shock,shockImg,shockGroup;

function preload(){

    harrypotterImg= loadImage("hpf.png")
    titleImg = loadImage("harryp.png");
    bg1Img=loadImage("background1.jpg")
    level1Img=loadImage("cave.jpg");
    char1Img=loadImage("harry potter.png");
    char2Img=loadImage("hermoine.png");
    lifeImage=loadImage("life.png");
    enemyImage=loadImage("harrypotter_dementor.png");
    selectImage=loadImage("text.png");
    mhp_flying=loadAnimation("mhp1.png","mhp2.png","mhp3.png","mhp4.png","mhp5.png","mhp6.png","mhp7.png")
    dementorsImg=loadImage("harrypotter_dementor.png");
   shockImg=loadImage("shock.png")
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

selectOption=createSprite(450,100,1,1);

mhp=createSprite(150,500,1,1);
mhp.visible=false;
mhp.scale=0.40;
mhp.velocityY=1;

support3=createSprite(900,100,40,500);
support3.visible=false;

support4=createSprite(300,100,40,500);
support4.visible=false;

shockGroup = new Group();
dementorsGroup=new Group();

}
function draw(){

createEdgeSprites();

  if(playerCount === 1){
    game.update(1);
     
  }
  if(gameState === 1){
    
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
selectOption.visible=false;
mhp.visible=true;
  }
  if(mousePressedOver(char2)){

    char1.visible=false;
    char2.visible=false;
    selectOption.visible=false;
    
      }

      if(keyDown("UP_ARROW")){

mhp.velocityY=-3;

      }

      if(keyDown("DOWN_ARROW")){

        mhp.velocityY=3;
        
              }     
      if(keyDown("SPACE")){
        createShock();        
      }        

      if(dementorsGroup.isTouching(mhp)){

dementorsGroup.destroyEach();
shockGroup.destroyEach();
lifeCount=lifeCount-1;
        
      }
      if(dementorsGroup.isTouching(shockGroup)){

        dementorsGroup.destroyEach();
        shockGroup.destroyEach();
        enemyCount=enemyCount-1;
                
              }
            if(enemyCount===0){

text("you win", 200,200)
dementorsGroup.setVelocityEach(0);
dementorsGroup.destroyEach();

            }
    

  harrypotter.bounceOff(support1);
  harrypotter.bounceOff(support2);

  title.bounceOff(support3);
  title.bounceOff(support4);
 
  
   
drawSprites();
text("Life:"+lifeCount,100,50);
    text("Enemys Left: "+enemyCount,300,50);
}

function createShock(){
  shock=createSprite(400,150,50,50);
  shock.scale=0.30;
  shock.y = mhp.y-32 ;
  shock.addImage("shock",shockImg);
shock.velocityX=5;
shock.lifetime = 300;

shockGroup.add(shock);


}
