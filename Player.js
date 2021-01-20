
class Player {
  constructor(){}

    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }

    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }

    update(name){
      var playerIndex = "player" + playerCount;
     /* database.ref(playerIndex).set({
        name:name
      });*/
    }
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      player.getCarsAtEnd();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;

        //x and y position of the cars
        var x = 175 ;
        var y;

        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;

          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
        // console.log(index, player.index)    

        
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
          }
        
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }

      }
}
}