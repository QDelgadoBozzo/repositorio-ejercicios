//suma impares de un array;
function sumaTodosImpares(array){  
    let acumulador=0  
    for (let numero of array){
        // console.log(numero)
        if(esImpar(numero)){
            acumulador+= numero
        }
    }
    return acumulador
}

// console.log(sumaTodosImpares(array))
function esImpar(numero){
    if(numero%2===0){
        return false
    }
    return true
}
console.log(sumaTodosImpares([1,2,3,4,5,6,7]));


