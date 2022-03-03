// declaraçao de funçao

//function minhaFunçao(param){
    // bloco do codigo
//}

//minhaFunçao("parame")

// expressao de funçao

//const soma = function(num1, num2){return num1 + num2}
//console.log(soma(7, 3))

// diferença principal = HOISTING
// funçoes e var sao "listadas" no topo do arquivo.

console.log(apresentar())
function apresentar(){
    return 'Ola'
}

console.log(soma(1,1))
const soma = function(num1, num2){return num1 + num2}