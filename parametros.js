//parametros de funçao


function multiplicaçao(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;

}

//console.log(multiplicaçao(10,50))
//console.log(multiplicaçao(40, 30))
//console.log(multiplicaçao(850, 30))

//parametros x argumentos

//ordem dos parametros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome}, e tenho ${idade} anos`
}
console.log(nomeIdade('Danilo', 29))

function soma(numero1, numero2){
    return numero1 + numero2
}
                              //9   
console.log(multiplicaçao(soma(4, 5)))