//Author: Mohammed Chowdhury
class Fruit{
 constructor(){
   this.x = generateFruit(); 
   this.y = generateFruit(); 
   this.size = 20; 
   
 }
  display(){
    fill(242, 169, 10); 
    square(this.x,this.y,this.size); 
  }
}
 function generateFruit(){
  let c = (parseInt(random(2,10000))%77); 
   if(c===0){
    c++;  
   }
  if(c%2==1 ){
   c++;  
  }
  return c*10; 
}
//Author: Mohammed Chowdhury