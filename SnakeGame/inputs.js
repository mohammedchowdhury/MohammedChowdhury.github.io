//Author: Mohammed Chowdhury
function resetGame(){
  snake.x = 400; 
  snake.y = 400; 
  dead = false; 
  setup(); 
  
}


function keyPressed() {
  let x = snake.xDir; 
  let y =snake.yDir; 
  
  if(!dead && !winner){
  if(keyCode===37 && x!==20){//left keys
    snake.changeDirection(-20,0); 
  }else if(keyCode===38&& y!==20){ // up keys
     snake.changeDirection(0,-20);
  }else if(keyCode===39&&x!==-20){// right keys
     snake.changeDirection(20,0);
  }else if(keyCode===40&& y!==-20){// down keys
     snake.changeDirection(0,20);
  }
  }
  
  if(keyCode===32){ // spacebar 
   resetGame();  
  }
}
//Author: Mohammed Chowdhury