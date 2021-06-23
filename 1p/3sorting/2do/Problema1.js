//1. bubble - your implementation 
//Araujo Rubio Cesar 2A
function bubble(n) { 
    let g= n.length - 1;
    let result,cambio,d,t;
     
     do{
       cambio=false;
       for(let i=0;i<g;i++){
       if(n[i]>n[i+1]){
          t=n[i];
          n[i]=n[i+1];
          n[i+1]=t;
          cambio=true;
         }
         }
         --g;
     }while(cambio);
     return n; 
     }
     d=[100,23,3,13,50,6223,45,2];
     document.write('Numeros desordenados ' + ' ' + d + '<br>');
     resul=bubble(d);
     document.write('Numeros ordenados ' + ''+ resul);
   