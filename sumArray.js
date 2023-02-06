
function sumArray(array,n){
let sumas=[]
for(let i=0;i<array.length;i++){
    for(let j=0; j<array.length;j++){
if(i!==j) sumas.push(array[i]+array[j])
    }}
return sumas.includes(n)

}


//mostrar el resultado de esPrimo 
//console.log(esPrimo(6))

//mostrar el resultado en consola
// console.log(mismaCantidadCaracteres(['hi','hello','ni hao','guten tag'],2))



