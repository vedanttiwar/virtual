//Create variables here
var database;
var dog,dogImg,happyDog;
var foodStock;
var foodS;
function preload()
{
  //load images here
  dogImg=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
   dog=createSprite(250,350,20,20);
   dog.addImage(dogImg)
   dog.scale=0.2;
foodStock=database.ref('food');
foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
    dog.scale=0.2;
  }

  drawSprites();
  //add styles here
   textSize(20);
   stroke("white");
   text("Note:press up arrow key to feed grizly milk",100,50);
   text("food remaining "+foodS,170,200);
}
function readStock(data) {
  foodS=data.val();
}
function writeStock(x){
 
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
  
}

