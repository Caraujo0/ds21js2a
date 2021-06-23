// https://ideone.com/sDH0Os
//Araujo Rubio Cesar
// linear search
// search(d,k)
// -> d an array of random names
// -> k value to find
// <- the position of k if found
// <- -1 if not found

//Araujo Rubio Cesar
function linear(K,d){
    for (let i in d){
     if (d[i] == K)
     return i; 
     }
     return -1;    
  }
  let d= [ "Carolina", "Daniel", "Felix", "Karina", "Leonardo", "Ismael", "Jimin", "katerin", "Sebastián", "Mike", "Rouse"];
  
  console.log(linear("Rouse",d));

