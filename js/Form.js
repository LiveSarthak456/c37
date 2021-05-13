class Form {
  constructor() {
    //input,button, greeting
   
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');

    
  }

  hide(){

    this.input.hide();
    this.button.hide();
    this.greeting.hide();

  }

  display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(130, 0);   
    
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

    var name = this.input.value();

    //as soon as player enters name and clicks on the button play =
    //1. register the players name
    //2. update the playerCount - 4
    playerCount += 1; //
    player.updateCount(playerCount);// if 4 players are registered - start the game 
   
    this.greeting.html("Hello " + name )
    this.greeting.position(130, 160)
    });

  }
}
