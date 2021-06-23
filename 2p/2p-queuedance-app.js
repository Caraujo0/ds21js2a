 // PROBLEM 2
  //Square Dance
  function Queue() {
    this.datostore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
       this.empty = empty;
    }
    function enqueue(element) {
    this.datostore.push(element);
    }
    function dequeue() {
    return this.datostore.shift();
    }
    function front() {
    return this.datostore[0];
    }
    function back() {
    return this.datostore[this.datostore.length-1];
    }
    function toString() {
    var restr = "";
    for (let i = 0; i < this.datostore.length; ++i) {
    restr += this.datostore[i] + "<br>";
    }
    return restr;
    }
    function empty() {
    if (this.datostore.length == 0) {
    return true;
    }
    else {
    return false;
    }
    }
    function dancer(nombre,sexo) {
    this.nombre = nombre;
    this.sexo= sexo;
    }
    function getdancers(hombres,mujeres) {
    let nombres = read("dancers.txt").split("<br>");
    for (let i = 0; i < nombres.length; ++i) {
    nombres[i] = nombres[i].trim();
    }
    for (let i = 0; i < nombres.length; ++i) {
    let dancer = nombres[i].split(" ");
    let sex = dancer[0];
    var nombre = dancer[1];
    if (sex == "M") {
    femaleDancers.enqueue(new Dancer(nombre, sexo));
    }
    else {
    maleDancers.enqueue(new Dancer(nombre, sexo));
    }
    }
    }
    function dance(hombres,mujeres) {
    print("The dance partners are: " +"<br>");
    while (!mujeres.empty() && !hombres.empty()) {
    person = mujeres.dequeue();
    putstr("mujer dancer is: " + person.nombre);
    person = hombres.dequeue();
    print(" and the hombre dancer is: " + person.nombre);
    }
    print();
    }
    
    let maleDancers = new Queue();
    let femaleDancers = new Queue();
    getDancers(maleDancers, femaleDancers);
    dance(maleDancers, femaleDancers);
    if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().nombre + " is waiting to dance.");
    }
    if (!maleDancers.empty()) {
    console.log(maleDancers.front().nombre + " is waiting to dance.");
    }
     