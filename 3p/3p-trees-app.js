//node
class node{
    constructor(data){
    this.data=data;
     this.left=null;
      this.right=right;
      this.counter=1;
    }
    }
    
    class BinarySearchTree{
    constructor(data){
    this.root=null;
      
    }
      insert(data){
      let newNode =new Node(data);
        if(this.root==null){
        this.root=nweNode;
        }else{
        this.insertNode(this.root, newNode);
        }
       }
      insertNode(node, newNode){
      if(newNode.data<node.data){
        if(node.left==null) node.left=newNode;
      else this.insertNode(node.left, newNode);
      }else{
      if(node.right==null) node.right=newNode;
        else this.insertNode(node.right, newNode);
      }
        
     } inOrder(node,fn){
    if(node!==null){
    this.inOrder(node.left,fn);
       //console.log(node.data);
      fn.call(null, node);
      this.inOrder(node.right,fn);
    }
    }
    
      getRootNode(){
      return this.root;
      }
      preOrder(node,fn){
      if(node!==null){
      fn.call(null,node);
        this.preOrder(node.left,fn);
        this.preOrder(node.right,fn);
      }
      }
      posOrder(node,fn){
      if(node!=null){
      this.posOrder(node.left,fn);
        this.posOrder(node.right,fn);
        fn.call(null,node);
      }
      }
   }
    
    
    let BST=new BinarySearchTree();
    BST.insert(15);
    BST.insert(25);
    BST.insert(10);
    BST.insert(7);
    BST.insert(22);
    BST.insert(17);
    BST.insert(13);
    BST.insert(5);
    BST.insert(9);
    BST.insert(27);
    
    
    
    
  //inOrder
  //5,7,9,10,13,15,17,22,25,27
    const root=BST.getRootNode();
    
    let arrayResults=[];
    BST.inOrder(root,(node)=> arrayResults.push(node.data));
    console.log(arrayResults);
    
    arrayResults=[];
    BST.preOrder(root,(node)=> arrayResults.push(node.data));
    console.log(arrayResults);
    
    arrayResults=[];
    BST.posOrder(root,(node)=>arrayResults.push(node.data));
    console.log(arrayResults);
    