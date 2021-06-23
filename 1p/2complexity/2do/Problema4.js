//4. random name
//Araujo Rubio Cesar  2A
//4. random name
let min=prompt('Numero minimo');
let max=prompt('Numero maximo');
function NombreAleatorio(min,max){
    return 'Name'+String(Math.floor(Math.random()*(max-min +1)+min));
    }  
 console.log(NombreAleatorio(min,max));
 