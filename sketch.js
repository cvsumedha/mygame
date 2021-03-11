var path,mainp;
var p1,p2,p3;
var pathimg,mainimg;
var invisiblegrd;

var opp11mg;
var opp2img;
var opp3img;
var opp4img;
var opp5img;
var gameOverImg,cycleBell;

var pinkCG, yellowCG,redCG; 

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

function preload(){
  pathimg = loadImage("images/bg2.jpg");
  mainimg1 = loadImage("images/zeebra.png");
 
  
  opp1img = loadImage("images/dog.png");
 
  opp2img = loadImage("images/jerry.png");
 
  opp3img = loadImage("images/girl.png");

  opp4img = loadImage("images/delivery.png");
  
  opp5img = loadImage("images/boy.png");

  //cycleBell = loadSound("sound/bell.mp3");
  gameOverImg = loadImage("images/gameOver.png");
}

function setup(){
  
createCanvas(1200,700);
// Moving background
path=createSprite(700,350);
path.addImage(pathimg);
path.scale=3
path.velocityX = -5;

invisiblegrd=createSprite(100,750,20,1200);

//creating boy running
mainp  = createSprite(70,150);
mainp.addImage("zeebra",mainimg1);
mainp.scale=0.7;
  
gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;  
  
p1G = new Group();
p2G = new Group();
p3G = new Group();
p4G = new Group();
p5G = new Group();
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);
  
  if(gameState===PLAY){
    
   distance = distance + Math.round(getFrameRate()/50);
   path.velocityX = -(6 + 2*distance/150);
  
   mainp.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainp.collide(edges);
  
  //code to reset the background
  if(path.x  > 0){
    path.x = width/2;
  }
  
    //code to play cycle bell sound
  //if(keyDown("space")) {
   // cycleBell.play();}
  
  
  //creating continous opponent players
  var select_oppPlayer = Math.round(random(1,3));
  
  if (World.frameCount % 150 == 0) {
    if (select_oppPlayer == 1) {
      pl1();
    }  if (select_oppPlayer == 2) {
      pl2();
    } if (select_oppPlayer == 3){
      pl3();
    }  else if(select_oppPlayer == 4){
      pl4();
    } else (select_oppPlayer == 5)
      pl5();
    }

  }
  
   if(p1G.isTouching(mainp)){
     gameState = END;
     p1.velocityY = 0;
    
    }
    
    if(p2G.isTouching(mainp)){
      gameState = END;
      p2.velocityY = 0;
      
    }
    
    if(p3G.isTouching(mainp)){
      gameState = END;
      p3.velocityY = 0;
      
    }

    if(p4G.isTouching(mainp)){
      gameState = END;
      p4.velocityY = 0;
      
    }

    if(p5G.isTouching(mainp)){
      gameState = END;
      p5.velocityY = 0;
      
    }
    
 else if (gameState === END) {
    gameOver.visible = true;
    textSize(20);
    fill(255);
    text("Press Up Arrow to Restart the game!", 500,200);
  
    path.velocityX = 0;
    mainp.velocityY = 0;
    
  
    p1G.setVelocityXEach(0);
    p1G.setLifetimeEach(-1);
  
    p2G.setVelocityXEach(0);
    p2G.setLifetimeEach(-1);
  
    p3G.setVelocityXEach(0);
    p3G.setLifetimeEach(-1);

    p4G.setVelocityXEach(0);
    p4G.setLifetimeEach(-1);

    p5G.setVelocityXEach(0);
    p5G.setLifetimeEach(-1);
    
    if(keyDown("UP_ARROW")) {
      reset();
    }
}
}

function pl1(){
        p1 =createSprite(1100,Math.round(random(50, 250)));
        p1.scale =0.6;
        p1.velocityX = -(6 + 2*distance/150);
        p1.addImage("opponentPlayer1",opp1img);
        p1.setLifetime=170;
        p1G.add(p1);
}

function pl2(){
        p2 =createSprite(1100,Math.round(random(100, 350)));
        p2.scale =0.6;
        p2.velocityX = -(6 + 2*distance/150);
        p2.addImage("opponentPlayer2",opp2img);
        p2.setLifetime=170;
        p2G.add(p2);
}

function pl3(){
  p3 =createSprite(1100,Math.round(random(150, 450)));
  p3.scale =0.6;
  p3.velocityX = -(6 + 2*distance/150);
  p3.addImage("opponentPlayer2",opp3img);
  p3.setLifetime=170;
  p3G.add(p3);
}

function pl4(){
  p4 =createSprite(1100,Math.round(random(200, 550)));
  p4.scale =0.6;
  p4.velocityX = -(6 + 2*distance/150);
  p4.addImage("opponentPlayer2",opp4img);
  p4.setLifetime=170;
  p4G.add(p4);
}

function pl5(){
  p5 =createSprite(1100,Math.round(random(250, 650)));
  p5.scale =0.6;
  p5.velocityX = -(6 + 2*distance/150);
  p5.addImage("opponentPlayer2",opp5img);
  p5.setLifetime=170;
  p5G.add(p5);
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  mainp.addImage("SahilRunning",mainimg1);
  
  p1G.destroyEach();
  p2G.destroyEach();
  p3G.destroyEach();
  p4G.destroyEach();
  p5G.destroyEach();
  
  distance = 0;
}