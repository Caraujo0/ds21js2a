
//Araujo Rubio Cesar 2A
function mcm(a,b){
    while(a!=b){
      if(a>b){
        a-=b;
      }else{
        b-=a;
      }
    }
      return a;
    }
    console.log(mcm(7, 14));
    