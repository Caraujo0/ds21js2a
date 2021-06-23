//Araujo Rubio Cesar 2A

let myarray = [];
function attach(myarray){
 for(let i = 0; i<10; i++){
 let numerosA=Math.floor(Math.random()*20);
 myarray.push(numerosA);
 }
}
attach(myarray);
document.write( myarray);
