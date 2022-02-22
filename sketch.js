var canvas, backgroundImage;
var tierra1,tierra2,tierra3,tierra4, tierra5,tierra6,tierra7,tierra8,tierra9,tierra10,tierra11,tierra12,tierra13,tierra14,tierra15,tierra16,tierra17,tierra18,tierra19,tierra20,tierra21;
var gameState = 0;
var playerCount;
var allPlayers;
var distanceX = 0;
var distanceY = 0;
var database;
var pared;
var tierrasGroup;
var form, player, game;


//Definir variable de los osos
var bears,bear1,bear2,bear3;

var forest, bear1_img, bear2_img, bear3_img;
//Definir variable de los cazadores
var cazador1, cazador2,cazador3;

var cazador1_img,cazador2_img, cazador3_img;

var arbol_Img,arbol2_Img,cueva_Img, rock_img;


function preload(){
  forest = loadImage("images/background.png");
  bear1_img = loadImage("images/Bear1.png");
  bear2_img = loadImage("images/Bear2.png");
  bear3_img = loadImage("images/Bear3.png");

  arbol1_Img = loadImage("images/Arbol1.png");
  arbol2_Img = loadImage("images/Arbol2.png");

  cazador1_img = loadImage("images/Cazador1.png");
  cazador2_img = loadImage("images/Cazador2.png");
  cazador3_img = loadImage("images/Cazador3.png");

  cueva_Img = loadImage("images/Cueva.png");

  rock_img = loadImage("images/Rock.png");
}


function setup() {
  canvas = createCanvas(displayWidth - 50, displayHeight-10);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

   tierra1 = createSprite(0,150,100,1500);
   tierra1.addImage("arbol2",arbol2_Img); 
   tierra1.scale = 1.6;

   tierra2 = createSprite(1200,700,70,70);
   tierra2.addImage("cueva",cueva_Img); 
   tierra2.scale = 0.4;
    
   tierra3 = createSprite(660,28,760,50);
   tierra3.addImage("arbol1",arbol1_Img); 
   tierra3.scale = 1.1;
    
   tierra4 = createSprite(655,90,30,400);
   tierra4.addImage("arbol2",arbol2_Img); 
   tierra4.scale = 0.5;

   tierra5 = tierra5= createSprite(300,200,40,300);
   tierra5.addImage("arbol2",arbol2_Img); 
   tierra5.scale = 0.4;

   
   tierra7= createSprite(390,600,65,90);
   tierra7.addImage("rock", rock_img);
   tierra7.scale = 0.1;

   tierra8= createSprite(630,700,60,90);
   tierra8.addImage("rock", rock_img);
   tierra8.scale = 0.1;

   tierra9 = createSprite(600,570,600,30);
   tierra9.addImage("arbol1",arbol1_Img); 
   tierra9.scale = 0.9;

   tierra10 = createSprite(1070,600,40,250);
   tierra10.addImage("arbol2",arbol2_Img); 
   tierra10.scale = 0.3;

  tierra11 = createSprite(200,20,70,70);
  tierra11.addImage("cueva",cueva_Img); 
  tierra11.scale = 0.4;

   tierra12 = createSprite(500,330,80,300);
   tierra12.addImage("arbol2",arbol2_Img); 
   tierra12.scale = 0.5;

   tierra14= createSprite(340,450,600,50);
   tierra14.addImage("arbol1",arbol1_Img); 
   tierra14.scale = 0.7;

   tierra15= createSprite(600,750,1000,50);
   tierra15.addImage("arbol1",arbol1_Img); 
   tierra15.scale = 1.4;

   tierra16= createSprite(800,400,50,300);
   tierra16.addImage("arbol2",arbol2_Img); 
   tierra16.scale = 0.5;

   tierra17= createSprite(820,600,60,90);
   tierra17.addImage("rock", rock_img);
   tierra17.scale = 0.1;

   tierra18= createSprite(1300,500,30,1000);
   tierra18.addImage("arbol2",arbol2_Img); 
   tierra18.scale = 1.3;

   tierra19= createSprite(1200,0,300,25);
   tierra19.addImage("arbol1",arbol1_Img); 
   tierra19.scale = 0.6;

   tierra20= createSprite(1050,25,30,300);
   tierra20.addImage("arbol2",arbol2_Img); 
   tierra20.scale = 0.5;

   tierra21= createSprite(1200,370,300,30);
   tierra21.addImage("arbol1",arbol1_Img); 
   tierra21.scale = 0.6;

   
   tierrasGroup = new Group;

}

function draw() {
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  tierra1.display();
  tierra2.display();
  tierra3.display();
  tierra4.display();
  tierra5.display();
  tierra7.display();
  tierra8.display();
  tierra9.display();
  tierra10.display();
  tierra11.display();
  tierra12.display();
  tierra14.display();
  tierra15.display();
  tierra16.display();
  tierra17.display();
  tierra18.display();
  tierra19.display();
  tierra20.display();
  tierra21.display();

  tierrasGroup.add(tierra1);
  tierrasGroup.add(tierra2);
  tierrasGroup.add(tierra3);
  tierrasGroup.add(tierra4);
  tierrasGroup.add(tierra5);
  tierrasGroup.add(tierra6);
  tierrasGroup.add(tierra7);
  tierrasGroup.add(tierra8);
  tierrasGroup.add(tierra9);
  tierrasGroup.add(tierra10);
  tierrasGroup.add(tierra11);
  tierrasGroup.add(tierra12);
  tierrasGroup.add(tierra13);
  tierrasGroup.add(tierra14);
  tierrasGroup.add(tierra15);
  tierrasGroup.add(tierra16);
  tierrasGroup.add(tierra17);
  tierrasGroup.add(tierra18);
  tierrasGroup.add(tierra19);
  tierrasGroup.add(tierra20);
  tierrasGroup.add(tierra21);




  drawSprites();
}
