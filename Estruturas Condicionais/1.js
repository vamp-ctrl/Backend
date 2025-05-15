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