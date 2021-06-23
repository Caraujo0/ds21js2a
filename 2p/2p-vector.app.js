/*PROBLEM 1
* insertAt(p,v)
* inserts a value v, at position p, in the array*/

let numbers=[4,5,6,7,8];
numbers.splice(3,0,10);
console.log(numbers);
console.log(' El número 10 está en la posición 3 '); 
console.log(' El método Splice nos ayuda también a insertar un elemento en nuestro array dependiendo de la posición');

/* PROBLEM 2
 * removeAt(p)
 * removes value at position p*/
let array=[20,12,45,9,3,622,2,94,295,39 ];
array.splice(5,1);
console.log(array);
console.log('Con el método Splice podemos eliminar un elemento de nuestro array dependiendo de la posición y del numero de elementos a eliminar :) ');


/* PROBLEM 3
* insertFirst(v)
* inserts value v at first position*/
let orden=[2001,2002,2003,2010,2020,2021,2022];
orden.unshift(1999);
  console.log(orden);
  console.log('Como podemos apreciar al usar el metodo Unshift y si escribimos el número que deseamos agregar al array este método lo manda al inicio de nuestro arreglo ');


  /* PROBLEM 4
 * removeLast()
 *Method Pop
 * removes value at last position*/
 let orden=[2001,2002,2003,2010,2020,2021,2022];
 orden.unshift(1999);
 console.log(orden);
   console.log('Aquí observamos que tenemos el array con el 2022');
 orden.pop();
   console.log(orden);
   console.log('El metodo pop únicamente elimina el último elemento del array en este caso elimino el 2022');
 