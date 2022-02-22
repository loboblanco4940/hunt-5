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

    

    bear1 = createSprite(200,300,30,30);
    bear1.addImage("bear1",bear1_img);
    bear1.scale = 0.3;

    bear2 = createSprite(400,300,30,30);
    bear2.addImage("bear2",bear2_img);
    bear2.scale = 0.3;

    bear3 = createSprite(600,300,30,30);
    bear3.addImage("bear3",bear3_img);
    bear3.scale = 0.2;


    bears = [bear1, bear2, bear3];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    //Player.getBearsAtEnd();

    if(allPlayers !== undefined){
      background(rgb(198,135,103));
     // image(forest,0,0,displayWidth,displayHeight);
      createEdgeSprites();

      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the bears
      var x = displayWidth/2 - 200; 
      var y = displayHeight/2;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
       // x = x + 200;
        //use data form the database to display the cars in y direction
        x = displayWidth/2 + allPlayers[plr].distanceX;
        y = displayHeight/2 + allPlayers[plr].distanceY;

        bears[index-1].x = x;
        bears[index-1].y = y;
       // console.log(index, player.index)
        if (index === player.index){

          bears[index - 1].bounceOff(tierrasGroup);
          //camera.position.x = displayWidth/2;
          //camera.position.y = bears[index-1].y;
        }
        //x = displayWidth/2 - allPlayers[plr].distanceX;
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
  

 /* if(tierra1.IsTouching(bear1)){
    bear1 = bear1 - (-10);
  } */
  //bears.bounceOff(edges);
  
  
  

      drawSprites();
    }

  if(keyIsDown(UP_ARROW) && player.index !== null){
      player.velocityY = -1;
      player.distanceY -=10;
      player.update();
    }

    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.velocityY = 1
      player.distanceY +=10;
      player.update();
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.velocityX = 1
      player.distanceX +=10;
      player.update();
    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.velocityX = -1
      player.distanceX -=10;
      player.update();
    }
  }
}