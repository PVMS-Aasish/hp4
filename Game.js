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

      level1 = createSprite(500,450,10,10);
      level1.addImage("level1",level1Img)    
         //  level1.velocityY=-1;
   level1.velocityX=-1;
    
      if(level1.x<200){
       level1.x=displayWidth/2;
       
   
      }

      
    background("black");

    
  
harrySound.loop();
   

  

    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}

