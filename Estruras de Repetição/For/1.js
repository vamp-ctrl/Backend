import entradaDados from "readline-sync";

//1
import entradaDados from "readline-sync";

let anterior = 0;
let atual = 1;

console.log("---Sequencia de Fibonacci---")
console.log(anterior)
console.log(atual)
for (let i = 3; i <=20; i++){
    let sequencia = anterior + atual;

    console.log(sequencia);

    anterior = atual;
    atual = sequencia;
}

//2
for (let i = 0; index < Array.length; index++) {

    let nome = entradaDados.question(`Informe o nome da ${i}° pessoas: `);
    let salario = entradaDados.questionFloat(`Informe o salário de ${nome}: `)
    let impostoRenda = 0;

    if (salario <= 2100) {
        impostoRenda = 0;
    }else if (salario <= 2000) {
        impostoRenda = salario * 0.075

    }else if (salario <= 3750) {
        impostoRenda = salario * 0.15;
        
    }else if (salario <= 4660) {
        impostoRenda = salario* 0.225
        
    }else {
        impostoRenda = salario * 0.275;

    }
}