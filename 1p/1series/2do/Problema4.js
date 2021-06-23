//
//Araujo Rubio Cesar 2A
function potencia(n){
    let b = 10;
    let r = 1;
    for(let  i =1; i<=n; i++){
        r = r* b;
    
    document.write('Potencia:' + b +'^' + i + '=' + r  + '<br>');
    }
    }
     potencia(prompt());
