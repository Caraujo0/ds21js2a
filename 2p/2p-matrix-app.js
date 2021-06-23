// PROBLEM 1
//insertAt(p,v)
const numbers=[0,1,2,3,4,5,6,9];
numbers.splice(1,0,10);
numers.splice(1,0,'ARAUJO');
console.log(numbers);
numbers.insertAt(1,0);

//PROBLEM 2
// removeAt(p)

 let arreglo=[1,3,8,15,16,23,42];
 let valor=15;
 let indice=arreglo.indexOf(valor);
 if(indice>-1){
 arreglo.splice(indice, 1);
 }
 console.log(arreglo);
arreglo.removeAt(indice, 1);

// PROBLEM 3
// insertFirst(v)
 const array=['Primera iteración','Segunda iteración', 'Tercera iteración', 'Cuarta iteración'];
 const arrayLe=array.unshift('Iteración urgente1', 'Iteración urgente2');
 console.log(arrayLe);
 console.log(array);
 const arrayn=[1,2,3,4,5,6];
 const arrnLe=arrayn.unshift(0,7);
 console.log(arrnLe);
 console.log(arrayn);

 //PROBLEM 4
 // removeLast()
 const numbers=[0,7,4,2,6,5,10];
 const last=numbers.pop();
 console.log(numbers);
numbers.removeLast(6);

 //OTHER MATRIX
 let aMatrix = [
    [1,2],
    [4,5],
    [7,8]
];

console.log(aMatrix[0]);
console.log(aMatrix[1][0]);
console.log(aMatrix[1][4]); 
console.log(aMatrix[4]);   

//then
let A = new Array(3);
A[0]= new Array(3);
A[0][0]=-2;


//
let anArray = [2, 3, 4, 5, 6];

for (let x of anArray) {
  console.log(x);
}

