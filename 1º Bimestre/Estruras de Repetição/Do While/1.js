import entradaDados from 'readline-sync';

//1
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let palpite;
do {
    palpite = entradaDados.questionInt('tente adivinhar o numero (entre 1 e 100):')
    if (palpite === numeroAleatorio) {
        console.log('parabens! vc adivinhou o numero')
    }
    else if (palpite < numeroAleatorio) {
        console.log('digite um numero maior')
    }
    else {
        console.log('tente numero menor')
    }
} while (palpite !== numeroAleatorio);