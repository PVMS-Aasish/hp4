
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
    
    invground=createSprite(200,850,2000,10);
    invground.visible=false;

    inv2=createSprite(200,-80,2000,20);
    inv2.visible=false;

   
    


    char1.addImage("char1",char1Img);
    char2.addImage("char2",char2Img);
    selectOption.addImage("options",selectImage);
    mhp.addAnimation("flying",mhp_flying);

    mhp.collide(invground);
    mhp.collide(inv2);
    text("Life:"+lifeCount,100,50);
    text("Enemys Left: "+enemyCount,300,50);
    if (frameCount % 150 === 0){
      dementors=createSprite(950,700,2000,10);
      dementors.addImage("dementors",dementorsImg);
      dementors.velocityX = -7;
          
      dementors.scale = 0.5;
      dementors.lifetime = 300;
      dementorsGroup.add(dementors);
    }
    
   /* for(var i=0 ,j= 50 ; i<lifeCount && j< 300 ;i++){
        
            life=createSprite(j,40,1,1);  
            life.addImage(lifeImage);
            life.scale=0.060;
            j=j+50;
        for(var k=0, l=400; k<enemyCount && k<800 ;k++){
                enemy=createSprite(l,40,10,10);
                enemy.addImage(enemyImage);
                enemy.scale=0.10;
                l=l+40;
              
          }
      }*/
  }
}