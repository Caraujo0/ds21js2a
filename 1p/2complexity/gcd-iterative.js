
// https://ideone.com/00FoC9
//Araujo Rubio Cesar 2A
 
gcd=(a, b) =>{
    let u = a
    let v = b
    let r = 0
    let aum=0
    while (u > 0) {
        if (u < v) {
            r = u
            u = v
            v = r
        }
        aum++
        u -= v
    }
    console.log('print here how many steps it took'+aum)
    return v
}
 
//verify output is correct
console.log(gcd(30,10 ))
//(gcd(30,10)      time=0.02s steps=3
 
 
// (1000,1)    time 0.02s      steps=1000
// (gcd(3, 2)) time=0.04s      steps=3
// (gcd(1000000005, 999999999)) time=0.25s  steps=166666669
//can we do better ? (yes)
