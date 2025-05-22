import entradaDados from 'readline-sync';

let num =  entradaDados.question('Digite um número e o devolverei sua tabuada: ')

let cont = 1;

while (contador <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`)
}
