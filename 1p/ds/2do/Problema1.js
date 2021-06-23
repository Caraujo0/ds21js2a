//1. object
//   attach(n)
// -> n random name
// <- random name added
//Araujo Rubio Cesar
let objeto = {name1: "cesar", apellido:"Araujo", apellido2:'Rubio'};

 
function valorO(o){
 let num=Math.floor(Math.random()*10);
 o.edad = num;
}

valorO(objeto);

