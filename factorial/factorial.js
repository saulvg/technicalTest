"use strict"
//The factorial of a number is the multiplication of all its previous numbers
function factorial (n, nI=1) {
    
    const nFac = new Array(n).fill("")
    .map(()=>nI++)
    .reduce((ac, number)=>ac*number, 1)
    return(nFac)
}

console.log(factorial(5))