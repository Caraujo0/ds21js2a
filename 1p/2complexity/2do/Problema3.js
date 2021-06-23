//3. random number
//Araujo Rubio Cesar 2A
let min=prompt('Numero minimo');
let max=prompt('Numero maximo');
function randomNumber(min,max){
   return Math.floor(Math.random()*(max-min+1)+min);
   }  
   document.write(randomNumber(min,max));
