  //PROBLEM 1
function Node(element) {
    this.element = element;
    this.next = null;
    }
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    }
function find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
    currNode = currNode.next;
    }
    return currNode;
    }
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let  current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
    }
function display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
    }
    } 
  //PROBLEM 2
  function Node(element) {
    this.element = element;
    this.next = null;
    }
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
    }
function findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next == null) &&
    (currNode.next.element != item)) {
    currNode = currNode.next;
    }
    return currNode;
    } 
function remove(item) {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
    }
    }  
function find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
    currNode = currNode.next;
    }
    return currNode;
    }
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let  current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
    }
function display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
    }
    } 
  
  //PROBLEM 3
  function Node(element) {
    this.element = element;
    this.next = null;
    }
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
    }
function findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next == null) &&
    (currNode.next.element != item)) {
    currNode = currNode.next;
    }
    return currNode;
    } 
function remove(item) {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
    }
    }  
function find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
    currNode = currNode.next;
    }
    return currNode;
    }
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let  current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
    }
function display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
    }
    } 
let nums = new LList();
    nums.insert(9, "head");
    nums.insert(4, 9);
    nums.insert(6, 4);
    nums.insert(3, 6); 
   
    nums.display();
    console.log();
    nums.remove(4);
    nums.display();
 
