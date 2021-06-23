// * PROBLEM 1
 //* Queue implementation
 
 function queue(){
    this.datostore=[];
       this.enqueue=enqueue;
       this.dequeue=dequeue;
       this.front=front;
       this.back=back;
       this.toString=toString;
       this.empty=empty;
    }
      function enqueue(element){
      this.datostore.push(element);
      }
      
     function dequeue(){
     return this.datostore.shift();
     } 
      function front(){
      return this.datostore[0];
      }
      function back(){
      return this.datostore[this.datostore.lenght-1];
      }
      function toString(){
      let restr="";
        for(let i=0; i<this.datostore.lenght; i++){
        restr+=this.datostore[i];
        }
        return restr;
      }
      function empty(){
      if(this.datostore.lenght==0){
      return true;
      }
        else{
        return false;
        }
      }
      
      let e= new queue();
      e.enqueue(" César ");
      e.enqueue(" Karina ");
      e.enqueue(" Brandon ");
      console.log(e.toString());
      e.dequeue();
      console.log(e.toString());
      e.dequeue();
      console.log(" Front of queue: " + e.front());
      console.log(" Back of queue: " + e.back());