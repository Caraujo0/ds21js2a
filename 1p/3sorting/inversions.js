// for the array to be sorted:
// how many inversion are needed  3 inversiones
// which ones   2,3,y 5

let inversions= A => {
    nInv = 0

    for(i = 1; i<A.length; i++)
	for(j = i+1; j< A.length+1; j++) 
	    if (A[i] > A[j]){
		nInv = nInv + 1
	    }
    return nInv
}

let a=[1,3,5,2,4,6]
console.log(inversions(a))