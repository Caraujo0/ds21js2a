//3 bubble - your implementation 
//Araujo Rubio Cesar 2A
function bubble(o) { 
    let n= o.length - 1;
    let cambio,nombre,resul,t;
     
     do{
       cambio=false;
       for(let i=0;i<n;i++){
       if(o[i]>o[i+1]){
          t=o[i];
          o[i]=o[i+1];
          o[i+1]=t;
          cambio=true;
         }
         }
         --n;
     }while(cambio);
     return o; 
     }
     nombre=['Damian','Daniel','Sergio','Alfonso','Jimin','Joel'];
     document.write('Nombres en desorden ' +' ' +nombre + '<br>');
     resul=bubble(nombre);
     document.write('Nombres en orden ' + ' ' + resul);