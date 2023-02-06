//mismaCantidadCaracteres(strings,caracteres)
function sumaTodosPrimos(array){  
let acumulador=0
for(let i=0;i<array.length;i++){
    let valorActual=array[i]
    if(esPrimo(valorActual)) acumulador +=valorActual
}
return acumulador
}

function esPrimo(numero){
    if(numero<2) return false
    for (let i=2; i<=numero**0.5;i++){
        if(numero%i===0)return false
    }
    return true
}
console.log(sumaTodosPrimos([1,2,5,9,3,4,11]))

//mostrar el resultado de esPrimo 
//console.log(esPrimo(6))

//mostrar el resultado en consola
// console.log(mismaCantidadCaracteres(['hi','hello','ni hao','guten tag'],2))



