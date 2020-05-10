//Author: Mohammed Chowdhury
class Snake{
  constructor(){
    this.x = 400; 
    this.y = 400;
    this.xDir = 0; 
    this.yDir = 0;
    this.snakes = []; 
  }
  
  move(){
    this.snakes.unshift(packageXY(this.x,this.y)); 
    this.snakes.splice(score); 
    
    this.x = this.x+this.xDir; 
    this.y = this.y+this.yDir; 
    fill(52, 180, 235); 
    stroke(0);
    square(this.x,this.y,20);
    
    for(let c=0;c<this.snakes.length; c++){    
      if(pp%2===0){
        fill(10, 111, 242); 
      }
     else{
       fill(random(255),random(255),random(255));
     }
       
      if(this.x===this.snakes[c].x && this.y=== this.snakes[c].y){
        selfHarm();
      }
      square(this.snakes[c].x,this.snakes[c].y,20); 
    }    
  }
  
  changeDirection(x,y){
    this.xDir = x; 
    this.yDir = y; 
  }  
}

 function  packageXY(x1,y2){
   let z = {
     x : x1, 
     y: y2
  }
  return z; 
  }
//Author: Mohammed Chowdhury