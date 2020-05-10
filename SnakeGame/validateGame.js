//Author: Mohammed Chowdhury
function validate(){ // hits the wall-->  Game over 
  if(snake.x===0|| snake.x===780|| snake.y===0|| snake.y===780){
    snake.changeDirection(0,0); 
    dead = true; 
    dieSound.play(); 
  }
}

function selfHarm(){ //self collison stops the code
    snake.changeDirection(0,0); 
    dead = true; 
    dieSound.play(); 
}

function displayDead(){ // test for dead
   fill(242, 48, 10); 
    textSize(50);
    textAlign(CENTER);
    text('GAME OVER', 400, 400);
    textSize(30);
    text('Press Spacebar to Play', 400, 500);
    text('Score : '+score, 400, 600);
}

function eatFruit(){
    if(arrOfFruits[arrOfFruits.length-1].x === snake.x&&arrOfFruits[arrOfFruits.length-1].y===snake.y){
      arrOfFruits.pop(); 
      score++;  
      eatSound.play();
      
      if(arrOfFruits.length===0){
        winner = true; 
        dead = false; 
        snake.changeDirection(0,0); 
        displayWinner();
        winnerSound.play(); 
      }
  }   
}

function displayWinner(){
 fill(242, 48, 10); 
 textSize(50);
 textAlign(CENTER);
 text('Winner!!!', 400, 300); 
 text('Press Spacebar to Play', 400, 400);
 text('Score : '+score, 400, 500);
}

function displayScore(){
 fill(242, 48, 10); 
 textSize(20);
 textAlign(CENTER);
 text('Score : '+score, 40, 17); 
}
//Author: Mohammed Chowdhury