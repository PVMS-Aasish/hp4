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
var text,textImg;

function preload(){

    harrypotterImg= loadImage("hpf.png")
    titleImg = loadImage("harryp.png");
    bg1Img=loadImage("background1.jpg")
    level1Img=loadImage("cave.jpg");
    char1Img=loadImage("harry potter.png");
    char2Img=loadImage("hermoine.png");
textImg=loadImage("text.png");
   // dementorsImg-loadImage("harrypotter_dementor.png");
   
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

//dementors =createSprite(700,800,1,1);

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
   level1.velocityX=-3;
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
  }
  if(mousePressedOver(char2)){

    char1.visible=false;
    char2.visible=false;
    text.visible=false;
      }
    

  harrypotter.bounceOff(support1);
  harrypotter.bounceOff(support2);

  title.bounceOff(support3);
  title.bounceOff(support4);
 
  

drawSprites();
}


/*function  dementors(){
  if(World.frameCount%400 === 0){
    var  dementors = createSprite(600,133);
     //  dementors.addImage(" dementors", dementorsImg);

 dementors.x=Math.round(random(130,135));     
    dementors.velocityX=-5;
     dementors.setLifetime=50;
     dementors.scale = 0.5;
    dementorsGroup.add(dementors);
  }
}*/