//suma impares de un array;
function sumaTodosImpares(array){  
    let acumulador=0  
    for (let i=0;i< array.length;i++){
        if(esImpar(array[i])){
            acumulador+=array[i]
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
console.log(sumaTodosImpares([1,2,3,4,5]))


