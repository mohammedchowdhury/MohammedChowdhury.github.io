//Author: Mohammed Chowdhury
//11/19/2020
//https://wordpress.com/block-editor/post/myfreewebsite489303293.wordpress.com/142
//Use Arrow keys to play snake, avoid the wall and your self. 
let snake; 
let dead = false; 
let winner; 
let score; 

let arrOfFruits = []; 
let eatSound;
let dieSound; 
let gameSound; 
let winnerSound; 
let pp; 

function preload() {
  soundFormats('mp3');
  eatSound = loadSound('bill.mp3');
  dieSound = loadSound('laugh.mp3');              
  gameSound = loadSound('gameMusic.mp3');
  winnerSound = loadSound("ENCORE.mp3"); 
}

function setup() {
  createCanvas(800, 800); 
   snake = new Snake();
   frameRate(13); 
   winner = false; 
   score = 0; 
  for(let a=0;a<100;a++){
    arrOfFruits[a]=new Fruit(); 
  }
  gameSound.play();  
  pp = parseInt(random(10000)); 

}

function draw() {
  background(100);
  border(); 
  displayScore(); 
  if(winner===false){
  if(dead===false){ 
  snake.move();
  validate();
  }
  else{
   displayDead();  
  }
  if(winner === false){
  arrOfFruits[arrOfFruits.length-1].display();
  eatFruit(); 
  }
  }
  if(winner===true){
    displayWinner(); 
  }
}

function border(){
  fill(198, 235, 52);
  noStroke();
  rect(0, 0, 800, 20);
  rect(0, 0, 20, 800);
  rect(0, 780, 800, 20);
  rect(780,0 ,20,800); 
}
//Author: Mohammed Chowdhury