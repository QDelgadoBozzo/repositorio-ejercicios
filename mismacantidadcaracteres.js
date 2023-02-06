//mismaCantidadCaracteres(strings,caracteres)
function mismaCantidadCaracteres(strings,caracteres){  

 
    const newArr=[]
    for (let i=0;i<strings.length;i++){
     let valorActual=strings[i]
     if(valorActual.length==caracteres){
          newArr.push(valorActual)
     }
    }
    return newArr


}




