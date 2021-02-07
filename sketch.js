var cat,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;
var garden,gardenImg;

function preload() {
    //load the images here
    catImg1=loadImage("cat1.png");
    catImg2=loadImage("cat2.png");
    catImg3=loadImage("cat3.png");
    catImg4=loadImage("cat4.png");
    gardenImg=loadImage("garden.png");
    mouseImg1=loadImage("mouse1.png");
    mouseImg2=loadImage("mouse2.png");
    mouseImg3=loadImage("mouse3.png");
    mouseImg4=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400,10,20);
    garden.addImage(gardenImg);
    
    cat=createSprite(800,600,10,20);
    cat.addImage("catSit",catImg1);
    cat.addImage("catStop",catImg4);
    cat.scale=0.2;
  
    mouse=createSprite(100,600,10,20);
    mouse.addImage("mouseSit",mouseImg1);
    mouse.addImage("mouseStop",mouseImg4);
    mouse.scale=0.2;
  
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collid
    drawSprites();
  
    if(cat.x - mouse.x <= (cat.width/2 - mouse.width/2)){
        cat.velocityX=0;
        cat.changeImage("catStop");
        mouse.changeImage("mouseStop");
        cat.x=cat.x+100;
    }

    keyPressed();
}


function keyPressed(){
    //For moving and changing animation write code here
    if(keyDown(LEFT_ARROW)){
    cat.velocityX= -5;
    cat.addAnimation("catRunning",catImg2,catImg3);
    cat.changeAnimation("catRunning");
    
    mouse.addAnimation("mouseRunning",mouseImg2,mouseImg3);
    mouse.changeAnimation("mouseRunning");
    }
}

  

