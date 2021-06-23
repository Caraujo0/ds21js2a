//PROBLEM 1

 class Node{
 constructor(data,next){
 this.data=data;
 this.next=next;
 }
}
 class Linkedlist{
 constructor(){
 this.head=null;
 this.size=0;
 }
 }
 add(data)
 const newNode= new Node(data, null);
 if(!this.head){
 this.head=newNode
 }
 else{
 let current= this.head;
 while(current.next){
 current=current.next;
 }
 current.next=newNode;
 }
 this.size++;
 
 const linkedList=new Linkedlist();
 console.log(Linkedlist);
 linkedList.add(12);
 console.log(linkedList);
 linkedList(99);

 // * PROBLEM 2

 linkedList.prototype.size=function(){
 this.size=0;
 let nodoActual=this.head;
 while(nodoActual){
 this.size++;
 nodoActual=nodoActual.next
 }
 return this.size;
 }
 let lista=new linkedList();
 lista.add(1);
 lista.add(2);
 lista.add(3);
 lista.add(50);
 lista.add(20);
 lista.add(520);
 console.log(lista.size());

 // * PROBLEM 3
 function removeFrom(index){
 if(index<0|| index>this.size)
 return null;
 }
 let current=this.head;
 let previous=null;
 if(inex===0){
 this.head=curren.next;
 }else{
 for(let i=0;i<index;i++){
 previous=null;
 current=current.next;
 }
 previous.next=current.next;
 }

 this.size--;
 return current.data;
 
 console.log(linkedList.removefrom());
 console.log(linkedList.print())
 