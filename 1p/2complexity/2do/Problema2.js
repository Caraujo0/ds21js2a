//2. sieve of Eratosthenes
//Araujo Rubio Cesar  2A
let n =prompt('Ingresa un numero');
  let primos = [];
  let r = 0;

    for(let i = 2; i <=n; i++) {
    let primo = true;
    let a= Math.floor(Math.sqrt(i));
    for(let g=2;  g<=a; g++) {
        r++;
        if(i%g == 0) {
        primo =!primo;
        }
        }
        if(primo) primos.push(i);
        } 
        document.write(primos);