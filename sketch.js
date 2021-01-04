var truck,truckImage;

var background1,backgroundImage;
var path1,path1Image;
var path,pathImage;



function preload(){
  truckImage=loadImage("images/t1.png");
  backgroundImage=loadImage("images/road.jpg");
  
  path1Image=loadImage("images/path1.png");
  pathImage=loadImage("images/path.png");

}
function setup() {

  createCanvas(1000,800);
   
  


  background1=createSprite(500,700,1000,1000);
  background1.addImage("background",backgroundImage);
  background1.scale=2;

  path1=createSprite(100,700,50,50);
  path1.addImage("path1",path1Image);
  path1.velocityY=-10;

  path=createSprite(900,700,50,50);
  path.addImage("path",pathImage);
  path.scale=2;
  path.velocityY=-10;

  background1.velocityY=-10;
   



  truck=createSprite(500,500,70,70);
  truck.addImage("truck",truckImage);
  truck.scale=0.7;
  

  
}

function draw() {
  background(0);  
  if(keyDown("up")){
    truck.y=truck.y-5;

  }
  if(keyDown("down")){
    truck.y=truck.y+5;

  }
  if(keyDown("right")){
    truck.x=truck.x+5;

  }
  if(keyDown("left")){
    truck.x=truck.x-5;
 
  }
  
  if(background1.y<0){
    background1.y=300;
   
  }
  if(path1.y<200){
    path1.y=500;
  }
  

  console.log(background1.y);



  drawSprites();
}