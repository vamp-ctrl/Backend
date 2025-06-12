import entradaDados from "readline-sync";

let num =  entradaDados.questionInt('Digite um número e o devolverei sua tabuada: ')

let cont = 1

while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont = cont + 1;
}

//2
let numAlunos = entradaDados.questionInt('Informe o número de alunos da turma: ')

let contAlunos = 1;
let somamedias = 0;

while (contAlunos <= numAlunos) {
console.log(`Aluno ${contAlunos}`);

    let contBimestres = 1;
    let somaNotas = 0;

    while (contBimestres <= 4){
        let nota = entradaDados.questionInt(`Informe a nota do ${contBimestres}º bimestre do aluno ${contAlunos}: `);
        somaNotas += nota;
        contBimestres++;
    }

    let mediaAluno = somaNotas/4;

    somamedias += mediaAluno;

    console.log(`Média do aluno ${contAlunos}: ${mediaAluno.toFixed(2)}`);

    contAlunos = contAlunos + 1;
}

let mediaGeralturma = somamedias / numAlunos;
console.log(`Média geral da Turma: ${mediaGeralturma.toFixed(2)}`);