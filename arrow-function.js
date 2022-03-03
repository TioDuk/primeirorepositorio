//function apresentar(nome){
   // return `Meu nome é ${nome}.`
//}
//console.log(apresentar("Danilo"))

//Arrowfunction
const apresentarArrow = Danilo =>`Meu nome é ${Danilo}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com + de 1 linha de instruçao

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "Somente numeros de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// Hoisting: arrow function se comporta como expressao

//operador igual ou maior que
//>=