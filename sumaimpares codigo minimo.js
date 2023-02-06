//suma impares de un array;
function sumaTodosImpares(array){  
 
     return array.reduce((a,c)=>(c%2!==0?a+c:a),0)
     

}
// *****para mostrar por consola******
// console.log(sumaTodosImpares([1,2,3,4,5,6,7]))



