
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
invground=createSprite(200,750,2000,10);
invground.visible=false;

char1.addImage("char1",char1Img);
char2.addImage("char2",char2Img);
text.addImage("text",textImg);

//dementors.addImage("dementors",dementorsImg);


 
  }
}