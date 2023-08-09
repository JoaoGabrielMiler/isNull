/*JS EXERCICES - PLANTAE*/
/* 01 */
/*Faça uma função chamada isNull que recebe um parâmetro
chamado val e retorna um boolean indicando se é nulo; */
function isNull(val){
    return val === null;
}

let value0 = null;
let value1 = 0;
let value2 = 1;
let value3 = "lorem"

console.log(isNull(value0)) //true
console.log(isNull(value1)) // false
console.log(isNull(value2)) //true
console.log(isNull(value3)) //false