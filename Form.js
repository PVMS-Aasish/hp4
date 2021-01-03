class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    bg1.visible=false;
    harrypotter.visible=false;
    title.visible=false;
   
  }

  display(){
   // this.title.html("harry potter");
    //this.title.position(displayWidth/3 - 200, 0);

    this.input.position(displayWidth/2 - 100 , displayHeight/2 +100);
    this.button.position(displayWidth/2 -50 , displayHeight/2+150);
    this.reset.position(displayWidth-100,20);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
     
      var i = 0;
  
        if (i == 0) {
          i = 1;
          var elem = document.getElementById("myBar");
          var width = 10;
          var id = setInterval(frame, 10);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              i = 0;
              elem.remove();
            } else {
              width++;
              elem.style.width = width + "%";
              elem.innerHTML = width  + "%";
            }
          }
        }
 
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
   this.greeting.position(displayWidth/2 -50 , displayHeight/2+150);
      fill("white");
    drawSprites();
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
