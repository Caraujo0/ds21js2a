//* PROBLEM 1
 //* Stack implementation
 
   class stack{
   constructor(){
   this.stack={};
     this.count=0;
   }
   
  push(element){
  this.stack[this.count]=element;
    this.count++;
    return this.stack;
  }
  pop(){
  this.count--;
    const element=this.stack[this.count];
    delete this.stack[this.count];
    return element;
  }
  peek(){
  return this.stack[this.count-1];
  }
  size(){
  return this.count;
  }
  print(){
  console.log(this.stack);
  }
}
  
 const stack= new stack();
  console.log(stacks.size());
  console.log(stack.push(' Cesar Araujo '));
  console.log(stack.size());
  console.log(stack.peek());
  console.log(stack.push(' The student '));
  console.log(stack.size());
  stack.print();
  console.log(stack.peek());
  console.log(stack.pop());
  stack.print();
  console.log(stack.size());
  console.log(stack.peek());
  