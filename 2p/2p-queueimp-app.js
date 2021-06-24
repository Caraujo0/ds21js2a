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
      let a=this.datostore.length;
      return this.datostore[a-1];
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
      e.enqueue(" Rene ");
      e.enqueue(" Cricel ");
      e.enqueue(" Mario ");
  		e.enqueue(" Cesar ");
  
      console.log(e.toString());
      console.log(e.toString());				
      console.log(" Front of queue: " + e.front());
      console.log(" Back of queue: " + e.back());
