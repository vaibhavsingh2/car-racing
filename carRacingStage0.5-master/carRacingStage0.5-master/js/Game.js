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

 async start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
    
      form = new Form()
      form.display();

    }
  car1=createSprite(100,200);
  car1.addImage("car1",car1img);
  car2=createSprite(300,200);
  car2.addImage("car2",car2img);
  car3=createSprite(500,200);
  car3.addImage("car3",car3img);
  car4=createSprite(700,200);
  car4.addImage("car4",car4img);
cars=[car1,car2,car3,car4];
  }
play(){
  form.hide();
  //textSize(30);
  //text("Game Start",20,20);
  Player.getPlayerInfo();
  player.getCarsAtEnd();
  if(allPlayers!==undefined){
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
  //var dp=130;
  var index=0;
  var x=240;
  var y=0;

  for(var plr in allPlayers){
    index++;
    x=x+200;
    y=displayHeight-allPlayers[plr].distance;
    cars[index-1].x=x;
    cars[index-1].y=y;

    if(index===player.index){
      stroke(10);
      fill("red");
      ellipse(x,y,70,70);
      cars[index-1].shapeColor="red";
      camera.position.x=displayWidth/2;
      camera.position.y=cars[index-1].y;
    }
    

    //textSize(20);
    //text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,dp);
  }
}
if(keyIsDown(UP_ARROW) && player.index!==null){
  player.distance+=50;
  player.update();
}
if(player.distance>3600){
  gameState=2;
  player.rank+=1;
  Player.updateCarsAtEnd(player.rank);
}
drawSprites();
}
end(){
  console.log("gameended");
  //game.update(2);
  console.log(player.name+"= "+player.rank);

}
}

