//mismaCantidadCaracteres(strings,caracteres)
function sumaTodosPrimos(array){  
return array.reduce((a,c)=>esPrimo(c)?a+c:a,0)
}

function esPrimo(numero){
    if(numero<2) return false
    for (let i=2; i<=numero**0.5;i++){
        if(numero%i===0)return false
    }
    return true
}
console.log(sumaTodosPrimos([1,5,2,9,3,4,11]))

//mostrar el resultado de esPrimo 
//console.log(esPrimo(6))

//mostrar el resultado en consola
// console.log(mismaCantidadCaracteres(['hi','hello','ni hao','guten tag'],2))



