var speed,car1,car2,car3,weight,deformation,wall,state;




function setup() {
  createCanvas(600, 400);
  wall = createSprite(520,200,60,height/2)
  car1 = createSprite(50,150,15,15);
state=1;
  
}

function draw() {
  background(220);

  if(state === 1){
  
  speed= Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  console.log(speed)

  car1.velocityX=speed/10;
  
  }
  
  if(wall.x-car1.x<(car1.width+wall.width/2)){
    
    state=2;
  //  speed=0;
    car1.veloctiyX=0;
    if (state===2){
    var deformation=0.5*weight*speed*speed/22500;
    
    if(deformation>180){
      
      car1.shapeColor="red";
            
    }
    
    if (deformation<180 && deformation >100){
      
      car1.shapeColor=color(230,230,0);
      
    }
    
    if (deformation <100){
      
      car1.shapeColor=color(0,225,0)
      
    }
    
    }
  }
  
  console.log(mouseX,mouseY,speed,weight,deformation) 
  
  
  //car1.bounce(wall);
  car1.collide(wall);
  
  
  
  drawSprites();
}