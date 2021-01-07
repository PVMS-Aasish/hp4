
class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    
  }
  play(){
    form.hide();
   
    background(rgb(198,135,103));
    
 level1.addImage("leve1",level1Img);
 //hp1.addImage("hp1",hp1Img);
invground=createSprite(200,850,2000,10);
invground.visible=false;

inv2=createSprite(200,-80,2000,20);
inv2.visible=false;


char1.addImage("char1",char1Img);
char2.addImage("char2",char2Img);
text.addImage("text",textImg);
mhp.addAnimation("flying",mhp_flying);

life.addImage("life",lifeImg);
life1.addImage("life1",life1Img);
life2.addImage("life2",life2Img);
life3.addImage("life3",life3Img);
life4.addImage("life4",life4Img);

/*dementors1.addImage("dementors1",dementors1Img);
dementors2.addImage("dementors2",dementors2Img);
dementors3.addImage("dementors3",dementors3Img);
dementors4.addImage("dementors4",dementors4Img);
dementors5.addImage("dementors5",dementors5Img);
dementors6.addImage("dementors6",dementors6Img);
dementors7.addImage("dementors7",dementors7Img);
dementors8.addImage("dementors8",dementors8Img);
dementors9.addImage("dementors9",dementors9Img);
dementors10.addImage("dementors10",dementors10Img);*/




mhp.collide(invground);
mhp.collide(inv2);
if (frameCount % 150 === 0){
  dementors=createSprite(950,700,2000,10);
  dementors.addImage("dementors",dementorsImg);
  dementors.velocityX = -8;
  dementors.scale = 0.5;
  dementors.y=Math.round(random(200,700));     
 
  dementors.lifetime = 300;
}
  }
}