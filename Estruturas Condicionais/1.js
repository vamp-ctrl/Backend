// 1
import entradaDados from 'readline-sync';

let numero = entradaDados.question('Digite um número de 1 á 7: ')
switch (numero) {
    case '1':
        console.log('Segunda-feira')
        break
    case '2':
        console.log('Terça-feira')
        break
    case '3':
        console.log('Quarta-feira')
        break
    case '4':
        console.log('Quinta-feira')
        break
    case '5':
        console.log('Sexta-feira')
        break
    case '6':
        console.log('Sábado')
        break
    case '7':
        console.log('Domingo')
        break
    default:
        console.log("Número inválido! \nTente novamente:\n ")
}

//2
let mes = (entradaDados.question('Digite um numero entre 1 á 12: '))
switch(mes) {
    case "1":
        console.log("Janeiro");
        break
    case "2":
        console.log("Fevereiro");
        break
    case "3":
        console.log("Março");
        break
    case "4":
        console.log("Abril");
        break
    case "5":
        console.log("Maio");
        break
    case "6":
        console.log("Junho");
        break
    case "7":
        console.log("Julho");
        break
    case "8":
        console.log("Agosto");
        break
    case "9":
        console.log("Setembro");
        break
    case "10":
        console.log("Outubro");
        break
    case "11":
        console.log("Novembro");
        break
    case "12":
        console.log("Dezembro");
        break
    default:
    console.log('Besta ñao sabe que só vai até 12?');
    break

}

//3

num1= entradaDados.question('Digite o primeiro numero: ')
num2= entradaDados.question('Digite o segundo numero: ')
operacao = entradaDados.question('Digite a operação de deseja fazer: \n 1-Multiplicação \n 2-divisão \n 3-Adição \n 4-Subtração \n')

switch(operacao) {
    case '1':
    console.log(`${num1} * ${num2} = ${num1*num2}`)
        break
    case '2':
        console.log(`${num1} / ${num2} = ${num1/num2}`)
        break
    case '3':
        console.log(`${num1} + ${num2} = ${num1+num2}`)
        break
    case '4':
        console.log(`${num1} - ${num2} = ${num1-num2}`)
        break
    default:
        console.log('Operação inválida! Digite um número de 1 a 4, conrrespondente a operação desejada')
}

//4
 
let categorias = entradaDados.question('Digite sua categoria: A, B, C ou D\n')
let salario = entradaDados.questionFloat('Digite seu sálario: ').toUppercase;
let bonus = 0

switch(categoria){
    case 'A':
        console.log(`Seu salário atual vai ser de: ${salario + ((salario/100) * 5).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}`)
        break
    case 'B':
        console.log(`Seu salário atual vai ser de: ${salario + ((salario/100) * 10).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}`)
        break
    case 'C':
        console.log(`Seu salário atual vai ser de: ${salario + ((salario/100) * 15).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}`)
        break
    case 'D':
        console.log(`Seu salário atual vai ser de: ${salario + ((salario/100) * 20).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}`)
        break
    default:
        console.log('Categoria inválida, digite uma letra de A a D, conforme sua categoria')
}