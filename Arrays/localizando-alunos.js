const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10,7,9,7.5]

let listaDosAlunosENotas = [alunos, mediasDosAlunos]

//includes = booleano
//indexOf = 3

const exibeNomeNota = (nomeDoAluno) =>{
    if (listaDosAlunosENotas[0].includes(nomeDoAluno)){
        let indice = listaDosAlunosENotas[0].indexOf(nomeDoAluno)
                                // [0]  [3]
        return listaDosAlunosENotas[0][indice] +', sua media é ' + listaDosAlunosENotas [1][indice]
    }else {
        return "Aluno não cadastrado"
    }
}

console.log(exibeNomeNota("Caio"))