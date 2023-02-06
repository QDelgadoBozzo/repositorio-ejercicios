//suma impares de un array;
function esImpar(numero){
    var numero
    if(numero%2===0){
        return false
    }
    return true
}
function sumaTodosImpares(array){
    let acumulador =[]
let array
    array=[1,2,3,4,5,6]
       
    
    for (let i=0;i< array.length;i++){
        if (esImpar(array[i])) {
            acumulador+= array[i]
        }
    return false
    }

// console.log(sumaTodosImpares(array))
console.log(esImpar(5))

}