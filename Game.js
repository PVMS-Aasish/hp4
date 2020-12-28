class Game {
  constructor(){

  }

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

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
// var level1 = createSprite(200,200,30,30);
  //  level1.addImage("level1",level1Img);
  }

  play(){
    form.hide();
    
    if(playerCount === 1){

    background("brown");
     level1 = createSprite(450,450,30,30);
    level1.addImage("level1",level1Img);
    
    //imageMode(CENTER);
   // image(level1Img,0,-displayHeight*4,displayWidth,displayHeight*5);
    level1.velocityX=-3;
    if(level1.x<0){
level1.x=displayWidth/2;


    }

    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}